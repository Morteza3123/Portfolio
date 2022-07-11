import About from "./components/About";
import Contact from "./components/Contact";
import Exprience from "./components/Exprience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { useEffect, useRef } from "react";
import "./styles.css";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Exprience />
      <Contact />
      <SocialLinks />
      <MessengerCustomerChat
        pageId="100015216666220"
        appId="701887770874618"
      />
    </div>
  );
}

export default App;
