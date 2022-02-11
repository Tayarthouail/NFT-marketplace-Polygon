import { ethers } from "ethers";
import { useState, useEffect } from "react";
import axios from "axios";
import Web3Modal from "web3modal";


/*Import reference of the contract address*/
import {nftAddress, nftMarketAddress} from "../config";

import NFT from "../artifacts/contracts/NTF.sol/NFT.json";
import Market from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";



export default function Home() {
  const [nft, setNFTs] = useState([]);
  const [loadingState, setLoadingState] = ("not-loaded");

  useEffect(()=> {
    loadNFTs();
  },[])

  /* Load the NFTS*/
  const loadNFTs = async () => {
      // create the provider
      const provider = new ethers.providers.JsonRpcProvider();
      // create an instance of the contracts
      const nftContract = new ethers.Contract(nftAddress, NFT.abi,provider); 
      const marketContract = new ethers.Contract(nftMarketAddress, Market.abi, provider);
      const data = await marketContract.fetchMarketItems();

      const items = await Promise.all(data.map(async i => {
        // get NFT URI from the struct
        const nftUri = await nftContract.tokenURI(i.tokenId);
        //fetch the meta data from the URI
        const meta = await axios.get(nftUri);
        const price = ethers.utils.formatUnits(i.price.toString(), "ether");

        let item = {
          price,
          itemId: i.itemId.toNumber(),
          seller : i.seller,
          owner: i.owner,
          name: meta.data.name,
          description: meta.data.description,
          image: meta.data.image
        }
        return item;
      }))
      setNFTs(items);
      setLoadingState("loaded");
  }

  const BuyNFT = async (nft) => {
    // create instance of web3 model
    const web3Modal = new Web3Modal();
    

  }





  return (
    <div>
      <h1 className='text-4xl font-bold'>Hello world</h1>
    </div>
  )
}
