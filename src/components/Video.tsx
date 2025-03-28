import React from "react";
import { Element } from "react-scroll";
import { useSpring, animated } from "react-spring";
import blockchain from "../assets/blockchain.png";

export default function Video() {
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
            <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
                <div className="w-full h-full">
                    <iframe
                        className="w-full h-full"
                        allowFullScreen
                        src="https://www.youtube.com/embed/iMxfJRYEQvA?si=s27bE8ziKsAQjZZo"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
            </div>
        </Element>
    );
}
