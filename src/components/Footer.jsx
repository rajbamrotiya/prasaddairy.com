import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import logoImg from '@/assets/images/logo.webp';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20 pb-16 border-b border-white/5">
                    {/* Brand Section */}
                    <div className="md:col-span-4 space-y-8">
                        <Link to="/" className="inline-block">
                            <img
                                src={logoImg}
                                alt="Prasad Dairy Logo"
                                className="h-20 w-auto"
                            />
                        </Link>
                        <p className="text-muted text-sm leading-relaxed max-w-sm">
                            {t('footer.about_desc')}
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2 space-y-8">
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent">Navigation</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { label: 'Home', link: '/' },
                                { label: t('footer.products'), link: '/products' },
                                { label: t('footer.about_us'), link: '/about' },
                                { label: t('nav.contact'), link: '/contact' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link to={item.link} className="text-muted hover:text-white transition-colors tracking-wide">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="md:col-span-2 space-y-8">
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent">Support</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="text-muted hover:text-white transition-colors tracking-wide">Privacy Policy</a></li>
                            <li><a href="#" className="text-muted hover:text-white transition-colors tracking-wide">Terms of Service</a></li>
                            <li><a href="#" className="text-muted hover:text-white transition-colors tracking-wide">Shipping Info</a></li>
                            <li><a href="#" className="text-muted hover:text-white transition-colors tracking-wide">Returns</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4 space-y-8">
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent">Get in Touch</h4>
                        <div className="space-y-6">
                            <div className="group cursor-pointer">
                                <p className="text-[10px] uppercase tracking-widest text-muted mb-1">Emergency Call</p>
                                <a href="tel:+917984517169" className="text-xl font-serif hover:text-accent transition-colors">+91 79845 17169</a>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-[10px] uppercase tracking-widest text-muted mb-1">Drop a Message</p>
                                <a href="mailto:prasaddairytll@gmail.com" className="text-sm font-medium hover:text-accent transition-colors">prasaddairytll@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted">&copy; {new Date().getFullYear()} Prasad Dairy. All Rights Reserved.</p>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-muted">Redefining Quality</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
