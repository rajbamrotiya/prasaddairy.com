import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t, language, setLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.products'), path: '/products' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.team'), path: '/team' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    // Dynamic classes based on scroll and page
    const navClass = `fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm py-2' : 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm py-4'
    }`;

    const textClass = 'text-[#263238]';

    const languageNames = {
        en: 'English',
        gu: 'ગુજરાતી',
        hi: 'हिंदी'
    };

    return (
        <nav className={navClass}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/ee7f6bdb0cae60daa819f1ef5a5dc197.png"
                            alt="Prasad Dairy Logo"
                            className="h-16 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300 hover:text-[#0065B3] ${
                                    isActive(item.path) ? 'text-[#0065B3]' : textClass
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Language Switcher Desktop */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="font-bold text-[#263238] hover:text-[#0065B3]">
                                    <Globe className="w-4 h-4 mr-2" />
                                    {languageNames[language]}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white border-[#0065B3]/20">
                                <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer hover:bg-[#FFFDE7] hover:text-[#0065B3]">English</DropdownMenuItem>
                                {/*<DropdownMenuItem onClick={() => setLanguage('gu')} className="cursor-pointer hover:bg-[#FFFDE7] hover:text-[#0065B3]">ગુજરાતી</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setLanguage('hi')} className="cursor-pointer hover:bg-[#FFFDE7] hover:text-[#0065B3]">हिंदी</DropdownMenuItem>*/}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/*<Button size="icon" variant="ghost" className="hover:text-[#0065B3] hover:bg-[#0065B3]/10">
                            <ShoppingCart className="w-5 h-5" />
                        </Button>*/}
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`md:hidden ${textClass} hover:bg-black/5`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#FFFDE7] border-t border-[#0065B3]/10 shadow-lg"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                                        isActive(item.path)
                                            ? 'text-[#0065B3] bg-[#0065B3]/10'
                                            : 'text-[#263238] hover:bg-[#0065B3]/10 hover:text-[#0065B3]'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Mobile Language Switcher */}
                            <div className="px-4 py-3 border-t border-[#0065B3]/10 mt-2">
                                <p className="text-xs font-bold text-[#263238] uppercase tracking-widest mb-2">Select Language</p>
                                <div className="flex gap-3">
                                    <button onClick={() => setLanguage('en')} className={`text-sm font-bold ${language === 'en' ? 'text-[#0065B3]' : 'text-[#546E7A]'}`}>EN</button>
                                    {/*<button onClick={() => setLanguage('gu')} className={`text-sm font-bold ${language === 'gu' ? 'text-[#0065B3]' : 'text-[#546E7A]'}`}>GU</button>
                                    <button onClick={() => setLanguage('hi')} className={`text-sm font-bold ${language === 'hi' ? 'text-[#0065B3]' : 'text-[#546E7A]'}`}>HI</button>*/}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;