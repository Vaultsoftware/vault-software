import Link from 'next/link';
import React from 'react';

const SoftwareIntegrationServices = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-black to-gray-900 min-h-screen flex items-center justify-center px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Software Integration
                        <span className="text-blue-500"> Services</span>
                    </h1>

                    <p className="text-xl md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Connect your systems, streamline workflows, and unlock the full potential of your technology ecosystem
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/form" className="bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity">
                            Start Integration Project
                        </Link>

                        <Link href="/form" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold text-white hover:bg-gray-900 transition-colors">
                            Integration Assessment
                        </Link>
                    </div>
                </div>
            </section>

            {/* Integration Types Section */}
            <section className="py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Integration Solutions</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Comprehensive integration services to connect your fintech, ecommerce, and banking systems
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                                    </svg>
                                ),
                                title: "API Integration",
                                description: "Connect third-party services, payment gateways, and external platforms through robust API integrations"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4"></path>
                                    </svg>
                                ),
                                title: "Database Integration",
                                description: "Synchronize data across multiple databases, data warehouses, and cloud storage systems"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                    </svg>
                                ),
                                title: "Legacy System Integration",
                                description: "Modernize and connect legacy banking and financial systems with new digital platforms"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                                    </svg>
                                ),
                                title: "Cloud Integration",
                                description: "Seamless migration and integration with AWS, Azure, Google Cloud, and hybrid cloud environments"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                ),
                                title: "Real-time Data Sync",
                                description: "Live data synchronization, event streaming, and real-time analytics across all systems"
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                ),
                                title: "Security & Compliance",
                                description: "Secure data transfer, encryption, and compliance with financial regulations and standards"
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

            {/* Integration Platforms Section */}
            <section className="py-20 px-6 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Supported Platforms</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            We integrate with leading fintech, banking, and ecommerce platforms
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Financial & Banking</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Stripe", "PayPal", "Square", "Plaid",
                                    "Yodlee", "Open Banking", "SWIFT", "ACH Networks"
                                ].map((platform, index) => (
                                    <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800 text-center hover:border-blue-500/50 transition-colors">
                                        <span className="text-sm font-medium">{platform}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-8 text-blue-400">E-commerce & CRM</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Shopify", "WooCommerce", "Magento", "BigCommerce",
                                    "Salesforce", "HubSpot", "Mailchimp", "Zendesk"
                                ].map((platform, index) => (
                                    <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800 text-center hover:border-blue-500/50 transition-colors">
                                        <span className="text-sm font-medium">{platform}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Integration Benefits</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Transform your business operations with seamless system integration
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Increased Efficiency",
                                description: "Automate workflows and eliminate manual data entry across systems",
                                metric: "70% faster"
                            },
                            {
                                title: "Cost Reduction",
                                description: "Reduce operational costs through automated processes and data synchronization",
                                metric: "40% savings"
                            },
                            {
                                title: "Data Accuracy",
                                description: "Ensure consistent, accurate data across all integrated platforms",
                                metric: "99.9% accuracy"
                            },
                            {
                                title: "Scalability",
                                description: "Easily scale operations as your business grows with flexible integrations",
                                metric: "Unlimited scale"
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-black p-6 rounded-xl border border-gray-800 mb-4">
                                    <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Process Section */}
            <section className="py-20 px-6 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Integration Process</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            A systematic approach to ensure successful integration with minimal disruption
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Assessment",
                                description: "Analyze current systems and integration requirements"
                            },
                            {
                                step: "2",
                                title: "Planning",
                                description: "Design integration architecture and implementation roadmap"
                            },
                            {
                                step: "3",
                                title: "Development",
                                description: "Build custom connectors and integration middleware"
                            },
                            {
                                step: "4",
                                title: "Testing",
                                description: "Comprehensive testing in staging environment"
                            },
                            {
                                step: "5",
                                title: "Deployment",
                                description: "Go-live with monitoring and ongoing support"
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                                    {process.step}
                                </div>
                                <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                                <p className="text-gray-300 text-sm">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Common Integration Scenarios</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Real-world integration solutions for various business needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "E-commerce Payment Integration",
                                description: "Connect your online store with multiple payment processors, accounting systems, and inventory management platforms for seamless order processing.",
                                features: ["Multi-gateway support", "Real-time inventory sync", "Automated accounting", "Fraud detection"]
                            },
                            {
                                title: "Banking System Modernization",
                                description: "Integrate legacy core banking systems with modern digital platforms, mobile apps, and regulatory reporting systems.",
                                features: ["Legacy system connectivity", "Regulatory compliance", "Mobile banking APIs", "Real-time reporting"]
                            },
                            {
                                title: "FinTech Data Aggregation",
                                description: "Combine data from multiple financial institutions, create unified customer views, and enable comprehensive financial analytics.",
                                features: ["Multi-bank connectivity", "Data normalization", "Real-time aggregation", "Risk assessment"]
                            },
                            {
                                title: "CRM & Marketing Automation",
                                description: "Integrate customer relationship management systems with marketing platforms, payment systems, and customer support tools.",
                                features: ["Customer journey tracking", "Automated campaigns", "Support ticket integration", "Analytics dashboard"]
                            }
                        ].map((useCase, index) => (
                            <div key={index} className="bg-black p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{useCase.title}</h3>
                                <p className="text-gray-300 mb-6">{useCase.description}</p>
                                <ul className="space-y-2">
                                    {useCase.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Integrate Your Systems?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Let's connect your technology ecosystem and unlock new levels of efficiency
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/assessment" className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-white hover:bg-white hover:text-blue-600 transition-colors text-center">
                            Schedule Assessment
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SoftwareIntegrationServices;