import './App.css';
import Profile from './Profile';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';
import {  BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';  
import Tokenomics from './Tokenomics';
import Problemsolve from './Problemsolve';
import Courses from './Courses';
import Quiz from './Quiz';

function App() {

  

  return (
    < BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Tokenomics" element={<Tokenomics/>} />
        <Route path="/Problemsolve" element={<Problemsolve/>} />
        <Route path="/Courses" element={<Courses/>} />
        <Route path="/Quiz" element={<Quiz/>} />
      </Routes>
    </BrowserRouter>
        
   );

}

export default App;
