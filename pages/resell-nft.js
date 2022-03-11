import React from "react";
import axios from "axios";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from 'ethers';


import {nftmarketaddress} from "../config";

import Market from "../artifacts/contracts/Marketplace.sol/Marketplace.json";

const Resell = () => {

    //state to set the URI of metadata of the Image
    const [image, setImage] = useState("");
    const [nftPrice, setNftPrice] = useState("");
    console.log(image);
    const router = useRouter();
    const {id, tokenURI} = router.query;


    useEffect(()=> {
        fetchNFT();
    },[id]);

    // get the image from the URI
    const fetchNFT = async () => {
        if(!tokenURI) return
        const meta = await axios.get(tokenURI);
        setImage(meta.data.image);
    }

    // call the function resellNfts who lives in the smart contract
    const listNFTForSale = async () =>  {
        // create an instance of we3
        const web3Modal = new Web3Modal();
        // get the connection of the user 
        const connection = await web3Modal.connect();
        // create a ether provider using user connection
        const provider = new ethers.providers.Web3Provider(connection);   
        const signer = provider.getSigner();

        // create a new instance of the marketplace contracts
        let marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

        const priceFormatted =  ethers.utils.parseUnits(nftPrice, "ether");
        console.log(priceFormatted);
        let listingPrice = await marketContract.getListingPrice();

        listingPrice = listingPrice.toString();

        let transaction = await marketContract.resellTokens(id, priceFormatted, {value: listingPrice});
        await transaction.wait();
        router.push("/")
    }


   
    return (
        <div className="flex justify-center">
          <div className="w-1/2 flex flex-col pb-12">
            <input
              placeholder="Asset Price in Eth"
              className="mt-2 border rounded p-4"
              onChange={(e)=> setNftPrice(e.target.value)}
            />
            {
              image && (
                <img className="rounded mt-4" width="350" src={image} />
              )
            }
            <button onClick={listNFTForSale} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
              List NFT
            </button>
          </div>
        </div>
      )
}

export default Resell;