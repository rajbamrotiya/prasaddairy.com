import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Globe, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import logoImg from '@/assets/images/logo.webp';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const {
        t,
        language,
        setLanguage
    } = useLanguage();
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navItems = [{
        name: t('nav.home'),
        path: '/'
    }, {
        name: t('nav.products'),
        path: '/products'
    }, {
        name: t('nav.about'),
        path: '/about'
    }/*, {
        name: t('nav.team'),
        path: '/team'
    }*/, {
        name: t('nav.contact'),
        path: '/contact'
    }];
    const isActive = path => location.pathname === path;

    // Dynamic classes based on scroll and page
    const navClass = `fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3' : 'bg-transparent py-6'}`;
    const textClass = scrolled ? 'text-primary' : 'text-white';
    const languageNames = {
        en: 'EN',
        gu: 'GU',
        hi: 'HI'
    };
    
    return <nav className={navClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img 
                        src={logoImg} 
                        alt="Prasad Dairy Logo" 
                        className={`transition-all duration-500 ${scrolled ? 'h-10' : 'h-14'} w-auto object-contain`}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10">
                    {navItems.map(item => (
                        <Link 
                            key={item.path} 
                            to={item.path} 
                            className={`text-[13px] font-medium tracking-[0.1em] uppercase transition-all duration-300 relative group ${isActive(item.path) ? (scrolled ? 'text-accent' : 'text-white') : textClass} hover:text-accent`}
                        >
                            {item.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${isActive(item.path) ? 'w-full' : ''}`}></span>
                        </Link>
                    ))}

                    {/* Language Switcher Desktop */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className={`font-bold transition-colors ${textClass} hover:text-accent hover:bg-transparent px-2`}>
                                <Globe className="w-4 h-4 mr-2" />
                                {languageNames[language]}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur-lg border-gray-100 min-w-[100px]">
                            <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer focus:bg-accent focus:text-white transition-colors text-primary">English</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Share Button Desktop */}
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => window.dispatchEvent(new CustomEvent('open-share-modal'))}
                        className={`font-bold transition-colors ${textClass} hover:text-accent hover:bg-transparent px-2`}
                        title="Share this page"
                    >
                        <Share2 className="w-4 h-4" />
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <Button variant="ghost" size="icon" className={`md:hidden ${textClass} hover:bg-white/10`} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
            {isOpen && <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }} 
                transition={{ duration: 0.3, ease: "easeOut" }} 
                className="md:hidden fixed inset-x-0 top-[60px] bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-2xl overflow-hidden"
            >
                <div className="px-6 py-10 space-y-6">
                    {navItems.map((item, i) => (
                        <motion.div
                            key={item.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link 
                                to={item.path} 
                                onClick={() => setIsOpen(false)} 
                                className={`block text-2xl font-serif font-medium transition-all duration-300 ${isActive(item.path) ? 'text-accent' : 'text-primary'}`}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}

                    {/* Mobile Share Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navItems.length * 0.1 }}
                        className="pt-6 border-t border-gray-100"
                    >
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                window.dispatchEvent(new CustomEvent('open-share-modal'));
                            }}
                            className="flex items-center gap-3 text-2xl font-serif font-medium text-primary hover:text-accent transition-colors"
                        >
                            <Share2 className="w-5 h-5 text-accent animate-pulse" />
                            <span>Share This Page</span>
                        </button>
                    </motion.div>

                    {/* Mobile Language Switcher */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: (navItems.length + 1) * 0.1 }}
                        className="pt-6 border-t border-gray-100 mt-6"
                    >
                        <p className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-4">Select Language</p>
                        <div className="flex gap-6">
                            <button onClick={() => setLanguage('en')} className={`text-sm font-bold tracking-widest ${language === 'en' ? 'text-accent' : 'text-muted'}`}>ENGLISH</button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>}
        </AnimatePresence>
    </nav>;
};
export default Navigation;