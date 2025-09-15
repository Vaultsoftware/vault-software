'use client'
import React, { useState } from 'react'

function Page() {
    const [expandedCards, setExpandedCards] = useState({})

    const toggleExpanded = (cardId) => {
        setExpandedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }))
    }

    const truncateText = (text, wordLimit = 25) => {
        const words = text.split(' ')
        if (words.length <= wordLimit) return { truncated: text, hasMore: false }
        return {
            truncated: words.slice(0, wordLimit).join(' '),
            remaining: words.slice(wordLimit).join(' '),
            hasMore: true
        }
    }

    const industries = [
        {
            id: 'education',
            title: 'Education',
            color: 'blue-400',
            image: '/city-committed-education-collage-concept_23-2150062214.jpg',
            text: 'Transform learning with AI-powered e-learning, adaptive assessments, and personalized experiences that enhance engagement and outcomes. Create intelligent tutoring systems that adapt to individual learning styles and provide real-time feedback. Our education solutions include learning management systems, student performance analytics, virtual classrooms, automated grading systems, and interactive content delivery platforms. We help educational institutions streamline administrative tasks, improve student engagement through gamification, and provide data-driven insights for better decision-making. Our AI-powered solutions can predict student performance, identify at-risk learners, and recommend personalized learning paths to ensure every student reaches their full potential.'
        },
        {
            id: 'real-estate',
            title: 'Real Estate',
            color: 'green-400',
            image: '/construction-concept-with-engineering-tools_1150-17809.jpg',
            text: 'Deliver smart solutions with AI-powered property valuation, predictive insights, and automation tools tailored for residential and commercial sectors. Our comprehensive real estate platforms include property management systems, virtual property tours, automated valuation models, and market analysis tools. We build CRM solutions for real estate agents, tenant management systems for landlords, and investment analysis platforms for property developers. Our AI algorithms can predict property values, identify investment opportunities, analyze market trends, and automate routine tasks like scheduling viewings and processing applications. We also create mobile apps for property searching, mortgage calculators, and digital signing solutions that streamline the entire buying and selling process.'
        },
        {
            id: 'fintech',
            title: 'Fintech',
            color: 'yellow-400',
            image: '/phone-with-map-colorful-icons_1134-406.jpg',
            text: 'Build secure fintech platforms with AI-driven fraud detection, smart investments, and seamless digital payment experiences. Our fintech solutions encompass mobile banking applications, peer-to-peer payment systems, cryptocurrency trading platforms, and robo-advisors for investment management. We develop secure payment gateways, digital wallets, and blockchain-based solutions that ensure transaction security and compliance with financial regulations. Our AI-powered systems can detect fraudulent activities in real-time, assess credit risks, provide personalized financial advice, and automate trading strategies. We also create budgeting apps, expense tracking tools, and financial planning platforms that help users manage their finances more effectively while ensuring bank-level security and regulatory compliance.'
        },
        {
            id: 'saas',
            title: 'SaaS',
            color: 'purple-400',
            image: '/saas-concept-collage_23-2149399290.jpg',
            text: 'Scale your SaaS product with robust, secure, and AI-optimized features that adapt and grow with your business goals. Our SaaS development expertise includes multi-tenant architecture, subscription management systems, and scalable cloud infrastructure. We build customer relationship management platforms, project management tools, human resources management systems, and business intelligence dashboards. Our solutions feature automated billing systems, user analytics, integration APIs, and customizable workflows that adapt to different business needs. We implement AI-powered features like predictive analytics, automated customer support, and intelligent recommendations to enhance user experience and drive business growth while ensuring data security and compliance with industry standards.'
        },
        {
            id: 'logistics',
            title: 'Logistics',
            color: 'orange-400',
            image: '/workers-carrying-boxes-relocating-items-large-warehouse-center_342744-1564.jpg',
            text: 'Optimize delivery systems with AI-powered route planning, real-time tracking, and supply chain automation. Our logistics solutions include warehouse management systems, fleet tracking applications, and inventory optimization platforms. We develop route planning algorithms that reduce delivery times and fuel costs, real-time tracking systems that provide visibility across the entire supply chain, and predictive maintenance tools for fleet management. Our AI-powered solutions can forecast demand, optimize inventory levels, automate order processing, and predict potential supply chain disruptions. We also create mobile apps for drivers, customer portals for shipment tracking, and analytics dashboards that provide insights into operational efficiency and help businesses make data-driven decisions to improve their logistics operations.'
        },
        {
            id: 'healthcare',
            title: 'Healthcare',
            color: 'cyan-400',
            image: '/world-diabetes-day-docter-holding-stethoscope-red-heart-wooden-shape_1150-26694.jpg',
            text: 'Empower care with AI for diagnostics, patient monitoring, and predictive health analytics that improve outcomes. Our healthcare solutions include electronic health records systems, telemedicine platforms, and medical imaging analysis tools. We develop patient management systems, appointment scheduling applications, and remote monitoring devices that enable continuous care. Our AI-powered solutions can assist in medical diagnosis, predict patient outcomes, identify potential health risks, and recommend personalized treatment plans. We also create mobile health apps, medication management systems, and clinical decision support tools that help healthcare providers deliver better care while ensuring HIPAA compliance and patient data security. Our platforms integrate with existing medical systems and provide seamless workflows for healthcare professionals.'
        },
        {
            id: 'banking',
            title: 'Banking',
            color: 'indigo-400',
            image: '/high-angle-woman-playing-videogame-computer_23-2149349986.jpg',
            text: 'Revolutionize banking with AI-powered customer support, fraud detection, credit risk analysis, and seamless digital services that enhance trust and efficiency. Our banking solutions include core banking systems, mobile banking applications, and loan management platforms. We develop automated underwriting systems, risk assessment tools, and regulatory compliance systems that streamline banking operations. Our AI-powered solutions can provide personalized banking experiences, automate customer service through chatbots, detect suspicious transactions in real-time, and assess credit worthiness more accurately. We also create digital onboarding processes, account management systems, and financial analytics platforms that help banks improve customer satisfaction while reducing operational costs and maintaining strict security standards.'
        },
        {
            id: 'ecommerce',
            title: 'Retail & E-commerce',
            color: 'pink-400',
            image: '/laptop-shopping-bags-online-shopping-concept_1423-189.jpg',
            text: 'Boost your online store with AI-driven personalization, predictive analytics, and seamless payment integrations. From custom platforms to mobile commerce, we help retailers increase sales and improve customer experiences. Our e-commerce solutions include custom shopping platforms, inventory management systems, and customer relationship management tools. We develop recommendation engines that suggest products based on user behavior, dynamic pricing systems that optimize profit margins, and personalized marketing automation that increases conversion rates. Our AI-powered solutions can predict customer lifetime value, optimize product placement, automate customer service, and provide detailed analytics on sales performance. We also create mobile shopping apps, social commerce integrations, and omnichannel solutions that provide consistent shopping experiences across all touchpoints while ensuring secure payment processing and data protection.'
        }
    ]

    return (
        <div className="bg-black text-white w-full py-20 px-4 md:px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 text-white">
                    Industries We Serve
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry) => {
                        const textInfo = truncateText(industry.text)
                        const isExpanded = expandedCards[industry.id]
                        
                        return (
                            <div key={industry.id} className="group bg-[#0E0E0E] text-white shadow-lg hover:shadow-xl hover:bg-blue-600 p-6 transition-all duration-300 ease-in-out">
                                <div className="mb-4">
                                    <img src={industry.image} alt={industry.title} className="w-full h-48 object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className={`text-2xl font-bold mb-4 text-${industry.color}`}>
                                        {industry.title}
                                    </h3>
                                    
                                    <div className="text-gray-300 leading-relaxed flex-1 mb-6">
                                        <p>
                                            {isExpanded ? industry.text : textInfo.truncated}
                                            {!isExpanded && textInfo.hasMore && '...'}
                                        </p>
                                        
                                        {textInfo.hasMore && (
                                            <button
                                                onClick={() => toggleExpanded(industry.id)}
                                                className={`flex items-center text-${industry.color} text-sm font-medium mt-3 hover:underline transition-colors`}
                                            >
                                                {isExpanded ? 'Read less' : 'Read more'}
                                                <svg 
                                                    className={`w-4 h-4 ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Page