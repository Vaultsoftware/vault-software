'use client'
import React from 'react'
import Link from 'next/link'

function Page() {
    const projects = [
        {
            image: "/bg7.jpg",
            title: "Smart Banking & Financial Solutions",
            description: "Revolutionary fintech platform enabling seamless digital banking, secure transactions, and intelligent financial management for global enterprises and individuals.",
            accent: "from-blue-600 to-purple-600"
        },
        {
            image: "/bg6.jpg", 
            title: "Next-Gen Learning Management System",
            description: "Comprehensive educational platform transforming how institutions deliver content, track progress, and enhance student engagement through interactive learning experiences.",
            accent: "from-emerald-600 to-teal-600"
        },
        {
            image: "/bg.jpg",
            title: "Enterprise E-commerce Solutions",
            description: "Scalable e-commerce ecosystem powering global retail operations with advanced inventory management, payment processing, and customer experience optimization.",
            accent: "from-orange-600 to-red-600"
        }
    ]

    return (
        <div className='bg-black py-16 pt-24 relative overflow-hidden'>
            {/* CSS for custom animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .shimmer {
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    background-size: 200% 100%;
                    animation: shimmer 2s infinite;
                }
            `}</style>

            {/* Background decorative elements with float animation */}
            <div className='absolute inset-0 opacity-20'>
                <div className='absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl animate-float'></div>
                <div className='absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-3xl animate-float' style={{animationDelay: '1s'}}></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-3xl animate-float' style={{animationDelay: '2s'}}></div>
            </div>

            <div className='max-w-7xl mx-auto px-4 md:px-8 relative z-10'>
                {/* Enhanced Header */}
                <div className='text-center mb-16'>
                    
                    <h1 className='font-bold text-4xl md:text-4xl text-white mb-6 leading-tight'>
                        Featured 
                        <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent'> Projects</span>
                    </h1>
                    <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto'></div>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className='group relative overflow-hidden rounded-2xl h-96 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up'
                            style={{animationDelay: `${index * 200}ms`}}
                        >
                            {/* Glowing border effect with shimmer */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.accent} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200 shimmer`}></div>
                            
                            <div className='relative bg-gray-900 rounded-2xl h-full overflow-hidden'>
                                {/* Background image with subtle animations */}
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className='w-full h-full object-cover scale-110 transition-all duration-700 group-hover:scale-125' 
                                />
                                
                                {/* Enhanced overlay with animated gradient */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30'></div>
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20 group-hover:opacity-30 transition-all duration-500`}></div>
                                
                                {/* Floating particles effect with more animations */}
                                <div className='absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500'>
                                    <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce'></div>
                                    <div className='absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-300'></div>
                                    <div className='absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-700'></div>
                                    <div className='absolute top-1/2 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-spin delay-1000'></div>
                                    <div className='absolute bottom-1/4 right-1/5 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-500'></div>
                                </div>
                                
                                {/* Enhanced text overlay */}
                                <div className='absolute inset-0 flex flex-col justify-end p-8 transform transition-all duration-500 group-hover:translate-y-0'>
                                    {/* Category indicator */}
                                    <div className='mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100'>
                                        <div className={`inline-block w-12 h-1 bg-gradient-to-r ${project.accent} rounded-full mb-2`}></div>
                                    </div>
                                    
                                    <h2 className='text-white text-2xl font-bold mb-4 transform transition-all duration-500 group-hover:text-3xl'>
                                        {project.title}
                                    </h2>
                                    
                                    {/* Description with staggered animation */}
                                    <p className='text-gray-300 text-sm leading-relaxed transform transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2'>
                                        {project.description}
                                    </p>
                                    
                                    {/* Animated bottom accent */}
                                    <div className='mt-6 overflow-hidden'>
                                        <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${project.accent} transition-all duration-700 ease-out`}></div>
                                    </div>
                                </div>
                                
                                {/* Corner accent designs */}
                                <div className='absolute top-0 right-0 w-20 h-20 opacity-30 group-hover:opacity-60 transition-opacity duration-500'>
                                    <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gradient-to-r ${project.accent.replace('from-', 'border-').replace(' to-', ' ')}`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Bottom decorative line */}
                <div className='mt-20 flex justify-center'>
                    <div className='w-64 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent'></div>
                </div>
            </div>
        </div>
    )
}

export default Page