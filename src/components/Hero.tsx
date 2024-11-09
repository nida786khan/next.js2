import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div
      id='hero'
      className='min-h-screen bg-no-repeat bg-left lg:bg-left bg-cover'
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "45%", backgroundPosition: "left 100px top 100px"
      }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        {/* Empty left side for image background */}
        <div></div>

        {/* Right side content */}
        <div className='flex flex-col justify-between items-end px-20'>
          <h1 className='text-[100px] sm:text-[130px] font-bold leading-tight'>
            <p  data-aos="fade-left">I am</p>
            <p data-aos="fade-left" >Nida Khan</p>
            <p></p>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
