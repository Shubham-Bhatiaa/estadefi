require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};
