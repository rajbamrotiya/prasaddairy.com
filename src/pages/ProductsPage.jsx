import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Filter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Import images
import gheeImg from '@/assets/images/ghee_final.webp';
import maskaImg from '@/assets/images/maska_new.webp';
import masalaChhasImg from '@/assets/images/masala_chhas_new.webp';
import sweetsImg from '@/assets/images/sweets_collection.webp';
import khoaImg from '@/assets/images/a-one.webp';
import shrikhandImg from '@/assets/images/shrikhand_all.webp';
import butterPackImg from '@/assets/images/butter_final.webp';
import malaiPaneerImg from '@/assets/images/malai_paneer.webp';
import thabdiPackImg from '@/assets/images/thabdi_pack.webp';
import basundiPackImg from '@/assets/images/basundi_pack.webp';
import plainMawoImg from '@/assets/images/plain_mawo.webp';
import lassiImg from '@/assets/images/lassi_final.webp';

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { t } = useLanguage();

    const products = [
        { id: 'khoa', name: t('products.khoa'), description: t('products.khoa_desc'), category: t('products.milk_solids'), price: 12, image: khoaImg },
        { id: 'chakka', name: t('products.chakka'), description: t('products.chakka_desc'), category: t('products.milk_solids'), price: 20, image: maskaImg },
        { id: 'shrikhand', name: t('products.shrikhand'), description: t('products.shrikhand_desc'), category: t('products.desserts'), price: 8, image: shrikhandImg },
        { id: 'basundi', name: t('products.basundi'), description: t('products.basundi_desc'), category: t('products.desserts'), price: 45, image: basundiPackImg },
        { id: 'butter', name: t('products.butter'), description: t('products.butter_desc'), category: t('products.spreads'), price: 25, image: butterPackImg },
        { id: 'paneer', name: t('products.paneer'), description: t('products.paneer_desc'), category: t('products.cheese_cat'), price: 10, image: malaiPaneerImg },
        { id: 'thabdi', name: t('products.thabdi'), description: t('products.thabdi_desc'), category: t('products.desserts'), price: 40, image: thabdiPackImg },
        { id: 'plain-mawo', name: t('products.plain_mawo'), description: t('products.plain_mawo_desc'), category: t('products.milk_solids'), price: 15, image: plainMawoImg },
        { id: 'ghee', name: t('products.ghee'), description: t('products.ghee_desc'), category: t('products.spreads'), price: 45, image: gheeImg },
        { id: 'masala-chhas', name: t('products.masala_chhas'), description: t('products.masala_chhas_desc'), category: t('products.beverages'), price: 5, image: masalaChhasImg, isUpcoming: true },
        { id: 'lassi', name: t('products.lassi'), description: t('products.lassi_desc'), category: t('products.beverages'), price: 4, image: lassiImg, isUpcoming: true },
        { id: 'traditional-sweets', name: t('products.sweets'), description: t('products.sweets_desc'), category: t('products.desserts'), price: 40, image: sweetsImg, isUpcoming: true },
    ];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>{t('products.title')} - Prasad Dairy</title>
            </Helmet>

            {/* Hero Header */}
            <div className="relative bg-primary pt-48 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full -mr-64 -mt-64 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">{t('products.shop_now')}</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">{t('products.title')}</h1>
                        <p className="text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">Discover our range of premium dairy products, crafted with generational expertise and uncompromising purity.</p>
                    </motion.div>
                </div>
            </div>

            {/* Search Section */}
            <section className="py-12 border-b border-gray-100 sticky top-[60px] z-40 bg-white/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative w-full md:max-w-md"
                        >
                            <input
                                type="text"
                                placeholder={t('products.search_placeholder')}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-0 pr-10 py-3 bg-transparent border-b border-gray-200 text-primary placeholder-muted focus:outline-none focus:border-accent transition-all text-sm font-medium"
                            />
                            <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-hover:text-accent" />
                        </motion.div>

                        {/* Product Count */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted"
                        >
                            {filteredProducts.length} {filteredProducts.length === 1 ? 'Available Product' : 'Available Products'}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-40">
                            <h3 className="text-3xl font-serif text-primary mb-6">No matches found</h3>
                            <button
                                onClick={() => setSearchTerm('')}
                                className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors"
                            >
                                Clear filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="group"
                                >
                                    <Link to={`/products/${product.id}`} className="block space-y-8">
                                        {/* Product Image */}
                                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary relative">
                                            <motion.img
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 1 }}
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover mix-blend-multiply"
                                            />
                                            
                                            {/* Upcoming Banner */}
                                            {product.isUpcoming && (
                                                <div className="absolute top-4 right-4 z-20">
                                                    <span className="bg-accent text-white text-[8px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                                                        Upcoming
                                                    </span>
                                                </div>
                                            )}
                                            
                                            {/* Hover CTA */}
                                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                                <span className="px-6 py-3 bg-white text-primary text-[10px] font-bold uppercase tracking-widest rounded-full shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                    View Details
                                                </span>
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-300">
                                                    {product.name}
                                                </h3>
                                            </div>
                                            <p className="text-muted text-sm leading-relaxed line-clamp-2">
                                                {product.description}
                                            </p>
                                            <div className="pt-4 flex items-center gap-4 text-accent">
                                                <span className="h-[1px] w-8 bg-accent group-hover:w-12 transition-all duration-500"></span>
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Explore</span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Support Section */}
            <section className="py-32 bg-secondary/30">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">Need personalized assistance?</h2>
                    <p className="text-muted mb-12 text-lg leading-relaxed">Our experts are here to help you choose the right products for your family's health and wellness.</p>
                    <Link
                        to="/contact"
                        className="px-12 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent transition-all duration-300"
                    >
                        Speak with our team
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;