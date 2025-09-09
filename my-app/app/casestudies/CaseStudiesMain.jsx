import React from 'react'

function CaseStudiesMain() {

    return (
        <div className='w-full px-4 md:px-8 max-w-7xl mx-auto'>
            <section className="flex flex-wrap justify-center gap-4  py-4">
                {[
                    'All', 'AI DEVELOPMENT', 'AUTO-MOBILE', 'BANKING', 'DATA ANALYTICS',
                    'EDUCATION', 'DATA ENGINEERING', 'DEDICATED TEAMS', 'FINTECH',
                    'FIXED PRICE', 'LOGISTICS', 'RETAIL-ECOMMERCE', 'WEB APPLICATION',
                    'WEB AND MOBILE APPLICATION TESTING', 'RETAIL/ECOMMERCE', 'UI/UX',
                    'HEALTHCARE', 'LOGISTICS', 'RETAIL/ECOMMERCE', 'MOBILE APP DEVELOPMENT',
                    'WEB APP DEVELOPMENT'
                ].map((item, index) => (
                    <div key={index} className="bg-gray-100 text-black px-4 py-2 rounded shadow text-sm hover:bg-gray-200 transition">
                        <h2 className="font-medium text-center whitespace-nowrap">{item}</h2>
                    </div>
                ))}
            </section>

            <section className="flex flex-col md:flex-row  gap-6 mb-8 items-center">
                <div className="w-full md:w-1/2">
                    <img
                        src="/FITCENTIVES-large-file.jpg"
                        alt="Corporate Wellness Platform"
                        className="rounded shadow w-full"
                        width={80}
                        height={80}

                    />
                </div>
                <div className="w-full md:w-1/2">

                    <h2 className="text-[#043279] font-semibold leading-relaxed text-4xl">
                        Corporate Wellness Platform for <br /> Employee Health and Engagement
                    </h2>

                    <p className='text-justify text-lg'>Vault didn't just build software this time; it teamed up with Fitcentives, a heavy-hitter in corporate wellness, to flip the script on modern employee health programs. Fitcentives was searching for clever tech that could provide custom coaching, track every step in real-time, and hand out rewards like candy at Halloween....</p>

                    <p className='bg-[#005AE0] text-white font-semibold p-3 w-96 mt-3 rounded-lg text-lg'>
                        45% Increase in Employee Engagement
                    </p>


                    <p className='bg-[#005AE0] text-white font-semibold p-3 w-[500px] mt-3 rounded-lg text-lg'>
                        50% Improvement In Wellness Tracking Accuracy
                    </p>


                    <p className='mt-4'>Core Tech: Javascript, Python, Django, Nodejs </p>
                </div>
            </section>

            <section className="flex flex-col md:flex-row  gap-6 mb-8 items-center">
                <div className="w-full md:w-1/2">

                    <h2 className="text-[#043279] font-semibold leading-relaxed text-4xl">
                        Online Therapy Platform for Secure and  Accessible Mental Health Care
                    </h2>

                    <p className='text-justify text-lg'>Talkcircle is a contemporary mental health company that sought to transform the way people handle therapy access using safe, convenient telemedicine solutions. By having licensed therapists online, the idea was to offer mental health assistance which is confidential, discreet and can be done anywhere. Since its conception, Vault has collaborated...</p>

                    <p className='bg-[#005AE0] text-white font-semibold p-3 w-96 mt-3 rounded-lg text-lg'>
                        50% Increase in Therapy Session Attendance
                    </p>

                    <p className='bg-[#005AE0] text-white font-semibold p-3 w-[500] mt-3 rounded-lg text-lg'>
                        50% Improvement In Wellness Tracking Accuracy
                    </p>

                    <p className='mt-4'>Core Tech: Javascript, Python, Django, Nodejs </p>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src="/casestudy.jpg"
                        alt="Corporate Wellness Platform"
                        className="rounded shadow w-full"
                        width={80}
                        height={80}
                    />
                </div>
            </section>

            <section className="flex flex-col md:flex-row  gap-6 mb-8 items-center">
                <div className="w-full md:w-1/2">
                    <img
                        src="/Kabyier_1000x1000.jpg"
                        alt="Corporate Wellness Platform"
                        className="rounded shadow w-full"
                        width={80}
                        height={80}

                    />
                </div>
                <div className="w-full md:w-1/2">

                    <h2 className="text-[#043279] font-semibold leading-relaxed text-4xl">
                        Integrated Healthcare Services Platform
                    </h2>

                    <p className='text-justify text-lg'>Vault didn't just build software this time; it teamed up with Fitcentives, a heavy-hitter in corporate wellness, to flip the script on modern employee health programs. Fitcentives was searching for clever tech that could provide custom coaching, track every step in real-time, and hand out rewards like candy at Halloween....</p>

                    <p className='bg-[#005AE0] text-white font-semibold p-3 w-96 mt-3 rounded-lg text-lg'>
                        45% Increase in Employee Engagement
                    </p>


                    <p className='bg-[#005AE0] text-white font-semibold p-3 w-[500px] mt-3 rounded-lg text-lg'>
                        50% Improvement In Wellness Tracking Accuracy
                    </p>


                    <p className='mt-4'>Core Tech: Javascript, Python, Django, Nodejs </p>
                </div>
            </section>

            <section className="flex flex-col md:flex-row  gap-6 mb-8 items-center">
                <div className="w-full md:w-1/2">

                    <h2 className="text-[#043279] font-semibold leading-relaxed text-4xl">
                        Comprehensive Healthcare Management Platform
                    </h2>

                    <p className='text-justify text-lg'>Talkcircle is a contemporary mental health company that sought to transform the way people handle therapy access using safe, convenient telemedicine solutions. By having licensed therapists online, the idea was to offer mental health assistance which is confidential, discreet and can be done anywhere. Since its conception, Vault has collaborated...</p>

                    <p className='bg-[#005AE0] text-white font-semibold p-3 w-96 mt-3 rounded-lg text-lg'>
                        50% Increase in Therapy Session Attendance
                    </p>

                    <p className='bg-[#005AE0] text-white font-semibold p-3 w-[500] mt-3 rounded-lg text-lg'>
                        50% Improvement In Wellness Tracking Accuracy
                    </p>

                    <p className='mt-4'>Core Tech: Javascript, Python, Django, Nodejs </p>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src="/Online-Doc-1000x1000-1.jpg"
                        alt="Corporate Wellness Platform"
                        className="rounded shadow w-full"
                        width={80}
                        height={80}
                    />
                </div>
            </section>

            <section className="flex flex-col md:flex-row  gap-6 mb-8 items-center">
                <div className="w-full md:w-1/2">
                    <img
                        src="/Dress-Up-1000x1000-1.jpg"
                        alt="Corporate Wellness Platform"
                        className="rounded shadow w-full"
                        width={80}
                        height={80}

                    />
                </div>
                <div className="w-full md:w-1/2">

                    <h2 className="text-[#043279] font-semibold leading-relaxed text-4xl">
                        Enhanced Fashion E-Commerce Platform
                    </h2>

                    <p className='text-justify text-lg'>Vault didn't just build software this time; it teamed up with Fitcentives, a heavy-hitter in corporate wellness, to flip the script on modern employee health programs. Fitcentives was searching for clever tech that could provide custom coaching, track every step in real-time, and hand out rewards like candy at Halloween....</p>

                    <p className='bg-[#005AE0] text-white font-semibold p-3 w-96 mt-3 rounded-lg text-lg'>
                        45% Increase in Employee Engagement
                    </p>


                    <p className='bg-[#005AE0] text-white font-semibold p-3 w-[500px] mt-3 rounded-lg text-lg'>
                        50% Improvement In Wellness Tracking Accuracy
                    </p>


                    <p className='mt-4'>Core Tech: Javascript, Python, Django, Nodejs </p>
                </div>
            </section>
        </div>

    )
}

export default CaseStudiesMain