import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <div className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <nav className='flex flex-row align-middle  flex-wrap'>
                <ul className="inline-block">
                    <li  className="inline-block mx-5 my-5"><a href='#'>Home</a></li>
                    <li  className="inline-block mx-5 my-5 hidden md:inline-flex"><a href='#'>About</a></li>
                    <li  className="inline-block mx-5 my-5 hidden md:inline-flex"><a href='#'>Education</a></li>
                    <li  className="inline-block mx-5 my-5 hidden md:inline-flex"><a href='#'>Career</a></li>
                    <li  className="inline-block mx-5 my-5 hidden md:inline-flex"><a href='#'>Projects</a></li>
                </ul>
            </nav>

            <div className='flex flex-row items-center'>
                <SocialIcon 
                    className="m-2 w-5"
                    url="https://www.linkedin.com/in/prathmesh-bhondave/" 
                />
                 <SocialIcon 
                    url="https://www.linkedin.com/in/prathmesh-bhondave/" 
                />
                 <SocialIcon 
                    url="https://www.linkedin.com/in/prathmesh-bhondave/" 
                />
            </div>
        </div>

        <div className="text-3xl mt-200 max-w-7xl mx-auto">
            <p className='font-semibold'>Software Developer</p>
            <h1 className='font-bold mt-50'>Hi I'm <span>Prathmesh</span> <br /> Bhondave From India</h1>
        </div>

        {/*<div>
            <SocialIcon 
                url="https://www.linkedin.com/in/prathmesh-bhondave/" 
            />
        </div>*/}
    </div>
  )
}

export default Header