import React from 'react'
import OrbitingCircles from './OrbitingCircle';

const Frameworks = () => {
    const skills = [
        "arduino-icon",
        "html5",
        "git",
        "getpostman-icon",
        "java-icon",
        "javascript",
        "mongodb-icon",
        "react",
        "tailwindcss",
        "nextjs-icon",
        "css3",
        "auth0",
        "github",
        "mysql-icon",
        "nodejs",
        "vercel-icon",
        "vitejs",
    ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
            <Icons  key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={5}>
        {skills.reverse().map((skill, index) => (
            <Icons  key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
 
const Icons=({src})=>(
    <img src={src} alt="image" className='rounded-sm hover:scale-110 duration-200' />
)
export default Frameworks
