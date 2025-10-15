export default function ProjectCard({ img, title, description, link }) {
    return (
        <div className="bg-white/10 rounded-xl shadow-lg p-4 flex flex-col items-center text-center backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <img
                src={img}
                alt={title}
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-2 bg-[#ffbd39] hover:bg-[#ffbd39] text-black text-sm sm:text-base font-medium rounded-lg shadow-md transition"
            >
                View Live
            </a>
        </div>
    );
}
