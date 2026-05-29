import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Package, Refrigerator, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const { t } = useLanguage();

    const productDetails = {
        khoa: { name: t('products.khoa'), description: t('products.khoa_desc'), price: '12.00', category: t('products.milk_solids') },
        shreekhand: { name: t('products.shrikhand'), description: t('products.shrikhand_desc'), price: '8.00', category: t('products.desserts') },
        chakka: { name: t('products.chakka'), description: t('products.chakka_desc'), price: '6.00', category: t('products.yogurt') },
        paneer: { name: t('products.paneer'), description: t('products.paneer_desc'), price: '10.00', category: t('products.cheese') },
        butter: { name: t('products.butter'), description: t('products.butter_desc'), price: '15.00', category: t('products.spreads') },
        curd: { name: t('products.curd'), description: t('products.curd_desc'), price: '5.00', category: t('products.yogurt') },
        ghee: { name: t('products.ghee'), description: t('products.ghee_desc'), price: '45.00', category: t('products.spreads') },
        sweets: { name: t('products.sweets'), description: t('products.sweets_desc'), price: '25.00', category: t('products.desserts') }
    };

    const product = productDetails[productId] || productDetails.khoa;

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>{product.name} - Prasad Dairy</title>
            </Helmet>

            <div className="pt-40 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-8">
                        <Link to="/" className="hover:text-accent transition-colors">{t('product_detail.home')}</Link>
                        <span>/</span>
                        <Link to="/products" className="hover:text-accent transition-colors">{t('product_detail.products')}</Link>
                        <span>/</span>
                        <span className="text-primary">{product.name}</span>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="aspect-square bg-secondary rounded-3xl overflow-hidden flex items-center justify-center p-12"
                        >
                            <img 
                                alt={product.name} 
                                className="max-h-full max-w-full object-contain mix-blend-multiply hover:scale-110 transition-transform duration-1000" 
                                src="https://images.unsplash.com/photo-1559223669-e0065fa7f142" 
                            />
                        </motion.div>

                        {/* Content Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex text-accent">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                </div>
                                <span className="text-[10px] font-bold tracking-widest text-muted uppercase">Certified Pure</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6 tracking-tight leading-tight">
                                {product.name}
                            </h1>

                            {/*<p className="text-3xl font-medium text-primary mb-10 leading-none">
                                ${product.price}
                            </p>*/}

                            <p className="text-muted text-lg leading-relaxed mb-12 max-w-xl">
                                {product.description}. {t('product_detail.desc_suffix')}
                            </p>

                            <div className="flex flex-wrap gap-6 items-center mb-16">
                                <Link
                                    to="/contact"
                                    className="px-12 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent hover:shadow-2xl transition-all duration-300"
                                >
                                    Inquire Now
                                </Link>
                                <div className="flex items-center gap-4 text-accent">
                                    <span className="h-[1px] w-8 bg-accent"></span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Available in store</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted w-24">Category</span>
                                    <span className="text-sm font-medium text-primary">{product.category}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted w-24">Storage</span>
                                    <span className="text-sm font-medium text-primary">Refrigerated (0-4°C)</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted w-24">Origin</span>
                                    <span className="text-sm font-medium text-primary tracking-wide">Talala-Gir, Gujarat</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Related/Footer CTA */}
            <section className="py-32 bg-secondary/30 mt-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight leading-tight">Authentic taste, uncompromising purity.</h2>
                    <p className="text-muted mb-12 text-lg leading-relaxed">Discover why families have trusted Prasad Dairy for their daily nourishment for over two decades.</p>
                    <Link
                        to="/products"
                        className="px-12 py-5 border border-primary text-primary rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        Browse all products
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProductDetailPage;