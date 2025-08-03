const Experience = () => {
  const experienceData = [
    {
      id: 1,
      position: "Project Engineer (Academic Role)",
      company: "Academic Projects",
      duration: "May 2023 - June 2025",
      description: "Led backend development for 3+ full-stack projects, achieving a 95% API test pass rate and 95% on-time sprint delivery using Agile methods. Developed and deployed e-commerce and AI-driven web apps using the MERN stack, integrating secure payment gateways and real-time AI features.",
      logo: "PE",
      logoStyle: "bg-blue-600 text-white text-sm font-bold"
    }
  ];

  return (
    <section className="c-space py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-heading mb-12">Experience</h2>
        
        <div className="space-y-0">
          {experienceData.map((item, index) => (
            <div 
              key={item.id}
              className={`flex items-start justify-between py-6 ${
                index !== experienceData.length - 1 ? 'border-b border-white/10' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${item.logoStyle}`}>
                  {item.logo}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.position}
                  </h3>
                  <p className="text-base text-neutral-300 mb-2">
                    {item.company}
                  </p>
                  <p className="subtext leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="subtext font-medium ml-4 flex-shrink-0">
                {item.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Awards = () => {
  const awardsData = [
    {
      id: 1,
      title: "3rd Prize - Model Mania Competition",
      organization: "Academic Competition",
      description: "Received 3rd prize in 'Model Mania' competition for innovative project presentation and technical excellence.",
      icon: "🏆",
      type: "Competition"
    },
    {
      id: 2,
      title: "2nd Prize - JIS Spirit Band Performance", 
      organization: "Cultural Event",
      description: "Received 2nd prize in 'JIS Spirit' band performance showcasing musical talents and team coordination.",
      icon: "🎵",
      type: "Cultural"
    },
    {
      id: 3,
      title: "Java Programming Certificate",
      organization: "Professional Certification",
      description: "Completed comprehensive Java programming certification demonstrating proficiency in object-oriented programming.",
      icon: "📜",
      type: "Certification"
    },
    {
      id: 4,
      title: "NPTEL C++ Programming Certificate",
      organization: "IIT/IISc Online Learning",
      description: "Successfully completed NPTEL C++ Programming course with hands-on coding experience and algorithmic problem solving.",
      icon: "📜",
      type: "Certification"
    }
  ];

  return (
    <section className="c-space py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-heading mb-12">Awards & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awardsData.map((item) => (
            <div 
              key={item.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover-animation"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-white/10 text-neutral-300 text-xs rounded font-medium border border-white/10">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-300 mb-3">
                    {item.organization}
                  </p>
                  <p className="subtext leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceAndAwards = () => {
  return (
    <>
      <Experience />
      <Awards />
    </>
  );
};

export default ExperienceAndAwards;