import React from 'react';
import { ArrowRight, Code, Database, Settings, Zap, Building } from 'lucide-react';
import Link from 'next/link';

function Page() {
    return (
        <div
            className="relative bg-cover bg-center min-h-screen text-white"
            style={{ backgroundImage: "url('/bg.png')" }}
        >

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                {/* Enhanced Header */}
                <div className="text-left mb-16">
                    <h1 className="text-4xl md:text-4xl font-semibold mb-6 text-white leading-tight">
                        Custom Software Development Services
                    </h1>

                </div>

                {/* Enhanced Side-by-side section */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    {/* Left Side - Enhanced Links */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="group">
                            <Link
                                href="/softwareproduct"
                                className="flex items-center gap-4 bg-[#005AE0] p-8 font-medium text-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-blue-500/30"
                            >
                                <span className="flex-1">Software Product Development</span>
                            </Link>

                        </div>

                        <div className="group">
                            <Link
                                href="/softwareintegration"
                                className="flex items-center gap-4 bg-[#005AE0] p-8 font-medium text-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-blue-500/30"
                            >
                                <span className="flex-1">Software Integration Services</span>
                            </Link>

                        </div>

                        <div className="group">
                            <Link
                                href="/crm"
                                className="flex items-center gap-4 bg-[#005AE0] p-8 font-medium text-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-blue-500/30"
                            >
                                <span className="flex-1">CRM Development</span>
                            </Link>

                        </div>

                        <div className="group">
                            <Link
                                href="/apidevelopment"
                                className="flex items-center gap-4 bg-[#005AE0] p-8 font-medium text-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-blue-500/30"
                            >
                                <span className="flex-1">API Development Services </span>
                            </Link>

                        </div>

                        <div className="group">
                            <Link
                                href="/enterprisesoftware"
                                className="flex items-center gap-4 bg-[#005AE0] p-8 font-medium text-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-blue-500/30"
                            >
                                <span className="flex-1">Enterprise Software</span>
                            </Link>

                        </div>
                    </div>

                    {/* Right Side - Enhanced Content */}
                    <div className="lg:col-span-3">
                        <div className="">
                            <div className="mb-8 mt-40">
                                <h2 className="text-4xl font-light text-white">
                                    Software Product Development
                                </h2>

                                <p className="text-base font-lg text-white mt-2 leading-relaxed max-w-3xl">
                                    Transform ideas into market-leading products with end-to-end development services, from research and design to deployment and maintenance, using advanced technologies like Python, React, and Ruby on Rails.
                                </p>
                            </div>


                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/form"
                                        className="group flex items-center justify-center gap-3 bg-[#005AE0] px-8 py-4 font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                                    >
                                        Tell Us About Your Project
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;