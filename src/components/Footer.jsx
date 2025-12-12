import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gradient-to-b from-[#263238] to-[#1a1f23] text-[#FFFDE7] pt-32 pb-10 relative mt-20">
            {/* Top Logo Section */}
            <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-full shadow-2xl hidden md:flex items-center justify-center border-4 border-[#0065B3]/20">
                <img
                    src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/ee7f6bdb0cae60daa819f1ef5a5dc197.png"
                    alt="Prasad Dairy Logo"
                    className="h-24 w-24 object-contain"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-12 border-b border-white/10">
                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-white mb-4 tracking-wide uppercase">{t('footer.about_us')}</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-[#0065B3] to-transparent mb-4"></div>
                        </div>
                        <p className="text-sm leading-relaxed opacity-80 text-justify">
                            {t('footer.about_desc')}
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0065B3] hover:text-white transition-colors group">
                            {t('contact.get_touch')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-white mb-4 tracking-wide uppercase">{t('footer.quick_links')}</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-[#0065B3] to-transparent mb-4"></div>
                        </div>
                        <ul className="space-y-3 text-sm">
                            {[
                                { label: 'Home', link: '/' },
                                { label: t('footer.products'), link: '/products' },
                                { label: t('footer.about_us'), link: '/about' },
                                { label: t('nav.contact'), link: '/contact' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link to={item.link} className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-[#0065B3] transition-colors group">
                                        <span className="w-1.5 h-1.5 bg-[#0065B3] rounded-full group-hover:scale-150 transition-transform"></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Business Hours */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-white mb-4 tracking-wide uppercase">{t('footer.business_hours')}</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-[#0065B3] to-transparent mb-4"></div>
                        </div>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between items-center pb-2 border-b border-white/10">
                                <span className="opacity-80">{t('footer.mon_fri')}:</span>
                                <span className="text-[#0065B3] font-semibold">09:00 - 18:00</span>
                            </li>
                            <li className="flex justify-between items-center pb-2 border-b border-white/10">
                                <span className="opacity-80">{t('footer.sat')}:</span>
                                <span className="text-[#0065B3] font-semibold">09:00 - 12:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-white mb-4 tracking-wide uppercase">{t('footer.contact')}</h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-[#0065B3] to-transparent mb-4"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="bg-[#0065B3]/20 p-3 rounded-lg text-[#0065B3] group-hover:bg-[#0065B3] group-hover:text-white transition-colors mt-1">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest opacity-70">{t('footer.emergency')}</p>
                                    <p className="font-bold text-white text-lg"><a href="tel:+917984517169" target="_blank">+91 79845 17169</a></p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="bg-[#0065B3]/20 p-3 rounded-lg text-[#0065B3] group-hover:bg-[#0065B3] group-hover:text-white transition-colors mt-1">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest opacity-70">Email</p>
                                    <p className="font-semibold text-white text-sm break-all"><a href="mailto:prasaddairytll@gmail.com" target="_blank">prasaddairytll@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8">
                    <p className="text-xs opacity-60">&copy; {t('footer.rights')}</p>
                    {/*<div className="flex space-x-6">
                        <a href="#" className="bg-[#0065B3]/20 p-3 rounded-full text-[#0065B3] hover:bg-[#0065B3] hover:text-white transition-all duration-300">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="bg-[#0065B3]/20 p-3 rounded-full text-[#0065B3] hover:bg-[#0065B3] hover:text-white transition-all duration-300">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="bg-[#0065B3]/20 p-3 rounded-full text-[#0065B3] hover:bg-[#0065B3] hover:text-white transition-all duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>*/}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
