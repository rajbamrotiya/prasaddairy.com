import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-[#FAFAFA] min-h-screen pt-40 pb-24">
            <Helmet>
                <title>{t('footer.privacy')} | Prasad Dairy</title>
            </Helmet>

            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-12 md:p-20 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-black/[0.03]"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight">
                            {t('footer.privacy')}
                        </h1>
                    </div>

                    <div className="prose prose-green max-w-none space-y-12 text-muted leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <Eye className="w-5 h-5 text-accent" /> 1. Information Collection
                            </h2>
                            <p>
                                At Prasad Dairy Products, we collect information you provide directly to us when you visit our website, place an order, or contact us. This may include your name, email address, phone number, and delivery address.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <Lock className="w-5 h-5 text-accent" /> 2. Data Usage
                            </h2>
                            <p>
                                We use the information we collect to process your orders, maintain your account, and provide you with information about our products and services. We never sell your personal information to third parties.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <Shield className="w-5 h-5 text-accent" /> 3. Security
                            </h2>
                            <p>
                                We implement various security measures to maintain the safety of your personal information. Your data is stored on secure servers and is protected by industry-standard encryption and firewalls.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <FileText className="w-5 h-5 text-accent" /> 4. Cookies
                            </h2>
                            <p>
                                Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us analyze website traffic and remember your preferences.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-black/[0.05]">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted/40 italic text-center">
                                Last Updated: May 2025 • Prasad Dairy Products
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
