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
                    className="m-2 w-5 bg-repeat-round bg-white"
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
        
        
    </div>
  )
}

export default Header