'use client';
import { FaPaperPlane } from "react-icons/fa";

export default function Banner() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      country: form.country.value,
      companyName: form.companyName.value,
      projectDescription: form.projectDescription.value,
    };

    try {
      const res = await fetch("https://backend-black-snowflake-3088.fly.dev/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Contact form submitted successfully!");
        form.reset();
      } else {
        console.error("Backend error response:", data);
        alert("❌ Error: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <section
      className="relative h-auto min-h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/stonebricks.jpg')", backgroundPosition: "center top" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="z-10 w-full max-w-7xl px-4 mt-20 md:px-8 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:w-1/2 text-white space-y-4 mt-12 text-center lg:text-left">
          <p className="text-lg font-medium text-blue-300">Welcome from Vault</p>

          <h2 className="bg-[#3787FF] text-white px-4 py-2 inline-block rounded-lg text-xl font-bold">
            Custom Software Solutions for Bold Ideas
          </h2>

          <h1 className="text-4xl font-black leading-tight tracking-wide bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
            Building Scalable and Intelligent Web & Mobile Applications to Power Africa's Digital Future
          </h1>

          <p className="text-base text-gray-300 leading-relaxed">
            Empowering startups and businesses with tailored digital solutions — from design to deployment.
          </p>
        </div>

        <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <h2 className="text-white text-xl font-bold mb-4 text-center">
            Book a free call to discuss what you want
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-white text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1" htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="country">Country/Region</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Country"
                  className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1" htmlFor="companyName">Company Name</label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Company name"
                className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1" htmlFor="projectDescription">Project Description</label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows="3"
                placeholder="Describe your project..."
                className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full flex items-center justify-center gap-2 bg-[#3787FF] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-200 hover:scale-105"
            >
              <FaPaperPlane />
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
