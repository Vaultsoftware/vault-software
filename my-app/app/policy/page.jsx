'use client'

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative mt-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-blue-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20 shadow-2xl">
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 font-medium">
              Last updated: <span className="font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-lg">September 11, 2025</span>
            </p>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl p-10 lg:p-16 border border-blue-500/20 shadow-2xl mb-12">
          
          {/* Introduction */}
          <div className="mb-16 p-8 bg-gradient-to-r from-blue-500/10 to-blue-600/5 rounded-2xl border border-blue-400/20">
            <p className="text-xl leading-relaxed mb-6 text-gray-200">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
              information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p className="text-xl leading-relaxed text-gray-200">
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
              collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Section: Interpretation and Definitions */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
              <h2 className="text-4xl font-bold text-white">Interpretation and Definitions</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-8 rounded-2xl border border-gray-600/20">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300 flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                  Interpretation
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-8 rounded-2xl border border-gray-600/20">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300 flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                  Key Definitions
                </h3>
                <div className="space-y-3 text-gray-200">
                  <div className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-blue-400">Account:</strong> Unique account for Service access</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-blue-400">Company:</strong> Vault Software Company Ltd, Lagos</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <div><strong className="text-blue-400">Service:</strong> The Application or Website</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Definitions List */}
            <div className="mt-8 bg-gradient-to-r from-gray-700/20 to-gray-800/20 p-8 rounded-2xl border border-blue-400/10">
              <h4 className="text-xl font-semibold mb-6 text-blue-300">Complete Definitions</h4>
              <div className="grid lg:grid-cols-2 gap-4 text-gray-200">
                {[
                  { term: "Account", def: "A unique account created for You to access our Service" },
                  { term: "Affiliate", def: "Entity that controls, is controlled by or under common control" },
                  { term: "Application", def: "Vault Software, the software program provided by the Company" },
                  { term: "Company", def: "Vault Software Company Ltd, 86, Olowoira road, off Ojodu-Berger, Lagos" },
                  { term: "Cookies", def: "Small files placed on Your device containing browsing details" },
                  { term: "Country", def: "Nigeria" },
                  { term: "Device", def: "Any device that can access the Service (computer, phone, tablet)" },
                  { term: "Personal Data", def: "Information that relates to an identified or identifiable individual" },
                  { term: "Service", def: "The Application or the Website or both" },
                  { term: "Service Provider", def: "Third party processing data on behalf of the Company" },
                  { term: "Usage Data", def: "Data collected automatically during service use" },
                  { term: "Website", def: "Vault Software, accessible from https://www.vaultsoftware.cloud/" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 hover:bg-blue-400/5 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-blue-400">{item.term}:</strong>
                      <span className="ml-2">{item.def}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Data Collection */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
              <h2 className="text-4xl font-bold text-white">Data Collection & Usage</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 rounded-2xl border border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Personal Data</h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Email address</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>First and last name</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Phone number</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Address details</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 rounded-2xl border border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Usage Data</h3>
                <p className="text-gray-200 leading-relaxed">
                  Includes IP address, browser type, device info, pages visited, time spent, and diagnostic data.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 rounded-2xl border border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">App Permissions</h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Location</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Contacts list</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Camera & photos</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Other Sections */}
          {[
            {
              title: "How We Use Your Data",
              items: [
                "To provide and maintain our Service",
                "To manage Your Account",
                "For contract performance",
                "To contact You",
                "To provide offers and news",
                "To manage requests",
                "For business transfers",
                "For analytics and improvement"
              ]
            },
            {
              title: "Data Disclosure",
              items: [
                "Business Transactions",
                "Law enforcement requirements",
                "Legal obligations",
                "Protect rights, safety, and prevent wrongdoing"
              ]
            }
          ].map((section, index) => (
            <section key={index} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-700/20 to-gray-800/20 rounded-xl border border-gray-600/10 hover:border-blue-400/20 transition-all">
                    <span className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Important Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Data Security",
                content: "We use commercially acceptable means to protect Your Personal Data but cannot guarantee absolute security."
              },
              {
                title: "Children's Privacy",
                content: "We do not knowingly collect data from anyone under 13."
              },
              {
                title: "External Links",
                content: "Our Service may link to other websites not operated by us."
              },
              {
                title: "Policy Updates",
                content: "We may update our Privacy Policy and will post changes on this page."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-8 rounded-2xl border border-blue-400/10">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">{item.title}</h3>
                <p className="text-gray-200 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-blue-500/10 via-blue-400/5 to-blue-500/10 p-10 rounded-3xl border border-blue-400/20">
            <div className="flex items-center mb-8">
              <div className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></div>
              <h2 className="text-4xl font-bold text-white">Contact Us</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl border border-blue-400/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 text-xl">✉</span>
                </div>
                <h3 className="font-semibold text-blue-300 mb-2">Email</h3>
                <p className="text-blue-400">welcome@vaultsoftware.cloud</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl border border-blue-400/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 text-xl">🌐</span>
                </div>
                <h3 className="font-semibold text-blue-300 mb-2">Website</h3>
                <a href="https://www.vaultsoftware.cloud/form" className="text-blue-400 hover:text-blue-300 transition-colors">
                  vaultsoftware.cloud/contact
                </a>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl border border-blue-400/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 text-xl">📞</span>
                </div>
                <h3 className="font-semibold text-blue-300 mb-2">Phone</h3>
                <p className="text-blue-400">+2348087102888</p>
              </div>
            </div>
          </section>
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
            <p className="text-blue-300 font-medium">Secure & Professional</p>
            <p className="text-white text-xl font-bold">Your Privacy Matters</p>
          </div>
        </div>
      </div>
    </main>
  )
}