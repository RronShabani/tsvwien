// import React from 'react';
import { Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './Components/pages/Home'
import Events from './Components/pages/Events'
import Header from './Components/common/Header'
import Footer from './Components/common/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/events" Component={Events} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
