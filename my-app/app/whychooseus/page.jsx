'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function Page() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const features = [
        {
            title: "Dedicated Team",
            content: "Our skilled professionals work exclusively on your project, ensuring focused attention, deep understanding of your requirements, and consistent quality delivery throughout the development lifecycle."
        },
        {
            title: "Fast Paced Development",
            content: "We utilize agile methodologies and modern development practices to deliver results quickly without compromising quality. Our streamlined processes ensure rapid time-to-market for your solutions."
        },
        {
            title: "Individual Approach",
            content: "Every client receives personalized attention and customized solutions. We take time to understand your unique business challenges and craft tailored strategies that align with your specific goals."
        },
        {
            title: "Leading Technology",
            content: "We stay at the forefront of technological innovation, utilizing the latest frameworks, tools, and best practices to build scalable, secure, and future-ready applications for your business."
        },
        {
            title: "Business Mindset",
            content: "We think beyond code - our team understands business objectives and provides strategic insights that drive growth, efficiency, and competitive advantage for your organization."
        },
        {
            title: "24/7 Support",
            content: "Our commitment extends beyond project delivery. We provide round-the-clock technical support and maintenance services to ensure your systems run smoothly at all times."
        },
        {
            title: "Transparent Communication",
            content: "We maintain open lines of communication throughout the project lifecycle, providing regular updates, progress reports, and collaborative feedback sessions to keep you informed."
        },
        {
            title: "Scalable Solutions",
            content: "Our architecture and development practices are designed to grow with your business. We build solutions that can easily adapt and scale as your requirements evolve over time."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 bg-white text-black flex flex-col md:flex-row gap-10">
            {/* Why Work With Us Section */}
            <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Why Work With Us</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Welcome to Vault Software House, where innovation meets excellence.
                    As a leading IT software company, we specialize in crafting cutting-edge
                    solutions tailored to your business needs.
                </p>
                <div className="mt-8">
                    <img src="/Global.png" alt="Global illustration" className="w-full h-auto " />
                </div>
            </div>

            {/* Features Dropdown Section */}
            <div className="w-full md:w-1/2 md:pl-10 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Our Key Strengths</h3>
                
                {features.map((feature, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <button
                            onClick={() => toggleDropdown(index)}
                            className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                        >
                            <h2 className="text-xl font-semibold text-gray-900">{feature.title}</h2>
                            {activeDropdown === index ? (
                                <ChevronUp className="w-5 h-5 text-gray-600" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-600" />
                            )}
                        </button>
                        
                        {activeDropdown === index && (
                            <div className="px-6 py-4 bg-white border-t border-gray-200">
                                <p className="text-gray-700 leading-relaxed">{feature.content}</p>
                            </div>
                        )}
                        
                        {activeDropdown !== index && (
                            <hr className="border-gray-200" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;