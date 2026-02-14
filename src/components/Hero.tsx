import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                        Available for new projects
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text leading-[1.1]">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Intelligent</span> Backend Systems.
                    </h1>
                    <p className="text-lg text-text-muted max-w-lg leading-relaxed">
                        I'm Harish, a Backend Developer aimed at building scalable systems and AI-powered solutions.
                        Focused on high-performance ASP.NET Core APIs and machine learning integration.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all shadow-lg shadow-blue-500/25"
                        >
                            View Work <ArrowRight size={18} />
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            download="Harish_Resume.pdf"
                            target="_blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass hover:bg-gray-100 dark:hover:bg-white/10 text-text px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all border border-white/10"
                        >
                            Resume <Download size={18} />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Hero Visual/Illustration - Orbiting Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center items-center h-[400px]"
                >
                    {/* Central Core */}
                    <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 animate-pulse-slow">
                        <span className="text-3xl font-bold text-white">&lt;/&gt;</span>
                    </div>

                    {/* Orbit Ring 1 */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[240px] h-[240px] border border-blue-500/20 rounded-full"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-xs font-bold text-blue-400 border border-blue-500/30">
                            .NET
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-xs font-bold text-purple-400 border border-purple-500/30">
                            API
                        </div>
                    </motion.div>

                    {/* Orbit Ring 2 */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[360px] h-[360px] border border-purple-500/20 rounded-full"
                    >
                        <div className="absolute top-1/4 left-0 -translate-x-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-xs font-bold text-cyan-400 border border-cyan-500/30">
                            React
                        </div>
                        <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-xs font-bold text-yellow-400 border border-yellow-500/30">
                            AWS
                        </div>
                        <div className="absolute top-1/4 right-0 translate-x-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-xs font-bold text-green-400 border border-green-500/30">
                            SQL
                        </div>
                    </motion.div>

                    {/* Floating Abstract Elements */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-20 w-4 h-4 bg-blue-500 rounded-full blur-sm"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-20 left-10 w-6 h-6 bg-purple-500 rounded-full blur-md opacity-60"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
