import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Filter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const { t } = useLanguage();

    const products = [
        { id: 'khoa', name: t('products.khoa'), description: t('products.khoa_desc'), category: t('products.milk_solids'), price: 12, image: 'https://images.unsplash.com/photo-1559223669-e0065fa7f142' },
        { id: 'shreekhand', name: t('products.shrikhand'), description: t('products.shrikhand_desc'), category: t('products.desserts'), price: 8, image: 'https://images.unsplash.com/photo-1559223669-e0065fa7f142' },
        { id: 'chakka', name: t('products.chakka'), description: t('products.chakka_desc'), category: t('products.yogurt'), price: 6, image: 'https://images.unsplash.com/photo-1559223669-e0065fa7f142' },
        { id: 'paneer', name: t('products.paneer'), description: t('products.paneer_desc'), category: t('products.cheese'), price: 10, image: 'https://images.unsplash.com/photo-1559223669-e0065fa7f142' },
        { id: 'butter', name: t('products.butter'), description: t('products.butter_desc'), category: t('products.spreads'), price: 15, image: 'https://images.unsplash.com/photo-1559223669-e0065fa7f142' },
        { id: 'curd', name: t('products.curd'), description: t('products.curd_desc'), category: t('products.yogurt'), price: 5, image: 'https://images.unsplash.com/photo-1559223669-e0065fa7f142' },
        { id: 'ghee', name: t('products.ghee'), description: t('products.ghee_desc'), category: t('products.spreads'), price: 45, image: 'https://images.unsplash.com/photo-1559223669-e0065fa7f142' },
        { id: 'sweets', name: t('products.sweets'), description: t('products.sweets_desc'), category: t('products.desserts'), price: 25, image: 'https://images.unsplash.com/photo-1559223669-e0065fa7f142' },
    ];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    return (
        <>
            <Helmet>
                <title>{t('products.title')} - Prasad Dairy</title>
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
                        <span className="text-[#FFFDE7] font-bold uppercase tracking-widest text-xs mb-3 block opacity-80">{t('products.shop_now')}</span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{t('products.title')}</h1>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">Discover our range of premium dairy products, crafted with care</p>
                    </motion.div>

                    <div className="flex justify-center items-center gap-2 text-sm opacity-80">
                        <Link to="/" className="hover:text-[#FFFDE7] transition-colors">{t('nav.home')}</Link> /
                        <span className="text-[#FFFDE7]">{t('nav.products')}</span>
                    </div>
                </div>
            </div>

            {/* Search Section */}
            <section className="py-12 bg-white relative z-20 -mt-8 mb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative max-w-2xl mx-auto mb-8"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                placeholder={t('products.search_placeholder')}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-6 pr-14 py-4 bg-[#FFFDE7] rounded-full shadow-lg text-[#263238] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0065B3] border-2 border-transparent hover:border-[#0065B3]/20 transition-all"
                            />
                            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0065B3]" />
                        </div>
                    </motion.div>

                    {/* Product Count */}
                    <div className="flex justify-center">
                        <span className="text-sm font-semibold text-[#546E7A]">
                            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
                        </span>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredProducts.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-20"
                        >
                            <h3 className="text-2xl font-serif text-[#263238] mb-3">No Products Found</h3>
                            <p className="text-[#546E7A] mb-8">Try adjusting your search term</p>
                            <button
                                onClick={() => setSearchTerm('')}
                                className="px-8 py-3 bg-[#0065B3] text-white rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#004a8a] transition-colors"
                            >
                                Clear Search
                            </button>
                        </motion.div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group h-full"
                                >
                                    <span  className="block h-full">
                                        {/* Product Image */}
                                        <div className="bg-[#FFFDE7] h-80 rounded-xl overflow-hidden relative mb-6 flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-[#0065B3]/30">
                                            <motion.img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />

                                            {/* Category Badge */}
                                            {/*<motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                className="absolute top-4 left-4 bg-[#0065B3] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                                            >
                                                {product.category}
                                            </motion.div>*/}

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0065B3]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                                <span className="text-white font-bold uppercase tracking-widest text-sm">View Details</span>
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-serif font-bold text-[#263238] group-hover:text-[#0065B3] transition-colors line-clamp-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-[#546E7A] text-sm line-clamp-2 leading-relaxed">
                                                {product.description}
                                            </p>
                                            <div className="flex items-center justify-between pt-2 border-t border-[#0065B3]/10">
                                                {/*<span className="text-[#0065B3] font-bold text-lg">${product.price.toFixed(2)}</span>*/}
                                                <ArrowRight className="w-4 h-4 text-[#0065B3] group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#FFFDE7]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif text-[#263238] mb-4">Can't Find What You're Looking For?</h2>
                    <p className="text-[#546E7A] mb-8">Contact us today and we'll help you find the perfect product for your needs.</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#0065B3] text-white rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#004a8a] transition-colors"
                    >
                        Get In Touch <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ProductsPage;
