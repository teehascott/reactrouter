// import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Red from './components/red';
import Orange from './components/orange';
import Yellow from './components/yellow';
import Green from './components/green';
import Blue from './components/blue';
import Purple from './components/purple';
import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {

  return (
    <>
          <div id="container">
      <h1>Hello React Router!</h1>
        <Navbar />
      <div id="main-section">
      <Routes>
      <Route path="/red" element= {<Red  />} />
      <Route path="/orange" element= {<Orange  />} />
      <Route path="/yellow" element= {<Yellow  />} />
      <Route path="/green" element= {<Green  />} />
      <Route path="/blue" element= {<Blue  />} />
      <Route path="/purple" element= {<Purple  />} />
      <Route path="/" element= {<Home  />} />
        </Routes>
        <Footer  />
        </div>
    </div>
    </>
  );
}

export default App
