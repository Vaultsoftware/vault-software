'use client'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative mt-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-blue-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20 shadow-2xl">
            <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent mb-6">
              Terms of Use
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 font-medium">
              Last updated: <span className="font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-lg">September 11, 2025</span>
            </p>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl p-10 lg:p-16 border border-blue-500/20 shadow-2xl mb-12">
          
          {/* Welcome Message */}
          <div className="mb-16 p-8 bg-gradient-to-r from-blue-500/10 to-blue-600/5 rounded-2xl border border-blue-400/20">
            <p className="text-xl leading-relaxed text-gray-200">
              Welcome to Vault Software! We appreciate your interest in our services. By using our website, you are agreeing to the following terms and conditions. Please read them carefully, and if you have any questions, feel free to reach out to us.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-12">
            
            {/* Section 1: Acceptance of Terms */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-white">1. Acceptance of Terms</h2>
              </div>
              <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-8 rounded-2xl border border-gray-600/20">
                <p className="text-gray-200 leading-relaxed text-lg">
                  By accessing vaultsoftware.cloud, you acknowledge and agree to these Terms of Use of the services of Vault Software Company Ltd. These terms govern your use of our website and services. We may update them from time to time, so we encourage you to check back periodically. Continued use of the website means you accept any changes we make.
                </p>
              </div>
            </section>

            {/* Section 2: Use of Website */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-white">2. Use of Website</h2>
              </div>
              <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-8 rounded-2xl border border-gray-600/20 space-y-6">
                <p className="text-gray-200 leading-relaxed mb-6">You must comply with the following guidelines when using our website:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Follow all applicable laws and regulations",
                    "Refrain from hacking, spamming, or harmful activities",
                    "Do not use our content or branding without permission",
                    "Respect intellectual property rights of Vault Software and others"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-400/10">
                      <span className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
                  <p className="text-gray-200 leading-relaxed">
                    <span className="text-yellow-400 font-semibold">⚠ Important:</span> If we determine that you are violating these terms, we may take appropriate action, including restricting your access to our website.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Intellectual Property */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-white">3. Intellectual Property</h2>
              </div>
              <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-8 rounded-2xl border border-gray-600/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-xl">©</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    All content on Vaultsoftware.cloud, including text, images, logos, and software, is owned by Vault or licensed to us. You are welcome to browse, but copying, distributing, or modifying our content without permission is not allowed.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Third-Party Links */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-white">4. Third-Party Links</h2>
              </div>
              <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-8 rounded-2xl border border-gray-600/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-xl">🔗</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    We may provide links to third-party websites for your convenience. However, we don't control or endorse these sites, and we're not responsible for their content or practices. If you choose to visit any linked websites, you do so at your own risk.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Limitation of Liability */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-white">5. Limitation of Liability</h2>
              </div>
              <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-8 rounded-2xl border border-gray-600/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-xl">⚖</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    We strive to keep Vault running smoothly, but we can't guarantee that everything will always work perfectly. We are not responsible for any losses or damages resulting from website downtime or errors, inaccurate or outdated information, or security breaches.
                  </p>
                </div>
              </div>
            </section>

            {/* Sections 6-8 in a grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              <section>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-bold text-white">6. Privacy Policy</h2>
                </div>
                <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-6 rounded-2xl border border-gray-600/20 h-full">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-400 text-lg">🔒</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your information. We encourage you to read it to understand how we handle your data.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-bold text-white">7. Termination</h2>
                </div>
                <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-6 rounded-2xl border border-gray-600/20 h-full">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-400 text-lg">🚫</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    We reserve the right to suspend or terminate access for users who violate these terms or engage in harmful activities.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-bold text-white">8. Governing Law</h2>
                </div>
                <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-6 rounded-2xl border border-gray-600/20 h-full">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-400 text-lg">🏛</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    These Terms of Use are governed by the laws of Nigeria. If any disputes arise, they will be handled in the courts of Nigeria.
                  </p>
                </div>
              </section>
            </div>

          </div>

          {/* Contact Section */}
          <section className="mt-16 bg-gradient-to-r from-blue-500/10 via-blue-400/5 to-blue-500/10 p-10 rounded-3xl border border-blue-400/20">
            <div className="flex items-center mb-8">
              <div className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
              <h2 className="text-4xl font-bold text-white">9. Contact Information</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl border border-blue-400/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 text-xl">✉</span>
                </div>
                <h3 className="font-semibold text-blue-300 mb-2">Email</h3>
                <p className="text-blue-400">welcome@vaultsoftware.cloud</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl border border-blue-400/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 text-xl">📞</span>
                </div>
                <h3 className="font-semibold text-blue-300 mb-2">Phone</h3>
                <p className="text-blue-400">+234 (8) 08710888</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl border border-blue-400/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 text-xl">📍</span>
                </div>
                <h3 className="font-semibold text-blue-300 mb-2">Address</h3>
                <p className="text-blue-400">86, Olowoira road, off Ojodu-Berger, Lagos</p>
              </div>
            </div>
          </section>

          {/* Final Agreement Notice */}
          <div className="mt-12 p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-blue-400/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 text-xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Agreement Confirmation</h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  By continuing to use vaultsoftware.cloud, you acknowledge that you have read and agreed to these Terms of Use.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRlY2hpZXMlMjBpbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Tech in office"
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <p className="text-blue-300 font-medium">Legal & Transparent</p>
            <p className="text-white text-xl font-bold">Clear Terms & Conditions</p>
          </div>
        </div>
      </div>
    </main>
  )
}