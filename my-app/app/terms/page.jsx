'use client'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10 lg:p-14 border border-gray-100">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Terms of Use
          </h1>
          <p className="mt-4 text-lg text-gray-500 font-medium">
            Last updated: <span className="font-semibold text-gray-800">August 10, 2025</span>
          </p>
        </header>

        {/* Content */}
        <article className="max-w-none text-gray-700 space-y-8">
          <p>Welcome to Vault Software! We appreciate your interest in our services. By using our website, you are agreeing to the following terms and conditions. Please read them carefully, and if you have any questions, feel free to reach out to us.</p>

          <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          <p>By accessing vaultsoftware.cloud, you acknowledge and agree to these Terms of Use of the services of Vault Software Company Ltd. These terms govern your use of our website and services. We may update them from time to time, so we encourage you to check back periodically. Continued use of the website means you accept any changes we make.</p>

          <h2 className="text-3xl font-bold text-gray-900">2. Use of Website</h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
            <li>Follow all applicable laws and regulations.</li>
            <li>Refrain from hacking, spamming, or engaging in any activity that could harm our website or other users.</li>
            <li>Do not use our content or branding without permission.</li>
            <li>Respect the intellectual property rights of Vault Software Company Ltd and others.</li>
          </ul>
          <p>If we determine that you are violating these terms, we may take appropriate action, including restricting your access to our website.</p>

          <h2 className="text-3xl font-bold text-gray-900">3. Intellectual Property</h2>
          <p>All content on Vaultsoftware.cloud, including text, images, logos, and software, is owned by Vault or licensed to us. You are welcome to browse, but copying, distributing, or modifying our content without permission is not allowed.</p>

          <h2 className="text-3xl font-bold text-gray-900">4. Third-Party Links</h2>
          <p>We may provide links to third-party websites for your convenience. However, we don’t control or endorse these sites, and we’re not responsible for their content or practices. If you choose to visit any linked websites, you do so at your own risk.</p>

          <h2 className="text-3xl font-bold text-gray-900">5. Limitation of Liability</h2>
          <p>We strive to keep Vault running smoothly, but we can’t guarantee that everything will always work perfectly. We are not responsible for any losses or damages resulting from website downtime or errors, inaccurate or outdated information, or security breaches.</p>

          <h2 className="text-3xl font-bold text-gray-900">6. Privacy Policy</h2>
          <p>Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your information. We encourage you to read it to understand how we handle your data.</p>

          <h2 className="text-3xl font-bold text-gray-900">7. Termination of Access</h2>
          <p>We reserve the right to suspend or terminate access for users who violate these terms or engage in harmful activities.</p>

          <h2 className="text-3xl font-bold text-gray-900">8. Governing Law</h2>
          <p>These Terms of Use are governed by the laws of Nigeria. If any disputes arise, they will be handled in the courts of Nigeria.</p>

          <h2 className="text-3xl font-bold text-gray-900">9. Contact Information</h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
            <li>Email: welcome@vaultsoftware.cloud</li>
            <li>Phone: +234 (8) 08710888</li>
            <li>Address: 86, Olowoira road, off Ojodu-Berger, Lagos.</li>
          </ul>

          <p>By continuing to use vaultsoftware.cloud, you acknowledge that you have read and agreed to these Terms of Use.</p>
        </article>
      </div>

      {/* Full-width image outside of box shadow */}
      <div className="mt-8">
        <img
          src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRlY2hpZXMlMjBpbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Tech in office"
          className="w-full h-114 object-cover rounded-lg"
        />
      </div>
    </main>
  )
}
