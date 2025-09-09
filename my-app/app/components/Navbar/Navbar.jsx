'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpenDropdown(null)
    setIsMobileMenuOpen(false)
  }, [pathname])

  const handleMouseEnter = (dropdown) => setOpenDropdown(dropdown)
  const handleMouseLeave = () => setOpenDropdown(null)
  const toggleMobileDropdown = (dropdown) =>
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setOpenDropdown(null)
  }
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  const transparentPages = ['/']
  const isTransparentAllowed = transparentPages.includes(pathname)

  const whiteTextPages = ['/terms', '/policy']
  const isWhiteTextPage = whiteTextPages.includes(pathname)

  const navbarBgClass =
    isScrolled || !isTransparentAllowed ? 'bg-black' : 'bg-transparent'

  const linkClasses = `
    relative text-white hover:text-blue-400
    transition-transform duration-200 hover:scale-105
    after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
    after:w-0 after:h-[2px] after:bg-blue-400
    after:transition-all after:duration-300 hover:after:w-full
  `

  // Always use white/inverted logo for visibility
  const logoSrc = '/VAULT-removebg-preview.png'

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBgClass}`}
    >
      <div className='max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between'>
        <Link href="/" className="flex items-center group">
          <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:bg-white/10">
            <img
              src={logoSrc}
              alt="Vault Logo"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-16 w-auto' : 'h-20 w-auto'
              } group-hover:scale-105 ${isWhiteTextPage ? 'filter brightness-0 invert' : ''}`}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden lg:flex flex-1 justify-center'>
          <ul className='flex items-center space-x-8'>
            <li><Link href="/" className={linkClasses}>Home</Link></li>
            <li><Link href="/services" className={linkClasses}>Services</Link></li>

            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`${linkClasses} flex items-center space-x-1 cursor-pointer`}>
                Industries
                <svg className='w-4 h-4 transition-transform duration-200' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </span>
              <div
                className={`absolute left-0 mt-2 w-56 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  openDropdown === 'industries'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {[['saas', 'SAAS'], ['ecommerce', 'Retail/Ecommerce'], ['fintech', 'Fintech'], ['healthcare', 'Healthcare'], ['education', 'Education'], ['logistics', 'Logistics'], ['real-estate', 'Real Estate'], ['banking', 'Banking']]
                  .map(([slug, name]) => (
                    <Link
                      key={slug}
                      href={`/industries/${slug}`}
                      className="block px-4 py-2 text-white hover:bg-blue-500 transition-colors"
                    >
                      {name}
                    </Link>
                  ))}
              </div>
            </li>

            <li><Link href="/company" className={linkClasses}>Company</Link></li>
            <li><Link href="/casestudies" className={linkClasses}>Case Studies</Link></li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        {pathname !== '/form' && (
          <Link
            href="/form"
            className="hidden lg:flex items-center gap-2 bg-[#3787FF] hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-transform duration-200 hover:scale-105"
          >
            Get in Touch
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="lg:hidden text-white p-2">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black bg-opacity-95 backdrop-blur-sm transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 visible max-h-screen'
            : 'opacity-0 -translate-y-4 invisible max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          <Link href="/" className={linkClasses} onClick={closeMobileMenu}>Home</Link>
          <Link href="/services" className={linkClasses} onClick={closeMobileMenu}>Services</Link>

          <div>
            <button
              onClick={() => toggleMobileDropdown('industries')}
              className={`${linkClasses} flex justify-between w-full`}
            >
              Industries
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'industries' ? 'rotate-180' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
              </svg>
            </button>

            <div
              className={`pl-4 space-y-2 mt-2 transition-all duration-300 overflow-hidden ${
                openDropdown === 'industries' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {[['saas', 'SAAS'], ['ecommerce', 'Retail/Ecommerce'], ['fintech', 'Fintech'], ['healthcare', 'Healthcare'], ['education', 'Education'], ['logistics', 'Logistics'], ['real-estate', 'Real Estate'], ['banking', 'Banking']]
                .map(([slug, name]) => (
                  <Link
                    key={slug}
                    href={`/industries/${slug}`}
                    className={linkClasses}
                    onClick={closeMobileMenu}
                  >
                    {name}
                  </Link>
                ))}
            </div>
          </div>

          <Link href="/company" className={linkClasses} onClick={closeMobileMenu}>Company</Link>
          <Link href="/casestudies" className={linkClasses} onClick={closeMobileMenu}>Case Studies</Link>

          {pathname !== '/form' && (
            <Link
              href="/form"
              className="block bg-[#3787FF] hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-center flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 mt-4"
              onClick={closeMobileMenu}
            >
              Get in Touch
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
