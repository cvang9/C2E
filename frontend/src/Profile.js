import React, {useEffect,useState} from 'react';
import './prof.css';
import {  BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';  
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { ethers } from 'ethers';
import {
    NFT_CONTRACT_ABI,
    NFT_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ABI,
    TOKEN_CONTRACT_ADDRESS,
  } from "./constants";

const Profile = () =>{

    var canvas = document.getElementById('canvas');
    canvas.width = 0;
    canvas.height = 0;

     // loading is set to true when we are waiting for a transaction to get mined
     const [loading, setLoading] = useState(false);


        /**
   * withdrawCoins: withdraws ether and tokens by calling
   * the withdraw function in the contract
   */


         const burnMyTokens = async () => {
    
            console.log('Burning Tokens Started');
    
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const coinContract = new ethers.Contract(
                TOKEN_CONTRACT_ADDRESS,
                TOKEN_CONTRACT_ABI,
                signer
            );
        
            const txn = await coinContract.burnTokens();
            setLoading(true);
            // wait for the transaction to get mined
            await txn.wait();
            setLoading(false);
    
            console.log('Burning Tokens Ended');
        
          };

      const giveNFT = async () => {

    console.log('Owner Sending NFT');

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const nftContract = new ethers.Contract(
        NFT_CONTRACT_ADDRESS,
        NFT_CONTRACT_ABI,
        signer
    );

    const txn = await nftContract.tokenSend();
    setLoading(true);
    // wait for the transaction to get mined
    await txn.wait();
    setLoading(false);

    console.log('NFT Sent !');


  };


  const approveNFT = async () => {

    console.log('Approve Initiated');

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const nftContract = new ethers.Contract(
        NFT_CONTRACT_ADDRESS,
        NFT_CONTRACT_ABI,
        signer
    );

    const txn = await nftContract.approvalRequest();
    setLoading(true);
    // wait for the transaction to get mined
    await txn.wait();
    setLoading(false);

    console.log('Approved');


  };


  const signInReward = async () => {

    console.log('reward has initiated');

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const coinContract = new ethers.Contract(
        TOKEN_CONTRACT_ADDRESS,
        TOKEN_CONTRACT_ABI,
        signer
    );

    const txn = await coinContract.signInReward();
    setLoading(true);
    // wait for the transaction to get mined
    await txn.wait();
    setLoading(false);

    console.log('Reward Sent !');


  };




     
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



    return(

        <>
        <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="#"><p className="logotxt1">We</p><p className="logotxt2">Code</p></a>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse navelements-loc" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <div  className="hori-selector"><div className="left"></div><div className="right"></div></div>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/">Home</Link></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/">Profile</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/courses">Courses</Link></a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/problemsolve">Problems</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/quiz">Quiz</Link></a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/tokenomics">Tokenomics</Link></a>
                </li> */}
            </ul>
        </div>
    </nav>





<div className="container">
    <div className="main-body">
    
          {/* <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li className="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav> */}

    
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
                    <div className="mt-3">
                      <h4>Chintu</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>&nbsp;&nbsp; Network </h6>
                    <span className="text-secondary"> Georli </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>&nbsp;&nbsp;Github</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>&nbsp;&nbsp;Twitter</h6>
                    <span className="text-secondary">@bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>&nbsp;&nbsp;Instagram</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>&nbsp;&nbsp;Facebook</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div>


              

              <div className="card mt-3 profilebuttonbox ">
               <button className="profile-button-box-buttonsize approvenftbutton"><b className="buttoninnertxt" onClick={approveNFT}>Approve NFT</b></button>
               <button className="profile-button-box-buttonsize getnftbutton"><b className="buttoninnertxt" onClick={giveNFT}>Get NFT</b> </button>
               <div className="profile-twobuttonset">
               <button className="profile-button-box-buttonsize2 signinrewardbutton"><b className="buttoninnertxt" onClick={signInReward}>Sign in Reward</b> </button>
               <button className="profile-button-box-buttonsize2 burntokenbutton"><b className="buttoninnertxt" onClick={burnMyTokens}>Burn Token</b> </button>
               </div>
              </div>






            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">User Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Koder 49
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Coding Score</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      1026
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Problem Solved</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      654
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Contest Wins</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      11
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Skills</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Dynamic Programming, Backtracking, Array
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">My NFT</h6>
                    </div>
                    <div className="col-sm-9 text-secondary"> 
                    <a href="https://testnets.opensea.io/assets/goerli/0xEA2cC5071acd2b493f23572B0dCfa2208d172746/1" target="_blank">View my NFT</a>  </div>
                  </div>
                </div>
              </div>
              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-grey mr-2">Technologies  on the way :</i> </h6>
                      <small>Web Designing </small>
                      {/* <div className="progress mb-3""> */}
                      <div className="progress mb-3 one" >
                        <div className="progress-bar bg-danger two" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Competetive Programming</small>
                      <div className="progress mb-3 ml-2 one">
                        <div className="progress-bar bg-danger three" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Blockchain Development</small>
                      <div className="progress mb-3 one">
                        <div className="progress-bar bg-danger seven" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Mobile Development</small>
                      <div className="progress mb-3 one">
                        <div className="progress-bar bg-danger eight" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3 one">
                        <div className="progress-bar bg-danger nine" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-grey mr-2">Projects pending</i></h6>
                      <small>E-Commerce website</small>
                      <div className="progress mb-3 one">
                        <div className="progress-bar bg-primary two" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small> Build a DAO</small>
                      <div className="progress mb-3 one">
                        <div className="progress-bar bg-primary three" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small> Fetch Google APIs </small>
                      <div className="progress mb-3 one">
                        <div className="progress-bar bg-primary seven" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Mobile Based App</small>
                      <div className="progress mb-3 one">
                        <div className="progress-bar bg-primary eight" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Connect Wallet</small>
                      <div className="progress mb-3 one">
                        <div className="progress-bar bg-primary nine" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              


              {/* <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <button>hello</button>
                  </div>
                </div>
              </div> */}





            </div>
          </div>

        </div>
    </div>
        </>

    );
};

export default Profile;