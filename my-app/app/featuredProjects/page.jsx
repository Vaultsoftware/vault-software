'use client'
import React from 'react'
import Link from 'next/link'

function Page() {
    return (
        <div className='bg-black py-16 pt-24'>
            <div className='max-w-7xl mx-auto px-4 md:px-8'>
                <h1 className='font-bold text-4xl text-white mb-10 text-center md:text-left'>
                    Featured Projects
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {/* Big image with centered overlay text */}
                    <div className='md:col-span-2 relative overflow-hidden'>
                        <img src="/FITCENTIVES-.jpg" alt="" className='w-[full] h-full object-cover' />

                        {/* Text overlay - now vertically centered */}
                        <div className='absolute inset-0 bg-black/50 flex flex-col justify-center p-8'>
                            <h2 className='text-white text-3xl font-bold mb-3'>
                                Empowering Employee Wellness & Engagement with Smart Solutions
                            </h2>
                            <p className='text-gray-300 mb-6 max-w-xl'>
                                We developed a dynamic corporate wellness platform designed to boost employee health, motivation, and performance through customized coaching, progress monitoring, and engaging reward systems.
                            </p>

                            {/* Styled button */}
                            {/* <Link
                                href="#"
                                className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 ease-in-out"
                            >
                                See More
                            </Link> */}

                        </div>
                    </div>

                    {/* Two smaller images side by side */}
                    <div className='flex flex-row gap-6'>
                        <img src="/featuredprokectsBig (2).jpg" alt="" className='w-1/2 object-cover' />
                        <img src="/featuredprokectsBig (2).jpg" alt="" className='w-1/2 object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
