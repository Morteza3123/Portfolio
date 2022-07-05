import React from 'react'
import { Element } from 'react-scroll'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import dex from '../assets/portfolio/dex.png'
import defi from '../assets/portfolio/defi.png'
import orderdex from '../assets/portfolio/order-dex.png'

export default function Portfolio() {

    const portfolios = [
        {
            id:1,
            src:dex
        },
        {
            id:2,
            src:defi
        },
        {
            id:3,
            src:orderdex
        },
        {
            id:4,
            src:reactSmooth
        },
        {
            id:5,
            src:installNode
        },
        {
            id:6,
            src:reactWeather
        },
    ]
  return (
    <Element name="portfolio">
    <div className='py-32 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full'>

        <div className=' max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0'>
            {portfolios.map(({id, src}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg content-center'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex'>
                        <button className='w-1/2  px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2  px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
    </Element>
  )
}
