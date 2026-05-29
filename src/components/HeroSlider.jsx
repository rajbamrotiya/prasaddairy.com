import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Import local images
import heroSlide1 from '@/assets/images/hero-slide-1.png';
import heroSlide2 from '@/assets/images/hero-slide-2.png';
import heroSlide3 from '@/assets/images/hero-slide-3.png';

const SlideContent = ({ data, children, isActive }) => {
    // Character animation variants
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.05,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            {/* Image Background with Parallax Scale Effect */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="w-full h-full"
                    initial={{ scale: 1.25 }}
                    animate={{ scale: isActive ? 1.05 : 1.25 }}
                    transition={{ duration: 10, ease: "linear" }}
                >
                    {children}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl">
                    {/* Subtitle with reveal animation */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex items-center justify-center gap-4 mb-4 md:mb-6"
                    >
                        <span className="h-[1px] w-6 md:w-12 bg-accent/60"></span>
                        <span className="text-accent font-bold tracking-[0.4em] uppercase text-[9px] md:text-[11px] lg:text-xs">
                            {data.subtitle}
                        </span>
                        <span className="h-[1px] w-6 md:w-12 bg-accent/60"></span>
                    </motion.div>

                    {/* Title with character-level animation */}
                    <motion.h1
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-8 md:mb-12 leading-[1.1] tracking-tight"
                    >
                        {data.title.split(" ").map((word, i) => (
                            <span key={i} className="inline-block whitespace-nowrap mr-[0.2em]">
                                {word.split("").map((char, j) => (
                                    <motion.span key={j} variants={letter} className="inline-block">
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </motion.h1>

                    {/* CTA Buttons with staggered entry */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8"
                    >
                        <Link
                            to={data.primaryLink}
                            className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-accent text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] transition-all duration-500 hover:bg-white hover:text-primary hover:shadow-[0_20px_50px_rgba(234,179,8,0.3)] group flex items-center justify-center gap-3"
                        >
                            {data.primaryText}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to={data.secondaryLink}
                            className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-transparent text-white border border-white/20 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] transition-all duration-500 hover:bg-white/10 backdrop-blur-md"
                        >
                            {data.secondaryText}
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Side Elements */}
            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block"
            >
                <div className="flex flex-col gap-12 items-center">
                    <span className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></span>
                    <div className="rotate-90 text-[10px] font-bold tracking-[0.5em] uppercase text-white/30 whitespace-nowrap">
                        PRASAD DAIRY • EST 1995
                    </div>
                    <span className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></span>
                </div>
            </motion.div>
        </motion.div>
    );
};

const HeroSlider = () => {
    const { t } = useLanguage();
    const [current, setCurrent] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const slides = [
        {
            id: 1,
            subtitle: t('slider.slide1.subtitle'),
            title: t('slider.slide1.title'),
            image: heroSlide1,
            primaryLink: "/products",
            primaryText: t('slider.slide1.btn_primary'),
            secondaryLink: "/about",
            secondaryText: t('slider.slide1.btn_secondary')
        },
        {
            id: 2,
            subtitle: t('slider.slide2.subtitle'),
            title: t('slider.slide2.title'),
            image: heroSlide2,
            primaryLink: "/products",
            primaryText: t('slider.slide2.btn_primary'),
            secondaryLink: "/about",
            secondaryText: t('slider.slide2.btn_secondary')
        },
        {
            id: 3,
            subtitle: t('slider.slide3.subtitle'),
            title: t('slider.slide3.title'),
            image: heroSlide3,
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
        }, 10000); // Slower interval for better readability
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
        <section className="relative h-screen bg-[#050505] overflow-hidden group">
            <AnimatePresence mode="wait">
                <SlideContent 
                    key={current} 
                    data={slides[current]} 
                    isActive={true}
                >
                    <img
                        alt={slides[current].title}
                        className="absolute inset-0 w-full h-full object-cover opacity-70"
                        src={slides[current].image}
                    />
                </SlideContent>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 left-0 w-full z-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                {/* Progress Indicators */}
                <div className="flex gap-3">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className="relative h-1 w-12 md:w-16 overflow-hidden bg-white/20 rounded-full group/nav"
                        >
                            {current === idx && (
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 10, ease: "linear" }}
                                    className="absolute inset-0 bg-accent"
                                />
                            )}
                            <div className="absolute inset-0 bg-white/40 opacity-0 group-hover/nav:opacity-100 transition-opacity" />
                        </button>
                    ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/10 text-white rounded-full backdrop-blur-md hover:bg-white hover:text-primary hover:border-white transition-all duration-500"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/10 text-white rounded-full backdrop-blur-md hover:bg-white hover:text-primary hover:border-white transition-all duration-500"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>

            {/* Verticle Slide Indicator */}
            <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 z-20 hidden lg:flex flex-col items-center gap-6">
                <div className="text-white/20 text-xs font-bold tracking-widest">01</div>
                <div className="h-24 w-[1px] bg-white/10 relative">
                    <motion.div 
                        className="absolute top-0 left-0 w-full bg-accent"
                        animate={{ 
                            height: `${((current + 1) / slides.length) * 100}%`,
                        }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                    />
                </div>
                <div className="text-white text-lg font-serif italic font-bold">0{current + 1}</div>
            </div>
        </section>
    );
};

export default HeroSlider;

