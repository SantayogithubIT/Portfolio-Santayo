import React from 'react'
import { FlipWord } from './FlipWord'
import { motion } from 'motion/react'
const HeroText = () => {
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <section className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
            {/* Desktop view */}
            <div className='hidden md:flex flex-col space-y-4'>
                <motion.h1 className='text-4xl font-medium'
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}>
                    Hi I'm Santayo
                </motion.h1>
                <div className='flex flex-col items-start space-y-3'>
                    <motion.p className='text-5xl font-medium text-neutral-300'
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.2 }}>
                        A Developer Dedicated to growing
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.5 }}>
                        <FlipWord
                            words={["Secure", "Modern", "Scalable", "User-friendly"]}
                            className="font-black text-white text-8xl"
                        />
                    </motion.div>
                    <motion.p className='text-4xl font-medium text-neutral-300'
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.8 }}>Web Solutions</motion.p>
                </div>
            </div>

            {/* Mobile view */}
            <div className='flex flex-col md:hidden space-y-3'>
                <motion.h1 className='text-3xl font-medium'
                 variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1}}
                 >
                    Hi I'm Santayo</motion.h1>
                <motion.p className='text-2xl font-medium text-neutral-300'
                  variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1.2}}>
                    Growing Developer Building
                </motion.p>
                <motion.div
                  variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1.5}}>
                <FlipWord
                    words={["Secure", "Modern", "Scalable", "User-friendly"]}
                    className="font-bold text-white text-5xl"
                />
                </motion.div>
                <motion.p className='text-2xl font-medium text-neutral-300'
                variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1.8}}
                    >Web Solutions</motion.p>
            </div>
        </section>
    )
}

export default HeroText

