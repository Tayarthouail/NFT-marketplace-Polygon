
import { useState } from 'react';
import { ethers } from 'ethers';
// import { create as ipfsHttpClient } from "ipfs-http-client";
import { useRouter } from 'next/router';
import Web3Modal from 'web3modal'
import { create } from "ipfs-http-client";


const ipfsClient = create("https://ipfs.infura.io:5001/api/v0");

// import address
import {nftmarketaddress} from "../config";

// import JSon files
import Market from "../artifacts/contracts/Marketplace.sol/Marketplace.json";

export default function CreateItems() {

    const [fileUrl, setFileUrl] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [NftPrice, setNftPrice] = useState("");

    // create a reference to useRouter
    const router = useRouter();
    // const name = "NFT";
    // const description= "NFT MARKET PLACE FOR THE SMART CONTRACT";
    // const price = "1";


    /* function to create CID and IPFS path to the uploaded image */
    async function onChange(e) {

        const file = e.target.files[0]
        try {
          const added = await ipfsClient.add(
            file,
            {
              progress: (prog) => console.log(`received: ${prog}`)
            }
            
          )
          console.log(added);
          const url = `https://ipfs.infura.io/ipfs/${added.path}`
          console.log(url);
          setFileUrl(url)
        } catch(e) {
          console.log(e)
        }  
      }
   

    /* Function to create an items and save it to IPFS*/
      async function uploadToIPFS() {
          // if(!name || !description ||!price || fileUrl) return
          try {
            const data = {
              name: name,
              description: description,
              price: NftPrice,
              image: fileUrl,

            }
            console.log(data);

            const added = await ipfsClient.add(JSON.stringify(data));
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            console.log(url)
            /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
            listNFTForSale(url)
          } catch (error) {
            console.log('Error uploading file: ', error)
          } 
        }

       /*Function for listing Items for sale */
      async function listNFTForSale(url) {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)    
        const signer = provider.getSigner()

          /* mint the NFT and List it */
          let contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
          // parse what amount of ether that the user will enter in the input to Wei
          const priceFormatted = ethers.utils.parseUnits(NftPrice, 'ether');
          let listingPrice = await contract.getListingPrice()
          listingPrice = listingPrice.toString()
          let transaction = await contract.createToken(url, priceFormatted, {value: listingPrice});
          await transaction.wait();
          // push the user to the Home page
          router.push("/")

      }
    return (
        <div className="flex justify-center">

            <div className="w-1/2 flex flex-col pb-12">
                <input
                  placeholder="Asset Name"
                  className="mt-8 border rounded p-4"
                  onChange={(e)=> setName(e.target.value)}
                />

                <textarea
                  placeholder="Asset Description"
                  className="mt-2 border rounded p-4"
                  onChange={(e)=> setDescription(e.target.value)}
                />

                <input
                  placeholder="Asset Price in Eth"
                  className="mt-2 border rounded p-4"
                  onChange={(e)=> setNftPrice(e.target.value)}
                />

                <input
                  type="file"
                  name="asset"
                  className='my-4'
                  onChange={onChange}
                />

                {
                    fileUrl && (
                        <img className='rounded mt-4' width="350" src={fileUrl}/>
                    )
                }

                <button onClick={uploadToIPFS} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
                    Create Digital Asset
                </button>
            </div>
        </div>
        
    )
}