import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Star, Award, Users, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const AboutPage = () => {
    const { t } = useLanguage();

    return (
        <>
            <Helmet>
                <title>{t('about.title')} - Prasad Dairy</title>
            </Helmet>

            {/* Hero Header */}
            <div className="relative bg-gradient-to-br from-[#0065B3] to-[#004a8a] pt-40 pb-32 text-center text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36"></div>

                <div className="relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#FFFDE7] font-bold uppercase tracking-widest text-xs mb-3 block opacity-80">{t('about.who_we_are')}</span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{t('about.title')}</h1>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">Committed to excellence and quality since day one</p>
                    </motion.div>

                    <div className="flex justify-center items-center gap-2 text-sm opacity-80">
                        <Link to="/" className="hover:text-[#FFFDE7] transition-colors">{t('nav.home')}</Link> /
                        <span className="text-[#FFFDE7]">{t('nav.about')}</span>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <img
                                alt="Farm owner in field"
                                className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
                                src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_ludcnqludcnqludc-YspfH.png"
                            />
                            <div className="absolute bottom-[-30px] right-[-30px] bg-[#0065B3] p-8 rounded-lg shadow-2xl hidden md:block text-white">
                                <h3 className="text-5xl font-bold mb-2">20+</h3>
                                <p className="text-xs font-bold uppercase tracking-widest">{t('about.years_exp')}</p>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-8">
                                <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs">{t('about.who_we_are')}</span>
                                <h2 className="text-4xl font-serif text-[#263238] mt-2 mb-4">{t('about.heading')}</h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-[#0065B3] to-transparent mb-6"></div>
                            </div>

                            <p className="text-[#546E7A] mb-6 leading-relaxed text-lg">
                                {t('about.description1')}
                            </p>

                            <p className="text-[#546E7A] mb-6 leading-relaxed text-lg">
                                {t('about.description3')}
                            </p>

                            <p className="text-[#546E7A] mb-8 leading-relaxed text-lg">
                                {t('about.description2')}
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-[#0065B3] text-white rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#004a8a] transition-colors"
                            >
                                Get In Touch <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 bg-[#FFFDE7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-8">
                                <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs">Our Vision</span>
                                <h2 className="text-4xl font-serif text-[#263238] mt-2 mb-4">{t('about.v.title')}</h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-[#0065B3] to-transparent mb-6"></div>
                            </div>

                            <p className="text-[#546E7A] mb-6 leading-relaxed text-lg">
                                {t('about.v.desc1')}
                            </p>

                            <p className="text-[#546E7A] mb-8 leading-relaxed text-lg">
                                {t('about.v.desc2')}
                            </p>

                            <div className="flex items-center gap-3 text-[#0065B3] font-semibold">
                                <Leaf className="w-5 h-5" />
                                <span>Sustainable & Eco-Friendly</span>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                alt="Sustainable farming"
                                className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
                                src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_9l1avj9l1avj9l1a-n0DaU.png"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                alt="Our values"
                                className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
                                src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_4h08tn4h08tn4h08-FBs2a.png"
                            />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-8">
                                <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs">Our Foundation</span>
                                <h2 className="text-4xl font-serif text-[#263238] mt-2 mb-4">{t('about.cv.title')}</h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-[#0065B3] to-transparent mb-6"></div>
                            </div>

                            <div className="space-y-5">
                                {[
                                    { key: 'quality', icon: Star },
                                    { key: 'integrity', icon: Award },
                                    { key: 'innovation', icon: Users },
                                    { key: 'customer_focus', icon: CheckCircle2 },
                                    { key: 'community_engagement', icon: Leaf },
                                    { key: 'continuous_improvement', icon: ArrowRight }
                                ].map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={item.key}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="flex gap-4 items-start group"
                                        >
                                            <div className="bg-[#0065B3]/10 p-3 rounded-lg text-[#0065B3] flex-shrink-0 group-hover:bg-[#0065B3] group-hover:text-white transition-colors">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[#263238] font-semibold text-lg">{t(`about.cv.${item.key}`)}</p>
                                                <p className="text-[#546E7A] text-sm leading-relaxed">{t(`about.cv.${item.key}_desc`)}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-gradient-to-br from-[#0065B3] to-[#004a8a] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif mb-4">Our Impact</h2>
                        <div className="w-16 h-1 bg-[#FFFDE7] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                        {[
                            { number: '20+', label: 'Years of Excellence', icon: Award },
                            { number: '10K+', label: 'Happy Customers', icon: Users },
                            { number: '100%', label: 'Pure Quality', icon: Star },
                            { number: '50+', label: 'Farm Products', icon: Leaf }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all w-full max-w-xs group"
                            >
                                <div className="flex justify-center mb-4">
                                    <stat.icon className="w-8 h-8 text-[#FFFDE7] group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
                                <p className="text-sm opacity-90">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#FFFDE7]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif text-[#263238] mb-4">Ready to Experience the Difference?</h2>
                    <p className="text-[#546E7A] mb-8">Discover our premium dairy products and join thousands of satisfied customers.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/products" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0065B3] text-white rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#004a8a] transition-colors">
                            Shop Now <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#0065B3] text-[#0065B3] rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#0065B3] hover:text-white transition-colors">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
