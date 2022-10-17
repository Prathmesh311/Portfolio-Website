import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='h-screen'>
        <div className="text-3xl mt-200 max-w-7xl mx-auto">
            <p className='font-bold text-xl xl:text-3xl'>Software Developer</p>
            <h1 className='font-bold text-3xl mt-50 xl:text-5xl'>Hi I'm <span>Prathmesh</span> <br /> Bhondave From India</h1>
        </div>
    </div>
  )
}

export default Hero