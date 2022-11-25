import React, {useEffect,useState} from 'react';
import './Courses.css';
import {  BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';  
import $ from 'jquery';
import im from './1.png';
import bimg from './block.png';
import simg from './Solana-2.jpg';
import pimg from './polygon-matic.jpg';
import { ethers } from 'ethers';
import {
    NFT_CONTRACT_ABI,
    NFT_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ABI,
    TOKEN_CONTRACT_ADDRESS,
  } from "./constants";

const Courses = () =>{

    var canvas = document.getElementById('canvas');
    canvas.width = 0;
    canvas.height = 0;


    const userHasPremium = async () => {
    
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const coinContract = new ethers.Contract(
            TOKEN_CONTRACT_ADDRESS,
            TOKEN_CONTRACT_ABI,
            signer
        );
    
        const txn = await coinContract.joinPremium();
        // wait for the transaction to get mined
        await txn.wait();
        console.log('Reward Transfered');
        console.log(txn);
    
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
                <li className="nav-item active">
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
    

            <section id="EventHome">
            
            <div className="EventHeroDiv">

                
            <div className="floating">
            <img className="coderimg" src={im}></img>
            </div>
                <div className="hero EventHero">
                    <div className="EventHero1">
                        <p className="Hero-title1">
                            Our<span className="txtcourses" id="app">Courses</span>
                        </p>
                        <div className="ViewEventsDiv">
                            <a className='pat' href="#Eventlist">
                                <button className="ViewEventBtn">
                                 View Courses 
                                    <i className="arrow down"></i>
                                </button>
                                
                            </a>
                            <button className="ViewEventBtn2" onClick={userHasPremium}>
                                 <h5 ><b>Buy Premium</b></h5>
                                   
                                </button>
                        </div>
                        
                    </div>
               </div>
            </div>
            
        </section>

        <section id="Eventlist">
            <div className="projectContainer">
                <div className="projectTitleDiv" data-aos="fade-up">
                    <h1 className="projectsTitle year">Upcoming Courses</h1>
                </div>
                <div className="projectShowcase">
                    <div className="showcaseWrapper">
                        <div className="showcaseCard">
                            <img
                                src={bimg}
                                alt=""
                            />
                            <div className="info">
                                <h1>Understand Concepts of Blockchain</h1>
                            </div>
                        </div>

                        <div className="showcaseCard">
                            <img
                                src={simg}
                                alt=""
                            />
                            <div className="info">
                                <h1>Learn The Fastest Blockchain</h1>
                                {/* <p>
                                    An Opensource Workshop conducted to spread
                                    the knowledge about HacktoberFest and how to
                                    make your first pull request.
                                </p> */}
                            </div>
                        </div>

                        <div className="showcaseCard">
                            <img
                                src={pimg}
                                alt=""
                            />
                            <div className="info">
                                <h1 className="consilio-text">
                                    Intro to Polygon
                                </h1>
                                {/* <p>
                                    A Webinar Taken by Mr.Hasnen Tai talking and
                                    enlightening the students about the
                                    principle of animation in Flutter.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>


            
        </>
    );
};

export default Courses;