import React, {useEffect,useState} from 'react';
import {  BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';  
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tokenomics = () =>{

    var canvas = document.getElementById('canvas');
    canvas.width = 0;
    canvas.height = 0;

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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/problemsolve">Problems</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/quiz">Quiz</Link></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/tokenomics">Tokenomics</Link></a>
                </li>
                
            </ul>
        </div>
    </nav>
        </>
    );
};

export default Tokenomics;