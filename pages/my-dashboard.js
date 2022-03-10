/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import axios from "axios";

import {nftmarketaddress} from "../config";

import Market from "../artifacts/contracts/Marketplace.sol/Marketplace.json";

const MyDashboard = () => {

    const [nfts, setNFTS] = useState([]);
    const [loadingState, setLoadingState] = useState("not-loaded");

    useEffect(()=> {
        loadNfts();
    })

    // Load all the sold nft & the created nft
    const loadNfts = async () => {
        // create an instance of web3 modal
        const web3Modal = new Web3Modal;
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

        const data = await marketContract.fetchItemsListed();

        const items = await Promise.all(data.map(async i => {
            const tokenUri = await marketContract.tokenURI(i.tokenId);
            const meta = await axios.get(tokenUri);
            const price = ethers.utils.formatUnits(i.price.toString(), "ether");
            
            const item = {
                price,
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                name: meta.data.name,
                image: meta.data.image
            }

            return item;

        }));
        
        setNFTS(items);
        setLoadingState("loaded");

    }

    if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No NFTs listed</h1>)


    return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl py-2">Items Listed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} className="rounded" />
                <div className="p-4 bg-black">
                  <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MyDashboard;