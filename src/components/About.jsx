import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Reymund, nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        <p>
                        I am passionate about coding, turning ideas into digital masterpieces. With a logical mindset and a creative touch, 
                        I transform concepts into functional and innovative solutions. My goal is to create efficient, elegant, and user-friendly software, 
                        ensuring that each line of code contributes to a seamless digital experience. As a programmer, I take pride in enhancing technological 
                        narratives, making sure that every project speaks volumes and leaves a lasting impact in the digital realm.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About