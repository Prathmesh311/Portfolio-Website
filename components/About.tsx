import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        <motion.img 
        initial={{x: -200, opacity:0 }}
        whileInView={{x: 0, opacity:1}}
        transition={{duration: 1.2}}
        viewport={{once:true}}
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGdsiKtI7ZOVQ/profile-displayphoto-shrink_100_100/0/1644115290894?e=1671667200&v=beta&t=tUmfbY6-laFG6N_iVnSe4-eTyUtImc94jr65VsvFqvI"
        className='my-20 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
                    md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[450px]'               
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl font-semibold md:text-4xl'>Here is a little background</h4>
            <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptate consequuntur pariatur impedit in dicta fuga natus facere esse vitae nisi similique, suscipit quis, assumenda ullam facilis eveniet nostrum magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corrupti cum animi. Accusantium quae labore ipsam sint est quam nostrum odio nemo assumenda consequuntur? Debitis quibusdam itaque sequi neque perspiciatis?</p>
        </div>
    </motion.div>
  )
}

export default About