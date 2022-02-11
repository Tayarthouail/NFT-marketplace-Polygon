const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarket", ()=> {
    it("it should create and execute market sales", async ()=> {
      /* deploy the market contract */ 
        const Market = await ethers.getContractFactory("NFTMarket");
        /* deploy the contract */ 
        const market = await Market.deploy();
        /* wait for the contract if it is deployed or not */
        await market.deployed();
        const marketAddress = market.address;

      /* deploy the NFT contract */ 

      const NFT = await ethers.getContractFactory("NFT");
      const nft = await NFT.deploy(marketAddress);
      await nft.deployed();

      const nftContractAddress = nft.address;

      /* get the listing price */ 
      let listingPrice = await market.getListingPrice();

      listingPrice = listingPrice.toString();

      /* How much are we seeling the item for */
      const auctionPrice = ethers.utils.parseUnits("100", "ether");

      /* create or min an NFT*/
      await nft.createToken("https://www.mytokenlocation.com");
      await nft.createToken("https://www.mytokenlocation.com2");


      /* put both token on sale (listing) */
      await market.createMarketItem(nftContractAddress,
                                      1, auctionPrice, 
                                      {value : listingPrice });

      await market.createMarketItem(nftContractAddress,
                                      2, auctionPrice, 
                                      {value: listingPrice});

      /* _ it the first address is the seller address */
      const [_, buyerAddress] = await ethers.getSigners();

      /* create Market Sale */
      await market.connect(buyerAddress).createMarketSale(nftContractAddress, 2, {value : auctionPrice});
      
      // fetch all the unsold items
      let items = await market.fetchMarketItems();
      // console.log("items", items);
      
      items = await Promise.all(items.map(async i => {
        const itemUri = await nft.tokenURI(i.tokenId);

        let item = {
          tokenId: i.tokenId.toString(),
          price: i.price.toString(),
          seller: i.seller,
          owner: i.owner,
          itemUri
        }
        return item
      })); 
      console.log("items: ", items);

    });
    
    
});

// uint itemId;
//     address nftContract;
//     uint256 tokenId;
//     address payable seller;
//     address payable owner;
//     uint256 price;
//     bool sold;