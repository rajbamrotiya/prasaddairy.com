import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ContactPage = () => {
    const { t } = useLanguage();

    return (
        <>
            <Helmet>
                <title>{t('contact.title')} - Prasad Dairy</title>
            </Helmet>

            {/* Hero Header */}
            <div className="relative bg-gradient-to-br from-[#0065B3] to-[#004a8a] pt-40 pb-32 text-center text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36"></div>

                <div className="relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#FFFDE7] font-bold uppercase tracking-widest text-xs mb-3 block opacity-80">{t('contact.get_touch')}</span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{t('contact.title')}</h1>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">We'd love to hear from you. Get in touch with us today!</p>
                    </motion.div>

                    <div className="flex justify-center items-center gap-2 text-sm opacity-80">
                        <Link to="/" className="hover:text-[#FFFDE7] transition-colors">{t('nav.home')}</Link> /
                        <span className="text-[#FFFDE7]">{t('nav.contact')}</span>
                    </div>
                </div>
            </div>

            {/* Contact Info Cards */}
            <section className="py-20 bg-white relative -mt-16 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                        {[
                            { icon: Phone, title: t('contact.phone'), content: '+91 79845 17169', sub: 'Call us anytime' },
                            { icon: Mail, title: t('contact.email'), content: 'contact@prasaddairy.com', sub: 'We reply within 24h' },
                            { icon: MapPin, title: t('contact.location'), content: 'Gujarat, India', sub: 'Visit our farm' },
                            { icon: Clock, title: t('contact.opening_hours'), content: 'Mon - Sat: 909:00 - 18:00', sub: 'Sunday: 09:00 - 12:00' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="w-full max-w-xs p-8 text-center rounded-xl bg-gradient-to-br from-[#FFFDE7] to-white border border-[#0065B3]/10 hover:shadow-lg hover:border-[#0065B3]/30 transition-all duration-300 group"
                            >
                                <div className="bg-[#0065B3] p-4 rounded-full text-white w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-serif font-bold text-lg text-[#263238] mb-2">{item.title}</h3>
                                <p className="text-[#0065B3] font-semibold text-sm mb-1">{item.content}</p>
                                <p className="text-[#0065B3] font-semibold text-sm">{item.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map & Info Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Map */}
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                            className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg border border-[#0065B3]/10"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.550717035804!2d70.5251931!3d21.0506556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2c96791073665%3A0x90024e54e9cc9663!2sPrasad%20dairy%20products!5e0!3m2!1sen!2sin!4v1765545738514!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{border: 0}}
                                allowFullScreen=""
                                loading="lazy"></iframe>
                        </motion.div>

                        {/* Info Card */}
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                            className="space-y-8"
                        >
                            <div>
                                <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs">Our Location</span>
                                <h2 className="text-4xl font-serif text-[#263238] mt-2 mb-4">Visit Us Anytime</h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-[#0065B3] to-transparent mb-6"></div>
                                <p className="text-[#546E7A] leading-relaxed mb-8">
                                    Located in the heart of Gujarat, our dairy farm is open for visits and inquiries. We welcome customers and partners to experience our commitment to quality firsthand.
                                </p>
                            </div>

                            {/* Quick Info */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 group cursor-pointer">
                                    <div className="bg-[#0065B3]/20 p-3 rounded-lg text-[#0065B3] group-hover:bg-[#0065B3] group-hover:text-white transition-colors flex-shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest opacity-70 font-semibold">Address</p>
                                        <p className="text-[#263238] font-semibold">Survey No. 10/2, B/h. Hotel Aadity,<br/> Veraval Road, Talala-Gir, Dist. Gir Somnath,<br/> Saurashtra, Gujarat, 362 150, INDIA</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group cursor-pointer">
                                    <div className="bg-[#0065B3]/20 p-3 rounded-lg text-[#0065B3] group-hover:bg-[#0065B3] group-hover:text-white transition-colors flex-shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest opacity-70 font-semibold">Phone</p>
                                        <p className="text-[#263238] font-semibold">+91 79845 17169</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group cursor-pointer">
                                    <div className="bg-[#0065B3]/20 p-3 rounded-lg text-[#0065B3] group-hover:bg-[#0065B3] group-hover:text-white transition-colors flex-shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest opacity-70 font-semibold">Email</p>
                                        <p className="text-[#263238] font-semibold">contact@prasaddairy.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Card */}
                            <div className="p-8 bg-gradient-to-br from-[#0065B3] to-[#004a8a] text-white rounded-xl space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-[#FFFDE7]" />
                                    <h3 className="font-serif font-bold text-lg">Quick Response</h3>
                                </div>
                                <p className="text-sm opacity-90">We typically respond to all inquiries within 24 hours during business days.</p>
                                <div className="pt-4 border-t border-white/20 space-y-2 text-sm">
                                    <p className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FFFDE7] rounded-full"></span>Available Mon - Sat</p>
                                    <p className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FFFDE7] rounded-full"></span>Phone & Email support</p>
                                    <p className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FFFDE7] rounded-full"></span>Friendly & helpful team</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#FFFDE7]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif text-[#263238] mb-4">Need More Information?</h2>
                    <p className="text-[#546E7A] mb-8">Browse our FAQ or explore our product range to learn more about Prasad Dairy.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/products" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0065B3] text-white rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#004a8a] transition-colors">
                            View Products <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="#faq" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#0065B3] text-[#0065B3] rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#0065B3] hover:text-white transition-colors">
                            Read FAQ
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
