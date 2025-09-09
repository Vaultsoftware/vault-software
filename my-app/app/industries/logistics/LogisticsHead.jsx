'use client'
import React from 'react'
import IndustryReused from '@/app/components/Industryreused/Industryresused';

function LogisticsHead() {
    return (
        <div>
            <IndustryReused
                welcomeText="Welcome to Logistics Innovation"
                welcomeTextColor="text-orange-300 "
                tagline="Smart Logistics Solutions for Modern Supply Chains"
                taglineBackgroundColor="bg-orange-600"
                mainHeading="Transform Your Supply Chain With Intelligent Logistics Technology"
                description="Vault empowers logistics companies to optimize operations through cutting-edge digital solutions, including real-time fleet tracking, AI-powered route optimization, and comprehensive supply chain dashboards. From automated warehouse management to last-mile delivery excellence, we give logistics providers the technology edge to stay efficient, scalable, and always ahead of customer expectations."

                // Form customization
                formTitle="Start Your Logistics Journey Today"
                submitButtonText="Get Started"
                submitButtonColor="bg-[#155DFC]"
                submitButtonHoverColor="hover:bg-orange-700"

                // Background image 
                backgroundImage="/bg6.jpg"

                // Form handling
                onSubmit={(formData) => {
                    console.log('Logistics form submitted:', formData);
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
                        placeholder: 'Tell us about your logistics needs...'
                    }
                }}
            />
        </div>
    )
}

export default LogisticsHead