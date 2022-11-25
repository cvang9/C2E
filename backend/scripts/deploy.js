const main = async () => {

    const gameContractFactory = await hre.ethers.getContractFactory('NftContract');
    const gameContract = await gameContractFactory.deploy();
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    // let txn = await gameContract.approvalRequest();


    // let returnedTokenUri1 = await gameContract.tokenURI(1);
    // console.log("Token URI:", returnedTokenUri1);

    // let tx = await gameContract.updateProblemSolved();

    // let tn = await gameContract.updateContestWins();


    // let returnedTokenUri = await gameContract.tokenURI(1);
    // console.log("Token URI:", returnedTokenUri);

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  runMain();

// Contract deployed to: 0x5ceD0317de7f70A5AB786D637a4A1eb888DBba3F