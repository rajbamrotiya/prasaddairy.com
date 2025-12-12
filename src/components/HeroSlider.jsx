import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WavyBottom = ({ color = "#FFFFFF" }) => (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color}></path>
        </svg>
    </div>
);

const SlideContent = ({ data, children }) => (
    <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
    >
        {/* Image Background with Scale Effect */}
        <div className="absolute inset-0">
            <motion.div
                className="w-full h-full"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4 pt-10">
            <div className="max-w-5xl mx-auto">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                        <img
                            src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/pdp_logo-1-1-iIEZ5.png"
                            alt="Prasad Dairy Logo"
                            className="h-20 w-20 md:h-32 md:w-32 object-contain drop-shadow-lg"
                        />
                    </div>
                </motion.div>

                {/* Subtitle */}
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-[#FFFDE7] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block drop-shadow-md"
                >
                    {data.subtitle}
                </motion.span>

                {/* Title */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight"
                >
                    {data.title}
                </motion.h1>

                {/* Decorative Line */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 64, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-[#0065B3] to-transparent mx-auto mb-8"
                />

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
                >
                    <Link
                        to={data.primaryLink}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0065B3] hover:bg-[#004a8a] text-white rounded-lg font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                        {data.primaryText}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to={data.secondaryLink}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 hover:bg-white hover:text-[#0065B3] text-white border-2 border-white rounded-lg font-bold uppercase tracking-widest text-sm transition-all duration-300 backdrop-blur-sm group"
                    >
                        {data.secondaryText}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </div>

        {/* Floating Elements */}
        <motion.div
            className="absolute top-20 right-10 w-32 h-32 bg-[#0065B3]/10 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
            className="absolute bottom-32 left-10 w-40 h-40 bg-[#FFFDE7]/5 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
        />
    </motion.div>
);

const HeroSlider = () => {
    const { t } = useLanguage();
    const [current, setCurrent] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const slides = [
        {
            id: 1,
            subtitle: t('slider.slide1.subtitle'),
            title: t('slider.slide1.title'),
            primaryLink: "/products",
            primaryText: t('slider.slide1.btn_primary'),
            secondaryLink: "/about",
            secondaryText: t('slider.slide1.btn_secondary')
        },
        {
            id: 2,
            subtitle: t('slider.slide2.subtitle'),
            title: t('slider.slide2.title'),
            primaryLink: "/products",
            primaryText: t('slider.slide2.btn_primary'),
            secondaryLink: "/about",
            secondaryText: t('slider.slide2.btn_secondary')
        },
        {
            id: 3,
            subtitle: t('slider.slide3.subtitle'),
            title: t('slider.slide3.title'),
            primaryLink: "/products",
            primaryText: t('slider.slide3.btn_primary'),
            secondaryLink: "/contact",
            secondaryText: t('slider.slide3.btn_secondary')
        }
    ];

    useEffect(() => {
        if (!isAutoPlay) return;
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [slides.length, isAutoPlay]);

    const nextSlide = () => {
        setCurrent(prev => (prev + 1) % slides.length);
        setIsAutoPlay(false);
    };

    const prevSlide = () => {
        setCurrent(prev => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlay(false);
    };

    const goToSlide = index => {
        setCurrent(index);
        setIsAutoPlay(false);
    };

    return (
        <section className="relative h-[85vh] md:h-[95vh] bg-[#263238] overflow-hidden group">
            <AnimatePresence mode="wait">
                {current === 0 && (
                    <SlideContent key="slide1" data={slides[0]}>
                        <img
                            alt="Cows grazing in farm landscape"
                            className="absolute inset-0 w-full h-full object-cover"
                            src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_gilik2gilik2gili-b7o6i.png"
                        />
                    </SlideContent>
                )}
                {current === 1 && (
                    <SlideContent key="slide2" data={slides[1]}>
                        <img
                            alt="Fresh milk pouring into glass"
                            className="absolute inset-0 w-full h-full object-cover"
                            src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_gilik2gilik2gili-hGYb7.png"
                        />
                    </SlideContent>
                )}
                {current === 2 && (
                    <SlideContent key="slide3" data={slides[2]}>
                        <img
                            alt="Assorted organic dairy products"
                            className="absolute inset-0 w-full h-full object-cover"
                            src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_2enu6k2enu6k2enu-k58Qi.png"
                        />
                    </SlideContent>
                )}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                    onClick={prevSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="pointer-events-auto bg-[#0065B3]/80 hover:bg-[#0065B3] text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                    onClick={nextSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="pointer-events-auto bg-[#0065B3]/80 hover:bg-[#0065B3] text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    <ChevronRight className="w-6 h-6" />
                </motion.button>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-20 left-0 w-full z-20 flex justify-center gap-3">
                {slides.map((_, idx) => (
                    <motion.button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        whileHover={{ scale: 1.2 }}
                        className={`rounded-full transition-all duration-300 shadow-sm border ${
                            current === idx
                                ? 'bg-[#0065B3] w-10 h-3 border-transparent'
                                : 'bg-white/50 w-3 h-3 hover:bg-white border-white/50'
                        }`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-20 right-8 z-20 text-white font-bold text-sm tracking-widest hidden md:block">
                <span className="text-[#0065B3]">{String(current + 1).padStart(2, '0')}</span> / {String(slides.length).padStart(2, '0')}
            </div>

            {/* Wavy Bottom Divider */}
            <WavyBottom color="#FFFFFF" />
        </section>
    );
};

export default HeroSlider;
