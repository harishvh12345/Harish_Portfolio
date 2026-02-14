import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const experiences = [
        {
            company: 'HCL Tech',
            client: 'World Bank Group (WBG)',
            role: 'Software Developer',
            period: 'Aug 2024 - Sep 2025',
            description: 'Spearheaded the development of a Vendor Management System backend.',
            achievements: [
                'Developed 15+ RESTful APIs using ASP.NET Core.',
                'Optimized SQL Server queries, achieving 99% system uptime.',
                'Collaborated with frontend teams to integrate complex data flows.'
            ]
        },
        {
            company: 'GAVS',
            client: 'Frontier Airlines',
            role: 'Junior .Net Developer',
            period: 'Aug 2023 - Aug 2024',
            description: 'Built an internal Attendance Management System.',
            achievements: [
                'Processed 200+ daily employee records with high accuracy.',
                'Reduced manual data entry errors by 40%.',
                'Implemented automated reporting modules.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 relative bg-background overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Journey</span></h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />
                </motion.div>

                <div className="relative">
                    {/* Central Scroll Line (Desktop) */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block" />
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 -translate-x-1/2 hidden md:block z-10"
                    />

                    {/* Left Border Line (Mobile) */}
                    <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-white/10 md:hidden" />
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 md:hidden z-10"
                    />

                    <div className="space-y-12 md:space-y-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Spacer for alternate side */}
                                <div className="hidden md:block flex-1" />

                                {/* Timeline Node */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-blue-500 z-20 mt-8 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20" />
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 pl-16 md:pl-0">
                                    <div className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden">

                                        {/* Hover Gradient Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2.5 rounded-xl bg-white/5 text-blue-400">
                                                        <Building2 size={20} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-text group-hover:text-blue-400 transition-colors">
                                                            {exp.company}
                                                        </h3>
                                                        <p className="text-sm text-blue-400 font-medium">
                                                            {exp.client}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-1.5 rounded-full bg-white/5 text-sm text-text-muted border border-white/5 flex items-center gap-2">
                                                    <Calendar size={14} />
                                                    {exp.period}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 mb-4 text-lg font-medium text-white/90">
                                                <Briefcase size={18} className="text-purple-400" />
                                                {exp.role}
                                            </div>

                                            <p className="text-text-muted mb-6 leading-relaxed">
                                                {exp.description}
                                            </p>

                                            <ul className="space-y-3">
                                                {exp.achievements.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
