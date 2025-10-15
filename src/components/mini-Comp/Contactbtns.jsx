import React from 'react'

export default function Contactbtns() {
    return (
        <div className="flex justify-center px-4">
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Address */}
                <div className="flex text-white justify-center items-center flex-col gap-4 text-center">
                    <div className="p-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-map-location-dot text-[#ffbd39] text-3xl"></i>
                    </div>
                    <p className="font-semibold">ADDRESS</p>
                    <p className="text-gray-300 text-sm sm:text-base">Roorkee, Uttarakhand</p>
                </div>

                {/* Contact Number */}
                <div className="flex text-white justify-center items-center flex-col gap-4 text-center">
                    <div className="p-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-phone text-[#ffbd39] text-3xl"></i>
                    </div>
                    <p className="font-semibold">Contact Number</p>
                    <p className="text-gray-300 text-sm sm:text-base">+91 7800879801</p>
                </div>

                {/* Email */}
                <div className="flex text-white justify-center items-center flex-col gap-4 text-center">
                    <div className="p-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-envelope text-[#ffbd39] text-3xl"></i>
                    </div>
                    <p className="font-semibold">Email Address</p>
                    <p className="text-gray-300 text-sm sm:text-base">iamvivaan461@gmail.com</p>
                </div>

                {/* Resume */}
                <div className="flex text-white justify-center items-center flex-col gap-4 text-center">
                    <div className="p-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-download text-[#ffbd39] text-3xl"></i>
                    </div>
                    <p className="font-semibold">Download Resume</p>
                    <a
                        href="/files/resume.pdf"
                        download="Vivaan_Saroj_Resume.pdf"
                        className="px-4 py-2 border-2 border-[#ffbd39] text-gray-300 font-semibold rounded-md hover:bg-yellow-400 hover:text-black transition">
                        Click here
                    </a>

                </div>

            </div>
        </div>
    )
}
