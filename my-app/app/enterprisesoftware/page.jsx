import React from "react";
import Link from "next/link";

const EnterpriseSoftware = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Enterprise <span className="text-blue-500">Software Development</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We design and build secure, scalable, and performance-driven
            enterprise software solutions tailored to your business needs.
          </p>
          <Link
            href="/form"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-white transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Why Enterprise Software */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why Enterprise Software?</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Enterprise systems streamline workflows, boost efficiency, and
            empower organizations with automation, data-driven insights, and
            seamless integration across departments.
          </p>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Enterprise Solutions We Provide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ERP Solutions",
                desc: "End-to-end enterprise resource planning systems to manage operations.",
              },
              {
                title: "CRM Systems",
                desc: "Customer relationship management platforms for sales and support.",
              },
              {
                title: "HR & Payroll Software",
                desc: "Manage workforce, payroll, and compliance with ease.",
              },
              {
                title: "Inventory & Supply Chain",
                desc: "Smart systems to track logistics, procurement, and distribution.",
              },
              {
                title: "Financial & Banking Systems",
                desc: "Secure platforms for accounting, payments, and compliance.",
              },
              {
                title: "Custom Enterprise Applications",
                desc: "Tailored software built for your unique organizational needs.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/40 transition-colors"
              >
                <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-5 gap-8 text-center">
            {[
              { step: "1", title: "Analysis", desc: "Understand business needs and goals." },
              { step: "2", title: "Design", desc: "Architect scalable and flexible solutions." },
              { step: "3", title: "Development", desc: "Build robust enterprise applications." },
              { step: "4", title: "Integration", desc: "Seamlessly connect with existing systems." },
              { step: "5", title: "Deployment & Support", desc: "Launch, monitor, and maintain performance." },
            ].map((p, i) => (
              <div key={i}>
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                <p className="text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Business Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Improved efficiency and productivity",
              "Centralized data and reporting",
              "Seamless collaboration across teams",
              "Enhanced compliance and security",
              "Cost savings with automation",
              "Future-ready scalability",
            ].map((b, i) => (
              <div
                key={i}
                className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-gray-300 hover:border-blue-500/40 transition-colors"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Java",
              "Spring Boot",
              ".NET Core",
              "Node.js",
              "Express.js",
              "Python",
              "Django",
              "PostgreSQL",
              "Oracle DB",
              "MongoDB",
              "Docker",
              "Kubernetes",
              "AWS",
              "Azure",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-500/40 transition-colors text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Build Your Enterprise Software
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let’s transform your business operations with scalable, secure, and
            future-ready enterprise applications.
          </p>
          <Link
            href="/form"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSoftware;
