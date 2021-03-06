/* eslint-disable @next/next/no-img-element */
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import axios from "axios";
import Web3Modal from "web3modal";


/*Import reference of the contract address*/
import {nftmarketaddress} from "../config";

import Market from "../artifacts/contracts/Marketplace.sol/Marketplace.json";


export default function Home() {
  const [nfts, setNFTs] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(()=> {
    loadNFTs();
  },[])

  /* Load the unsold NFTS*/
  async function loadNFTs() {
      // create the provider
      const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
      // create an instance of the contracts
      // const tokenContract = new ethers.Contract(nftaddress, NFT.abi,provider);
      const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider);


      /* Returns all unsold market items (array of arrays) */
      const data = await marketContract.fetchMarketItems();

      const items = await Promise.all(data.map(async i => {
        // get NFT URI to fetch the metadata
        const tokenUri = await marketContract.tokenURI(i.tokenId);
        console.log(tokenUri);

        //fetch the meta data from the URI
        const meta = await axios.get(tokenUri);
        const price = ethers.utils.formatUnits(i.price.toString(), "ether");

        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
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

  /* buy the item*/
  /* Transfers ownership of the item, as well as funds between parties */
  async function buyNft(nft) {
    // create instance of web3 model
    const web3Modal = new Web3Modal();
    // check if the instance of ethereum has been injected in the web browser
    const connection = await web3Modal.connect();
    // create a provider with the user connection
    const provider = new ethers.providers.Web3Provider(connection)

    // give the user the possibility to sign and execute transaction in the market
    const signer = provider.getSigner();
    
    const contract = new ethers.Contract(nftmarketaddress, Market.abi,signer);

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    // create a marketSale
    const transaction = await contract.createMarketSale(nft.tokenId, { value: price});
    
    // wait for the transaction to complete
    await transaction.wait();
    // refresh the page to update the ntf num
    loadNFTs();
  
  }

  if(loadingState == "loaded" && !nfts.length) return (
    <h1 className="px-20 py-10 text-3xl">No items in the marketplace</h1>
  )

  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} alt={nft.name}/>
                <div className="p-4">
                  <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400">{nft.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl mb-4 font-bold text-white">{nft.price} ETH</p>
                  <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
