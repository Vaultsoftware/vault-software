'use client';
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

export default function IndustryReused({
    // Background and styling props
    backgroundImage = './custom-software-development-1.jpg',
    backgroundPosition = 'center top',
    overlayOpacity = 70,

    // Text content props
    mainHeading = 'Building Scalable and Intelligent Web & Mobile Applications to Power Africa\'s Digital Future',
    description = 'Empowering startups and businesses with tailored digital solutions — from design to deployment.',

    // NEW: Text styling props
    mainHeadingSize = 'text-4xl md:text-4xl lg:text-5xl',
    textTopMargin = '', 

    // Form props
    formTitle = 'Book a call with us to map your strategy',
    submitButtonText = 'Submit Form',
    submitButtonColor = 'bg-[#155DFC]',
    submitButtonHoverColor = 'hover:bg-blue-600',

    
    recaptchaSiteKey = 'YOUR_SITE_KEY_HERE',
    showRecaptcha = true,

    // Form field configurations
    formFields = {
        firstName: { show: true, label: 'First Name', placeholder: 'First name' },
        lastName: { show: true, label: 'Last Name', placeholder: 'Last name' },
        email: { show: true, label: 'Email', placeholder: 'Email' },
        country: { show: true, label: 'Country/Region', placeholder: 'Country' },
        company: { show: true, label: 'Company Name', placeholder: 'Company name' },
        projectDescription: { show: true, label: 'Project Description', placeholder: 'Describe your project...' }
    },

    // Event handlers
    onSubmit = null,
    onFormChange = null,

    // Layout props
    showForm = true,
    formPosition = 'right',
    containerMaxWidth = 'max-w-7xl'
}) {
    const recaptchaRef = useRef(null);

    const defaultHandleSubmit = (e) => {
        e.preventDefault();

        if (showRecaptcha) {
            const recaptchaValue = recaptchaRef.current?.getValue();
            if (!recaptchaValue) {
                alert("Please verify you're not a robot.");
                return;
            }
        }

        // Get form data
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        if (onSubmit) {
            onSubmit(data);
        } else {
            alert("Form submitted successfully!");
            console.log('Form data:', data);
        }
    };

    const handleInputChange = (e) => {
        if (onFormChange) {
            onFormChange(e.target.name, e.target.value);
        }
    };

    const getLayoutClasses = () => {
        switch (formPosition) {
            case 'left':
                return 'lg:flex-row-reverse';
            case 'bottom':
                return 'lg:flex-col';
            default:
                return 'lg:flex-row';
        }
    };

    return (
        <section
            className="relative h-auto min-h-screen w-full bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundPosition: backgroundPosition
            }}
        >
            {/* Dark overlay */}
            <div className={`absolute inset-0 bg-black/${overlayOpacity} z-0`}></div>

            <div className={`z-10 w-full ${containerMaxWidth} px-4 mt-20 md:px-8 flex flex-col gap-10 lg:items-center lg:justify-between ${getLayoutClasses()}`}>
                {/* Text Content */}
                <div className={`w-full ${showForm && formPosition !== 'bottom' ? 'lg:w-1/2' : ''} text-white space-y-4 ${textTopMargin} text-center lg:text-left`}>

                    <h1 className={`${mainHeadingSize} font-black leading-tight tracking-wide bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-lg`}>
                        {mainHeading}
                    </h1>

                    <p className="text-base text-gray-300 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Form */}
                {showForm && (
                    <div className={`w-full ${formPosition !== 'bottom' ? 'lg:w-1/2' : ''} bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20`}>
                        <h2 className="text-white text-xl font-bold mb-4 text-center">
                            {formTitle}
                        </h2>

                        <form onSubmit={defaultHandleSubmit} className="space-y-4 text-white text-sm">
                            {/* First Name + Last Name */}
                            {(formFields.firstName.show || formFields.lastName.show) && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {formFields.firstName.show && (
                                        <div>
                                            <label className="block mb-1">{formFields.firstName.label}</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder={formFields.firstName.placeholder}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none"
                                            />
                                        </div>
                                    )}
                                    {formFields.lastName.show && (
                                        <div>
                                            <label className="block mb-1">{formFields.lastName.label}</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder={formFields.lastName.placeholder}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Email + Country */}
                            {(formFields.email.show || formFields.country.show) && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {formFields.email.show && (
                                        <div>
                                            <label className="block mb-1">{formFields.email.label}</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder={formFields.email.placeholder}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none"
                                            />
                                        </div>
                                    )}
                                    {formFields.country.show && (
                                        <div>
                                            <label className="block mb-1">{formFields.country.label}</label>
                                            <input
                                                type="text"
                                                name="country"
                                                placeholder={formFields.country.placeholder}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Company Name */}
                            {formFields.company.show && (
                                <div>
                                    <label className="block mb-1">{formFields.company.label}</label>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder={formFields.company.placeholder}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none"
                                    />
                                </div>
                            )}

                            {/* Project Description */}
                            {formFields.projectDescription.show && (
                                <div>
                                    <label className="block mb-1">{formFields.projectDescription.label}</label>
                                    <textarea
                                        rows="3"
                                        name="projectDescription"
                                        placeholder={formFields.projectDescription.placeholder}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none resize-none"
                                    />
                                </div>
                            )}

                          

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className={`mt-2 w-full flex items-center justify-center gap-2 ${submitButtonColor} ${submitButtonHoverColor} text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-200 hover:scale-105`}
                            >
                                <FaPaperPlane className="text-white" />
                                {submitButtonText}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
}