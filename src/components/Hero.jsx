import React from 'react'
import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='w-full flex justify-between items-center p-4'>
        <img src={logo} alt='logo' className='w-28 object-contain' />

        <div className='flex justify-between items-center gap-4'>
          <button type='button' onClick={() => window.open('https//www.github.com/theonlyhennygod')} className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>GitHub</button>

          <button type='button' onClick={() => window.open('https//www.linkedin.com/in/argenisdelarosa')} className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>LinkedIn</button>
        </div>
      </nav>

      <h1 className='text-6xl font-bold text-center text-gray-800'>Welcome to our website</h1>

    </header>
  )
}

export default Hero