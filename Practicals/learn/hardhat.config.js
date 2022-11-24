/** @type import('hardhat/config').HardhatUserConfig */
// hardhat.config.js
const { alchemyApiKey, mnemonic } = require('./secrets.json');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-truffle5');
// hardhat.config.js

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic },
    },
  },

};