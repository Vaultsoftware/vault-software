import React from "react";
import Link from "next/link";

const CRMDevelopment = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Custom <span className="text-blue-500">CRM Development</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Empower your team with a tailored CRM that streamlines customer
            relationships, boosts sales, and automates business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/form"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-white transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/casestudies"
              className="border border-gray-700 px-8 py-4 rounded-xl font-semibold text-white hover:bg-gray-900 transition-colors"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Why CRM Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Does Your Business Need a CRM?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A CRM system is more than just software—it’s the backbone of how you
            manage customer data, track sales, and grow revenue efficiently.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            CRM Features We Build
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Profiles",
                desc: "Unified view of all customer data including history, preferences, and interactions.",
              },
              {
                title: "Sales Pipelines",
                desc: "Visual deal tracking with stage management and forecasting tools.",
              },
              {
                title: "Marketing Automation",
                desc: "Automated campaigns, lead nurturing, and personalized outreach.",
              },
              {
                title: "Analytics Dashboard",
                desc: "Real-time reports on sales, customer retention, and business performance.",
              },
              {
                title: "Integrations",
                desc: "Seamless sync with email, e-commerce, banking, and payment gateways.",
              },
              {
                title: "Data Security",
                desc: "Role-based permissions, encryption, and compliance-ready features.",
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
            Our CRM Development Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                step: "1",
                title: "Discovery",
                desc: "Analyze your business needs and define CRM goals.",
              },
              {
                step: "2",
                title: "Design",
                desc: "Plan user experience, workflows, and system architecture.",
              },
              {
                step: "3",
                title: "Development",
                desc: "Build features, integrate APIs, and ensure performance.",
              },
              {
                step: "4",
                title: "Launch & Support",
                desc: "Deploy CRM with training, monitoring, and maintenance.",
              },
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

      {/* Tech Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Django",
              "PostgreSQL",
              "MongoDB",
              "GraphQL",
              "TypeScript",
              "Redis",
              "Stripe",
              "HubSpot API",
              "Salesforce API",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2 bg-gray-900 rounded-full border border-gray-800 hover:border-blue-500/40 transition-colors text-gray-300"
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
            Let’s Build Your CRM
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Ready to transform the way you manage customers? Let’s craft a CRM
            tailored for your business.
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

export default CRMDevelopment;
