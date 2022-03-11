/* eslint-disable @next/next/no-img-element */
import {useState, useEffect} from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import axios from "axios";
import {useRouter} from "next/router";

// get the references of the addresses
import {nftmarketaddress} from "../config";

import Market from "../artifacts/contracts/Marketplace.sol/Marketplace.json";

const MyNFTs = () => {
    const [nfts, setNfts] = useState([]);
    const [loadingState, setLoadingState] = useState("not-loaded");

    useEffect(()=> {
        loadSoldNFTS();
    },[])

    const router = useRouter();


    //fetch the nft.id & nft.URI using Routing
    function fetchIdURI(nft) {
      console.log("nft", nft);
      router.push(`/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`);
    }


    /*Load the the */
    const loadSoldNFTS = async () => {
        // create an instance of web3
        const web3Modal = new Web3Modal;
        const connection = await web3Modal.connect();
        // create a provider with the user connection
        const provider = new ethers.providers.Web3Provider(connection);
        // give the user the right to execute and sign the transaction
        const signer = provider.getSigner();

        // create the instance of both smart contract
        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
    
        // return all the NFT that I bought
        const data = await marketContract.fetchMyNFTs();

        const items = await Promise.all(data.map( async i => {
            const tokenURI = await marketContract.tokenURI(i.tokenId);
            console.log(tokenURI);
            // fetch the metadata from the URI
            const meta = await axios.get(tokenURI);
            
            //converting wei to ether
            const price = ethers.utils.formatUnits(i.price.toString(), "ether");

            const item = {
                price,
                tokenId: i.tokenId.toNumber(),
                owner: i.owner,
                name: meta.data.name,
                description : meta.data.description,   
                image: meta.data.image,
                tokenURI
            }

            return item;

        }));
        setNfts(items);
        setLoadingState("loaded");
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
                  <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" 
                  onClick={()=> fetchIdURI(nft)}>List</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MyNFTs;

