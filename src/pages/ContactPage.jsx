import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const ContactPage = () => {
    const { toast } = useToast();
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        toast({
            title: t('contact.sent_success'),
            description: t('contact.sent_desc'),
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <Helmet>
                <title>{t('contact.title')} - Prasad Dairy</title>
            </Helmet>

            {/* Header */}
            <div className="relative bg-[#FFFDE7] pt-32 pb-32 text-center overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
                <div className="relative z-10 px-4">
                    <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('contact.get_touch')}</span>
                    <h1 className="text-5xl font-serif text-[#263238] mb-4">{t('contact.title')}</h1>
                    <div className="flex justify-center items-center gap-2 mt-2 text-sm text-[#546E7A]">
                        <Link to="/" className="hover:text-[#0065B3]">{t('nav.home')}</Link> /
                        <span className="text-[#0065B3]">{t('nav.contact')}</span>
                    </div>
                </div>
            </div>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Info Cards */}
                        <div className="space-y-8">
                            {[
                                { icon: Phone, title: t('contact.phone'), content: '+91 98765 43210', sub: '+91 12345 67890' },
                                { icon: Mail, title: t('contact.email'), content: 'info@prasaddairy.com', sub: 'support@prasaddairy.com' },
                                { icon: MapPin, title: t('contact.location'), content: '123 Dairy Farm Road', sub: 'Gujarat, India' },
                                { icon: Clock, title: t('contact.opening_hours'), content: 'Mon - Sat: 9AM - 6PM', sub: 'Sunday: Closed' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-6 rounded-lg bg-[#FFFDE7] border border-[#263238]/5 hover:shadow-md transition-shadow"
                                >
                                    <div className="bg-[#0065B3] p-3 rounded-full text-white shrink-0">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-bold text-lg text-[#263238] mb-1">{item.title}</h3>
                                        <p className="text-[#546E7A] text-sm">{item.content}</p>
                                        <p className="text-[#546E7A] text-sm">{item.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-xl shadow-lg border border-[#263238]/5"
                        >
                            <div className="mb-10">
                                <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('contact.send_message')}</span>
                                <h2 className="text-3xl font-serif text-[#263238]">{t('contact.heading')}</h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#263238] uppercase tracking-wider">{t('contact.your_name')}</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 bg-[#FFFDE7] border border-transparent focus:border-[#0065B3] focus:bg-white outline-none rounded-sm transition-all"
                                            value={formData.name}
                                            onChange={e => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#263238] uppercase tracking-wider">{t('contact.your_email')}</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 bg-[#FFFDE7] border border-transparent focus:border-[#0065B3] focus:bg-white outline-none rounded-sm transition-all"
                                            value={formData.email}
                                            onChange={e => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#263238] uppercase tracking-wider">{t('contact.subject')}</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-[#FFFDE7] border border-transparent focus:border-[#0065B3] focus:bg-white outline-none rounded-sm transition-all"
                                        value={formData.subject}
                                        onChange={e => setFormData({...formData, subject: e.target.value})}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#263238] uppercase tracking-wider">{t('contact.message')}</label>
                                    <textarea
                                        rows="5"
                                        required
                                        className="w-full px-4 py-3 bg-[#FFFDE7] border border-transparent focus:border-[#0065B3] focus:bg-white outline-none rounded-sm transition-all resize-none"
                                        value={formData.message}
                                        onChange={e => setFormData({...formData, message: e.target.value})}
                                    ></textarea>
                                </div>

                                <Button type="submit" className="w-full md:w-auto bg-[#0065B3] hover:bg-[#004c8c] text-white px-10 py-6 rounded-sm uppercase font-bold tracking-widest text-xs shadow-lg">
                                    {t('contact.send_btn')}
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;