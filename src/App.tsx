import React from 'react';
import './styles/App.css';
import './styles/main.css'
import './styles/reset.css'

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Arrival from "./components/project/Arrival";
import Clothes from "./components/clothes/Clothes";
import AboutUs from "./components/about/About-us";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      < Navbar/>
        <Header />
        <Arrival />
        <Clothes />
        <AboutUs />
        <Footer />

    </div>
  );
}

export default App;


