import React from 'react'
import SkillsBar from '../mini-Comp/SkillsBar'

export default function About() {
    return (
        <div id='about' data-aos="fade-up" className='flex flex-col justify-center items-center sm:h-[450px] md:h-[750px]'>
            <div className='flex w-[80%]'>
                <div className='flex justify-center flex-col'>
                    <div className='pt-6 pb-4 flex justify-center items-center'>
                        <h1 className='text-[clamp(1.75rem,4vw,4rem)] text-white font-extrabold border-b-amber-400 border-b-2'>About Me</h1>
                    </div>

                    <div className='flex flex-col-reverse md:flex-row gap-5'>
                        <SkillsBar />
                        <div className='text-gray-300 text-[clamp(.75rem,2vw,1rem)] text-center md:text-left'>
                            <p>Hi, I’m Vivaan Saroj, a passionate Full Stack Developer (MERN) and Business Identity Designer with a knack for building seamless digital experiences from concept to deployment.</p>
                            <p>I specialize in developing scalable web applications using MongoDB, Express.js, React, and Node.js, along with modern frontend frameworks and backend integrations. From designing user-friendly interfaces to managing robust server-side logic, I enjoy crafting solutions that are efficient, responsive, and business-focused.</p>
                            <p>Alongside development, I also help businesses establish a strong brand identity through creative UI/UX design, branding, and digital strategy. My unique mix of technical expertise and design thinking allows me to deliver solutions that are not just functional—but also visually engaging and impactful.</p>
                            <p className='text-gray-300'>
                                <span className='font-bold py-2 underline'> Projects I’ve worked on:</span>
                                <br />
                                <span className='font-semibold'>🍽️ Restaurant Management App</span> – Online table booking & membership booking system.
                                <br />
                                <span className='font-semibold'>📄 Multiple Landing Pages</span> – Clean, conversion-focused landing pages for businesses.
                                <br />
                                <span className='font-semibold'>🛒 E-Kart Website</span> – React-based e-commerce platform for a vegetable company.
                                <br />
                                <span className='font-semibold'>🔐 Secure Secret Sharing Platform</span> – Web app for safely sharing sensitive information.
                                <br />
                                <span className='font-semibold'>🌐 Portfolio Development</span> – Creating modern, responsive portfolios for individuals and businesses.
                            </p>
                        </div>

                    </div>

                    <a
                        href="https://www.linkedin.com/in/vivaansaroj461"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-white border-2 rounded-2xl font-semibold p-0.5 md:pt-1 mt-2 hover:bg-[#ffbd39] hover:text-black text-center'
                    >
                        Hire me!
                    </a>
                </div>

            </div>
        </div>
    )
}
