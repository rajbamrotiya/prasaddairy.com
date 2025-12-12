import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
const WavyBottom = ({
                        color = "#FFFFFF"
                    }) => <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color}></path>
    </svg>
</div>;
const SlideContent = ({
                          data,
                          children
                      }) => <motion.div className="absolute inset-0 w-full h-full" initial={{
    opacity: 0
}} animate={{
    opacity: 1
}} exit={{
    opacity: 0
}} transition={{
    duration: 1
}}>
    {/* Image Background with Scale Effect */}
    <div className="absolute inset-0">
        <motion.div className="w-full h-full" initial={{
            scale: 1.15
        }} animate={{
            scale: 1
        }} transition={{
            duration: 6,
            ease: "easeOut"
        }}>
            {children}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30" />
    </div>

    {/* Text Content */}
    <div className="relative z-10 h-full flex items-center justify-center text-center px-4 pt-10">
        <div className="max-w-5xl mx-auto">
            <motion.div initial={{
                y: 20,
                opacity: 0
            }} animate={{
                y: 0,
                opacity: 1
            }} transition={{
                delay: 0.3,
                duration: 0.8
            }} className="mb-6">
                <img src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/ee7f6bdb0cae60daa819f1ef5a5dc197.png" alt="Prasad Dairy Logo" className="h-24 w-24 md:h-32 md:w-32 object-contain mx-auto drop-shadow-lg" />
            </motion.div>

            <motion.span initial={{
                y: 20,
                opacity: 0
            }} animate={{
                y: 0,
                opacity: 1
            }} transition={{
                delay: 0.5,
                duration: 0.8
            }} className="text-[#FFFDE7] font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 block drop-shadow-md">
                {data.subtitle}
            </motion.span>

            <motion.h1 initial={{
                y: 30,
                opacity: 0
            }} animate={{
                y: 0,
                opacity: 1
            }} transition={{
                delay: 0.7,
                duration: 0.8
            }} className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 drop-shadow-lg leading-tight">
                {data.title}
            </motion.h1>

            <motion.div initial={{
                y: 40,
                opacity: 0
            }} animate={{
                y: 0,
                opacity: 1
            }} transition={{
                delay: 0.9,
                duration: 0.8
            }} className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-[#0065B3] hover:bg-[#004c8c] text-white rounded-sm px-10 py-7 text-xs font-bold tracking-widest uppercase shadow-xl border border-transparent transition-all">
                    <Link to={data.primaryLink}>{data.primaryText}</Link>
                </Button>
                <Button className="bg-transparent hover:bg-white hover:text-[#263238] text-white border-2 border-white rounded-sm px-10 py-7 text-xs font-bold tracking-widest uppercase shadow-xl transition-all">
                    <Link to={data.secondaryLink}>{data.secondaryText}</Link>
                </Button>
            </motion.div>
        </div>
    </div>
</motion.div>;
const HeroSlider = () => {
    const {
        t
    } = useLanguage();
    const [current, setCurrent] = useState(0);
    const slides = [{
        id: 1,
        subtitle: t('slider.slide1.subtitle'),
        title: t('slider.slide1.title'),
        primaryLink: "/products",
        primaryText: t('slider.slide1.btn_primary'),
        secondaryLink: "/about",
        secondaryText: t('slider.slide1.btn_secondary')
    }, {
        id: 2,
        subtitle: t('slider.slide2.subtitle'),
        title: t('slider.slide2.title'),
        primaryLink: "/products",
        primaryText: t('slider.slide2.btn_primary'),
        secondaryLink: "/about",
        secondaryText: t('slider.slide2.btn_secondary')
    }, {
        id: 3,
        subtitle: t('slider.slide3.subtitle'),
        title: t('slider.slide3.title'),
        primaryLink: "/products",
        primaryText: t('slider.slide3.btn_primary'),
        secondaryLink: "/contact",
        secondaryText: t('slider.slide3.btn_secondary')
    }];
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);
    const nextSlide = () => setCurrent(prev => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);
    const goToSlide = index => setCurrent(index);
    return <section className="relative h-[85vh] md:h-[95vh] bg-[#263238] overflow-hidden">
        <AnimatePresence mode="wait">
            {current === 0 && <SlideContent key="slide1" data={slides[0]}>
                <img alt="Cows grazing in farm landscape" className="absolute inset-0 w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_gilik2gilik2gili-b7o6i.png" />
            </SlideContent>}
            {current === 1 && <SlideContent key="slide2" data={slides[1]}>
                <img alt="Fresh milk pouring into glass" className="absolute inset-0 w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_gilik2gilik2gili-hGYb7.png" />
            </SlideContent>}
            {current === 2 && <SlideContent key="slide3" data={slides[2]}>
                <img alt="Assorted organic dairy products" className="absolute inset-0 w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/gemini_generated_image_2enu6k2enu6k2enu-k58Qi.png" />
            </SlideContent>}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-8 pointer-events-none">
            <button onClick={prevSlide} className="pointer-events-auto bg-black/20 hover:bg-[#0065B3] text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 group">
                <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={nextSlide} className="pointer-events-auto bg-black/20 hover:bg-[#0065B3] text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 group">
                <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-20 left-0 w-full z-20 flex justify-center gap-3">
            {slides.map((_, idx) => <button key={idx} onClick={() => goToSlide(idx)} className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm border border-white/50 ${current === idx ? 'bg-[#0065B3] w-8 border-transparent' : 'bg-white/50 hover:bg-white'}`} />)}
        </div>

        {/* Wavy Bottom Divider */}
        <WavyBottom color="#FFFFFF" />
    </section>;
};
export default HeroSlider;