// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


// Helper we wrote to encode in Base64
import "./libraries/Base64.sol";

// NFT contract to inherit from.
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NftContract is ERC721 {

    // The tokenId is the NFTs unique identifier, it's just a number that goes
    // 0, 1, 2, 3, etc.
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping ( address => uint ) public NFTholders;
    mapping ( uint => uint ) public codingScores;
    mapping ( uint => uint ) public problemSolved;
    mapping ( uint => uint ) public contestWins;
    mapping ( uint => bool ) public approvedOnToken;
    mapping ( uint => address ) public addressOf;

    uint256 i = 1;

    address private owner;


    constructor( )
    ERC721("WeCode", "VCD")
     {
        _tokenIds.increment();
        owner = msg.sender;
     }


// EDIT : name nd image

    function approvalRequest( ) external {

        // Get current tokenId (starts at 1 since we incremented in the constructor).
        uint256 newItemId = _tokenIds.current();

        // The magical function! Assigns the tokenId to the We code wallet address.
        _safeMint( owner, newItemId);

         // Initially Coding score is 0
        codingScores[newItemId] = 0;

         // Initially Contest Wins is 0
        contestWins[newItemId] = 0;

        // Initially Problem Solve is 0
        problemSolved[newItemId] = 0;

        // Keep an easy way to see who owns what NFT.
        NFTholders[msg.sender] = newItemId;

        addressOf[newItemId] = msg.sender;

        // Approve fxn : Gives permission to to to transfer tokenId token to another account. The approval is cleared when the token is transferred.
        // approve( msg.sender , newItemId);

        // Transfer fxn : Transfer the NFT from WeCode to users account
        // transferFrom( owner , msg.sender, newItemId );

        _tokenIds.increment();

  }

  function tokenSend() external {

    require( msg.sender == owner );

    uint j;

    for(  j=i; j<_tokenIds.current(); j++ )
    {
        if( approvedOnToken[j] == false )
        {
            approve( addressOf[j] , j);
            transferFrom( owner , addressOf[j], j );
            approvedOnToken[j] = true;
        }
    }

    i = j;

  } 

  function tokenURI(uint256 _tokenId ) public view override returns (string memory) {

        string memory userName = "VCoder #";
        string memory s2 = Strings.toString(_tokenId);
        userName = string.concat(userName,s2);
        
        string memory userImage;
        string memory s1 = "https://raw.githubusercontent.com/cvang9/Nft-Images/main/Images/";
        userImage = string.concat(s1,s2);
        

        if( _tokenId == 1 )
        {
             string memory s3 = ".jpeg";
             userImage = string.concat(userImage, s3);
        }
        else{
            string memory s3 = ".jpg";
             userImage = string.concat(userImage, s3);
        }

        string memory problemS = Strings.toString(problemSolved[_tokenId]);
        string memory codingS = Strings.toString(codingScores[_tokenId]);
        string memory contestW = Strings.toString(contestWins[_tokenId]);
        string memory maxProblemScore = Strings.toString(619);
        string memory maxContestWins = Strings.toString(100);

        string memory json = Base64.encode(

        //     abi.encodePacked(
        //     '{"name": "',
        //     userName,
        //     ' -- NFT #: ',
        //     Strings.toString(_tokenId),
        //     '", "description": "The NFT Depicts your digital image, More will be the work more will be its become Rear!", "image": "',
        //     userImage,
        //     '", "attributes": [ { "trait_type": "Problem Score", "value": ',codingS,', "max_value":',maxProblemScore,'}, { "trait_type": "Problem Solved", "value": ',
        //     problemS,'} ]}'
        //     )
        //   );


            abi.encodePacked(
            '{"name": "',
            userName,
            ' -- NFT #: ',
            Strings.toString(_tokenId),
            '", "description": "The NFT Depicts your digital image, More will be the work more will be its become Rear!", "image": "',
            userImage,
            '", "attributes": [ { "trait_type": "Problem Score", "value": ',codingS,', "max_value":',maxProblemScore,'}, { "trait_type": "Problem Solved", "value": ',
            problemS,'} ]}'
            )
          );

        string memory output = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
  
    return output;
   }

   function updateProblemSolved( ) external {
        uint tId = NFTholders[msg.sender];
         problemSolved[tId] += 1;
         codingScores[tId] += 4;
    }

    function updateContestWins( ) external {
        uint tId = NFTholders[msg.sender];
         contestWins[tId] += 1;
    }

}
//0x3CBB8861EB176126fdF0bDdc3f73FD39f5166846