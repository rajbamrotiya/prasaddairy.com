import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Star, Award, Users, Leaf, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const AboutPage = () => {
    const { t } = useLanguage();

    return (
        <>
            <Helmet>
                <title>{t('about.title')} - Prasad Dairy</title>
            </Helmet>

            {/* Wavy Header */}
            <div className="relative bg-[#FFFDE7] pt-32 pb-32 text-center overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
                <div className="relative z-10 px-4">
                    <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('about.who_we_are')}</span>
                    <h1 className="text-5xl font-serif text-[#263238] mb-4">{t('about.title')}</h1>
                    <div className="flex justify-center items-center gap-2 mt-2 text-sm text-[#546E7A]">
                        <Link to="/" className="hover:text-[#0065B3]">{t('nav.home')}</Link> /
                        <span className="text-[#0065B3]">{t('nav.about')}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            <img alt="Farm owner in field" className="w-full h-[500px] object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1686076741151-498484c450ef" />
                            <div className="absolute bottom-[-30px] right-[-30px] bg-[#0065B3] p-8 rounded-lg shadow-xl hidden md:block text-white max-w-xs">
                                <h3 className="text-4xl font-bold mb-2">30+</h3>
                                <p className="text-sm font-bold uppercase tracking-widest">{t('about.years_exp')}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('about.introductions')}</span>
                            <h2 className="text-4xl font-serif text-[#263238] mb-6 leading-tight">
                                {t('about.heading')}
                            </h2>
                            <p className="text-[#546E7A] mb-8 leading-relaxed text-lg">
                                {t('about.description')}
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    t('about.natural_products'),
                                    t('about.modern_tech'),
                                    t('about.certified_organic'),
                                    t('about.expert_farmers')
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#0065B3]" />
                                        <span className="text-[#263238] font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="bg-[#0065B3] hover:bg-[#004c8c] text-white rounded-sm px-8 py-6 text-xs font-bold tracking-widest uppercase">
                                {t('about.discover_more')}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;