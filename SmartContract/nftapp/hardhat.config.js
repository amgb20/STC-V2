require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/bd5d54a085754a6ebecf1ad4b224fca7",
      accounts: [
        "__ACCOUNT__PRIVATE__KEY__", //input contract owner account private key
      ],
    },
  },
};
