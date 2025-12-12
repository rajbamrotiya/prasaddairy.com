import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { t } = useLanguage();

    const products = [
        { id: 'khoa', name: t('products.khoa'), description: t('products.khoa_desc'), category: t('products.milk_solids'), price: '$12.00' },
        { id: 'shreekhand', name: t('products.shrikhand'), description: t('products.shrikhand_desc'), category: t('products.desserts'), price: '$8.00' },
        { id: 'chakka', name: t('products.chakka'), description: t('products.chakka_desc'), category: t('products.yogurt'), price: '$6.00' },
        { id: 'paneer', name: t('products.paneer'), description: t('products.paneer_desc'), category: t('products.cheese'), price: '$10.00' },
        { id: 'butter', name: t('products.butter'), description: t('products.butter_desc'), category: t('products.spreads'), price: '$15.00' },
        { id: 'curd', name: t('products.curd'), description: t('products.curd_desc'), category: t('products.yogurt'), price: '$5.00' },
        { id: 'ghee', name: t('products.ghee'), description: t('products.ghee_desc'), category: t('products.spreads'), price: '$45.00' },
        { id: 'sweets', name: t('products.sweets'), description: t('products.sweets_desc'), category: t('products.desserts'), price: '$25.00' },
    ];

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Helmet>
                <title>{t('products.title')} - Prasad Dairy</title>
            </Helmet>

            {/* Wavy Header */}
            <div className="relative bg-[#FFFDE7] pt-32 pb-32 text-center overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
                <div className="relative z-10 px-4">
                    <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('products.shop_now')}</span>
                    <h1 className="text-5xl font-serif text-[#263238] mb-6">{t('products.title')}</h1>

                    {/* Search */}
                    <div className="relative max-w-md mx-auto mt-8">
                        <input
                            type="text"
                            placeholder={t('products.search_placeholder')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-6 pr-12 py-4 bg-white rounded-full shadow-lg text-[#263238] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0065B3]"
                        />
                        <Button size="icon" className="absolute right-2 top-2 rounded-full bg-[#0065B3] hover:bg-[#004c8c] w-10 h-10">
                            <Search className="h-4 w-4 text-white" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <section className="py-24 bg-[#FFFFFF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <Link to={`/products/${product.id}`} className="block">
                                    <div className="bg-[#FFFDE7] h-80 rounded-lg overflow-hidden relative mb-4 flex items-center justify-center group-hover:shadow-xl transition-shadow border border-transparent group-hover:border-[#0065B3]/20">
                                        <img alt={product.name} className="h-48 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1559223669-e0065fa7f142" />

                                        <div className="absolute top-4 left-4 bg-[#0065B3] text-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm">
                                            {product.category}
                                        </div>

                                        <div className="absolute bottom-0 left-0 w-full bg-[#0065B3] py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                         <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            {t('products.view_details')} <ArrowRight className="w-3 h-3" />
                         </span>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-lg font-serif font-bold text-[#263238] group-hover:text-[#0065B3] transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-[#0065B3] font-bold mt-1">{product.price}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsPage;