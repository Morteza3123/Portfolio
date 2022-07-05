import React from 'react'
import HeroImage from "../assets/heroImage.jpg";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Element, Link } from 'react-scroll';
const Home = () => {
  return (
    <Element name="home">
    <div
      className="py-32 h-full w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I am a Blockchain Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I have 2 years experience building and developing Blockchain base projects.
                    Currently, I love to work on more Blockchain projects and be a member of teams in order to participate in the web3 projects.
                    I can work with EVM based Blockchains like Ethereum, Binance smart chain, polygon and other layer two Blockchains.
          </p>

          <div>
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
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-full pt-6 md:pt-0"
          />
        </div>

      </div>
    </div>
    </Element>
  )
}

export default Home