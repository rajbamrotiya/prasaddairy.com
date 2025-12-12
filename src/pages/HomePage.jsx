import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Droplet, Sprout, Heart, CheckCircle2, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import HeroSlider from '@/components/HeroSlider';

const HomePage = () => {
    const { t } = useLanguage();

    return (
        <>
            <Helmet>
                <title>{t('home.hero_title')} - {t('home.welcome')}</title>
                <meta name="description" content="Welcome to Prasad Dairy. We provide fresh, organic, and natural dairy products directly from our farm to your table." />
            </Helmet>

            {/* Hero Slider */}
            <HeroSlider />

            {/* About Section */}
            <section className="py-24 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('home.about_us')}</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#263238] mb-6 leading-tight">
                                {t('home.know_about')}
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-[#0065B3] to-transparent mb-6"></div>
                            <p className="text-[#546E7A] mb-8 leading-relaxed text-lg">
                                {t('home.know_about_desc')}
                            </p>

                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-[#0065B3] text-white rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#004a8a] transition-colors"
                            >
                                {t('home.read_more')} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        {/* Right - Images */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mt-12">
                                    <img
                                        alt="Happy female farmer holding milk glass"
                                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                                        src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_fw24dqfw24dqfw24-JJQGs.png"
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="Cows grazing in green field"
                                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                                        src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_ludcnqludcnqludc-mzry3.png"
                                    />
                                    <div className="bg-[#0065B3] rounded-full w-16 h-16 flex items-center justify-center text-white absolute bottom-0 right-10 shadow-xl z-10 hover:scale-110 transition-transform">
                                        <Sprout className="w-8 h-8" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-[#FFFDE7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('home.why_choose')}</span>
                        <h2 className="text-4xl font-serif text-[#263238] mb-4">{t('home.why_choose_heading')}</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#0065B3] to-transparent mx-auto mb-6"></div>
                        <p className="text-[#546E7A] max-w-2xl mx-auto">Premium quality dairy products from our farm to your family</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Droplet, title: 'Pure & Fresh', desc: 'Fresh milk delivered daily from our healthy cows' },
                            { icon: Shield, title: 'Quality Assured', desc: 'Rigorous testing and quality control standards' },
                            { icon: Heart, title: 'Made with Love', desc: 'Every product crafted with care and dedication' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-xl text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="bg-[#0065B3]/10 p-4 rounded-full text-[#0065B3] w-fit mx-auto mb-4 group hover:bg-[#0065B3] hover:text-white transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-serif font-bold text-lg text-[#263238] mb-2">{item.title}</h3>
                                <p className="text-[#546E7A] text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-br from-[#0065B3] to-[#004a8a] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {[
                            { num: '20+', label: t('home.stats_projects') },
                            { num: '3K+', label: t('home.stats_mates') },
                            { num: '20K+', label: t('home.stats_capture') },
                            { num: '2K+', label: t('home.stats_customers') },
                            { num: '100%', label: t('home.stats_satisfaction') }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <h3 className="text-4xl md:text-5xl font-bold mb-2 text-[#FFFDE7]">{stat.num}</h3>
                                <p className="text-xs uppercase tracking-widest opacity-90">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#FFFDE7]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-serif text-[#263238] mb-4">Experience Premium Quality</h2>
                        <p className="text-[#546E7A] mb-8 text-lg max-w-2xl mx-auto">
                            Join thousands of satisfied customers enjoying our fresh, organic dairy products delivered right to your door.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0065B3] text-white rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#004a8a] transition-colors"
                            >
                                Shop Now <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#0065B3] text-[#0065B3] rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#0065B3] hover:text-white transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-[#0065B3] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
                        {[
                            { icon: Award, label: t('home.farm_fresh') },
                            { icon: Heart, label: t('home.made_love') },
                            { icon: Star, label: t('home.premium_quality') }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center group cursor-pointer"
                            >
                                <div className="w-14 h-14 flex items-center justify-center border-2 border-white/30 rounded-full mb-4 group-hover:bg-white group-hover:text-[#0065B3] transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-center">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
