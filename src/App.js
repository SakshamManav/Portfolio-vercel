import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainBody from './Components/MainBody';
import { useEffect } from 'react';
import About from './Components/About';
import Project from './Components/Project';
import  Contact  from './Components/Contact';
// import LetterGlitch from './Components/abcd';
// import Lightning from './Components/abcd';
import Squares from './Components/abcd';
import Particles from './Components/Particles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GitHubInfo from './Components/GithubINfo';
import GitHubProject from './Components/GithubProject';
import InstagramProject from './Components/InstagramProject';
function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);
  return (
    <Router>
    <div className="App">
      
      <Routes>
      
        <Route path="/" element={<>
          <Particles particleCount={300}/>
          <Navbar/>
          <MainBody/>
          <About/>
          <Project/>
          <Contact/>
          
        </>} />
        <Route path='/instagram-project' element={
          <>
          
        <Particles particleCount={200}/>
        
        <InstagramProject/>
        </>
        } />
        <Route path="/github" element={<GitHubInfo />} /> 
        <Route path="/github/:repoName" element={<GitHubProject />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
