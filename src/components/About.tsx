import React from "react";
import { Element } from "react-scroll";
import { useSpring, animated } from 'react-spring';


export default function About() {
  const props1 = useSpring({ to: { opacity: 1 }, delay: 400, config: { duration: 2000 },from: { opacity: 0 } })

  return (
    <Element name="about">
      <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="p-4 max-w-screen-lg md:p-4 mx-auto flex flex-col justify-center w-full h-full">
        <animated.div style={props1}>
          <div className="pt-10">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
              About
            </p>
          </div>

          <p className="text-xl mt-10">
            I’ve been working on Amirkabir company as a full-time Blockchain
            developer (November 2021—Present). This company works on fintech and provides software
            services for other companies. Our team work on blockchain
            applications. I and two of frontend developers have been working on
            Blockchain-based projects. Chamrosh and Bocoin were two projects
            that I developed their smart contracts and web3 interaction in
            frontend.
          </p>

          <br />

          <p className="text-xl">
            Before that I worked in Yasina company (May 2020—November 2021). Yasina is a financial company that works in the stock and commodity
            market of Iran. I worked there as a financial analyzer and data
            analyzer. Actually, I wrote filters for data of the market and
            analyzed them by the chart.
          </p>
          </animated.div>
        </div>
      </div>
    </Element>
  );
}
