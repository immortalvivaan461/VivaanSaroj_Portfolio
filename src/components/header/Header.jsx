import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => setIsOpen(!isOpen);

    // Sections to observe
    const sections = ["home", "about", "skills", "projects", "contact-me"];

    // Scroll spy effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const linkClasses = (id) =>
        `px-3 py-2 rounded-md text-md font-medium ${activeSection === id ? "text-[#ffbd39] font-semibold" : "text-white"
        } hover:text-[#ffbd39]`;

    const handleScrollTo = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // Close mobile menu if open
        }
    };

    return (
        <nav className="bg-black shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <NavLink
                            to="/"
                            className="text-[clamp(1.25rem,2vw+1rem,1.75rem)] font-[1000] text-white"
                        >
                            Vivaan Saroj<span className="text-[#ffbd39]">.</span>
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {sections.map((id) => (
                            <button
                                key={id}
                                onClick={() => handleScrollTo(id)}
                                className={linkClasses(id)}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-[#ffbd39] focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1 flex flex-col bg-black/80">
                    {sections.map((id) => (
                        <button
                            key={id}
                            onClick={() => handleScrollTo(id)}
                            className={linkClasses(id)}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}
