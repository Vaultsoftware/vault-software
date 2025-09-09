'use client'
import React from 'react'
import IndustryReused from '@/app/components/Industryreused/Industryresused';

function EducationHead() {
    return (
        <div>
            <IndustryReused
                welcomeText="Welcome to SaaS Innovation"
                welcomeTextColor="text-purple-300 "
                tagline="Powerful SaaS Solutions for Modern Businesses"
                taglineBackgroundColor="bg-purple-600"
                mainHeading="LASOP Software Solutions"
                description="At LASOP, we build flexible online learning tools that keep lessons fun, reachable, and hands-on. Whether it’s lively Virtual classroom solutions or smart, AI-guided course notes, our easy-to-use EdTech is pushing education forward."

                // Form customization
                formTitle="Start Your Education Journey"
                submitButtonText="Get Started"
                submitButtonColor="bg-[#155DFC]"
                submitButtonHoverColor="hover:bg-purple-700"

                // Background image 
                backgroundImage="/education.jpeg"

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
                        placeholder: 'Tell us about your Education needs...'
                    }
                }}
            />
        </div>
    )
}

export default EducationHead