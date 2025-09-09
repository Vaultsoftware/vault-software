import React from 'react'
import Link from 'next/link'

function Company() {
    return (
        <section
            className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: "url('/industryBanner.jpg')",
                backgroundPosition: "center top",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/80 z-0"></div>

            <div className="z-10 w-full max-w-7xl px-4 md:px-8  text-white space-y-6 mt-15">

                <p className='text-lg'>The Leading AI-Powered Tech Company</p>

                <h1 className="text-6xl font-bold">
                    Your Trusted Partner for <span className="text-[#1371FF]">AI- <br />Powered </span>
                    Web & Mobile Solutions
                </h1>

                <p className="max-w-3xl text-lg mt-5 font-semibold">
                    Boost your progress with top engineers and agile experts.
                </p>

                <div className="flex gap-4 mt-5">
                    <Link
                        href="/form"
                        className="inline-block bg-[#1447E6] text-lg text-white px-10 py-3 rounded-md hover:bg-blue-800 transition"
                    >
                        Schedule a call
                    </Link>

                    <Link
                        href="/"
                        className="inline-block bg-transparent border border-white text-lg text-white px-10 py-3 rounded-md hover:bg-white hover:text-black transition"
                    >
                        Discover
                    </Link>

                </div>

            </div>


        </section>
    )
}

export default Company
