// SPDX-License-Identifier: MIT
  pragma solidity ^0.8.17;

  import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
  import "@openzeppelin/contracts/access/Ownable.sol";


 interface INftContract {

    function updateProblemSolved( ) external;

    function updateContestWins( ) external;

}

   contract coinContract is ERC20, Ownable {

    address public owns;
    INftContract nftCont;
    bool public quizStarted;
    uint256 public quizEnded;
    
       // Max token Supply ( Uses if the token is not minted )
    uint256 public constant maxTotalSupply = 13000000 * 10**18;


    mapping ( address => bool ) signIned;
    mapping ( address => bool ) premiumAvails;


    constructor(address _nftContract )
    ERC20("Mudra", "MDR"){

        owns = msg.sender;
        nftCont = INftContract(_nftContract);
        _mint(owns, 13000000 * 10**18 );

    }

    //  Token Price ( if anyone wants to take )
    uint256 public constant tokenPrice = 0.000005 ether;

    uint256 public constant premiumPrice = 0.043 ether;

    uint256 amountsToBeBurned = 0; 

    
    function problemSolved() external {

        nftCont.updateProblemSolved();
        _mint(msg.sender, 0.001 * 10**18 );
        amountsToBeBurned += 0.001 * 10**18;

    }

    function signInReward() external{
     
        require( signIned[msg.sender] == false, "You got rewards already" );
        _mint(msg.sender, 0.015* 10**18 );
        amountsToBeBurned += 0.001 * 10**18;
        signIned[msg.sender] == true;
    }

    function joinPremium() external payable {
        require( msg.value == premiumPrice);
        require( ! premiumAvails[msg.sender] );
        premiumAvails[msg.sender] = true;
    }

    function contestWins() external {

        nftCont.updateContestWins();
        _mint(msg.sender, 0.015* 10**18 );
        amountsToBeBurned += 0.015 * 10**18;
        
    }

    function startQuiz() public onlyOwner {

         quizStarted = true;
         // Set quizEnded time as current timestamp + 5 minutes
         quizEnded = block.timestamp + 5 minutes;

      }

    function sendQuizReward() external{

        // require( block.timestamp <= quizEnded  );
        _mint(msg.sender, 0.03* 10**18 );
        amountsToBeBurned += 0.03* 10**18;
        
    }

     function buyToken(uint256 amount) public payable {

          // the value of ether that should be equal or greater than tokenPrice * amount;
          uint256 _requiredAmount = tokenPrice * amount;
          require(msg.value >= _requiredAmount, "Ether sent is incorrect");

          // total tokens + amount <= 10000, otherwise revert the transaction
          uint256 amountWithDecimals = amount * 10**18;
          require(
              (totalSupply() + amountWithDecimals) <= maxTotalSupply,
              "Exceeds the max total supply available."
          );
          // call the internal function from Openzeppelin's ERC20 contract
          approve( msg.sender, amountWithDecimals );
          transferFrom( owns , msg.sender, amountWithDecimals );

      }

      function burnTokens() external onlyOwner {
        _burn( owns,  amountsToBeBurned);
        amountsToBeBurned = 0;
      }
    

    // Burn function 
    // function burn( address account, unit256 amount ) public  {
    //     // destroy amount tokens from account address
    //     _burn( account,  amount);

    //   }


    // Approve function
    // approve(address spender, uint256 amount);

    // Transfer function
    // transferFrom(address from, address to, uint256 amount)

         // Function to receive Ether. msg.data must be empty
      receive() external payable {}

        // Fallback function is called when msg.data is not empty
      fallback() external payable {}

   }
