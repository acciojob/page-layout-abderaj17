
import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Children from "./Children";

const App = () => {
  return (
    <div>
        <Header heading="Welcome to my website"/>
        <Children middle = "This is the content of my website." />
        <Footer foot = "C 2023 My Website. All rights reserved."/>
    </div>
  )
}

export default App
