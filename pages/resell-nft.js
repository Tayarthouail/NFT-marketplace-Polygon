import React from "react";
import axios from "axios";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import ethers from "ethers";





const Resell = () => {

    //state to fetch the URI of metadata of the Image
    const [image, setImage] = useState("");
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
   
    return (
        <h1>reSellHere</h1>
    )
}

export default Resell;