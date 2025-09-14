'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, LifeBuoy } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-black text-white w-full py-20 px-4 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {/* Logo and Description */}
        <section>
          <Link href="/" className="flex items-center group">
            <div>
              <Image
                src="/VAULT-removebg-preview.png"
                alt="Vault Logo"
                width={140}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Vault is your trusted partner for industry-focused software solutions, tailored to drive innovation and growth.
          </p>
        </section>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: 'SAAS', path: '/industries/saas' },
              { label: 'Retail/Ecommerce', path: '/industries/ecommerce' },
              { label: 'Fintech', path: '/industries/fintech' },
              { label: 'Healthcare', path: '/industries/healthcare' },
              { label: 'Education', path: '/industries/education' },
              { label: 'Logistics', path: '/industries/logistics' },
              { label: 'Real Estate', path: '/industries/real-estate' },
              { label: 'Banking', path: '/industries/banking' },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.path} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Information */}
        <nav aria-label="Information">
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
            <li><Link href="/policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <address className="not-italic">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Mail size={18} /> 
              <a href="mailto:contact@vault.com" className="hover:text-white">info@vaultsoftware.cloud</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> 
              <a href="tel:+2348087102888" className="hover:text-white">+234 808 710 2888</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> 
              86 Olowoira Road, Off Ojodu-Berger, Lagos
            </li>
           
          </ul>
        </address>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-300">
        {/* Facebook */}
        <a href="https://www.facebook.com/vaultsoftwarecompany?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.333C0 23.402.597 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.097 2.794.141v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.402 24 22.667V1.333C24 .598 23.403 0 22.675 0z" />
          </svg>
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/vaultsoftwarecompany?igsh=MWs5cHZ3bnY4ZTNxZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.324 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.324 3.608-.975.975-2.242 1.262-3.608 1.324-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.324-3.608C4.532 2.583 5.799 2.296 7.165 2.234 8.431 2.176 8.811 2.163 12 2.163zm0 1.8c-3.155 0-3.517.012-4.746.069-1.026.047-1.577.22-1.946.37-.49.19-.84.418-1.209.787-.369.369-.597.719-.787 1.209-.15.369-.323.92-.37 1.946-.057 1.229-.069 1.591-.069 4.746s.012 3.517.069 4.746c.047 1.026.22 1.577.37 1.946.19.49.418.84.787 1.209.369.369.719.597 1.209.787.369.15.92.323 1.946.37 1.229.057 1.591.069 4.746.069s3.517-.012 4.746-.069c1.026-.047 1.577-.22 1.946-.37.49-.19.84-.418 1.209-.787.369-.369.597-.719.787-1.209.15-.369.323-.92.37-1.946.057-1.229.069-1.591.069-4.746s-.012-3.517-.069-4.746c-.047-1.026-.22-1.577-.37-1.946-.19-.49-.418-.84-.787-1.209-.369-.369-.719-.597-1.209-.787-.369-.15-.92-.323-1.946-.37-1.229-.057-1.591-.069-4.746-.069zm0 3.838a5.999 5.999 0 1 1 0 11.998 5.999 5.999 0 0 1 0-11.998zm6.406-1.845a1.44 1.44 0 1 1 0 2.881 1.44 1.44 0 0 1 0-2.881z" />
          </svg>
        </a>
        {/* WhatsApp */}
        <a href="https://wa.me/2348087102888" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-500 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.16 1.6 5.97L0 24l6.22-1.63A11.92 11.92 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.5c-1.87 0-3.68-.5-5.26-1.45l-.38-.22-3.69.96.99-3.6-.24-.38A9.46 9.46 0 0 1 2.5 12c0-5.23 4.27-9.5 9.5-9.5s9.5 4.27 9.5 9.5-4.27 9.5-9.5 9.5zm5.35-7.07c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14s-.74.94-.91 1.13c-.17.2-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.59.68.22 1.29.19 1.77.12.54-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
          </svg>
        </a>
        {/* Twitter */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-sky-500 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.723 0-4.924 2.201-4.924 4.924 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.417-1.68 1.318-3.809 2.104-6.102 2.104-.396 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.21-.005-.423-.014-.634.962-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/company/vaultsoftwarecompany/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.036-1.849-3.036-1.853 0-2.137 1.445-2.137 2.939v5.666H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.601 0 4.268 2.37 4.268 5.455v6.285zM5.337 7.433c-1.144 0-2.067-.926-2.067-2.067 0-1.143.923-2.066 2.067-2.066 1.141 0 2.066.923 2.066 2.066 0 1.141-.925 2.067-2.066 2.067zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.729v20.542C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.729C24 .771 23.2 0 22.225 0z" />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Vault. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
