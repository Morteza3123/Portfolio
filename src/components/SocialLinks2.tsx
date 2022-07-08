import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


export default function SocialLinks2() {

    const links = [
        {
            id: 1,
            child: (
                <>
                <FaLinkedin size={30}/>
            </>
            ),
            href: 'https://www.linkedin.com/in/morteza-khedri-20076720b',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <div className="">
                 <FaGithub size={30}/>
            </div>
            ),
            href: 'https://github.com/Morteza3123',
        },
        {
            id: 3,
            child: (
                <div className="">
                <HiOutlineMail size={30}/>
                </div>
            ),
            href: 'mailto:morteza.khedri1998@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                <BsFillPersonLinesFill size={30}/>
            </>
            ),
            href: './resume.pdf',
            download: true
        },
        {
            id: 5,
            child: (
                <>
                <FaMedium size={30}/>
            </>
            ),
            href: 'https://medium.com/@mkhedry3123',
            style: 'rounded-br-md'
        }
    ]
  return (
    // <div className="absolute inset-x-0 bottom-16 h-16">
    <div className="md:hidden">
      <ul className="flex flex-cols-5 items-center content-center">

        {links.map(({id, child, href, style, download}) => (
        <li key={id} className={"px-4 pt-8" + " " + style}>
          <a href={href} className="flex w-full text-white"
          download={download} target="_blank" rel="noreferrer">
            {child}
          </a>
        </li>
        ))}
      </ul>
    </div>
  );
}