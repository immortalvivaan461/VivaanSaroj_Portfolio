import React from 'react'
import Contactbtns from '../mini-Comp/Contactbtns'
import Question from '../mini-Comp/Question'

export default function ContactMe() {
  return (
    <div id="contact-me" data-aos="fade-up" className='flex flex-col justify-center items-center w-full py-6'>
      <div className='w-[90%] flex justify-center py-6'>
        <h1 className='text-white text-[clamp(2rem,4vw,3rem)] font-bold'>Contact me</h1>
      </div>

      <div className='w-[80%]'>
        <Contactbtns />
        <Question />
      </div>


    </div>
  )
}
