const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Crypto Devs NFT contract that you deployed in the previous module
  const nFTContract = NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const tokenContract = await ethers.getContractFactory(
    "coinContract"
  );

  // deploy the contract
  const deployedTokenContract = await tokenContract.deploy(
    nFTContract
  );

  await deployedTokenContract.deployed();
  // print the address of the deployed contract
  console.log(
    " Token Contract Address:",
    deployedTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  // Token Contract Address: 0x7685430AC05306085BC6934BE4992f3BD1626F77