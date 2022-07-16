import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Exprience from "./components/Exprience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import "./styles.css";



function App() {

  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "ed217160-f41e-49f5-a6c3-9f14e8aac257";
    (function () {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  });
  
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Exprience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
