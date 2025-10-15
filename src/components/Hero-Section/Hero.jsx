import React from 'react'
import { NavLink } from "react-router-dom";
import SplitText from '../AnimationTxt/SplitText';
import TextType from '../AnimationTxt/TextType';

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

export default function Hero() {
    return (
        <div id='home' data-aos="fade-up" className='flex flex-col sm:flex-row pt-16 sm:h-[450px] md:h-[750px] '>
            <div className='w-full sm:w-1/2 flex justify-center sm:justify-end items-center py-8 md:py-0'>
                <div className='flex flex-col justify-center items-start lg:w-[450px]'>
                    <SplitText
                        text="Hello!"
                        className="text-2xl font-semibold text-center text-[#ffbd39]"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />

                    <h1 className='text-[clamp(1.25rem,2vw+1rem,2.75rem)] text-white font-extrabold'>I'm <span className='text-[#ffbd39]'>Vivaan Saroj</span></h1>

                    <TextType
                        text={["Mern Stack Developer", "Ui Ux Designer", "Brand Identity Designer"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-[clamp(1.25rem,3vw,2.25rem)] font-bold text-blue-500"
                    />

                    <div className=' flex justify-center items-center gap-2.5 pt-2'>
                        <a 
                            href="https://wa.me/917800879801?text=Hello%20Vivaan%2C%20I%20saw%20your%20portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-black bg-[#ffbd39] p-2 md:p-4 md:px-7 rounded-4xl font-semibold'>Contact me</a>
                        <a
                            href="https://www.linkedin.com/in/vivaansaroj461"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:bg-[#ffbd39] p-2 hover:text-black md:p-4 md:px-7 border-[1px] border-amber-100 rounded-4xl font-semibold transition"
                        >
                            LinkedIn
                        </a>
                    </div>

                </div>
            </div>
            <div className='w-full flex justify-center items-center sm:w-1/2 py-4'>
                <img className='w-[clamp(300px,80%,450px)]' src="/images/PFP.png" alt="Profile_Img" />
            </div>
        </div>
    )
}




