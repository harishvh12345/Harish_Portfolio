import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Award } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '2+', icon: <Code2 className="text-blue-400" /> },
        { label: 'Projects Completed', value: '10+', icon: <Globe className="text-purple-400" /> },
        { label: 'Technologies', value: '15+', icon: <Cpu className="text-pink-400" /> },
        { label: 'Certifications', value: '3', icon: <Award className="text-yellow-400" /> },
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    {/* Left: Text */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Engineering <span className="text-gradient">Precision</span> & <br />
                            building for the future.
                        </h2>
                        <p className="text-text-muted leading-relaxed text-lg">
                            I specialize in building robust backend systems using ASP.NET Core and designing efficient Restful APIs.
                            My journey involves a deep dive into Artificial Intelligence and Machine Learning,
                            where I leverage algorithms to solve complex real-world problems.
                        </p>
                        <p className="text-text-muted leading-relaxed text-lg">
                            Currently based in Chennai, I'm passionate about clean architecture, performance optimization,
                            and creating seamless user experiences through intelligent code.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-4 glass-card rounded-xl border border-white/5">
                                    <div className="flex items-center gap-3 mb-2">
                                        {stat.icon}
                                        <h3 className="text-2xl font-bold text-text">{stat.value}</h3>
                                    </div>
                                    <p className="text-sm text-text-muted">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full -z-10" />
                        <div className="glass p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Code2 size={100} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Focus Areas</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-text-muted">
                                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                                    Backend System Design
                                </li>
                                <li className="flex items-center gap-3 text-text-muted">
                                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                                    API Development & Security
                                </li>
                                <li className="flex items-center gap-3 text-text-muted">
                                    <span className="w-2 h-2 rounded-full bg-pink-400" />
                                    AI Model Integration
                                </li>
                                <li className="flex items-center gap-3 text-text-muted">
                                    <span className="w-2 h-2 rounded-full bg-green-400" />
                                    Cloud Architecture (AWS)
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
