/* configure hardhat to work with polygon*/

require("@nomiclabs/hardhat-waffle");

const fs = require("fs");

// get the private key from the secret file
const privateKey = fs.readFileSync(".secret").toString().trim();

const infuraId = fs.readFileSync(".infuraId").toString().trim();


const projectId = "184b35311791483b991c8951bb07c56c";

module.exports = {
  defaultNetwork: "hardhat",

  networks: {

  hardhat: {
    chainId: 1337
  },

  // connect hardhat with infura endpoint
  mumbai: {
    url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
    accounts:[privateKey]
  },

  mainnet: {
    url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
    accounts:[privateKey]
  }
},

  solidity: {
    version : "0.8.3",
    settings: {
      optimizer: {
        enabled: true,
        runs:200
      }
    }
  }
};
