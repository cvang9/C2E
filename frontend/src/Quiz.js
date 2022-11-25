// import "./components/bootstrap.min.css";
// import "./components/bootstrap.css";
import Progressbar from "./components/Progressbar";
import Failbar from "./components/failbar";
import { useState } from "react";
import "./Quiz.css";
import {  BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';  
import $ from 'jquery';
import { ethers } from 'ethers';
import {
    NFT_CONTRACT_ABI,
    NFT_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ABI,
    TOKEN_CONTRACT_ADDRESS,
  } from "./constants";





const Quiz = () =>{


    // loading is set to true when we are waiting for a transaction to get mined
    const [loading, setLoading] = useState(false);
    const [ startQuiz, setStartQuiz] = useState(false);

    const giveQuizReward = async () => {
    
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

        console.log('Reward Transfered');
    
      };


      const openQuiz = async () => {

        setStartQuiz(true);
    
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const coinContract = new ethers.Contract(
            TOKEN_CONTRACT_ADDRESS,
            TOKEN_CONTRACT_ABI,
            signer
        );
    
        const txn = await coinContract.startQuiz();
        setLoading(true);
        // wait for the transaction to get mined
        await txn.wait();
        setLoading(false);

        console.log('Quiz is Opened');
    
      };

      const closeQuiz = ()=>{

        setStartQuiz(false);

      }

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

const questions = [
  {
    questionText: " Who invented C++?",
    answerOptions: [
      { answerText: "Bjarne Stroustrup", isCorrect: true },
      { answerText: "Parag Agarwal", isCorrect: false },
      { answerText: "Shivang Saini", isCorrect: false },
      { answerText: "jitendra Sharma", isCorrect: false },
    ],
  },
  {
    questionText:
      " Which of the following is a correct identifier in C++?",
    answerOptions: [
      { answerText: "$var_name", isCorrect: false },
      { answerText: "VAR_1234", isCorrect: true },
      { answerText: "7VARNAME", isCorrect: false },
      { answerText: "7var_name", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following type is provided by C++ but not C?",
    answerOptions: [
      { answerText: "double", isCorrect: false },
      { answerText: "int", isCorrect: false },
      { answerText: "bool", isCorrect: true },
      { answerText: "float", isCorrect: false },
    ],
  },
  {
    questionText: "Which is more effective while calling the C++ functions?",
    answerOptions: [
      { answerText: "call by reference", isCorrect: true },
      { answerText: "call by value", isCorrect: false },
      { answerText: "call by pointer", isCorrect: false },
      { answerText: "call by object", isCorrect: false },
    ],
  },
];

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scoreF, setScoreF] = useState(0);
  console.log(scoreF);
  console.log(score);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (!isCorrect) {
        setScoreF(scoreF+1);
      }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
        setInterval(function() {setShowScore(true)}, 1000);
    }
  }

  function status() {
    if( score == 4 )
    {
      return(
        <>
        <div> Congraluations! You Won</div>
        <button className="congobutton" onClick={giveQuizReward}>Get Reward</button>
        </>
      )
    }
    else{
      return(
        <div> Better luck next time</div>
      )
    }
  }

  return (

    
    
    <div className="app">
      {showScore ? ( 
      <>
        <div className="quizbox">
        <div className="score-section">
          <div style={{width: "100%"}}>
            <div style={{display: "flex"}}>
              <div className="progressdiv" >
                <p className="finalrightans-txt" style={{fontSize: "18px"}}>Right Ans</p>
                <Progressbar score={score} />
              </div>
              <div className="progressdiv">
                <p className="finalwrongans-txt" style={{fontSize: "18px"}}>Wrong Ans</p>
                <Failbar score={scoreF} />
              </div>
            </div> 
            
             </div>
         </div>
         <div className="score-section" style={{marginTop: "30%", marginBottom: "30%"}}>Your Score {score} out of {questions.length}</div>
         
         { status() }
        </div>
        
        
         </>
        
      ) : (
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
                
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/problemsolve">Problems</Link></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/quiz">Quiz</Link></a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><Link to="/tokenomics">Tokenomics</Link></a>
                </li> */}
            </ul>
        </div>
    </nav>




          <div className="quizbox">


          <div style={{width: "100%", marginBottom: "20px"}}>
          
          <div style={{display: "flex"}}>
          <div className="progressdiv" >
            <b>Right Ans</b>
            <Progressbar score={score} />
          </div>
          <div className="progressdiv">
            <b>Wrong Ans</b>
            <Failbar score={scoreF} />
          </div>
          </div>
        
      </div>
      <div className="question-section">
          <div className="question-count">
            <span style={{color: "white"}}>Question {currentQuestion + 1}/{questions.length}</span>
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
        </div>
        
        <div className="answer-section">
          {questions[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <button
                onClick={() => handleAnswer(answerOption.isCorrect)}
                key={index}
              >
                {answerOption.answerText}
              </button>

            )
          )}
        </div>
          </div>
        
        </>
      )}
    </div>
  );
};

export default Quiz;