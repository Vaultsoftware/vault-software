import React from 'react'
import Trusting from '../components/trusting/Trusting'

const industries = [
    {
        title: 'AUTOMOBILE',
        icon: '/industryOne (4).png',
        desc: 'Transform the automotive industry with innovative solutions that optimize fleet management, and enhance mobility.',
        image: '/industryOne (1).jpg',
    },
    {
        title: 'LOGISTICS',
        icon: '/industryOne (3).png',
        desc: 'We optimize logistics operations with AI-driven solutions, enhancing warehousing, fleet management, and delivery efficiency.',
        image: '/industryOne (8).png',
    },
    {
        title: 'FINTECH',
        icon: '/industryOne (2).png',
        desc: 'Enhance your financial services with secure, scalable fintech solutions that drive efficiency, innovation, and growth.',
        image: '/industryOne (5).png',
    },
    {
        title: 'SAAS',
        icon: '/industryOne (1).png',
        desc: 'We empower SaaS businesses with scalable custom solutions that enhance experiences, and optimize software.',
        image: '/industryOne (7).png',
    },
    {
        title: 'AUTOMOBILE',
        icon: '/industryOne (4).png',
        desc: 'Transform the automotive industry with innovative solutions that optimize fleet management, and enhance mobility.',
        image: '/industryOne (1).jpg',
    },
    {
        title: 'LOGISTICS',
        icon: '/industryOne (3).png',
        desc: 'We optimize logistics operations with AI-driven solutions, enhancing warehousing, fleet management, and delivery efficiency.',
        image: '/industryOne (8).png',
    },
    {
        title: 'FINTECH',
        icon: '/industryOne (2).png',
        desc: 'Enhance your financial services with secure, scalable fintech solutions that drive efficiency, innovation, and growth.',
        image: '/industryOne (5).png',
    },
    {
        title: 'SAAS',
        icon: '/industryOne (1).png',
        desc: 'We empower SaaS businesses with scalable custom solutions that enhance experiences, and optimize software.',
        image: '/industryOne (7).png',
    },
]

const technologies = [
    {
        category: "Mobile App Development",
        items: [
            { name: "React Native", icon: "📱", description: "Cross-platform mobile development" },
            { name: "Flutter", icon: "🦋", description: "UI toolkit for mobile applications" },
            { name: "Swift", icon: "🍎", description: "Native iOS development" },
            { name: "Kotlin", icon: "🟢", description: "Modern Android development" },
            { name: "Expo", icon: "⚡", description: "React Native development platform" },
            { name: "Firebase", icon: "🔥", description: "Backend services for mobile apps" }
        ]
    },
    {
        category: "Web Development",
        items: [
            { name: "Next.js", icon: "⚛️", description: "React framework for production" },
            { name: "React", icon: "⚛️", description: "JavaScript library for building UIs" },
            { name: "Vue.js", icon: "💚", description: "Progressive JavaScript framework" },
            { name: "Angular", icon: "🅰️", description: "Platform for building web apps" },
            { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework" },
            { name: "TypeScript", icon: "📘", description: "Typed JavaScript at scale" }
        ]
    },
    {
        category: "Backend Development",
        items: [
            { name: "Node.js", icon: "💚", description: "JavaScript runtime environment" },
            { name: "Python", icon: "🐍", description: "Versatile programming language" },
            { name: "Express.js", icon: "🚀", description: "Web framework for Node.js" },
            { name: "Django", icon: "🎸", description: "Python web framework" },
            { name: "GraphQL", icon: "📊", description: "Query language for APIs" },
            { name: "REST API", icon: "🔗", description: "Representational State Transfer" }
        ]
    },
    {
        category: "Data Analysis & AI",
        items: [
            { name: "Python", icon: "🐍", description: "Data science and ML language" },
            { name: "TensorFlow", icon: "🧠", description: "Machine learning framework" },
            { name: "Pandas", icon: "🐼", description: "Data manipulation and analysis" },
            { name: "Jupyter", icon: "📓", description: "Interactive computing notebooks" },
            { name: "PyTorch", icon: "🔥", description: "Deep learning framework" },
            { name: "Power BI", icon: "📊", description: "Business analytics tool" }
        ]
    },
    {
        category: "Database Technologies",
        items: [
            { name: "MongoDB", icon: "🍃", description: "NoSQL document database" },
            { name: "PostgreSQL", icon: "🐘", description: "Open source relational database" },
            { name: "MySQL", icon: "🐬", description: "Popular relational database" },
            { name: "Redis", icon: "🔴", description: "In-memory data structure store" },
            { name: "Firebase", icon: "🔥", description: "Real-time NoSQL database" },
            { name: "Supabase", icon: "⚡", description: "Open source Firebase alternative" }
        ]
    },
    {
        category: "Cloud & DevOps",
        items: [
            { name: "AWS", icon: "☁️", description: "Amazon Web Services" },
            { name: "Google Cloud", icon: "🌤️", description: "Google Cloud Platform" },
            { name: "Docker", icon: "🐳", description: "Containerization platform" },
            { name: "Kubernetes", icon: "⚙️", description: "Container orchestration" },
            { name: "GitHub", icon: "🐙", description: "Version control and collaboration" },
            { name: "Vercel", icon: "▲", description: "Deployment platform" }
        ]
    }
];

function IndustryMain() {
    return (
        <div className="px-6 py-10 bg-white">
            <Trusting />

            {/* Technologies Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Our Technology Stack
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We leverage cutting-edge technologies and tools to deliver exceptional solutions across all platforms and industries.
                    </p>
                </div>

                <div className="space-y-12">
                    {technologies.map((category) => (
                        <div key={category.category} className="space-y-6">
                            <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-2">
                                {category.category}
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                                {category.items.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="group bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:border-blue-300"
                                    >
                                        <div className="text-center space-y-2">
                                            <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                                {tech.icon}
                                            </div>
                                            <h4 className="font-semibold text-gray-900 text-sm">
                                                {tech.name}
                                            </h4>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                {tech.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technology Stats */}
                <div className="mt-12 bg-gray-50 rounded-xl p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-blue-600">35+</div>
                            <div className="text-gray-600 text-sm">Technologies</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-green-600">6</div>
                            <div className="text-gray-600 text-sm">Categories</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-purple-600">100%</div>
                            <div className="text-gray-600 text-sm">Modern Stack</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-orange-600">24/7</div>
                            <div className="text-gray-600 text-sm">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovative solutions section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Innovative solutions, personalized for every sector.
                </h2>
                <p className="text-gray-600 mb-10">
                    Whatever your industry, we're here to understand your challenges and help you succeed.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {industries.map((item, index) => (
                        <div key={index} className="border border-blue-600 border-t-0 border-b-0 rounded-lg p-4 shadow hover:shadow-md transition">
                            <img src={item.icon} alt={`${item.title} icon`} className="w-12 h-12 mb-3" />
                            <h3 className="font-semibold text-xl mb-2 mt-5">{item.title}</h3>
                            <p className="text-sm text-gray-700 mb-4 mt-5">{item.desc}</p>
                            <img
                                src={item.image}
                                alt={`${item.title} visual`}
                                className="w-full h-32 object-cover rounded"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Our process section */}
            <section className='flex flex-col lg:flex-row gap-8 items-center max-w-7xl mx-auto px-4 md:px-8 mt-5'>
                <div className='flex-1'>
                    <h2 className='text-4xl font-semibold'>Our Four-Step Roadmap to <br />Better Industry</h2>
                    <img
                        src="/industryOne (2).jpg"
                        alt="Industry process illustration"
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

            {/* Our Engagement Models Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Our Engagement Models
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the engagement model that best fits your project needs and business objectives.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="bg-black border border-gray-700 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors">
                                <span className="text-2xl font-bold text-black">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Staff Augmentation</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-center">
                            Scale your tech team with expert IT professionals and developers through our staff augmentation model, delivering the right skills to accelerate your project's success.
                        </p>
                    </div>

                    <div className="bg-black border border-gray-700 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors">
                                <span className="text-2xl font-bold text-black">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Dedicated Teams</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-center">
                            Build a team of passionate experts who focus solely on your project, providing personalized solutions that align with your business goals and drive results.
                        </p>
                    </div>

                    <div className="bg-black border border-gray-700 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors">
                                <span className="text-2xl font-bold text-black">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-center">
                            Empower your business with innovative digital solutions that streamline processes, boost efficiency, and position your business for long-term success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Full Width Blue CTA Section */}
            <section className="w-screen bg-blue-900 py-16 mt-16 -mx-6 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Left Side */}
                        <div className="text-white lg:text-left text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">
                                Top-Rated Software Development Company
                            </h2>
                            <h3 className="text-2xl md:text-3xl font-semibold">
                                Ready to get started?
                            </h3>
                        </div>

                        {/* Right Side */}
                        <div className="text-white lg:text-right text-center">
                            <p className="text-xl md:text-2xl font-medium mb-2">
                                Get consistent results,
                            </p>
                            <p className="text-xl md:text-2xl font-medium">
                                Collaborate in real time
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IndustryMain