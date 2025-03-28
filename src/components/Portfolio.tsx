import React from "react";
import { Element } from "react-scroll";
import { useSpring, animated } from "react-spring";
import priceOracle from "../assets/portfolio/PriceOracle.png";
import delegateCall from "../assets/portfolio/DelegateCall.png";
import http from "../assets/portfolio/Http.png";
import chainlinkFoundry from "../assets/portfolio/ChainlinkFoundry.png";
import chainlinkHardhat from "../assets/portfolio/ChainlinkHardhat.png";
import onchainAIAgent from "../assets/portfolio/Onchain-AI-Agent.png";

export default function Portfolio() {
  const props = useSpring({
    loop: { reverse: true },
    reverse: false,
    to: { x: 0, opacity: 1 },
    delay: 10,
    config: { duration: 1000 },
    from: { x: 5, opacity: 0.2 },
  });

  const portfolios = [
    {
      id: 1,
      src: onchainAIAgent,
      link: "https://moodglobalservices.com/blog/on-chain-ai-agents",
      description: "Onchain AI Agents"
    },
    {
      id: 1,
      src: priceOracle,
      link: "https://moodglobalservices.com/blog/price-oracle-manipulation",
      description: "Price Oracle Attack In Defi"
    },
    {
      id: 2,
      src: delegateCall,
      link: "https://moodglobalservices.com/blog/understanding-the-risks-of-sharing-control-in-smart-contracts-delegatecall-vulnerability",
      description: "Delegate Call Vulnerability"
    },
    {
      id: 3,
      src: http,
      link: "https://medium.com/@mkhedry3123/how-to-make-http-get-requests-to-external-apis-from-smart-contracts-e729d9fc4f82?source=user_profile_page---------0-------------ddf0dd0e5744----------------------",
      description: "How to make http get requests to external apis from smart contracts"
    },
    {
      id: 4,
      src: chainlinkFoundry,
      link: "https://medium.com/@mkhedry3123/how-to-test-chainlink-oracle-in-the-foundry-framework-bef40e265e79?source=user_profile_page---------1-------------ddf0dd0e5744----------------------",
      description: "How to test chainlink oracle in the foundry framework"
    },
    {
      id: 5,
      src: chainlinkHardhat,
      link: "https://medium.com/@mkhedry3123/how-to-test-chainlink-oracle-in-hardhat-using-mocks-12691c5d8c1f?source=user_profile_page---------2-------------ddf0dd0e5744----------------------",
      description: "How to test chainlink oracle in hardhat using mocks"
    }
  ];
 

  return (
    <Element name="portfolio">
      <div className="py-32 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full">
        <div className=" max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
          <div className="">
            <animated.div style={props}>
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Articles
              </p>
            </animated.div>
            <p className="py-6">Check out some of my technical researchs right here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0">
            {portfolios.map(({ id, src, link, description }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg content-center cursor-pointer"
                onClick={() => window.open(link)}
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex">
                  <p className="px-6 py-3 m-4 duration-200 hover:scale-105">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
