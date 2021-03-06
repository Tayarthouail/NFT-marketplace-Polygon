const hre = require("hardhat");
const fs = require('fs');



async function main() {
   const NftMarketplace = await hre.ethers.getContractFactory("Marketplace");
   const nftMarketplace = await NftMarketplace.deploy();
   await nftMarketplace.deployed();
   console.log("NFT marketplace deployed to : ", nftMarketplace.address);


  fs.writeFileSync('./config.js', `
  export const nftmarketaddress = "${nftMarketplace.address}"
  `)

}






// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
