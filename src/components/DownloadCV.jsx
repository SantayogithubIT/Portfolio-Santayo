{/* Download CV Button */}
import React from "react";

export default function DownloadCVButton({ onClick, downloadLink = "#" }) {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-2 text-center z-50">
      <a href={downloadLink} download onClick={onClick}>
        <button className="group relative px-4 sm:px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left pointer-events-none"></div>
          <div className="relative flex items-center gap-2">
            <svg
              className="w-4 h-4 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download CV</span>
          </div>
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 pointer-events-none"></div>
        </button>
      </a>
    </div>
  );
}
