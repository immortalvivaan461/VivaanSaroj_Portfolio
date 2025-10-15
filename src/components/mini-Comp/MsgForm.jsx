import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function MsgForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);

    const onSubmit = async ({ fullname, email, contact, subject, message }) => {
        setLoading(true);
        try {
            const res = await axios.post("https://portfolio-backend-9djt.onrender.com/api/send-message", {
                fullname,
                email,
                contact,
                subject,
                message,
            });

            if (res.data.success) {
                alert("✅ Message sent successfully!");
                reset();
            }
        } catch (err) {
            console.error(err);
            alert("❌ Failed to send message. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex justify-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 w-[clamp(300px,90%,800px)] bg-black/40 p-6 rounded-xl shadow-lg"
            >
                {/* Full Name */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-white">
                        Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                        className="bg-white text-black rounded-md p-2 focus:ring-2 focus:ring-[#ffbd39] outline-none"
                        type="text"
                        {...register("fullname", {
                            required: "Full name is required",
                            minLength: { value: 3, message: "Name must be at least 3 characters" },
                            maxLength: { value: 50, message: "Name must be less than 50 characters" },
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: "Only alphabets and spaces are allowed",
                            },
                        })}
                    />
                    {errors.fullname && (
                        <span className="text-red-500 text-sm">{errors.fullname.message}</span>
                    )}
                </div>

                {/* Email + Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-white">
                            Email <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="bg-white text-black rounded-md p-2 focus:ring-2 focus:ring-[#ffbd39] outline-none"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please enter a valid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )}
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-white">Contact Number</label>
                        <input
                            className="bg-white text-black rounded-md p-2 focus:ring-2 focus:ring-[#ffbd39] outline-none"
                            type="text"
                            {...register("contact", {
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Contact number must contain only digits",
                                },
                                minLength: {
                                    value: 10,
                                    message: "Contact number must be at least 10 digits",
                                },
                                maxLength: {
                                    value: 15,
                                    message: "Contact number must not exceed 15 digits",
                                },
                            })}
                        />
                        {errors.contact && (
                            <span className="text-red-500 text-sm">{errors.contact.message}</span>
                        )}
                    </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-white">Subject</label>
                    <input
                        className="bg-white text-black rounded-md p-2 focus:ring-2 focus:ring-[#ffbd39] outline-none"
                        type="text"
                        {...register("subject", {
                            maxLength: {
                                value: 100,
                                message: "Subject should not exceed 100 characters",
                            },
                        })}
                    />
                    {errors.subject && (
                        <span className="text-red-500 text-sm">{errors.subject.message}</span>
                    )}
                </div>

                {/* Message */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-white">
                        Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                        className="bg-white text-black rounded-md p-2 focus:ring-2 focus:ring-[#ffbd39] outline-none"
                        rows={5}
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 10,
                                message: "Message must be at least 10 characters long",
                            },
                            maxLength: {
                                value: 500,
                                message: "Message should not exceed 500 characters",
                            },
                        })}
                    />
                    {errors.message && (
                        <span className="text-red-500 text-sm">{errors.message.message}</span>
                    )}
                </div>

                {/* Submit Button with Loader */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`flex justify-center items-center gap-2 bg-[#ffbd39] text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-400 transition ${loading ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                >
                    {loading ? (
                        <>
                            <svg
                                className="animate-spin h-5 w-5 text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                            <span>Sending...</span>
                        </>
                    ) : (
                        "Send Message"
                    )}
                </button>
            </form>
        </div>
    );
}
