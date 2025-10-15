import React from "react";

const skills = [
    { name: "MERN Full Stack Development", level: 95 },
    { name: "UI/UX Design(Figma)", level: 90 },
    { name: "Canva", level: 100 },
    { name: "Adobe XD", level: 85 },
];

export default function SkillsBar() {
    return (
        <div className="w-full max-w-lg mx-auto p-4 sm:p-6 bg-gray-300 shadow-md rounded-xl">
            <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 text-center">
                My Expertise
            </h2>
            <div className="space-y-4 sm:space-y-5">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-1">
                            <span className="text-xs sm:text-sm font-medium text-gray-700">
                                {skill.name}
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-gray-600">
                                {skill.level}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                            <div
                                className="h-2 sm:h-3 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%`, backgroundColor: "#ffbd39" }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
