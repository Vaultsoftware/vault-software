import React from "react";
import Link from "next/link";

const APIDevelopment = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Powerful <span className="text-blue-500">API Development</span> Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We design, build, and integrate secure APIs that power your software,
            connect systems, and unlock seamless digital experiences.
          </p>
          <Link
            href="/form"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-white transition-colors"
          >
            Build My API
          </Link>
        </div>
      </section>

      {/* Why APIs Matter */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why APIs Matter?</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            APIs are the backbone of modern applications. They connect mobile
            apps, websites, payment gateways, banking systems, e-commerce
            platforms, and third-party services to work together efficiently.
          </p>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            API Services We Provide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "RESTful API Development",
                desc: "Robust and scalable APIs for web and mobile applications.",
              },
              {
                title: "GraphQL APIs",
                desc: "Flexible data querying and modern API solutions.",
              },
              {
                title: "Payment Gateway Integration",
                desc: "Stripe, Paystack, Flutterwave, and custom fintech APIs.",
              },
              {
                title: "Third-Party API Integration",
                desc: "Seamless connection with CRMs, ERPs, social platforms, and more.",
              },
              {
                title: "Custom API Solutions",
                desc: "Tailor-made APIs designed for your unique business processes.",
              },
              {
                title: "API Security & Monitoring",
                desc: "Authentication, encryption, and real-time performance tracking.",
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

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our API Development Process
          </h2>
          <div className="grid md:grid-cols-5 gap-8 text-center">
            {[
              { step: "1", title: "Discovery", desc: "Understand use cases and integration needs." },
              { step: "2", title: "Design", desc: "Plan endpoints, data models, and architecture." },
              { step: "3", title: "Development", desc: "Build secure, scalable, and high-performance APIs." },
              { step: "4", title: "Testing", desc: "Rigorous QA with automated and manual testing." },
              { step: "5", title: "Deployment & Support", desc: "Launch with monitoring, scaling, and maintenance." },
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
              "Faster time-to-market",
              "Seamless system integrations",
              "Enhanced security & reliability",
              "Improved customer experiences",
              "Reduced operational costs",
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
              "Node.js",
              "Express.js",
              "NestJS",
              "Django REST",
              "GraphQL",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "gRPC",
              "Stripe",
              "Paystack",
              "AWS API Gateway",
              "Azure API Management",
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
            Let’s Build Your API
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Whether it’s a payment integration, third-party connection, or a
            custom API, we’ll deliver a secure and scalable solution.
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

export default APIDevelopment;
