import { useState } from "react";
import assets from "./assets/assets";
import NavBar from "./componants/NavBAr";
import Header from "./componants/Header";
import Machine from "./componants/machine";
import Footer from "./componants/footer";
import About from "./componants/About";

function App() {
  return (
    <div>
      <Header/>
      <Machine/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
