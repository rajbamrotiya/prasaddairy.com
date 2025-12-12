import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#263238] text-[#FFFDE7] pt-24 pb-10 relative mt-20">
            {/* Top Logo Section */}
            <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-xl hidden md:block">
                <img
                    src="https://horizons-cdn.hostinger.com/85e3d67c-81c2-44f6-84ab-85e62ff61b1d/ee7f6bdb0cae60daa819f1ef5a5dc197.png"
                    alt="Prasad Dairy Logo"
                    className="h-20 w-20 object-contain"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-lg font-bold text-white mb-6 tracking-wide uppercase">{t('footer.about_us')}</h3>
                        <p className="text-sm leading-relaxed opacity-80">
                            {t('footer.about_desc')}
                        </p>
                        <Link to="/contact" className="inline-block text-xs font-bold uppercase tracking-widest text-[#0065B3] hover:text-white mt-2">{t('contact.get_touch')}</Link>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="font-serif text-lg font-bold text-white mb-6 tracking-wide uppercase">{t('footer.products')}</h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                t('products.ghee'),
                                t('products.paneer'),
                                t('products.shrikhand'),
                                t('products.milk_solids'),
                                t('products.butter'),
                                t('products.curd')
                            ].map((item, i) => (
                                <li key={i}><Link to="/products" className="hover:text-[#0065B3] transition-colors flex items-center gap-2 opacity-80 hover:opacity-100"><span className="w-1 h-1 bg-[#0065B3] rounded-full"></span>{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Business Hours */}
                    <div>
                        <h3 className="font-serif text-lg font-bold text-white mb-6 tracking-wide uppercase">{t('footer.business_hours')}</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span className="opacity-80">{t('footer.mon_fri')}:</span>
                                <span className="text-[#0065B3]">09:00 am - 06:00 pm</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span className="opacity-80">{t('footer.sat')}:</span>
                                <span className="text-[#0065B3]">08:00 am - 04:00 pm</span>
                            </li>
                            <li className="mt-4 pt-2">
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#0065B3] p-2 rounded-full text-white">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest opacity-70">{t('footer.emergency')}</p>
                                        <p className="font-bold text-white text-lg">+91 98765 43210</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Subscribe */}
                    <div>
                        <h3 className="font-serif text-lg font-bold text-white mb-6 tracking-wide uppercase">{t('footer.subscribe')}</h3>
                        <p className="text-sm opacity-80 mb-4">{t('footer.subscribe_desc')}</p>
                        <div className="flex items-center gap-2 mb-6 text-sm opacity-80">
                            <Mail className="w-4 h-4 text-[#0065B3]" /> info@prasaddairy.com
                        </div>
                        <div className="flex bg-white/10 p-1 rounded-sm">
                            <input type="email" placeholder={t('footer.email_placeholder')} className="bg-transparent border-none outline-none text-white text-sm px-4 w-full placeholder-white/50" />
                            <Button className="bg-[#0065B3] hover:bg-[#004c8c] text-white font-bold text-xs uppercase px-4">{t('footer.subscribe_btn')}</Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
                    <p>&copy; {t('footer.rights')}</p>
                    <div className="flex gap-6">
                        <Link to="/" className="hover:text-white uppercase tracking-wider">{t('footer.faq')}</Link>
                        <Link to="/team" className="hover:text-white uppercase tracking-wider">{t('footer.careers')}</Link>
                        <Link to="/contact" className="hover:text-white uppercase tracking-wider">{t('nav.contact')}</Link>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-[#0065B3] transition-colors"><Facebook className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-[#0065B3] transition-colors"><Twitter className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-[#0065B3] transition-colors"><Instagram className="w-4 h-4" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;