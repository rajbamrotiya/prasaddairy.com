import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Scale, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';

const TermsOfService = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-[#FAFAFA] min-h-screen pt-40 pb-24">
            <Helmet>
                <title>{t('footer.terms')} | Prasad Dairy</title>
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
                            <Scale className="w-6 h-6" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight">
                            {t('footer.terms')}
                        </h1>
                    </div>

                    <div className="prose prose-green max-w-none space-y-12 text-muted leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-accent" /> 1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing and using the Prasad Dairy website, you agree to comply with and be bound by these Terms of Service. If you do not agree, please refrain from using our services.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <AlertTriangle className="w-5 h-5 text-accent" /> 2. Product Quality
                            </h2>
                            <p>
                                We strive to provide the freshest and highest quality dairy products. As our products are natural and perishable, their characteristics may vary slightly between batches.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <Scale className="w-5 h-5 text-accent" /> 3. Liability
                            </h2>
                            <p>
                                Prasad Dairy Products is not liable for any direct or indirect damages arising from the use of our products if they are not stored according to the instructions provided on the packaging.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <HelpCircle className="w-5 h-5 text-accent" /> 4. Modifications
                            </h2>
                            <p>
                                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the site signifies your acceptance of updated terms.
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

export default TermsOfService;
