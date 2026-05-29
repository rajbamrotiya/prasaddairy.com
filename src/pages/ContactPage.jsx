import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ContactPage = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>{t('seo.contact_title')}</title>
                <meta name="description" content={t('seo.contact_desc')} />
                <meta property="og:title" content={t('seo.contact_title')} />
                <meta property="og:description" content={t('seo.contact_desc')} />
                <meta name="twitter:title" content={t('seo.contact_title')} />
                <meta name="twitter:description" content={t('seo.contact_desc')} />
            </Helmet>

            {/* Hero Header */}
            <div className="relative bg-primary pt-48 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full -mr-64 -mt-64 blur-3xl"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">{t('contact.get_touch')}</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">{t('contact.title')}</h1>
                        <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">We're here to help. Reach out to our team for any inquiries or feedback.</p>
                    </motion.div>
                </div>
            </div>

            {/* Contact Info Grid */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: Phone, title: t('contact.phone'), content: '+91 79845 17169', sub: 'Call us anytime' },
                            { icon: Mail, title: t('contact.email'), content: 'prasaddairytll@gmail.com', sub: 'We reply within 24h' },
                            { icon: MapPin, title: t('contact.location'), content: 'Gujarat, India', sub: 'Visit our farm' },
                            { icon: Clock, title: t('contact.opening_hours'), content: 'Mon - Sat: 09:00 - 18:00', sub: 'Sun: 09:00 - 12:00' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="space-y-6 group"
                            >
                                <div className="w-12 h-12 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="w-8 h-8 stroke-[1.5]" />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-xl text-primary mb-2">{item.title}</h3>
                                    <p className="text-muted text-sm font-medium mb-1">{item.content}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-accent opacity-60">{item.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map & Detail Section */}
            <section className="py-32 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-gray-100"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.550717035804!2d70.5251931!3d21.0506556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2c96791073665%3A0x90024e54e9cc9663!2sPrasad%20dairy%20products!5e0!3m2!1sen!2sin!4v1765545738514!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Map"
                            ></iframe>
                        </motion.div>

                        {/* Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-12"
                        >
                            <div>
                                <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Our Location</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">Visit our home in the Gir Somnath hills.</h2>
                                <p className="text-muted text-lg leading-relaxed">
                                    Located in the heart of Gujarat's lush landscape, our dairy farm is where the magic of purity happens. We welcome visits by appointment to experience our commitment to quality.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-2">Registered Address</p>
                                        <p className="text-primary font-medium leading-relaxed">Survey No. 10/2, B/h. Hotel Aadity, Veraval Road,<br/> Talala-Gir, Dist. Gir Somnath, Gujarat - 362 150</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-2">Primary Line</p>
                                        <p className="text-primary font-medium">+91 79845 17169</p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Note */}
                            <div className="pt-12 border-t border-gray-200">
                                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                                    Response within 24 business hours
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 text-center bg-white">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">Have specific requirements?</h2>
                    <p className="text-muted mb-12 text-lg leading-relaxed">Our wholesale and distribution team is ready to discuss how we can bring Prasad Dairy purity to your business.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/products" className="px-12 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent transition-all duration-300">
                            Explore Products
                        </Link>
                        <a href="mailto:prasaddairytll@gmail.com" className="px-12 py-5 bg-transparent text-primary border border-gray-200 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all duration-300">
                            Email Inquiries
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
