import React from 'react'
import SkillCard from '../mini-Comp/SkillCard'

export default function SkillsSection() {
    return (
        <section id='skills' data-aos="fade-up" className="py-8 lg:py-0 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white pt-16 pb-8">
                    🚀 My Skills
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left md:pb-18">
                    <SkillCard
                        title="💻 Front-End Development"
                        skills={[
                            "React.js (Hooks, State, Props, Component Architecture)",
                            "Tailwind CSS (Utility-first Styling, Responsive Design)",
                            "JavaScript (ES6+, Async/Await, DOM, Fetch API)",
                            "Modern UI/UX Implementation & Reusable Components"
                        ]}
                    />

                    <SkillCard
                        title="🟢 Back-End Development"
                        skills={[
                            "Node.js & Express.js (API development)",
                            "RESTful APIs & JSON handling",
                            "Authentication with JWT",
                            "Error Handling & Middleware"
                        ]}
                    />

                    <SkillCard
                        title="🍃 Database"
                        skills={[
                            "MongoDB & Mongoose",
                            "Schema Design & Relationships",
                            "Aggregation Framework",
                            "Atlas Deployment & Cloud Database"
                        ]}
                    />

                    <SkillCard
                        title="🎨 UI/UX & Soft Skills"
                        skills={[
                            "Figma (Wireframing, Prototyping, Component Design)",
                            "Responsive UI/UX Design Principles",
                            "Design-to-Code Implementation (React + Tailwind)",
                            "Clean Layouts, Typography & Color Systems"
                        ]}
                    />


                    <SkillCard
                        title="🖥Other Skills"
                        skills={[
                            "Online Marketing & Digital Presence",
                            "Branding & Visual Identity (Logo, Thumbnails, Posters, Ads)",
                            "Additional Programming Languages (Java, C++, C, Python)"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

