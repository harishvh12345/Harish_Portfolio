
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, FileText, CheckCircle, Shield, Car, TrendingUp } from 'lucide-react';

const ATSVisual = () => (
    <div className="w-full h-full bg-blue-900/20 flex items-center justify-center relative overflow-hidden group-hover:bg-blue-900/30 transition-colors">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,black)]" />

        {/* Abstract Resume */}
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-64 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col gap-3 shadow-2xl relative z-10"
        >
            <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10" />
                <div className="flex flex-col gap-1.5 justify-center">
                    <div className="w-20 h-2 bg-white/10 rounded" />
                    <div className="w-12 h-2 bg-white/5 rounded" />
                </div>
            </div>
            <div className="space-y-2 mt-2">
                <div className="w-full h-2 bg-white/5 rounded" />
                <div className="w-full h-2 bg-white/5 rounded" />
                <div className="w-3/4 h-2 bg-white/5 rounded" />
            </div>
            <div className="mt-4 space-y-2">
                <div className="w-1/2 h-2 bg-white/10 rounded" />
                <div className="w-full h-16 bg-white/5 rounded-lg border border-white/5" />
            </div>

            {/* Scanning Line */}
            <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20"
            />
        </motion.div>

        {/* Floating Badges */}
        <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 right-10 bg-green-500/20 border border-green-500/30 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 z-20"
        >
            <CheckCircle size={14} className="text-green-400" />
            <span className="text-xs text-green-200 font-bold">Matched</span>
        </motion.div>

        <motion.div
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-10 bg-blue-500/20 border border-blue-500/30 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 z-20"
        >
            <FileText size={14} className="text-blue-400" />
            <span className="text-xs text-blue-200 font-bold">Resume.pdf</span>
        </motion.div>
    </div>
);

const InsuranceVisual = () => (
    <div className="w-full h-full bg-emerald-900/20 flex items-center justify-center relative overflow-hidden group-hover:bg-emerald-900/30 transition-colors">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,black)]" />

        {/* Central Hub */}
        <div className="relative z-10">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-emerald-500/20 rounded-full w-48 h-48 -m-12"
            />

            <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                className="w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center border border-emerald-500/30 backdrop-blur-sm relative"
            >
                <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
                <Car size={40} className="text-emerald-400 relative z-10" />
            </motion.div>

            {/* Orbiting Elements */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-48 h-48 -m-12"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-white/10 p-2 rounded-full border border-white/10 backdrop-blur-md">
                    <Shield size={16} className="text-emerald-300" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 bg-white/10 p-2 rounded-full border border-white/10 backdrop-blur-md">
                    <TrendingUp size={16} className="text-emerald-300" />
                </div>
            </motion.div>
        </div>
    </div>
);

const projects = [
    {
        title: 'ATS Resume Analyzer',
        description: 'An AI-powered system that evaluates resumes against job descriptions using NLP.',
        tags: ['Python', 'NLP', 'React', 'FastAPI'],
        stats: '85% Accuracy',
        link: '#',
        github: 'https://github.com/harishvh12345/ATS_Automation_backend',
        Visual: ATSVisual
    },
    {
        title: 'Insurance Claims System',
        description: 'Enterprise-grade claims processing platform with role-based security.',
        tags: ['ASP.NET Core', 'SQL Server', 'JWT', 'React'],
        stats: '10k+ Claims',
        link: '#',
        github: 'https://github.com/harishvh12345/Banking_Application_Frontend',
        Visual: InsuranceVisual
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured <span className="text-text">Work</span></h2>
                    <div className="h-1 w-20 bg-blue-500 rounded-full" />
                </motion.div>

                <div className="grid gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-blue-500/30 transition-all"
                        >
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="block h-full">
                                <div className="grid md:grid-cols-2 gap-8 h-full">
                                    {/* Project Visual */}
                                    <div className="h-64 md:h-96 w-full overflow-hidden relative">
                                        <project.Visual />
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400">
                                                {project.stats}
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-bold mb-4 text-text group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-text-muted text-lg mb-8 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-sm text-text-muted font-medium">#{tag}</span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <span className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-text inline-flex">
                                                <Github size={20} />
                                            </span>
                                            <span className="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
                                                View Case Study <ArrowUpRight size={18} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
