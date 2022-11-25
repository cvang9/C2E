import React, {useEffect,useState} from 'react';
import './Problemsolve.css';
import {  BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';  
import $ from 'jquery';
import problemimg from './problem.png';
import {
    NFT_CONTRACT_ABI,
    NFT_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ABI,
    TOKEN_CONTRACT_ADDRESS,
  } from "./constants";
  import { ethers } from 'ethers';

const Problemsolve = () =>{

    var canvas = document.getElementById('canvas');
    canvas.width = 0;
    canvas.height = 0;




    const [loading, setLoading] = useState(false);

    
    /**
* withdrawCoins: withdraws ether and tokens by calling
* the withdraw function in the contract
*/
      const problemIsSolved = async () => {

            console.log('Checking response');
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const coinContract = new ethers.Contract(
                    TOKEN_CONTRACT_ADDRESS,
                    TOKEN_CONTRACT_ABI,
                    signer
                );

                const txn = await coinContract.problemSolved();
                setLoading(true);
                // wait for the transaction to get mined
                await txn.wait();
                setLoading(false);


                const provider2 = new ethers.providers.Web3Provider(window.ethereum);
                const signer2 = provider2.getSigner();
                const nftContract = new ethers.Contract(
                    NFT_CONTRACT_ADDRESS,
                    NFT_CONTRACT_ABI,
                    signer2
                );

                const txn1 = await nftContract.updateProblemSolved();
                setLoading(true);
                // wait for the transaction to get mined
                await txn1.wait();
                setLoading(false);

                console.log('Question Updated');

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
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/profile">Profile</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/courses">Courses</Link></a>
                </li>
                <li className="nav-item active">
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

        <div className="problem-section">
        <div className="problem-section-child">
           <div className="problem-boder">
           <h5 className=" problemname"><b>Hungry Ashish</b></h5>
           <h6 className="problem-txt-color"><b><i>Problem :</i></b></h6>
           <h6 className="problem-txt-color">It's dinner time. Ashish is very hungry and wants to eat something. He has XX rupees in his pocket. Since Ashish is very picky, he only likes to eat either PIZZA or BURGER. In addition, he prefers eating PIZZA over eating BURGER. The cost of a PIZZA is YY rupees while the cost of a BURGER is ZZ rupees.
                Ashish can eat at most one thing. Find out what will Ashish eat for his dinner.
           </h6>
           <hr className="problem-txt-color" />

           <h6 className="problem-txt-color"><b><i>Input Format :</i></b></h6>
           <li className="problem-txt-color">The first line will contain T - the number of test cases. Then the test cases follow.</li>
           <li className="problem-txt-color">The first and only line of each test case contains three integers XX, YY and ZZ - the money Ashish has, the cost of a PIZZA and the cost of a BURGER.</li>
           <hr className="problem-txt-color" />

           <h6 className="problem-txt-color"><b><i>Output Format :</i></b></h6>
           <h6 className="problem-txt-color">For each test case, output what Ashish will eat. (PIZZA, BURGER or NOTHING). You may print each character of the string in uppercase or lowercase. (for example, the strings Pizza, pIzZa and piZZa will all be treated as identical).</h6>
           <hr className="problem-txt-color" />

           <h6 className="problem-txt-color"><b><i>Constraints :</i></b></h6>
           <li className="problem-txt-color">1≤T≤100</li>
           <li className="problem-txt-color">1≤X,Y,Z≤100</li>
           <hr className="problem-txt-color" />

           <h6 className="problem-txt-color"><b><i>Sample</i></b></h6>
           <br />
           <h6 className="problem-txt-color"><b><i>Input :</i></b></h6>
           <h6 className="problem-txt-color"><b><i>3</i></b></h6>
           <h6 className="problem-txt-color"><b><i>50 40 60</i></b></h6>
           <h6 className="problem-txt-color"><b><i>40 55 39</i></b></h6>
           <h6 className="problem-txt-color"><b><i>30 42 37</i></b></h6>
            <br />
           <h6 className="problem-txt-color"><b><i> Output :</i></b></h6>
           <h6 className="problem-txt-color"><b><i>PIZZA</i></b></h6>
           <h6 className="problem-txt-color"><b><i>BURGER</i></b></h6>
           <h6 className="problem-txt-color"><b><i>NOTHING</i></b></h6>

           

           
           </div>
            
        </div>
        
        <textarea className="txtboxbackground" placeholder='Write Your Code Here' name="" id="" cols="80" rows="1"></textarea>
    </div>   
    <button className="buttonrun"><b className="runtxt">RUN</b></button>
   
    <button className="buttonrun2"><b className="runtxt" onClick={problemIsSolved}>SUBMIT</b></button>  

 

        </>
    );
};

export default Problemsolve;