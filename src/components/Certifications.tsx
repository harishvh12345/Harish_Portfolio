import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CheckCircle, Trophy } from 'lucide-react';

const certifications = [
    {
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: '2023',
        icon: 'AWS',
        color: 'from-orange-400 to-yellow-600',
        textColor: 'text-yellow-500',
        borderColor: 'group-hover:border-yellow-500/50',
        shadowColor: 'group-hover:shadow-yellow-500/20'
    },
    {
        name: 'Microsoft Certified: C# Specialist',
        issuer: 'Microsoft',
        date: '2022',
        icon: 'MS',
        color: 'from-blue-400 to-blue-600',
        textColor: 'text-blue-500',
        borderColor: 'group-hover:border-blue-500/50',
        shadowColor: 'group-hover:shadow-blue-500/20'
    },
    {
        name: 'Best Performance Award',
        issuer: 'HCL Tech',
        date: '2023',
        icon: 'HCL',
        color: 'from-purple-400 to-pink-600',
        textColor: 'text-purple-500',
        borderColor: 'group-hover:border-purple-500/50',
        shadowColor: 'group-hover:shadow-purple-500/20'
    }
];

const CertificationCard = ({ cert, index }: { cert: any, index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            style={{
                perspective: 1000,
            }}
            className="w-full h-full"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`relative w-full h-[300px] rounded-2xl bg-gradient-to-br from-white/80 to-white/40 dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 group ${cert.borderColor} ${cert.shadowColor}`}
            >
                {/* Holographic Shine Effect */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none overflow-hidden"
                    style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 55%, transparent 60%)',
                        filter: 'blur(5px)',
                    }}
                />

                {/* Floating Content */}
                <div style={{ transform: "translateZ(50px)" }} className="flex flex-col h-full justify-between relative z-10">
                    <div>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} p-0.5 mb-6 shadow-lg`}>
                            <div className="w-full h-full bg-white dark:bg-[#111] rounded-[14px] flex items-center justify-center">
                                <Trophy className={cert.textColor} size={32} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                            {cert.name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                            {cert.issuer}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/10">
                        <span className="text-sm font-semibold text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full">
                            {cert.date}
                        </span>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${cert.textColor} bg-gray-50 dark:bg-white/5 group-hover:bg-white dark:group-hover:bg-white/20`}>
                            <CheckCircle size={20} />
                        </div>
                    </div>
                </div>

                {/* Metallic Border Gradient */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-100 mask-image-card pointer-events-none" />
            </motion.div>
        </motion.div>
    );
};

const Certifications = () => {
    return (
        <section id="certifications" className="py-32 relative overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-300">
            {/* Ambient Lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-yellow-500"></span>
                        <span className="text-yellow-600 dark:text-yellow-400 font-semibold tracking-wider text-sm uppercase"></span>
                        <span className="h-[1px] w-12 bg-gradient-to-r from-yellow-500 to-transparent"></span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                        Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Achievements</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Validation of expertise and commitment to excellence in software engineering.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-10 perspective-1000">
                    {certifications.map((cert, idx) => (
                        <CertificationCard key={idx} cert={cert} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
