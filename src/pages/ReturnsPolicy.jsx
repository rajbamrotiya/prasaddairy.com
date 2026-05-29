import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { RotateCcw, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

const ReturnsPolicy = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-[#FAFAFA] min-h-screen pt-40 pb-24">
            <Helmet>
                <title>{t('footer.returns')} | Prasad Dairy</title>
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
                            <RotateCcw className="w-6 h-6" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight">
                            {t('footer.returns')}
                        </h1>
                    </div>

                    <div className="prose prose-green max-w-none space-y-12 text-muted leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-accent" /> 1. Return Eligibility
                            </h2>
                            <p>
                                Due to the perishable nature of our products (Milk, Curd, Paneer, Sweets), we only accept returns if the product is damaged during transit or if you receive an incorrect item.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <XCircle className="w-5 h-5 text-accent" /> 2. Reporting Issues
                            </h2>
                            <p>
                                Any damage or discrepancy must be reported within 2 hours of delivery for fresh items and within 24 hours for non-perishable items (like Ghee). Please provide photographs of the damage when reporting.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <RefreshCw className="w-5 h-5 text-accent" /> 3. Refund Process
                            </h2>
                            <p>
                                Once your return is approved, we will initiate a refund to your original payment method. The credit should appear in your account within 5-7 working days depending on your bank.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <RotateCcw className="w-5 h-5 text-accent" /> 4. Replacements
                            </h2>
                            <p>
                                Alternatively, you can opt for a replacement of the damaged product. Replacements are subject to availability and will be delivered at no extra shipping cost.
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

export default ReturnsPolicy;
