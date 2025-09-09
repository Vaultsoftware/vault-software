'use client'
import React from 'react'
import IndustryReused from '@/app/components/Industryreused/Industryresused';

function BankingHead() {
    return (
        <div>
            <IndustryReused
                welcomeText="Welcome to Banking Innovation"
                welcomeTextColor="text-blue-300 "
                tagline="Next-Generation Banking Solutions for Financial Institutions"
                taglineBackgroundColor="bg-blue-600"
                mainHeading="Transform Banking Operations With Digital Excellence"
                description="Vault empowers financial institutions to thrive in the digital age with cutting-edge banking solutions, including secure digital platforms, AI-powered risk assessment, real-time transaction monitoring, and comprehensive customer analytics. From seamless mobile banking experiences to automated compliance workflows, we provide banks with the technology foundation to deliver exceptional service, enhance security, and drive sustainable growth."

                // Form customization
                formTitle="Start Your Banking Transformation Today"
                submitButtonText="Get Started"
                submitButtonColor="bg-[#155DFC]"
                submitButtonHoverColor="hover:bg-blue-700"

                // Background image 
                backgroundImage="/Banking-Industry.jpg"

                // Form handling
                onSubmit={(formData) => {
                    console.log('Banking form submitted:', formData);
                    //form submission logic 
                    // e.g., send to API, analytics, etc.
                }}

                // Optional: customize form fields
                formFields={{
                    firstName: { show: true, label: 'First Name', placeholder: 'Your first name' },
                    lastName: { show: true, label: 'Last Name', placeholder: 'Your last name' },
                    email: { show: true, label: 'Work Email', placeholder: 'name@company.com' },
                    country: { show: true, label: 'Country', placeholder: 'Select country' },
                    company: { show: true, label: 'Financial Institution', placeholder: 'Bank/Institution name' },
                    projectDescription: {
                        show: true,
                        label: 'Your Banking Requirements',
                        placeholder: 'Tell us about your banking transformation needs...'
                    }
                }}
            />
        </div>
    )
}

export default BankingHead