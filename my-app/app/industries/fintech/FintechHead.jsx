'use client'
import React from 'react'
import IndustryReused from '@/app/components/Industryreused/Industryresused';

function FinTechHead() {
    return (
        <div>
            <IndustryReused
                welcomeText="Welcome to SaaS Innovation"
                welcomeTextColor="text-purple-300 "
                tagline="Powerful SaaS Solutions for Modern Businesses"
                taglineBackgroundColor="bg-purple-600"
                mainHeading="Transform In-store and Online retail With Digital Tools"
                description="Vault helps stores grow by putting innovative digital tools in their hands, including easy-to-use e-commerce websites, AI recommendations, and live data dashboards. From smooth shopping journeys to chores done by robots, we give retailers the edge to stay quick, competitive, and always focused on their customers."

                // Form customization
                formTitle="Start Your SaaS Journey Today"
                submitButtonText="Get Started"
                submitButtonColor="bg-[#155DFC]"
                submitButtonHoverColor="hover:bg-purple-700"

                // Background image 
                backgroundImage="/Fintech.jpg"

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

export default FinTechHead