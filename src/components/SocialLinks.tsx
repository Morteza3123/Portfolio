import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useSpring, animated } from 'react-spring';


export default function SocialLinks() {

  const props = useSpring({ to: {y:0, opacity: 1 }, delay: 800, config: { duration: 2000, mass:300 },from: { y: 150, opacity: 0  } })


    const links = [
        {
            id: 1,
            child: (
                <>
                Linkedin <FaLinkedin size={30}/>
            </>
            ),
            href: 'https://www.linkedin.com/in/morteza-khedri-20076720b',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={30}/>
            </>
            ),
            href: 'https://github.com/Morteza3123',
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
            </>
            ),
            href: 'mailto:morteza.khedri1998@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
            </>
            ),
            href: './resume.pdf',
            download: true
        },
        {
            id: 5,
            child: (
                <>
                Medium <FaMedium size={30}/>
            </>
            ),
            href: 'https://medium.com/@mkhedry3123',
            style: 'rounded-br-md'
        }
    ]
  return (
    // <div className="absolute inset-x-0 bottom-16 h-16">
    <div className="hidden absolute inset-x-0 bottom-16 h-16 w-4 md:flex lg:flex-col lg:top-[35%] lg:left-0 lg:fixed">
      <animated.div style={props}>
      <ul>

        {links.map(({id, child, href, style, download}) => (
        <li key={id} className={"hiffrn md:flex justify-between items-center w-40 md:h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
          <a href={href} className="flex justify-between items-center w-full text-white"
          download={download} target="_blank" rel="noreferrer">
            {child}
          </a>
        </li>
        ))}
      </ul>
      </animated.div>
    </div>
  );
}