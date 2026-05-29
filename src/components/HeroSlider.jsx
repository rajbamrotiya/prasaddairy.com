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
        transition={{ duration: 1.5, ease: "easeInOut" }}
    >
        {/* Image Background with Scale Effect */}
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
                className="w-full h-full"
                initial={{ scale: 1.2, filter: "blur(10px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 10, ease: "easeOut" }}
            >
                {children}
            </motion.div>
            <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
                {/* Subtitle */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex items-center justify-center gap-3 mb-6"
                >
                    <span className="h-[1px] w-8 bg-white/50"></span>
                    <span className="text-white font-medium tracking-[0.4em] uppercase text-[10px] md:text-xs">
                        {data.subtitle}
                    </span>
                    <span className="h-[1px] w-8 bg-white/50"></span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 leading-[0.9] tracking-tight"
                >
                    {data.title.split(' ').map((word, i) => (
                        <span key={i} className="inline-block mr-4">{word}</span>
                    ))}
                </motion.h1>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="flex flex-col sm:flex-row justify-center gap-6"
                >
                    <Link
                        to={data.primaryLink}
                        className="px-10 py-4 bg-white text-primary rounded-full font-bold uppercase tracking-widest text-[10px] transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-2xl"
                    >
                        {data.primaryText}
                    </Link>
                    <Link
                        to={data.secondaryLink}
                        className="px-10 py-4 bg-transparent text-white border border-white/30 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all duration-300 hover:bg-white hover:text-primary backdrop-blur-sm"
                    >
                        {data.secondaryText}
                    </Link>
                </motion.div>
            </div>
        </div>
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
        }, 8000);
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
        <section className="relative h-screen bg-black overflow-hidden group">
            <AnimatePresence mode="wait">
                {current === 0 && (
                    <SlideContent key="slide1" data={slides[0]}>
                        <img
                            alt="Cows grazing in farm landscape"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                            src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_gilik2gilik2gili-b7o6i.png"
                        />
                    </SlideContent>
                )}
                {current === 1 && (
                    <SlideContent key="slide2" data={slides[1]}>
                        <img
                            alt="Fresh milk pouring into glass"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                            src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_gilik2gilik2gili-hGYb7.png"
                        />
                    </SlideContent>
                )}
                {current === 2 && (
                    <SlideContent key="slide3" data={slides[2]}>
                        <img
                            alt="Assorted organic dairy products"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                            src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_2enu6k2enu6k2enu-k58Qi.png"
                        />
                    </SlideContent>
                )}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 z-20 flex items-center justify-between px-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button
                    onClick={prevSlide}
                    className="pointer-events-auto w-14 h-14 flex items-center justify-center border border-white/20 text-white rounded-full backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-500"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="pointer-events-auto w-14 h-14 flex items-center justify-center border border-white/20 text-white rounded-full backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-500"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-12 left-0 w-full z-20 flex justify-center gap-4">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`transition-all duration-700 rounded-full ${
                            current === idx
                                ? 'bg-white w-12 h-1'
                                : 'bg-white/30 w-4 h-1 hover:bg-white/60'
                        }`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-1/2 -translate-y-1/2 right-12 z-20 hidden lg:flex flex-col items-center gap-4">
                <span className="h-20 w-[1px] bg-white/20"></span>
                <div className="text-white font-serif italic text-2xl">
                    0{current + 1}
                </div>
                <span className="h-20 w-[1px] bg-white/20"></span>
            </div>
        </section>
    );
};

export default HeroSlider;
