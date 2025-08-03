import React, { useState, useEffect } from 'react';


const AnimatedCodeStats = () => {
    const [activeCard, setActiveCard] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const stats = [
        {
            title: "GitHub Repos",
            count: 28,
            platform: "GitHub",
            color: "from-gray-600 to-gray-800",
            icon: "assets/logos/github.svg",
            description: "Open source contributions",
            url: "https://github.com/SantayogithubIT",
        },
        {
             title: "Problems Solved",
            count: 426,
            platform: "Codolio",
            color: "from-orange-400 to-red-500",
            icon: "assets/logos/codolio.svg",
            description: "Algorithm challenges completed",
            url: "https://codolio.com/profile/Santayok04",
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % stats.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [stats.length]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
            <div className="relative w-80 h-full" onMouseMove={handleMouseMove}>
                {/* Background glow effect */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                    }}
                ></div>

                {/* Main container */}
                <div className="relative bg-black/20 backdrop-blur-lg rounded-3xl border border-white/10 p-6 h-full overflow-hidden">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Coding Journey
                            </span>
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Stats cards */}
                    <div className="space-y-4">
                        {stats.map((stat, index) => (
                            <a
                                key={index}
                                href={stat.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block relative p-4 rounded-2xl border transition-all duration-500 cursor-pointer
    ${activeCard === index
                                        ? 'border-white/30 bg-white/10 scale-105 shadow-2xl'
                                        : 'border-white/10 bg-white/5 hover:bg-white/8'}
  `}
                                onMouseEnter={() => setActiveCard(index)}
                                style={{
                                    transform: activeCard === index
                                        ? `translateY(-5px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`
                                        : ''
                                }}
                            >

                                {/* Card background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 rounded-2xl`}></div>

                                <div className="relative flex items-center justify-between">
                                    {/* Platform Logo + Text */}
                                    <div className="flex items-center space-x-3">
                                        <a
                                            href={stat.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={`Visit ${stat.platform}`}
                                            className="text-2xl hover:scale-110 transition-transform duration-200"
                                        >
                                            {stat.icon.endsWith(".svg") ? (
                                                <img src={stat.icon} alt={`${stat.platform} logo`} className="w-6 h-6" />
                                            ) : (
                                                <span>{stat.icon}</span>
                                            )}
                                        </a>
                                        <div>
                                            <div className="text-white font-semibold text-sm">{stat.title}</div>
                                            <div className="text-gray-400 text-xs">{stat.platform}</div>
                                        </div>
                                    </div>

                                    {/* Count + Description */}
                                    <div className="text-right">
                                        <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                            {activeCard === index ? <CountUpAnimation target={stat.count} /> : stat.count}
                                        </div>
                                        <div className="text-gray-400 text-xs">{stat.description}</div>
                                    </div>
                                </div>

                                {/* Progress bar */}
                                <div className="mt-3 w-full bg-white/10 rounded-full h-1">
                                    <div
                                        className={`h-1 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000`}
                                        style={{ width: activeCard === index ? "100%" : "0%" }}
                                    ></div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
                            style={{
                                top: `${20 + i * 15}%`,
                                left: `${10 + i * 15}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: "2s",
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Count up animation component
const CountUpAnimation = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 1000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target]);

    return <span>{count}</span>;
};

export default AnimatedCodeStats;
