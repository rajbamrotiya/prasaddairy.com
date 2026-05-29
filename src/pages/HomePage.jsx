import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Droplet, Sprout, Heart, CheckCircle2, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import HeroSlider from '@/components/HeroSlider';

const Counter = ({ target, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
            const controls = animate(0, numericTarget, {
                duration: duration,
                ease: "easeOut",
                onUpdate: (value) => setCount(Math.round(value)),
            });
            return () => controls.stop();
        }
    }, [isInView, target, duration]);

    const suffix = target.replace(/[0-9]/g, '');

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
};

const HomePage = () => {
    const { t } = useLanguage();

    return (
        <div className="overflow-hidden">
            <Helmet>
                <title>{t('home.hero_title')} - {t('home.welcome')}</title>
                <meta name="description" content="Welcome to Prasad Dairy. We provide fresh, organic, and natural dairy products directly from our farm to your table." />
            </Helmet>

            {/* Hero Slider */}
            <HeroSlider />

            {/* About Section */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">{t('home.about_us')}</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-[1.1]">
                                {t('home.know_about')}
                            </h2>
                            <p className="text-muted mb-10 leading-relaxed text-lg max-w-xl">
                                {t('home.know_about_desc')}
                            </p>

                            <Link
                                to="/about"
                                className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary group"
                            >
                                <span className="w-12 h-[1px] bg-primary group-hover:w-16 transition-all duration-300"></span>
                                {t('home.read_more')}
                            </Link>
                        </motion.div>

                        {/* Right - Images */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.5 }}
                                    alt="Fresh dairy farming"
                                    className="w-full h-full object-cover"
                                    src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_ludcnqludcnqludc-mzry3.png"
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            
                            {/* Floating Badge */}
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 bg-accent text-white p-10 rounded-2xl shadow-2xl hidden md:block"
                            >
                                <Sprout className="w-8 h-8 mb-4" />
                                <p className="text-[10px] font-bold tracking-widest uppercase">100% Pure</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-32 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">{t('home.why_choose')}</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">{t('home.why_choose_heading')}</h2>
                        </div>
                        <p className="text-muted text-sm max-w-xs mb-2">Premium quality dairy products from our farm to your family since generations.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Droplet, title: 'Pure & Fresh', desc: 'Fresh milk delivered daily from our healthy cows' },
                            { icon: Shield, title: 'Quality Assured', desc: 'Rigorous testing and quality control standards' },
                            { icon: Heart, title: 'Made with Love', desc: 'Every product crafted with care and dedication' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.8 }}
                                className="bg-white p-10 rounded-2xl border border-gray-100 hover:border-accent/20 hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="w-8 h-8 stroke-[1.5]" />
                                </div>
                                <h3 className="font-serif font-bold text-xl text-primary mb-4">{item.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-32 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full -ml-48 -mb-48 blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8">
                        {[
                            { num: '60+', label: t('home.stats_projects') },
                            { num: '3K+', label: t('home.stats_mates') },
                            { num: '20K+', label: t('home.stats_capture') },
                            { num: '2K+', label: t('home.stats_customers') },
                            { num: '100%', label: t('home.stats_satisfaction') }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="text-center"
                            >
                                <h3 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white">
                                    <Counter target={stat.num} />
                                </h3>
                                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Parallax Section Placeholder */}
            <section className="h-[60vh] relative overflow-hidden">
                <motion.img
                    initial={{ y: -100 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_fw24dqfw24dqfw24-JJQGs.png"
                    className="absolute inset-0 w-full h-[120%] object-cover brightness-75"
                    alt="Farm Life"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-4xl md:text-7xl font-serif font-bold tracking-tight text-center px-6">
                        Crafting Purity Since 1995
                    </h2>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 tracking-tight leading-tight">
                            Experience the Essence of Purity
                        </h2>
                        <p className="text-muted mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
                            Join thousands of satisfied families enjoying our fresh, organic dairy products delivered right to your door with care and integrity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/products"
                                className="px-12 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent hover:shadow-2xl transition-all duration-300"
                            >
                                Shop Our Products
                            </Link>
                            <Link
                                to="/contact"
                                className="px-12 py-5 bg-transparent text-primary border border-gray-200 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
