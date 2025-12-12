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
        khoa: { name: t('products.khoa'), description: t('products.khoa_desc'), price: '$12.00', category: t('products.milk_solids') },
        shreekhand: { name: t('products.shrikhand'), description: t('products.shrikhand_desc'), price: '$8.00', category: t('products.desserts') },
        chakka: { name: t('products.chakka'), description: t('products.chakka_desc'), price: '$6.00', category: t('products.yogurt') },
        paneer: { name: t('products.paneer'), description: t('products.paneer_desc'), price: '$10.00', category: t('products.cheese') },
        butter: { name: t('products.butter'), description: t('products.butter_desc'), price: '$15.00', category: t('products.spreads') },
        curd: { name: t('products.curd'), description: t('products.curd_desc'), price: '$5.00', category: t('products.yogurt') },
        ghee: { name: t('products.ghee'), description: t('products.ghee_desc'), price: '$45.00', category: t('products.spreads') },
        sweets: { name: t('products.sweets'), description: t('products.sweets_desc'), price: '$25.00', category: t('products.desserts') }
    };

    const product = productDetails[productId] || productDetails.khoa;

    return (
        <>
            <Helmet>
                <title>{product.name} - Prasad Dairy</title>
            </Helmet>

            <div className="bg-[#FFFDE7] pt-32 pb-12 text-center">
                <h1 className="text-4xl font-serif text-[#263238]">{product.name}</h1>
                <div className="flex justify-center items-center gap-2 mt-2 text-sm text-[#546E7A]">
                    <Link to="/" className="hover:text-[#0065B3]">{t('product_detail.home')}</Link> /
                    <Link to="/products" className="hover:text-[#0065B3]">{t('product_detail.products')}</Link> /
                    <span className="text-[#0065B3]">{product.name}</span>
                </div>
            </div>

            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-[#FFFDE7] rounded-lg p-12 flex items-center justify-center h-[500px] border border-[#263238]/5"
                        >
                            <img alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1559223669-e0065fa7f142" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex text-[#0065B3]">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <span className="text-xs text-[#90A4AE]">( 24 {t('product_detail.reviews')} )</span>
                            </div>

                            <h2 className="text-4xl font-serif text-[#263238] mb-4">{product.name}</h2>
                            <p className="text-3xl font-bold text-[#0065B3] mb-6">{product.price}</p>

                            <p className="text-[#546E7A] leading-relaxed mb-8 text-lg">
                                {product.description}. {t('product_detail.desc_suffix')}
                            </p>

                            <div className="flex gap-4 mb-8">
                                <div className="border border-[#E0E0E0] rounded-full px-4 py-3 flex items-center">
                                    <button className="text-lg px-2">-</button>
                                    <input type="text" value="1" className="w-10 text-center outline-none" readOnly />
                                    <button className="text-lg px-2">+</button>
                                </div>
                                <Button className="rounded-full bg-[#0065B3] hover:bg-[#004c8c] px-8 py-6 text-xs font-bold uppercase tracking-widest flex gap-2">
                                    <ShoppingCart className="w-4 h-4" /> {t('product_detail.add_to_cart')}
                                </Button>
                            </div>

                            <div className="border-t border-[#E0E0E0] pt-6 space-y-2 text-sm">
                                <p><span className="font-bold text-[#263238] w-24 inline-block">{t('product_detail.sku')}:</span> <span className="text-[#546E7A]">00548</span></p>
                                <p><span className="font-bold text-[#263238] w-24 inline-block">{t('product_detail.category')}:</span> <span className="text-[#0065B3]">{product.category}</span></p>
                                <p><span className="font-bold text-[#263238] w-24 inline-block">{t('product_detail.tags')}:</span> <span className="text-[#546E7A]">{t('product_detail.tags_value')}</span></p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailPage;