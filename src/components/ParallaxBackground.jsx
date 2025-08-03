import React from 'react'
import FloatingCodingPlatforms from './FloatingCodingPlatforms';
import AnimatedCodeStats from './FloatingCodingPlatforms';

const ParallaxBackground = () => {

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)
          `
        }}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0">
        {[
          { symbol: '{', color: 'text-cyan-400', size: 'text-3xl' },
          { symbol: '</', color: 'text-purple-400', size: 'text-2xl' },
          { symbol: '()', color: 'text-green-400', size: 'text-4xl' },
          { symbol: '=>', color: 'text-yellow-400', size: 'text-2xl' },
          { symbol: '[]', color: 'text-pink-400', size: 'text-3xl' },
          { symbol: '/>', color: 'text-blue-400', size: 'text-2xl' }
        ].map((item, i) => (
          <div
            key={i}
            className={`absolute ${item.color} ${item.size} font-mono font-bold pointer-events-none`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              filter: 'drop-shadow(0 0 10px currentColor)',
              animation: `float${i % 3} ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          >
            {item.symbol}
          </div>
        ))}
      </div>

      {/* Binary Rain */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => {
          const binaryColumn = Array.from({ length: 15 }, () =>
            Math.random() > 0.5 ? '1' : '0'
          );

          return (
            <div
              key={i}
              className="absolute font-mono text-xs sm:text-sm opacity-40"
              style={{
                left: `${10 + i * 15}%`,
                color: i % 2 === 0 ? '#00ff41' : '#00d4ff',
                textShadow: '0 0 10px currentColor',
                top: '20%'
              }}
            >
              {binaryColumn.map((bit, j) => (
                <div key={j} className="mb-1">
                  {bit}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Glowing Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: ['#00d4ff', '#ff6b6b', '#4ecdc4', '#45b7d1'][i % 4],
              boxShadow: `0 0 20px ${['#00d4ff', '#ff6b6b', '#4ecdc4', '#45b7d1'][i % 4]}`,
              animation: `particleGlow ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      {/* Floating */}
      <AnimatedCodeStats/>

      {/* Floating Code Blocks */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { code: 'React', pos: { right: '80%', top: '30%' } },
          { code: 'Java', pos: { left: '50%', top: '60%' } },
          { code: 'JS', pos: { left: '15%', top: '70%' } },
          { code: 'C', pos: { right: '60%', top: '20%' } }
        ].map((item, i) => (
          <div
            key={i}
            className="absolute text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-cyan-500/30 rounded-lg text-cyan-300 font-mono"
            style={{
              ...item.pos,
              animation: `codeBlockFloat ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`,
              boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)'
            }}
          >
            {item.code}
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes binaryFall {
          from { transform: translateY(-100vh) rotateZ(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          to { transform: translateY(100vh) rotateZ(360deg); opacity: 0; }
        }

        @keyframes float0 {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-20px) rotateZ(10deg); }
        }

        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-15px) rotateZ(-8deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-25px) rotateZ(12deg); }
        }

        @keyframes particleGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }

        @keyframes terminalFloat {
          0%, 100% { transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(0px); }
          50% { transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(-10px); }
        }

        @keyframes codeBlockFloat {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-15px) rotateX(5deg); }
        }

        @keyframes hubFloat {
          0%, 100% { transform: perspective(1000px) rotateY(-20deg) rotateX(10deg) translateY(0px); }
          50% { transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(-10px); }
        }
        
        @keyframes centralGlow {
          0% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        @keyframes centerPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.6), inset 0 0 20px rgba(255,255,255,0.2); }
          50% { box-shadow: 0 0 50px rgba(147, 51, 234, 1), inset 0 0 30px rgba(255,255,255,0.3); }
        }
        
        @keyframes orbit1 {
          0% { transform: translate(-50%, 0) rotate(0deg); }
          100% { transform: translate(-50%, 0) rotate(360deg); }
        }
        
        @keyframes orbit2 {
          0% { transform: translate(0, -50%) rotate(90deg); }
          100% { transform: translate(0, -50%) rotate(450deg); }
        }
        
        @keyframes orbit3 {
          0% { transform: translate(-50%, 0) rotate(180deg); }
          100% { transform: translate(-50%, 0) rotate(540deg); }
        }
        
        @keyframes orbit4 {
          0% { transform: translate(0, -50%) rotate(270deg); }
          100% { transform: translate(0, -50%) rotate(630deg); }
        }
      `}</style>
    </div>
  )
}

export default ParallaxBackground;