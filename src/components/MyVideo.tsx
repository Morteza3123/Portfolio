import React from "react";
import { Element } from "react-scroll";
import { useSpring, animated } from "react-spring";

export default function MyVideo() {
    const props = useSpring({
        loop: { reverse: true },
        reverse: false,
        to: { x: 0, opacity: 1 },
        delay: 10,
        config: { duration: 1000 },
        from: { x: 5, opacity: 0.2 },
    });

    // const props1 = useSpring({
    //     loop: { reverse: true },
    //     reverse: false,
    //     to: { y: 10, opacity: 1 },
    //     delay: 10,
    //     config: { duration: 2000 },
    //     from: { y: -10, opacity: 0.8 },
    // });

    return (
        <Element name="about">
                  <div className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white">
                  <div className="p-1 max-w-screen-lg md:p-4 mx-auto flex flex-col justify-center w-full md:w-full h-full">
                      <animated.div style={props}>
                        <div className="">
                          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                            About
                          </p>
                        </div>
                      </animated.div>
                      <p className="text-xl mt-10">
                      Since August 2022, I’ve contributed to {<a className="text-sky-500" href="https://www.nexlabs.io" target="_blank" rel="noopener noreferrer">NEX Labs</a>} in the Netherlands, building a Real-World Asset (RWA) protocol for decentralized finance. I’ve developed smart contracts for indices like CR5 and ANFI, enabling trading in perpetual and futures markets. My work features cross-chain solutions and a VAMM model, integrating real-world assets with blockchain innovation.
                      </p>
            
                      <br />

                      <div className="md:w-full h-full">
                    <iframe
                        className="mx-auto flex flex-col justify-center  w-full h-full md:w-5/5 md:h-5/5"
                        allowFullScreen
                        src="https://www.youtube.com/embed/iMxfJRYEQvA?si=s27bE8ziKsAQjZZo"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
                    </div>
                  
                    
                    
                  </div>
        </Element>
    );
}
