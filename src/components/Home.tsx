import React from "react";
import HeroImage from "../assets/heroImage2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Element, Link } from "react-scroll";
import { useSpring, animated } from "react-spring";
import SocialLinks2 from "./SocialLinks2";

const Home = () => {

  const props1 = useSpring({
    loop:{reverse:true},
    reverse:false,
    to: { opacity: 1},
    delay: 50,
    config: { duration: 2000 },
    from: { opacity: 0.2},
  });

  const props2 = useSpring({
    to: { opacity: 1 },
    delay: 600,
    config: { duration: 1000 },
    from: { opacity: 0 },
  });

  // const props = useSpring({
  //   to: { y: 0, opacity: 1 },
  //   delay: 1800,
  //   config: { duration: 2000, mass: 300 },
  //   from: { y: -150, opacity: 0 },
  // });

  const props3 = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    delay:300,
    from: { opacity: 0, color: "red" },
  });

  const props4 = useSpring({
    to: { y: 0, opacity: 1 },
    delay: 800,
    config: { duration: 2000, mass: 300 },
    from: { y: -150, opacity: 0 },
  });



  return (
    <Element name="home">
      <div className="py-32 h-full w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <animated.div style={props1}>
              <h2 className="text-4xl sm:text-7xl font-bold text-white">
                Blockchain Expert
              </h2>
            </animated.div>
            <animated.div style={props2}>
              <p className="text-gray-500 py-4 max-w-md">
              Greetings! I’m Morteza Khedri, a dedicated Web3 Builder with over four years of experience designing and building blockchain-based solutions. I specialize in EVM-compatible blockchains, including Ethereum, Binance Smart Chain, Polygon, and various zero knowledge and cross-chain platforms. Passionate about the evolving world of Web3, I am eager to collaborate with innovative teams and contribute to cutting-edge blockchain projects.


              </p>
            </animated.div>
            <div>
              <animated.div style={props3}>
                <Link
                  to="portfolio"
                  smooth
                  duration={500}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
              </animated.div>
            </div>
          </div>
          <div>
            <animated.div style={props4}>
              <img
                src={HeroImage}
                alt="my profile"
                className="rounded-3xl mx-auto w-2/4 md:w-2/4 h-80% pt-6 md:pt-0 hover:scale-125 duration-500"
              />
            </animated.div>
          </div>
          <SocialLinks2 />
        </div>
      </div>
    </Element>
  );
};

export default Home;
