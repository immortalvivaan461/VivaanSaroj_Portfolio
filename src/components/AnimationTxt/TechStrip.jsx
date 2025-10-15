import React from "react";

const techs = [
    "⚛ React",
    "🎨 Tailwind",
    "📜 JavaScript",
    "🎯 TypeScript",
    "🎭 CSS3",
    "🖌 HTML5",
    "🌐 Node.js",
    "🍃 MongoDB",
];

export default function TechStrip() {
    return (
        <div className="relative overflow-hidden bg-black py-4">
            <div
                className="flex whitespace-nowrap animate-scroll"
                style={{
                    animation: "scroll 10s linear infinite",
                }}
            >
                {techs.map((tech, index) => (
                    <span
                        key={index}
                        className="text-white text-lg font-semibold mx-8 opacity-80 hover:opacity-100 transition"
                    >
                        {tech}
                    </span>
                ))}
                {/* Duplicate for seamless effect */}
                {techs.map((tech, index) => (
                    <span
                        key={`dup-${index}`}
                        className="text-white text-lg font-semibold mx-8 opacity-80 hover:opacity-100 transition"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* CSS keyframes inline */}
            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}
