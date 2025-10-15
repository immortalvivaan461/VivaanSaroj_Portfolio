import React from "react";


export default function SkillCard({ title, skills }) {
    return (
        <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-white shadow-lg backdrop-blur-md transition-transform hover:scale-105 hover:shadow-cyan-500/40">
            <h3 className="text-xl font-semibold border-b-2 border-red-500 pb-2 mb-3">
                {title}
            </h3>
            <ul className="space-y-2">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="pl-6 relative before:content-['✔'] before:absolute before:left-0 before:text-orange-500"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}
