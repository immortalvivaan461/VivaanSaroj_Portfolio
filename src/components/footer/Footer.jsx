import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div data-aos="fade-up" className='flex justify-center items-center flex-col'>
            <div className="flex-shrink-0 flex justify-center items-center flex-col border-b-2 border-[#ffbd39] w-[80%]">
                <h2
                    className="text-[clamp(1.25rem,2vw+1rem,1.75rem)] font-[1000] text-white">
                    Vivaan Saroj<span className="text-[#ffbd39]">.</span>
                </h2>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=iamvivaan461@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Vivaan%2C%20I%20saw%20your%20portfolio..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-3 rounded-xl"
                >
                    📧 iamvivaan461@gmail.com
                </a>
            </div>
            <div className='text-white font-semibold flex flex-col justify-between items-center w-[80%] lg:flex-row'>
                <div className='my-3'><p className='text-center'>@2025 Vivaan Saroj. Built with ❤️ and MERN. All rights reserved.</p></div>
                
                <div className='flex gap-5 my-3'>
                    <a href="https://github.com/immortalvivaan461"
                    target="_blank"
                    rel="noopener noreferrer"
                    >GitHub</a>

                    <a href="https://www.linkedin.com/in/vivaansaroj461"
                        target="_blank"
                        rel="noopener noreferrer"
                    >LinkedIn</a>

                    <a href="https://www.instagram.com/mr_vivaan461/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Instagram</a>
                </div>
            </div>
        </div>
    )
}
