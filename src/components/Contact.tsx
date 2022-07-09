import React from "react";
import { Element } from "react-scroll";
import { useSpring, animated } from "react-spring";

export default function Contact() {

  const props = useSpring({
    loop: { reverse: true },
    reverse: false,
    to: { x: 0, opacity: 1 },
    delay: 10,
    config: { duration: 1000 },
    from: { x: 5, opacity: 0.2 },
  });
  
  return (
    <Element name="contact">
    <div className="pt-0 md:pt-0 py-32 w-full h-full md:h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="">
        <animated.div style={props}>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          </animated.div>
          <p className="py-6">Submit in form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/b3378363-e5f5-44d9-846a-08bb77a4b631" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message "
              className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex-items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
    </Element>
  );
}
