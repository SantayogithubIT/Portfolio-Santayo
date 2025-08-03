const Education = () => {
    const educationData = [
        {
            id: 1,
            institution: "Narula Institute of Technology",
            description: "Bachelor of Technology (B.Tech) – Information Technology. Studied core subjects like Data Structures, Software Engineering, and Artificial Intelligence during semesters S3 to S5.",
            year: "2022 – 2026",
            grade: "CGPA: 8.77",
            logo: "assets/logos/nit.png",
            logoStyle: "bg-white text-white text-2xl font-bold"
        },
        {
            id: 2,
            institution: "Baranagore Narendranath Vidyamandir",
            description: "Higher Secondary (10+2) with Physics, Chemistry, Mathematics, and Compuuter Science(PCMC)",
            year: "2020 – 2022",
            grade: "Percentage: 90%",
            logo: "assets/logos/narendranath.jpg",
            logoStyle: "bg-yellow-400 text-black text-xs font-bold text-center leading-tight"
        },
        {
            id: 3,
            institution: "Baranagore Ramakrishna Mission Ashrama High School",
            description: "Secondary Education (Class 10)",
            year: "2009 – 2020",
            grade: "Percentage: 87%",
            logo: "assets/logos/brkm.png",
            logoStyle: "bg-yellow-400 text-white text-sm font-bold"
        }

    ];

    return (
        <section className="c-space py-5">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-heading mb-12">Education</h2>

                <div className="space-y-0">
                    {educationData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex items-center justify-between py-6 ${index !== educationData.length - 1 ? 'border-b border-white/10' : ''
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${item.logoStyle}`}>
                                    <img src={item.logo} alt="" className="h-fit" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">
                                        {item.institution}
                                    </h3>
                                    <p className="subtext">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            <div className="subtext font-medium">
                                {item.year} | {item.grade}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;