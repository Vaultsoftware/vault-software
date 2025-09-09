import React from 'react'

function Page() {
    return (
        <div className="bg-black text-white w-full py-20 px-4 md:px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 text-white">
                    Industries We Serve
                </h2>
                {/* <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
                    Transforming businesses across industries with cutting-edge AI solutions
                </p> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Education */}
                    <div className="group bg-[#0E0E0E] text-white shadow-lg hover:shadow-xl hover:bg-blue-600 p-6 transition-all duration-300 ease-in-out">
                        <div className="mb-4">
                            <img src="/city-committed-education-collage-concept_23-2150062214.jpg" alt="" className="w-full h-48 object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Education</h3>
                            <p className="text-gray-300 leading-relaxed flex-1 mb-6">
                                Transform learning with AI-powered e-learning, adaptive assessments, and personalized experiences that enhance engagement and outcomes. Create intelligent tutoring systems that adapt to individual learning styles and provide real-time feedback.
                            </p>
                            <div className="flex items-center text-blue-400">
                                <span className="text-sm font-medium">Learn more</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Real Estate */}
                    <div className="group bg-[#0E0E0E] text-white shadow-lg hover:shadow-xl hover:bg-blue-600 p-6 transition-all duration-300 ease-in-out">
                        <div className="mb-4">
                            <img src="/construction-concept-with-engineering-tools_1150-17809.jpg" alt="" className="w-full h-48 object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3 text-green-400">Real Estate</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Deliver smart solutions with AI-powered property valuation, predictive insights, and automation tools tailored for residential and commercial sectors.
                            </p>
                            <div className="flex items-center text-green-400">
                                <span className="text-sm font-medium">Learn more</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Automobile */}
                    <div className="group bg-[#0E0E0E] text-white shadow-lg hover:shadow-xl hover:bg-blue-600 p-6 transition-all duration-300 ease-in-out">
                        <div className="mb-4">
                            <img src="/auto-mechanic-working-garage-repair-service_146671-19601.jpg" alt="" className="w-full h-48 object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3 text-red-400">Automobile</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Integrate smart tech and AI into your automotive systems, from predictive maintenance to autonomous driving innovations.
                            </p>
                            <div className="flex items-center text-red-400">
                                <span className="text-sm font-medium">Learn more</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Fintech */}
                    <div className="group bg-[#0E0E0E] text-white shadow-lg hover:shadow-xl hover:bg-blue-600 p-6 transition-all duration-300 ease-in-out">
                        <div className="mb-4">
                            <img src="/phone-with-map-colorful-icons_1134-406.jpg" alt="" className="w-full h-48 object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3 text-yellow-400">Fintech</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Build secure fintech platforms with AI-driven fraud detection, smart investments, and seamless digital payment experiences.
                            </p>
                            <div className="flex items-center text-yellow-400">
                                <span className="text-sm font-medium">Learn more</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* SaaS */}
                    <div className="group bg-[#0E0E0E] text-white shadow-lg hover:shadow-xl hover:bg-blue-600 p-6 transition-all duration-300 ease-in-out">
                        <div className="mb-4">
                            <img src="/saas-concept-collage_23-2149399290.jpg" alt="" className="w-full h-48 object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3 text-purple-400">SaaS</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Scale your SaaS product with robust, secure, and AI-optimized features that adapt and grow with your business goals.
                            </p>
                            <div className="flex items-center text-purple-400">
                                <span className="text-sm font-medium">Learn more</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Logistics */}
                    <div className="group bg-[#0E0E0E] text-white shadow-lg hover:shadow-xl hover:bg-blue-600 p-6 transition-all duration-300 ease-in-out">
                        <div className="mb-4">
                            <img src="/workers-carrying-boxes-relocating-items-large-warehouse-center_342744-1564.jpg" alt="" className="w-full h-48 object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3 text-orange-400">Logistics</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Optimize delivery systems with AI-powered route planning, real-time tracking, and supply chain automation.
                            </p>
                            <div className="flex items-center text-orange-400">
                                <span className="text-sm font-medium">Learn more</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Healthcare */}
                    <div className="group bg-[#0E0E0E] text-white shadow-lg hover:shadow-xl hover:bg-blue-600 p-6 transition-all duration-300 ease-in-out">
                        <div className="mb-4">
                            <img src="/world-diabetes-day-docter-holding-stethoscope-red-heart-wooden-shape_1150-26694.jpg" alt="" className="w-full h-48 object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3 text-cyan-400">Healthcare</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Empower care with AI for diagnostics, patient monitoring, and predictive health analytics that improve outcomes.
                            </p>
                            <div className="flex items-center text-cyan-400">
                                <span className="text-sm font-medium">Learn more</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Manufacturing */}
                    <div className="group bg-[#0E0E0E] text-white shadow-lg hover:shadow-xl hover:bg-blue-600 p-6 transition-all duration-300 ease-in-out">
                        <div className="mb-4">
                            <img src="/high-angle-woman-playing-videogame-computer_23-2149349986.jpg" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3 text-indigo-400">Esports & Gaming </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We create immersive gaming experiences with AI-enhanced mechanics, real-time analytics, and cross-platform development. Whether mobile, console, or cloud gaming, we bring your vision to life with cutting-edge technology.
                            </p>
                            <div className="flex items-center text-indigo-400">
                                <span className="text-sm font-medium">Learn more</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* eCommerce */}
                    <div className="group bg-[#0E0E0E] text-white shadow-lg hover:shadow-xl hover:bg-blue-600 p-6 transition-all duration-300 ease-in-out">
                        <div className="mb-4">
                            <img src="/laptop-shopping-bags-online-shopping-concept_1423-189.jpg" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3 text-pink-400">Retail & E-commerce</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Boost your online store with AI-driven personalization, predictive analytics, and seamless payment integrations. From custom platforms to mobile commerce, we help retailers increase sales and improve customer experiences.
                            </p>
                            <div className="flex items-center text-pink-400">
                                <span className="text-sm font-medium">Learn more</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page