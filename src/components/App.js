
import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Children from "./Children";

const App = () => {
  return (
    <div>
        <Header header="Welcome to my website"/>
        <Children children = "This is the content of my website." />
        <Footer footer = "© 2023 My Website. All rights reserved."/>
    </div>
  )
}

export default App
