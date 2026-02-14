import React, { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const skills = {
    "Backend & Core": ["ASP.NET Core", "C#", "Web API", "Entity Framework", "LINQ", "SQL Server"],
    "AI & Data": ["Python", "TensorFlow", "NLP", "Machine Learning", "CNN", "Data Analysis"],
    "Frontend & Cloud": ["React", "TypeScript", "HTML", "CSS", "AWS (EC2, S3)", "Git"],
};

const SkillCard = ({ title, items, index }: { title: string, items: string[], index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 p-8 transition-colors hover:border-blue-500/50 dark:hover:border-blue-500/50"
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(59, 130, 246, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 text-sm font-medium bg-white dark:bg-white/10 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md hover:bg-blue-50 dark:hover:bg-blue-500/20 hover:border-blue-200 dark:hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-200 transition-all cursor-crosshair"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative overflow-hidden bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                    >
                        Technical Proficiency
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                        My Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Arsenal</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A carefully curated stack of technologies I use to build scalable, high-performance, and intelligent applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], idx) => (
                        <SkillCard key={category} title={category} items={items as string[]} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
