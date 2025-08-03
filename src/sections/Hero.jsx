
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'


const Hero = () => {
  return (
    <section id="home" className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
     <div className='z-10 w-full'>
        <HeroText />
      </div>

      {/* Background behind everything */}
      <div className='absolute inset-0 z-0'>
        <ParallaxBackground />
      </div>
        {/* SVG Divider at Bottom */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      className="relative block w-full h-24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#020617"
        d="M0,224L60,208C120,192,240,160,360,138.7C480,117,600,107,720,112C840,117,960,139,1080,160C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </svg>
  </div>
    </section>
  )
}

export default Hero
