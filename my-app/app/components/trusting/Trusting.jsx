'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

function Trusting() {
  const logos = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
    '/logo6.png',
    '/logo7.png',
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
    '/logo6.png',
    '/logo7.png',
  ]

  return (
    <div>
      <h2 className='min-h-5 font-bold text-4xl text-black m-5 p-5 text-center'>
        Trusted By Leading Businesses Worldwide
      </h2>

      <div className="w-full overflow-hidden px-10 py-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          className="trusted-swiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={150}
                  height={100}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Trusting
