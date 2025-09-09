'use client';
import Link from "next/link";
import { Award, Code2, Smartphone, Database, Cloud, Zap, Globe, Settings, ArrowRight, Check } from "lucide-react";
import Trusting from "./../components/trusting/Trusting";

export default function ServicesPage() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Modern, responsive web applications built with React, Next.js, Vue.js, and cutting-edge technologies.",
      features: ["React & Next.js", "Vue.js & Nuxt.js", "TypeScript", "Tailwind CSS", "Progressive Web Apps", "SEO Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable APIs, microservices, and secure database management.",
      features: ["Node.js & Express", "Python & Django", "RESTful APIs", "GraphQL", "Database Design", "Security Implementation"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
      features: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "App Store Deployment", "Push Notifications"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "SaaS Solutions",
      description: "Complete Software-as-a-Service platforms with subscription management, analytics, and scalability.",
      features: ["Multi-tenant Architecture", "Subscription Billing", "User Management", "Analytics Dashboard", "API Integration", "Cloud Deployment"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & Automation",
      description: "Intelligent automation solutions, chatbots, and AI-powered features to streamline your operations.",
      features: ["Process Automation", "AI Chatbots", "Machine Learning", "Data Analytics", "Workflow Optimization", "Custom AI Models"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DevOps & Infrastructure",
      description: "Reliable deployment pipelines, cloud infrastructure, and continuous integration for seamless operations.",
      features: ["CI/CD Pipelines", "AWS/Azure/GCP", "Docker & Kubernetes", "Monitoring & Logging", "Security Audits", "Performance Optimization"],
      color: "from-gray-600 to-gray-800"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a detailed roadmap for success."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the user experience and technical architecture that aligns with your goals."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using best practices, with continuous testing and quality assurance."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Launch your project with ongoing maintenance, updates, and technical support."
    }
  ];

  return (
    <>
      {/* Banner Section */}
      <section
        className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('./services1.jpg')",
          backgroundPosition: "center top",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="z-10 w-full max-w-7xl px-4 mt-20 md:px-8 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Section */}
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              We help your business grow with AI-powered tech.
            </h1>
            <p className="text-white text-lg">
              From smart automation to custom software, we build what helps you scale.
            </p>
            <div className="mt-4">
              <Link href="#contact" className="bg-[#1447E6] text-white px-6 py-3 rounded-md text-lg hover:bg-[#0f3dc2] transition-colors">
                Schedule a Call
              </Link>
            </div>
          </div>

          
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver end-to-end technology solutions that drive growth, efficiency, and innovation for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href="#contact"
                    className="inline-flex items-center text-[#1447E6] font-semibold hover:text-[#0f3dc2] transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we follow a structured approach that ensures quality, efficiency, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-r from-[#1447E6] to-[#0f3dc2] text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-blue-100">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1447E6] to-[#0f3dc2]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives results. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-white text-[#1447E6] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="#portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1447E6] transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Trusting Component */}
      <Trusting />
    </>
  );
}