'use client'
import React, { useState, useEffect } from 'react'
import Trusting from '../components/trusting/Trusting'
import Footer from '../components/Footer/Footer'


function CompanyMain() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=4')
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .catch(err => console.error('Error fetching users', err))
  }, [])


  return (
    <div className="px-4 md:px-8 max-w-7xl mx-auto space-y-16 py-10">

      {/* Trusting Section */}
      <Trusting />

      {/* Who Are We Section */}
      <div className="text-center">
        <h2 className="text-4xl md:text-4xl font-bold ">Who Are We</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At Techling, we deliver innovative software solutions powered by AI, ML, and Gen AI, offering expertise in software development, IT consulting, and scalable services to help businesses achieve their goals with precision and efficiency.
        </p>
      </div>

      {/* professional aspect  */}

      <div className='flex items-center'>
        <img src="/about-us2.png" alt="" />

        <div className=''>
          <h2 className='text-4xl mb-5 text-[#002966]'>We deal with the professional aspects of iT services</h2>
          <p className='text-lg'>At Techling, we are dedicated to deliver innovative software solutions that help businesses to thrive in today’s fast-paced digital world. By combining deep expertise in technology, AI, and machine learning, we develop innovative applications tailored to the unique needs of industries like healthcare and mobility.</p>
          <p className='text-lg mt-3'> Our commitment to quality, security, and compliance ensures that every solution drives operational efficiency while meeting the highest industry standards. We’re not just a service provider—we’re a trusted partner, committed to turning your vision into reality and fueling growth and innovation every step of the way.</p>
        </div>
      </div>

      <div className="w-full max-w-7xl px-4 mt-20 md:px-8 space-y-20 bg-white">

        {/* Mission Section */}
        <div className="flex justify-between gap-8 items-center flex-nowrap">
          {/* Heading */}
          <div className="w-1/3 flex flex-col gap-2 text-4xl font-bold text-[#1447E6]">
            <h2>Our Mission &</h2>
            <h2>Our Vision</h2>
          </div>

          {/* Mission Box */}
          <div className="w-2/3 flex bg-[#F2F2F2] rounded-b-[6rem] overflow-hidden h-64 shadow-lg">

            {/* Image */}
            <img
              src="/36925-1.jpg"
              alt="Mission"
              className="w-64 h-full object-cover"
            />

            {/* Separator */}
            <div className="w-8 bg-white"></div>

            {/* Text Content */}
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-[#1447E6]">Mission</h2>
              <p className="text-gray-700 text-base leading-relaxed mt-3">
                To empower 100 businesses over the next 5 years by using the latest technology to enhance their efficiency, innovation, and competitive edge.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-7xl px-4 md:px-8">
          <div className="w-full flex bg-[#F2F2F2] rounded-b-[6rem] overflow-hidden h-64 shadow-lg">

            {/* Image */}
            <img
              src="/our-vision.jpg"
              alt="Vision"
              className="w-64 h-full object-cover"
            />

            {/* Separator */}
            <div className="w-8 bg-white"></div>

            {/* Text Content */}
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-[#1447E6]">Vision</h2>
              <p className="text-gray-700 text-base leading-relaxed mt-3">
                To be the most trusted and impactful tech partner for startups and businesses across Africa, championing digital transformation at every stage.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto px-4 my-16">
        <h2 className="text-4xl font-bold mb-4">Core Values</h2>
        <p className="text-lg text-gray-700 mb-8">
          Discover the principles that drive our innovation, guide our decisions, and shape our commitment to excellence.
        </p>
        <img
          src="/core-value.png"
          alt="Core Values"
          className="mx-auto "
        />
      </div>

      
    </div>
  )
}

export default CompanyMain
