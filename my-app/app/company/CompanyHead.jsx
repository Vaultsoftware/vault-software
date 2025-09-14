import React from 'react'
import Link from 'next/link'

function Company() {
  return (
    <section
      className="relative h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/company-banner.jpg')",
        backgroundPosition: "center top",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="z-10 w-full max-w-7xl px-4 md:px-8  text-white space-y-6 mt-15">
        <h1 className="text-5xl font-bold">
          About <span className="text-[#1371FF]">Vault</span> (Private) Ltd
        </h1>
        <p className="max-w-3xl text-lg mt-5">
          We empower businesses with advanced AI solutions and the latest tech,
          shaping a future-ready path through innovative software development
          and strategic IT expertise.
        </p>
        <div>
          <Link
            href="/form"
            className="mt-5 inline-block bg-[#1447E6] text-lg text-white px-10 py-3 rounded-md hover:bg-blue-800 transition"
          >
            Schedule a call
          </Link>
        </div>
      </div>

     
    </section>
  )
}

export default Company
