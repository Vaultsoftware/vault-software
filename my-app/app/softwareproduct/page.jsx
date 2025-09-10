import React from 'react';
import Link from 'next/link';

const SoftwareProductDevelopment = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-black to-gray-900 min-h-screen flex items-center justify-center px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Software Product
                        <span className="text-blue-500"> Development</span>
                    </h1>

                    <p className="text-xl md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Transforming ideas into robust fintech, ecommerce, and banking solutions that scale with your business
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/form" className="bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity">
                            Start Your Project
                        </Link>

                        <Link href="/casestudies" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold text-white hover:bg-gray-900 transition-colors">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Development Services</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            End-to-end software development tailored for financial technology, ecommerce platforms, and banking solutions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                                    </svg>
                                ),
                                title: "FinTech Solutions",
                                description: "Payment processing, digital wallets, cryptocurrency platforms, and regulatory compliance systems"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                    </svg>
                                ),
                                title: "E-commerce Platforms",
                                description: "Scalable online stores, inventory management, payment gateways, and customer experience optimization"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                    </svg>
                                ),
                                title: "Banking Systems",
                                description: "Core banking software, mobile banking apps, loan management, and risk assessment tools"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                ),
                                title: "Data Analytics",
                                description: "Business intelligence, fraud detection, market analysis, and predictive modeling solutions"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                ),
                                title: "Security & Compliance",
                                description: "End-to-end encryption, PCI compliance, GDPR adherence, and cybersecurity infrastructure"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                ),
                                title: "API Development",
                                description: "RESTful APIs, GraphQL endpoints, third-party integrations, and microservices architecture"
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-black p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors group">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-6 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Development Process</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            A proven methodology that ensures quality, security, and scalability in every project
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Discovery & Planning",
                                description: "Understanding requirements, market analysis, and technical architecture planning"
                            },
                            {
                                step: "2",
                                title: "Design & Prototyping",
                                description: "UI/UX design, wireframing, and creating interactive prototypes for validation"
                            },
                            {
                                step: "3",
                                title: "Development & Testing",
                                description: "Agile development cycles with continuous integration and comprehensive testing"
                            },
                            {
                                step: "4",
                                title: "Deployment & Support",
                                description: "Production deployment, monitoring, maintenance, and ongoing technical support"
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                                    {process.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                                <p className="text-gray-300">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Technologies We Use</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Cutting-edge technologies and frameworks to build scalable, secure, and high-performance applications
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {[
                            "React", "Node.js", "Python", "PostgreSQL", "Php", "Next",
                            "Django", "GraphQL", "TypeScript", "MongoDB", "Redis", "Stripe"
                        ].map((tech, index) => (
                            <div key={index} className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors text-center">
                                <span className="text-lg font-medium">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Next Product?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Let's discuss your project requirements and create a solution that drives your business forward
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/form" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Get Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SoftwareProductDevelopment;