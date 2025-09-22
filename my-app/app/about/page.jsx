'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Loader2 } from "lucide-react";
import { PopupModal } from 'react-calendly';

function AboutPage() {
  const [open, setOpen] = useState(false);
  const [rootEl, setRootEl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Safely get the Next.js root element
    setRootEl(document.getElementById('__next'));
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setLoading(true); // show spinner while Calendly loads
  };

  const handleClose = () => {
    setOpen(false);
    setLoading(false);
  };

  return (
    <div className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <h2 className="text-4xl mb-10 text-center font-bold text-gray-900">
          About Vault (Private) Ltd
        </h2>

        <div className="flex items-start gap-10 flex-col md:flex-row">
          {/* Image */}
          <div className="w-full md:w-[40%] flex justify-center">
            <img
              src="/about.jpg"
              alt="About Vault"
              className="w-full max-w-md rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[60%] mt-6 md:mt-0 flex flex-col justify-center">
            <h3 className="text-2xl font-extrabold mb-4 text-gray-800">
              Who Are We?
            </h3>

            <p className="text-xl text-gray-700 leading-relaxed">
              Vault is a dynamic team of innovators, designers, and engineers
              passionate about building future-ready software. We transform
              ambitious ideas into powerful digital products that solve
              real-world problems.
              <br /><br />
              With a human-first approach and deep technical expertise, we work
              side by side with brands to design scalable solutions that elevate
              user experiences and accelerate business growth.
            </p>

            {/* Book a Call Button */}
            <button
              onClick={handleOpen}
              className="mt-8 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors self-start"
            >
              <Phone size={18} /> Book a Call
            </button>

            {/* Calendly Modal */}
            {open && rootEl && (
              <>
                {loading && (
                  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
                    <Loader2 className="w-12 h-12 text-white animate-spin" />
                  </div>
                )}

                <PopupModal
                  url="https://calendly.com/vaultsoftware0/30min"
                  rootElement={rootEl}
                  onModalClose={handleClose}
                  prefill={{}}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '3787FF',
                    textColor: '000000',
                  }}
                  // remove spinner when Calendly iframe loads
                  onLoad={() => setLoading(false)}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-[#EBF3FF] py-16 max-w-7xl mx-auto px-4 md:px-8 rounded-2lg">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl text-blue-700 font-medium">50+</h2>
            <p className="text-gray-600 mt-2 text-lg">Employees</p>
          </div>
          <div>
            <h2 className="text-4xl text-blue-700 font-medium">20+</h2>
            <p className="text-gray-600 mt-2 text-lg">Projects</p>
          </div>
          <div>
            <h2 className="text-4xl text-blue-700 font-medium">5+</h2>
            <p className="text-gray-600 mt-2 text-lg">Years</p>
          </div>
          <div>
            <h2 className="text-4xl text-blue-700 font-medium">20+</h2>
            <p className="text-gray-600 mt-2 text-lg">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
