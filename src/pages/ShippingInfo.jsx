import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Truck, MapPin, Clock, Package } from 'lucide-react';

const ShippingInfo = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-[#FAFAFA] min-h-screen pt-40 pb-24">
            <Helmet>
                <title>{t('footer.shipping')} | Prasad Dairy</title>
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
                            <Truck className="w-6 h-6" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight">
                            {t('footer.shipping')}
                        </h1>
                    </div>

                    <div className="prose prose-green max-w-none space-y-12 text-muted leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-accent" /> 1. Delivery Areas
                            </h2>
                            <p>
                                Currently, we provide delivery services across major cities in Gujarat and selective areas nationwide for bulk orders. Our specialized cold-chain logistics ensure that our products reach you in the freshest condition possible.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <Clock className="w-5 h-5 text-accent" /> 2. Shipping Times
                            </h2>
                            <p>
                                Standard orders are usually dispatched within 24-48 hours. Depending on your location, delivery can take between 2 to 5 working days. Fresh products (like Paneer and Curd) are delivered via local express channels.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <Truck className="w-5 h-5 text-accent" /> 3. Cold Chain Logistics
                            </h2>
                            <p>
                                To maintain the nutritional value and taste of our products, we use temperature-controlled packaging and specialized vehicles for all our perishable items.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                                <Package className="w-5 h-5 text-accent" /> 4. Shipping Charges
                            </h2>
                            <p>
                                Shipping charges are calculated based on the weight of the order and the destination. Free delivery is available for orders above a certain threshold (refer to the checkout page for current offers).
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

export default ShippingInfo;
