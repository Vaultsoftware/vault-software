'use client'
import React from 'react'
import Trusting from '@/app/components/trusting/Trusting'
import Link from 'next/link'
import { BrainCircuit, CircleUserRound, Globe, Database, Braces, Cloud, Layers, Brain, BarChart3, Smartphone, Wrench } from 'lucide-react'

// Enhanced Technology Stack Component
function TechStack({ title, description, techCategories }) {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          {description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 ml-4">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="mr-2">🚀</span>
            Powering the future of development
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryMain({ 
  industry, 
  mainTitle, 
  services = [], 
  processTitle = "Our Four-Step Roadmap", 
  processImage = "/industryOne (2).jpg",
  processImageAlt = "Industry process illustration",
  techStackTitle,
  techStackDescription,
  techCategories = []
}) {
  return (
    <div>
      <Trusting />

      <section className='bg-black w-full text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 md:px-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            {mainTitle}
          </h1>

          <div className='grid md:grid-cols-2 gap-8'>
            {services.map((service, index) => (
              <div key={index} className='bg-[#1A1A1A] p-6 rounded-lg hover:bg-gray-700 transition-colors'>
                <service.icon className='w-8 h-8 text-blue-400 mb-4' />
                <h2 className='text-xl font-semibold mb-4 text-blue-400'>
                  {service.title}
                </h2>
                <p className='text-gray-300 mb-4 leading-relaxed'>
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className='inline-block text-blue-400 hover:text-blue-300 font-medium transition-colors border-b border-blue-400 hover:border-blue-300'
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className='flex flex-col lg:flex-row gap-8 items-center max-w-7xl mx-auto px-4 md:px-8 mt-5 mb-5'>
        <div className='flex-1'>
          {/* <h2 className='text-4xl font-semibold'>{processTitle}<br />Better {industry}</h2> */}
          <img
            src={processImage}
            alt={processImageAlt}
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>

        <div className='flex-1 space-y-6'>
          <div className='p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500'>
            <p className='text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2'>Step One</p>
            <h2 className='text-xl font-bold text-gray-900 mb-3'>Contact Us</h2>
            <p className='text-gray-600 leading-relaxed'>
              Reach out to discuss your project or get expert guidance that fits your needs.
            </p>
          </div>

          <div className='p-6 bg-white rounded-lg shadow-md border-l-4 border-green-500'>
            <p className='text-sm font-semibold text-green-600 uppercase tracking-wide mb-2'>Step Two</p>
            <h2 className='text-xl font-bold text-gray-900 mb-3'>Get a Free Consultation</h2>
            <p className='text-gray-600 leading-relaxed'>
              Book a free consultation and discover the best solutions for your project goals.
            </p>
          </div>

          <div className='p-6 bg-white rounded-lg shadow-md border-l-4 border-yellow-500'>
            <p className='text-sm font-semibold text-yellow-600 uppercase tracking-wide mb-2'>Step Three</p>
            <h2 className='text-xl font-bold text-gray-900 mb-3'>Get a Cost Estimate</h2>
            <p className='text-gray-600 leading-relaxed'>
              Get a personalized cost estimate to see what it takes to bring your project to life.
            </p>
          </div>

          <div className='p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-500'>
            <p className='text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2'>Step Four</p>
            <h2 className='text-xl font-bold text-gray-900 mb-3'>Project Kickoff</h2>
            <p className='text-gray-600 leading-relaxed'>
              Start your project by finalizing details and timelines for a smooth start.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack section */}
      {techCategories.length > 0 && (
        <TechStack 
          title={techStackTitle} 
          description={techStackDescription}
          techCategories={techCategories}
        />
      )}
    </div>
  )
}

export default IndustryMain