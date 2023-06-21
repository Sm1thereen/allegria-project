import React from 'react';
import './styles/App.css';
import './styles/main.css'
import './styles/reset.css'

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      < Navbar/>
        <Header />
    </div>
  );
}

export default App;


