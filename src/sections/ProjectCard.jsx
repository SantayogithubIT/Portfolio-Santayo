import React from 'react';

const ProjectCard = ({
  title,
  dateRange,
  description,
  image,
  techStack,
  websiteUrl,
  sourceUrl,
  bgColor = "bg-gray-100"
}) => {
  return (
    <div className="w-full max-w-md sm:max-w-sm md:max-w-md bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover-animation">
      {/* Project Image */}
      <div className={`${bgColor} p-2 h-64 flex items-center justify-center`}>
        <div className="w-full h-full flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
              autoPlay
              loop
            />
          ) : (
            <div className="text-gray-400 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded mx-auto mb-2"></div>
              <span className="text-sm">Project Preview</span>
            </div>
          )}
        </div>
      </div>
      {/* Project Content */}
      <div className="p-5">
        {/* Title and Date */}
        <div className="mb-2">
          <h3 className="text-lg font-bold text-white mb-0.5">{title}</h3>
          <p className="text-xs text-neutral-400">{dateRange}</p>
        </div>

        {/* Description */}
        <p className="text-neutral-300 text-sm mb-3 leading-relaxed line-clamp-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-white/10 text-neutral-300 text-xs rounded font-medium border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 flex-wrap">
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black text-sm rounded-md hover:bg-neutral-200 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Website
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white text-sm rounded-md hover:bg-white/20 transition-colors font-medium border border-white/10"
            >
              <img src="assets/logos/github.svg" alt="Github" className='w-4 h-4' />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


const FloatingElement = ({ children, className, style }) => (
  <div className={`absolute ${className}`} style={style}>
    {children}
  </div>
);

const PortfolioProjectCards = () => {
  const projects = [
    {
      title: "Monsij Boutique Website",
      dateRange: "Jan 2025 - March 2025",
      description: "A full-stack e-commerce website for a boutique, featuring product listings, shopping cart, and razorpay payment integration.",
      image: "assets/projects/monsij.gif",
      techStack: ["ReactJS", "JavaScript", "TailwindCSS", "NodeJS", "ExpressJS", "Postman", "MongoDB", "Razorpay", "Git & GitHub", "Vercel"],
      websiteUrl: "https://monsij-boutique-website-frontend.vercel.app/",
      sourceUrl: "https://github.com/SantayogithubIT/MONSIJ_Boutique_website"
    },
    {
      title: "Screenly –AI Interview Preparation App",
      dateRange: "July 2025 – Present",
      description: "Screenly is an AI-powered web application that simulates real interview experiences using video-based interactions. It analyzes resumes, generates personalized questions, and provides real-time practice to help users prepare for technical interviews efficiently. The system leverages modern NLP, face detection, and user feedback analysis to replicate real-world interview pressure and improve soft skills.",
      bgColor: "bg-gray-100",
      image: "assets/projects/screenly.gif",
      techStack: ["Next.js", "React", "GEMINI API KEY", "MongoDB", "TailwindCSS", "Postman", "Razorpay", "Shadcn UI", "Git & GitHub", "Vercel"],
      websiteUrl: "https://screenly-ai-interview-prep.vercel.app/",
      sourceUrl: "https://github.com/SantayogithubIT/Screenly--AI-Interview-Prep"
    },
    {
      title: "Analytics DashboardCarRental – Online Car Booking Platform",
      dateRange: "Mar 2024 - Apr 2024",
      description: "CarRental is a full-featured web application that allows users to browse, book, and manage car rentals online. It includes functionalities such as car listings, user registration, booking history, admin dashboard for vehicle management, and secure payment integration. The platform is built to simulate a real-world rental service with user-friendly UI and responsive design.",
      image: "assets/projects/CarRental.gif",
      techStack: ["ReactJS", "JavaScript", "TailwindCSS", "NodeJS", "ExpressJS", "Postman", "MongoDB", "Razorpay", "Git & GitHub", "Vercel"],
      websiteUrl: "https://car-rental-nine-omega.vercel.app/",
      sourceUrl: "https://github.com/priyankas77/CarRental-Website"
    },
    {
      title: "Automatic Plant Watering System",
      dateRange: "May 2023 - June 2023",
      description: "This is a smart IoT-based project designed to automatically water plants based on real-time soil moisture readings. It uses Arduino Uno, soil moisture sensors, and a relay module to control water flow, minimizing human intervention and optimizing water usage. Ideal for home gardens or agricultural setups, this system helps maintain plant health efficiently and sustainably.",
      image: "assets/projects/irrigation.jpg",
      techStack: ["Arduino Uno", "C/C++ (Arduino IDE)", "Soil Moisture Sensor", "Relay Module", "Water Pump", "Breadboard & Jump Wires"],
      websiteUrl: "#",
      sourceUrl: "https://github.com/SantayogithubIT/Automatic_Plant_Watering_System"
    }
  ];

  return (
    <section id='work' className="min-h-screen relative overflow-hidden section-spacing">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Binary Numbers */}
        <FloatingElement className="text-aqua/20 text-sm font-mono" style={{ top: '10%', left: '5%', animation: 'float 6s ease-in-out infinite' }}>
          1010101
        </FloatingElement>
        <FloatingElement className="text-mint/20 text-xs font-mono" style={{ top: '20%', right: '10%', animation: 'float 8s ease-in-out infinite reverse' }}>
          110011
        </FloatingElement>
        <FloatingElement className="text-lavender/20 text-sm font-mono" style={{ bottom: '30%', left: '8%', animation: 'float 7s ease-in-out infinite' }}>
          010101
        </FloatingElement>
        <FloatingElement className="text-coral/20 text-xs font-mono" style={{ bottom: '15%', right: '15%', animation: 'float 9s ease-in-out infinite reverse' }}>
          111000
        </FloatingElement>

        {/* Tech Icons */}
        <FloatingElement className="w-12 h-12 bg-orange/90 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ top: '15%', right: '20%', animation: 'float 10s ease-in-out infinite' }}>
          JS
        </FloatingElement>
        <FloatingElement className="w-10 h-10 bg-royal/90 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ top: '60%', left: '15%', animation: 'float 8s ease-in-out infinite reverse' }}>
          C
        </FloatingElement>
        <FloatingElement className="w-14 h-14 bg-mint/90 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ top: '25%', left: '70%', animation: 'float 12s ease-in-out infinite' }}>
          React
        </FloatingElement>
        <FloatingElement className="w-8 h-8 bg-aqua/90 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ bottom: '40%', right: '25%', animation: 'float 6s ease-in-out infinite reverse' }}>
          GH
        </FloatingElement>

        {/* Code Symbols */}
        <FloatingElement className="text-orange/30 text-2xl font-mono" style={{ top: '40%', left: '3%', animation: 'float 11s ease-in-out infinite' }}>
          {'=>'}
        </FloatingElement>
        <FloatingElement className="text-fuchsia/30 text-xl font-mono" style={{ top: '70%', right: '5%', animation: 'float 7s ease-in-out infinite reverse' }}>
          {'[]'}
        </FloatingElement>
        <FloatingElement className="text-mint/30 text-lg font-mono" style={{ bottom: '60%', left: '25%', animation: 'float 9s ease-in-out infinite' }}>
          {'{}'}
        </FloatingElement>
        <FloatingElement className="text-lavender/30 text-lg font-mono" style={{ top: '35%', right: '40%', animation: 'float 8s ease-in-out infinite reverse' }}>
          {'</>'}
        </FloatingElement>

        {/* Dots */}
        <FloatingElement className="w-2 h-2 bg-aqua rounded-full" style={{ top: '5%', left: '30%', animation: 'float 5s ease-in-out infinite' }}></FloatingElement>
        <FloatingElement className="w-3 h-3 bg-coral rounded-full" style={{ top: '80%', left: '60%', animation: 'float 7s ease-in-out infinite reverse' }}></FloatingElement>
        <FloatingElement className="w-2 h-2 bg-mint rounded-full" style={{ bottom: '10%', right: '30%', animation: 'float 6s ease-in-out infinite' }}></FloatingElement>
        <FloatingElement className="w-4 h-4 bg-orange rounded-full" style={{ top: '50%', right: '8%', animation: 'float 10s ease-in-out infinite reverse' }}></FloatingElement>
      </div>

      <div className="max-w-6xl mx-auto c-space relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-heading text-white mb-4">My Projects</h1>
          <p className="subtext max-w-2xl mx-auto">
            Discover my latest work and creative solutions built with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
};

export default PortfolioProjectCards;