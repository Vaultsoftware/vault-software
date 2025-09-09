'use client'
import React from 'react'
import IndustryReused from '@/app/components/Industryreused/Industryresused';

function HealthHead() {
    return (
        <div>
            <IndustryReused
                welcomeText="Welcome to SaaS Innovation"
                welcomeTextColor="text-purple-300 "
                tagline="Powerful SaaS Solutions for Modern Businesses"
                taglineBackgroundColor="bg-purple-600"
                mainHeading="Streamline Hospital Operations Through Automation"
                description="Add simple tech tools to the hospital so daily busy work shrinks, slips and mix-ups fall, and each department moves a little faster. Whether guiding a new patient, handing out bills, or tracking supplies, these smart helpers give staff breathing room and let care move to people who need it, quicker.."

                // Form customization
                formTitle="Start Your SaaS Journey Today"
                submitButtonText="Get Started"
                submitButtonColor="bg-[#155DFC]"
                submitButtonHoverColor="hover:bg-purple-700"

                // Background image 
                backgroundImage="/bg4.jpg"

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
                        placeholder: 'Tell us about your Health needs...'
                    }
                }}
            />
        </div>
    )
}

export default HealthHead