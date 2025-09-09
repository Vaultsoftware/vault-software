import React from 'react';

export default function OurClients() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto  px-6 ">
        {/* Header Section */}
        <div className="text-left mb-16">
          <h1 className="text-4xl font-bold text-black mb-6 tracking-tight">
            Our <span className="text-black">Clients</span>
          </h1>
          <p className="text-black text-xl max-w-4xl text-left leading-relaxed">
            Our clients benefit from the extensive experience we have gained in building software products for startups, scaleups, SMEs and enterprises. We build for scalability like an enterprise yet maintain the speed of a startup.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Startups and Scaleups */}
          <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black">Startups and Scaleups</h2>
            </div>
            <p className="text-black mb-8 flex-grow leading-relaxed">
              We collaborate with early-stage startups and fast-growing organizations to bring their visions to life and accelerate growth.
            </p>
            
            {/* Divider Line */}
            <div className="w-full h-px bg-gray-200 mb-6"></div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black font-medium">Product Prototyping</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black font-medium">MVP development</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black font-medium">Product rebuild</span>
              </div>
            </div>
          </div>

          {/* SMEs */}
          <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col border border-gray-100 hover:border-green-200 hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black">SMEs</h2>
            </div>
            <p className="text-black mb-8 flex-grow leading-relaxed">
              We help established businesses create and enhance products to improve customer experiences or streamline internal operations.
            </p>
            
            {/* Divider Line */}
            <div className="w-full h-px bg-gray-200 mb-6"></div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black font-medium">Greenfield development</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black font-medium">Product enhancements</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black font-medium">Process automation</span>
              </div>
            </div>
          </div>

          {/* Large Enterprises */}
          <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col border border-gray-100 hover:border-purple-200 hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black">Large Enterprises</h2>
            </div>
            <p className="text-black mb-8 flex-grow leading-relaxed">
              We work with enterprises to design and develop software products that increase market share.
            </p>
            
            {/* Divider Line */}
            <div className="w-full h-px bg-gray-200 mb-6"></div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black font-medium">R&D</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black font-medium">Custom software design</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black font-medium">Custom software development using Tailwind and Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}