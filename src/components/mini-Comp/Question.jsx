import React from 'react'
import MsgForm from './MsgForm'

export default function Question() {
  return (
    <div className='w-full text-white flex flex-col justify-center items-center py-10 font-semibold'>
      <div className='border-b-2 border-amber-400'>
              <p className='text-[clamp(1.5rem,3vw,2.5rem)]'>Have a Question?</p>
      </div>
      <div>
        <MsgForm />
      </div>
    </div>
  )
}
