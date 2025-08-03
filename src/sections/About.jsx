import React, { useEffect, useRef, useState } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/Globe';
import DownloadCVButton from '../components/DownloadCV';
import Frameworks from '../components/Frameworks';

const About = () => {
    const grid2Container = useRef();
    const [time, SetTime] = useState("");
    useEffect(() => {
        const updateTime = () => {
            const KolkataTime = new Intl.DateTimeFormat('en-IN', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            }).format(new Date());
            SetTime(KolkataTime);
        }
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [])
    return (
        <section id='about' className='c-space section-spacing'>
            <h2 className='text-heading'>About me</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
                {/*Grid 1 */}
                <div className='flex items-end grid-default-color grid-1'>
                    <img
                        src="assets/dp.jpg"
                        alt=""
                        className='absolute top-15 right-0 w-full h-full object-cover scale-150 md:scale-150 lg:scale-125 rounded-xl'
                    />

                    <div className='z-10'>
                        <p className='headtext'>Hi, I'm Santayo Kundu</p>
                        <p className='subtext'>Over the last 3 years, I developed my frontend and backend dev skills to deliver responsive and user-freindly software and web applications </p>
                    </div>
                    <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
                </div>
                {/*Grid 2 */}
                <div className='grid-default-color grid-2'>
                    <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
                        <p className='flex items-end text-5xl text-gray-500'>CODE IS CRAFT</p>
                        <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="Grasp" containerRef={grid2Container} />
                        <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="Create" containerRef={grid2Container} />
                        <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Deliver" containerRef={grid2Container} />
                        <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Learn" containerRef={grid2Container} />
                        <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="Solid" containerRef={grid2Container} />
                        <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/java-icon.svg" containerRef={grid2Container} />
                        <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/html5.svg" containerRef={grid2Container} />
                        <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/react.svg" containerRef={grid2Container} />
                        <Card style={{ rotate: "5deg", top: "10%", left: "75%" }} image="assets/logos/tailwindcss.svg" containerRef={grid2Container} />
                    </div>
                </div>
                {/*Grid 3 */}
                <div className='grid-black-color grid-3'>
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>Time Zone</p>
                        <p className='subtext'> I'm based in Kolkata (IST - Indian Standard Time), and open to remote work worldwide.</p>
                        <p className='subtext mt-2' >Current Time: {time}</p>
                    </div>
                    <figure className='absolute left-[30%] top-[10%]'>
                        <Globe />
                    </figure>
                </div>
                {/*Grid 4 */}
                <div className='grid-default-color grid-4'>
                    <img
                        src="assets/Santayo Kundu.png"
                        alt="Resume Background"
                        className="absolute inset-0 w-full h-full object-cover blur-sm opacity-120 z-0"
                    />

                    {/* Content Overlay */}
                    <div className="relative z-10 flex flex-col items-center justify-center gap-4 size-full">
                        <div>
                            <p className="text-center headtext text-black">Interested?</p>
                            <DownloadCVButton downloadLink="assets/Santayo Kundu.pdf" />
                        </div>
                    </div>
                </div>
                {/*Grid 5 */}
                <div className='grid-default-color grid-5'>
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>Tech Stack</p>
                        <p className='subtext'>Proficient in full-stack development with <strong>React, Next.js, Tailwind CSS, Node.js, and JavaScript</strong> .
                            Skilled in using <strong>Git, GitHub, Postman, MySQL, MongoDB, Auth0, and Arduino </strong> , with deployments via Vercel.</p>
                    </div>
                    <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 '>
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
