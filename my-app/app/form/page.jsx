'use client';

import { useState } from "react";
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactFormPage() {
  const [mapOpen, setMapOpen] = useState(false);

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
        alert("❌ Error: " + (data.error || "Unknown error"));
      }
    } catch {
      alert("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center py-20"
      style={{ backgroundImage: "url('/stonebricks.jpg')", backgroundPosition: "center top", backgroundSize: "cover" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-0"></div>

      {/* Content */}
      <div className="z-10 w-full max-w-5xl px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Address Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 text-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(56,135,255,0.4)] transition-all duration-300"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" /> Our Address
          </h2>
          <p className="text-lg font-medium">86 Olowoira Road, off Ojodu-Berger, Lagos</p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-green-400" />
              <a href="tel:+2348087102888" className="hover:underline">
                +234 808 710 2888
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:welcome@vaultsoftware.cloud" className="hover:underline">
                welcome@vaultsoftware.cloud
              </a>
            </div>
          </div>

          {/* Map Preview */}
          <div
            onClick={() => setMapOpen(true)}
            className="mt-6 rounded-lg overflow-hidden border border-white/20 shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
          >
            <iframe
              title="Vault Software Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.87915282385!2d3.345301!3d6.619575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e91e89ab4d%3A0x8e9c53dc055a29d6!2s86%20Olowoira%20Rd%2C%20Ojodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1691000000000!5m2!1sen!2sng"
              width="100%"
              height="200"
              style={{ border: 0, pointerEvents: "none" }}
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <h2 className="text-white text-xl font-bold mb-6 text-center border-b border-white/20 pb-2">
            Book a Free Strategy Call
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="First Name" name="firstName" placeholder="John" required />
              <InputField label="Last Name" name="lastName" placeholder="Doe" required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Email" type="email" name="email" placeholder="you@example.com" required />
              <InputField label="Country/Region" name="country" placeholder="Nigeria" required />
            </div>

            <InputField label="Company Name" name="companyName" placeholder="Vault Software" />

            <div>
              <label className="block mb-1 text-sm">Project Description</label>
              <textarea
                name="projectDescription"
                rows="3"
                placeholder="Describe your project..."
                className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(56,135,255,0.5)] transition-all duration-300"
            >
              <FaPaperPlane />
              Submit Form
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {mapOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-gradient-to-br from-black/60 via-black/50 to-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[90%] md:w-[70%] lg:w-[60%] h-[70%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button
                onClick={() => setMapOpen(false)}
                className="absolute top-3 right-3 bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
              >
                <FaTimes className="text-white text-lg" />
              </button>
              <iframe
                title="Vault Software Location Full Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.87915282385!2d3.345301!3d6.619575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e91e89ab4d%3A0x8e9c53dc055a29d6!2s86%20Olowoira%20Rd%2C%20Ojodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1691000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function InputField({ label, name, type = "text", placeholder, required }) {
  return (
    <div>
      <label className="block mb-1 text-sm">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
        required={required}
      />
    </div>
  );
}
