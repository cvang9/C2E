import React, {useEffect,useState} from 'react';
import {  BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';  


const Home = () =>{

      // State
      const [currentAccount, setCurrentAccount] = useState(null);

      // Actions
      const checkIfWalletIsConnected = async () => {
      try {

          const { ethereum } = window;

          if (!ethereum) {
          console.log('Make sure you have MetaMask!');
          return;
          } else {
          console.log('We have the ethereum object', ethereum);

          const accounts = await ethereum.request({ method: 'eth_accounts' });

          if (accounts.length !== 0) {
              const account = accounts[0];
              console.log('Found an authorized account:', account);
              setCurrentAccount(account);
          } else {
              console.log('No authorized account found');
          }
          }
      } catch (error) {
          console.log(error);
      }
      };

      /*
      * Implement your connectWallet method here
      */
      const connectWalletAction = async () => {
      try {
          const { ethereum } = window;

          if (!ethereum) {
          alert('Get MetaMask!');
          return;
          }

          /*
          * Fancy method to request access to account.
          */
          const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
          });

          /*
          * Boom! This should print out public address once we authorize Metamask.
          */
          console.log('Connected', accounts[0]);
          setCurrentAccount(accounts[0]);
      } catch (error) {
          console.log(error);
      }
      };

      useEffect(() => {
      checkIfWalletIsConnected();
      }, []);



    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var W = window.innerWidth;
    var H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    var fontSize = 16;
    var columns = Math.floor(W / fontSize); 
    var drops = [];
    for(var i=0; i<columns; i++){
        drops.push(0);
    }
    var str = "01";
    function draw(){
        context.fillStyle = "rgba(0,0,0,0.05)";
        context.fillRect(0, 0, W, H);
        context.fontSize = "700 " + fontSize + "px";
        context.fillStyle = "#00cc33";
        for(var i=0; i<columns; i++){
            var index = Math.floor(Math.random()*str.length);
            var x = i * fontSize;
            var y = drops[i] * fontSize;
            context.fillText(str[index], x, y);
            if(y >= canvas.height && Math.random() > 0.99){
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    draw();
    setInterval(draw, 68);



    return(
        <>

        {/* <li>
         <Link to="/Profile"> profile </Link>
        </li> */}
         
          <div className='papa'> </div>
                  
                  <div className="connect-wallet-position">
                      <a className="connect-wallet-button1" href="">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <Link to="/Profile" className="connecttxt1">My Profile</Link>
                       </a>
                  </div>

                  <p className="details-text">
                          <span>G</span>
                          <span>&#160; </span>
                          <span>E</span>
                          <span>&#160; </span>
                          <span>T</span>
                          <span>&#160; </span>
                          <span>&#160; </span>
                          <span>S</span>
                          <span>&#160; </span>
                          <span>E</span>
                          <span>&#160; </span>
                          <span>T</span>
                          <span>&#160; </span>
                          <span>&#160; </span>
                          <span>C</span>
                          <span>&#160; </span>
                          <span>O</span>
                          <span>&#160; </span>
                          <span>D</span>
                          <span>&#160; </span>
                          <span>E</span>
                      </p>

                      {/* <div className="connect-wallet-position">
                      <a className="connect-wallet-button" href="">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Connect Wallet
                       </a>
                  </div> */}

                      <div className="connect-wallet-position2">
                      <a className="connect-wallet-button">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <a className="connecttxt" onClick={connectWalletAction}>Connect Wallet</a>
                          </a>
                   </div> 
                  

        </>

    );
};

export default Home;