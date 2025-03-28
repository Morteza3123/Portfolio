import React from "react";
import { Element } from "react-scroll";
import { useSpring, animated } from "react-spring";
import blockchain from "../assets/blockchain.png";

export default function About() {
  const props = useSpring({
    loop: { reverse: true },
    reverse: false,
    to: { x: 0, opacity: 1 },
    delay: 10,
    config: { duration: 1000 },
    from: { x: 5, opacity: 0.2 },
  });

  const props1 = useSpring({
    loop: { reverse: true },
    reverse: false,
    to: { y: 10, opacity: 1 },
    delay: 10,
    config: { duration: 2000 },
    from: { y: -10, opacity: 0.8 },
  });

  return (
    <Element name="about">
      <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white md:flex">
      <div className="">
          <animated.div style={props1}>
            <img className="pt-10" src={blockchain} alt="Blockchain illustration" />
          </animated.div>
        </div>
        <div className="p-4 max-w-screen-lg md:p-4 mx-auto flex flex-col justify-center w-full md:w-1/2 h-full">
          <animated.div style={props}>
            <div className="pt-10">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                About
              </p>
            </div>
          </animated.div>
          <p className="text-xl mt-10">
            I work on Amirkabir company as a full-time Blockchain developer
            (November 2021—Present). This company works on fintech and provides
            software services for other companies. Our team work on blockchain
            applications. I was responsible for Blockchain-based projects.
            Chamrosh and Bocoin were two projects that I developed their smart
            contracts and web3 interaction in frontend. I also have knowledge of
            web2 tools for frontend(raect, javascript, typescript, tailwind,
            bootstrap, redux) and backend(Nodejs, Mongodb, expressjs).
          </p>

          <br />

          <p className="text-xl">
            Before that I worked in Yasina company (May 2020—November 2021).
            Yasina is a financial company that works in the stock and commodity
            market of Iran. I worked there as a financial analyzer and data
            analyzer. Actually, I wrote filters for data of the market and
            analyzed them by the chart.
          </p>
        </div>
        
      </div>
    </Element>
  );
}
