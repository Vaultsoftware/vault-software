'use client'
import React from 'react'
import IndustryReused from '@/app/components/Industryreused/Industryresused';

function EstateHead() {
    return (
        <div>
            <IndustryReused
                welcomeText="Welcome to Real Estate Innovation"
                welcomeTextColor="text-orange-300 "
                tagline="Powerful PropTech Solutions for Modern Real Estate"
                taglineBackgroundColor="bg-orange-600"
                mainHeading="Transform Real Estate Operations With Digital Excellence"
                description="Vault empowers real estate professionals and property companies to thrive in the digital marketplace through advanced property management systems, virtual tour technologies, AI-powered property valuations, and comprehensive CRM platforms. From seamless property listing management to automated tenant screening and smart building analytics, we provide the technology foundation to streamline operations, enhance client experiences, and drive sustainable growth in the real estate industry."

                // Form customization
                formTitle="Start Your PropTech Journey Today"
                submitButtonText="Get Started"
                submitButtonColor="bg-[#155DFC]"
                submitButtonHoverColor="hover:bg-orange-700"

                // Background image 
                backgroundImage="/bg-real-estate.jpg"

                // Form handling
                onSubmit={(formData) => {
                    console.log('Real Estate form submitted:', formData);
                    //form submission logic 
                    // e.g., send to API, analytics, etc.
                }}

                // Optional: customize form fields
                formFields={{
                    firstName: { show: true, label: 'First Name', placeholder: 'Your first name' },
                    lastName: { show: true, label: 'Last Name', placeholder: 'Your last name' },
                    email: { show: true, label: 'Work Email', placeholder: 'name@company.com' },
                    country: { show: true, label: 'Country', placeholder: 'Select country' },
                    company: { show: true, label: 'Real Estate Company/Agency', placeholder: 'Agency or company name' },
                    projectDescription: {
                        show: true,
                        label: 'Your Real Estate Requirements',
                        placeholder: 'Tell us about your PropTech needs...'
                    }
                }}
            />
        </div>
    )
}

export default EstateHead