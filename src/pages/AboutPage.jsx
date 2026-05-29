import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Star, Award, Users, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

// Import local images
import about1 from '@/assets/images/about-1.png';
import about2 from '@/assets/images/about-2.png';

const AboutPage = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-white">
            <Helmet>
                <title>{t('seo.about_title')}</title>
                <meta name="description" content={t('seo.about_desc')} />
                <meta name="keywords" content={t('seo.about_keywords')} />
                <meta property="og:title" content={t('seo.about_title')} />
                <meta property="og:description" content={t('seo.about_desc')} />
                <meta name="twitter:title" content={t('seo.about_title')} />
                <meta name="twitter:description" content={t('seo.about_desc')} />
            </Helmet>

            {/* Hero Header */}
            <div className="relative bg-primary pt-48 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full -mr-64 -mt-64 blur-3xl"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">{t('about.who_we_are')}</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">{t('about.title')}</h1>
                        <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">Dedicated to preserving the legacy of pure dairy farming for over two decades.</p>
                    </motion.div>
                </div>
            </div>

            {/* Our Story Section */}
            <section className="py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    alt="Farm owner in field"
                                    className="w-full h-full object-cover"
                                    src={about1}
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-accent text-white p-12 rounded-2xl shadow-2xl hidden md:block">
                                <h3 className="text-5xl font-serif font-bold mb-2">20+</h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest">{t('about.years_exp')}</p>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">{t('about.who_we_are')}</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-10 leading-tight">
                                {t('about.heading')}
                            </h2>

                            <div className="space-y-6 text-muted text-lg leading-relaxed">
                                <p>{t('about.description1')}</p>
                                <p>{t('about.description3')}</p>
                                <p>{t('about.description2')}</p>
                            </div>

                            <div className="mt-12">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary group"
                                >
                                    <span className="w-12 h-[1px] bg-primary group-hover:w-16 transition-all duration-300"></span>
                                    Get In Touch
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-32 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Our Vision</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">{t('about.v.title')}</h2>
                            <div className="space-y-6 text-muted text-lg leading-relaxed mb-10">
                                <p>{t('about.v.desc1')}</p>
                                <p>{t('about.v.desc2')}</p>
                            </div>
                            <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-[10px] uppercase">
                                <Leaf className="w-5 h-5 text-accent" />
                                <span>Sustainable & Eco-Friendly</span>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    alt="Sustainable farming"
                                    className="w-full h-full object-cover"
                                    src={about2}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Our Foundation</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight">{t('about.cv.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { key: 'quality', icon: Star },
                            { key: 'integrity', icon: Award },
                            { key: 'innovation', icon: Users },
                            { key: 'customer_focus', icon: CheckCircle2 },
                            { key: 'community_engagement', icon: Leaf },
                            { key: 'continuous_improvement', icon: ArrowRight }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    className="p-10 border border-gray-100 rounded-2xl hover:border-accent/20 hover:shadow-2xl transition-all duration-500 group"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="w-8 h-8 stroke-[1.5]" />
                                    </div>
                                    <h3 className="font-serif font-bold text-xl text-primary mb-4">{t(`about.cv.${item.key}`)}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{t(`about.cv.${item.key}_desc`)}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-32 bg-primary text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-20 tracking-tight">Our Global Impact</h2>
                    <div className="grid md:grid-cols-4 gap-12">
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
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <h3 className="text-5xl font-serif font-bold mb-4">{stat.number}</h3>
                                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 text-center bg-white">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">Ready to taste the purity?</h2>
                    <p className="text-muted mb-12 text-lg">Experience the difference that two decades of dedication makes.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/products" className="px-12 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent transition-all duration-300">
                            Shop Products
                        </Link>
                        <Link to="/contact" className="px-12 py-5 bg-transparent text-primary border border-gray-200 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all duration-300">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
