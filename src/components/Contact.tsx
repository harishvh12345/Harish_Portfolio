import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const FloatingInput = ({ label, name, value, onChange, type = "text", required = false }: any) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="relative mt-2">
            <motion.label
                initial={false}
                animate={{
                    y: focused || value ? -28 : 0,
                    scale: focused || value ? 0.85 : 1,
                }}
                className={`absolute left-0 top-3 pointer-events-none origin-left transition-colors duration-200 ${focused ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                    }`}
            >
                {label}
            </motion.label>
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    required={required}
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-gray-300 dark:border-white/10 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors resize-none"
                    style={{ whiteSpace: 'pre-line' }}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    required={required}
                    className="w-full bg-transparent border-b-2 border-gray-300 dark:border-white/10 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                />
            )}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focused ? 1 : 0 }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 dark:bg-blue-400 origin-center"
            />
        </div>
    );
};

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    const springConfig = { stiffness: 100, damping: 30 };
    const rotateXSpring = useSpring(rotateX, springConfig);
    const rotateYSpring = useSpring(rotateY, springConfig);

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width - 0.5) * 100; // Limit range
        const yPct = (mouseY / height - 0.5) * 100;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setStatus({ type: null, message: '' });

        try {
            // Keys are now securely loaded from environment variables
            const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);

            setStatus({
                type: 'success',
                message: 'Sent!'
            });
            setFormData({ user_name: '', user_email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Failed.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-gray-50 dark:bg-black flex items-center justify-center min-h-screen transition-colors duration-300">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent dark:from-[#0a0a0a] dark:via-[#111] dark:to-[#0a0a0a] transition-colors duration-300" />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-xl"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            width: Math.random() * 200 + 50,
                            height: Math.random() * 200 + 50,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10" style={{ perspective: 1000 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ rotateX: rotateXSpring, rotateY: rotateYSpring }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="max-w-5xl mx-auto bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] grid md:grid-cols-2 gap-12 items-center transition-colors duration-300"
                >
                    {/* Left Side: Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                Let's create something <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">extraordinary.</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                Whether it's a new project, a job opportunity, or just a chat about tech — I'm all ears.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 group cursor-pointer hover:text-blue-600 dark:hover:text-white transition-colors">
                                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 group-hover:scale-110 transition-all">
                                    <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">Email me at</p>
                                    <p className="font-medium text-gray-900 dark:text-gray-200">harish.vh12345@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 group cursor-pointer hover:text-purple-600 dark:hover:text-white transition-colors">
                                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 group-hover:scale-110 transition-all">
                                    <MapPin className="text-purple-600 dark:text-purple-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">Based in</p>
                                    <p className="font-medium text-gray-900 dark:text-gray-200">Chennai, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-gray-50 dark:bg-black/20 p-8 rounded-2xl border border-gray-100 dark:border-white/5 relative group transition-colors duration-300">
                        {/* Decorative glow behind form */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            {/* Hidden fields to match template variables exactly */}
                            <input type="hidden" name="name" value={formData.user_name} />
                            <input type="hidden" name="email" value={formData.user_email} />
                            <input type="hidden" name="title" value="Portfolio Inquiry" />

                            <FloatingInput
                                label="Name"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                required
                            />
                            <FloatingInput
                                label="Email"
                                name="user_email"
                                type="email"
                                value={formData.user_email}
                                onChange={handleChange}
                                required
                            />
                            <FloatingInput
                                label="Message"
                                name="message"
                                type="textarea"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                            <div className="pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={loading}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative group"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                                    <AnimatePresence mode='wait'>
                                        {loading ? (
                                            <motion.div
                                                key="loading"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="flex items-center gap-2"
                                            >
                                                <Loader2 size={20} className="animate-spin" /> Sending...
                                            </motion.div>
                                        ) : status.type === 'success' ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="flex items-center gap-2"
                                            >
                                                <CheckCircle size={20} /> Sent Successfully!
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="default"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="flex items-center gap-2"
                                            >
                                                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
