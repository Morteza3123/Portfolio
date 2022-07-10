import React from "react";
import { Element } from "react-scroll";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import soldity from "../assets/solidity-logo.png";
import typescript from "../assets/typescript.png";
import truffle from "../assets/truffle.png";
import hardhat from "../assets/hardhat.png";
import web3 from "../assets/web3.png";
import ethers from "../assets/ethers.png";
import mocha from "../assets/mocha.png";
import chai from "../assets/chai.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import redux from "../assets/redux.png";
import docker from "../assets/docker.png";
import { useSpring, animated } from "react-spring";

export default function Exprience() {
  const props = useSpring({
    loop: { reverse: true },
    reverse: false,
    to: { x: 0, opacity: 1 },
    delay: 10,
    config: { duration: 1000 },
    from: { x: 5, opacity: 0.2 },
  });

  const techs = [
    {
      id: 1,
      src: soldity,
      title: "Solidity",
      style: "shadow-gray-600",
    },
    {
      id: 2,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaSript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: truffle,
      title: "Truffle",
      style: "shadow-amber-900",
    },
    {
      id: 5,
      src: hardhat,
      title: "Hardhat",
      style: "shadow-yellow-600",
    },
    {
      id: 6,
      src: web3,
      title: "Web3",
      style: "shadow-gray-600",
    },
    {
      id: 7,
      src: ethers,
      title: "Ethers",
      style: "shadow-blue-800",
    },
    {
      id: 8,
      src: react,
      title: "React",
      style: "shadow-sky-600",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 10,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 11,
      src: mocha,
      title: "Mocha",
      style: "shadow-amber-900",
    },
    {
      id: 12,
      src: chai,
      title: "Chai",
      style: "shadow-red-400",
    },
    {
      id: 13,
      src: node,
      title: "Chai",
      style: "shadow-green-400",
    },
    {
      id: 14,
      src: express,
      title: "Express",
      style: "shadow-gray-700",
    },
    {
      id: 15,
      src: mongo,
      title: "Mongodb",
      style: "shadow-green-900",
    },
    {
      id: 16,
      src: redux,
      title: "Redux",
      style: "shadow-purple-400",
    },
    {
      id: 17,
      src: docker,
      title: "Docker",
      style: "shadow-sky-800",
    },
  ];

  return (
    <Element name="experience">
      <div className="bg-gradient-to-b from-gray-800 to-black w-full h-100 py-32">
        <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="">
            <animated.div style={props}>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Exprience
              </p>
            </animated.div>
            <p className="py-6">This are technologies I've worked on</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 tex-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img className="w-20 mx-auto" src={src} alt="" />
                <p className="mt-5 text-center">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
