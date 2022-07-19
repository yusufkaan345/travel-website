import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Select from "./components/Select";
import Carousels from "./components/Carousels";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Destinations/>
      <Search/>
      <Select/>
      <Carousels/>
      <Footer/>
    </div>
  );
}

export default App;
