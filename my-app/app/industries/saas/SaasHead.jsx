'use client'
import React from 'react'
import IndustryReused from '@/app/components/Industryreused/Industryresused';

function SaasHead() {
    return (
        <div>
            <IndustryReused
                welcomeText="Welcome to SaaS Innovation"
                welcomeTextColor="text-purple-300 "
                tagline="Powerful SaaS Solutions for Modern Businesses"
                taglineBackgroundColor="bg-purple-600"
                mainHeading="Deliver High-Performance SaaS Applications at Scale"
                description="Launch speedy, high-performance online apps that stay quick, safe, and dependable, no matter how many people log in at once. Our system grows with you, manages heavy tasks, and keeps every screen-phone, tablet, or laptop-running smoothly wherever users are."

                // Form customization
                formTitle="Start Your SaaS Journey Today"
                submitButtonText="Get Started"
                submitButtonColor="bg-[#155DFC]"
                submitButtonHoverColor="hover:bg-purple-700"

                // Background image (update path)
                backgroundImage="/saas-min.jpg"

                // Form handling
                onSubmit={(formData) => {
                    console.log('SaaS form submitted:', formData);
                    //form submission logic 
                    // e.g., send to API, analytics, etc.
                }}

                // Optional: customize form fields
                formFields={{
                    firstName: { show: true, label: 'First Name', placeholder: 'Your first name' },
                    lastName: { show: true, label: 'Last Name', placeholder: 'Your last name' },
                    email: { show: true, label: 'Work Email', placeholder: 'name@company.com' },
                    country: { show: true, label: 'Country', placeholder: 'Select country' },
                    company: { show: true, label: 'Company', placeholder: 'Company name' },
                    projectDescription: {
                        show: true,
                        label: 'Your Requirements',
                        placeholder: 'Tell us about your SaaS needs...'
                    }
                }}
            />
        </div>
    )
}

export default SaasHead