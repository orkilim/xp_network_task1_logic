require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

require("@nomiclabs/hardhat-ethers")

const PRIVATE_KEY="b45c78ab12818f4f8e2bdeb34b90974df6b0696e9050e957b7103f515b96774c"
const API_KEY="F2_qUmlFpNsvGf9jb14EPesHwBepBVTI"

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.13",
  networks:{
    hardhat:{},
    polygon:{
      url:`https://matic-mumbai.chainstacklabs.com`,
      accounts:[`0x${PRIVATE_KEY}`]
    }
  },
  etherscan:{
    apiKey:{
      polygonMumbai:"17ZDTKVJI7DKH9256RV3K5ZBFDGWHN27MG"
    }
  }
};
