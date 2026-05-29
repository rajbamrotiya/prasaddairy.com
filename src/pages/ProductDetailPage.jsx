import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Package, Refrigerator, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

// Import local images
import detailGhee from '@/assets/images/detail-ghee.jpg';
import detailButter from '@/assets/images/detail-butter.jpg';
import detailPaneer from '@/assets/images/detail-paneer.jpg';

// Import local product images
import gheeImg from '@/assets/images/ghee_final.webp';
import maskaImg from '@/assets/images/maska_new.webp';
import masalaChhasImg from '@/assets/images/masala_chhas_new.webp';
import sweetsImg from '@/assets/images/sweets_collection.webp';
import aOneImg from '@/assets/images/a-one.webp';
import superImg from '@/assets/images/super.webp';
import classicImg from '@/assets/images/classic.webp';
import shrikhandAllImg from '@/assets/images/shrikhand_all.webp';
import butterPackImg from '@/assets/images/butter_final.webp';
import malaiPaneerImg from '@/assets/images/malai_paneer.webp';
import thabdiPackImg from '@/assets/images/thabdi_pack.webp';
import basundiPackImg from '@/assets/images/basundi_pack.webp';
import plainMawoImg from '@/assets/images/plain_mawo.webp';
import lassiImg from '@/assets/images/lassi_final.webp';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const { t } = useLanguage();

    const productDetails = {
        ghee: { 
            name: t('products.ghee'), 
            description: t('products.ghee_desc'), 
            category: t('products.spreads'),
            image: gheeImg,
            storage: 'Cool, dry place',
            origin: 'Talala-Gir, Gujarat',
            packaging: '500 ml, 1 liter, 15 kg'
        },
        'a2-ghee': { 
            name: t('products.ghee'), 
            description: t('products.ghee_desc'), 
            category: t('products.spreads'),
            image: detailGhee,
            storage: 'Cool, dry place',
            origin: 'Talala-Gir (Gir Cow Belt), Gujarat',
            packaging: '500 ml, 1 liter'
        },
        'masala-chhas': { 
            name: t('products.masala_chhas'), 
            description: t('products.masala_chhas_desc'), 
            category: t('products.beverages'),
            image: masalaChhasImg,
            storage: 'Chilled (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '200ml'
        },
        'traditional-sweets': { 
            name: t('products.sweets'), 
            description: t('products.sweets_desc'), 
            category: t('products.desserts'),
            image: sweetsImg,
            storage: 'Cool, dry place or Refrigerated',
            origin: 'Talala-Gir, Gujarat',
            packaging: '250g, 500g, 1kg'
        },
        'chakka': {
            name: t('products.chakka'),
            description: t('products.chakka_desc'),
            category: t('products.milk_solids'),
            image: maskaImg,
            storage: 'Refrigerated (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '20 kg',
            types: 'Low Fat Maska , Full Cream Maska',
        },

        paneer: { 
            name: t('products.paneer'), 
            description: t('products.paneer_desc'), 
            category: t('products.cheese_cat'),
            image: malaiPaneerImg,
            storage: 'Refrigerated (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '200g, 1kg, 5kg'
        },
        shrikhand: { 
            name: t('products.shrikhand'), 
            description: t('products.shrikhand_desc'), 
            category: t('products.desserts'),
            image: shrikhandAllImg,
            storage: 'Refrigerated (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '500g, 1kg, 12kg, 20kg (Customization available)',
            flavors: 'Plain, Green Fruit, Shahi Rajbhog, Butterscotch, Kesar Pista, Afghani Mewa, Rajwadi Dryfruit, Mawa Badam, Pancharatana Delight, American Nuts, Chappan Bhog'
        },
        curd: { 
            name: t('products.butter'), 
            description: t('products.butter_desc'), 
            category: t('products.spreads'),
            image: detailButter,
            storage: 'Refrigerated (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '200g, 500g, 1kg'
        },
        khoa: { 
            name: t('products.khoa'), 
            description: t('products.khoa_desc'), 
            category: t('products.milk_solids'),
            image: aOneImg,
            gallery: [aOneImg, superImg, classicImg],
            storage: 'Refrigerated (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '10 kg (Customization available as per request)',
            types: 'Regular, Danedar, Bengali',
            quality: 'Classic, Super, A-one'
        },
        'plain-mawo': { 
            name: t('products.plain_mawo'), 
            description: t('products.plain_mawo_desc'), 
            category: t('products.milk_solids'),
            image: plainMawoImg,
            storage: 'Refrigerated (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '1kg, 10kg'
        },
        chaas: { 
            name: t('products.chaas'), 
            description: t('products.chaas_desc'), 
            category: t('products.beverages'),
            image: detailPaneer,
            storage: 'Chilled (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '250ml, 500ml'
        },
        lassi: {
            name: t('products.lassi'),
            description: t('products.lassi_desc'),
            category: t('products.beverages'),
            image: lassiImg,
            storage: 'Chilled (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '250ml'
        },
        thabdi: { 
            name: t('products.thabdi'), 
            description: t('products.thabdi_desc'), 
            category: t('products.desserts'),
            image: thabdiPackImg,
            storage: 'Cool, dry place or Refrigerated',
            origin: 'Talala-Gir, Gujarat',
            packaging: '10kg',
            types: 'Thabdi Dano, Special Thabdi'
        },
        basundi: { 
            name: t('products.basundi'), 
            description: t('products.basundi_desc'), 
            category: t('products.desserts'),
            image: basundiPackImg,
            storage: 'Refrigerated (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '20kg'
        },
        butter: { 
            name: t('products.butter'), 
            description: t('products.butter_desc'), 
            category: t('products.spreads'),
            image: butterPackImg,
            storage: 'Refrigerated (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '1kg, 20kg (Customization available as per request)'
        }
    };

    const product = productDetails[productId] || productDetails.ghee;
    const [activeImage, setActiveImage] = useState(product.image);

    useEffect(() => {
        setActiveImage(product.image);
    }, [product.image]);

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
                        <div className="space-y-6">
                            <motion.div
                                key={activeImage}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="aspect-square bg-secondary rounded-3xl overflow-hidden flex items-center justify-center"
                            >
                                <img 
                                    alt={product.name} 
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
                                    src={activeImage} 
                                />
                            </motion.div>

                            {/* Gallery Thumbnails */}
                            {product.gallery && (
                                <div className="grid grid-cols-3 gap-4">
                                    {product.gallery.map((img, idx) => (
                                        <motion.button
                                            key={idx}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveImage(img)}
                                            className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                                                activeImage === img ? 'border-accent shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'
                                            }`}
                                        >
                                            <img src={img} alt={`${product.name} gallery ${idx}`} className="w-full h-full object-cover" />
                                        </motion.button>
                                    ))}
                                </div>
                            )}
                        </div>

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
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted w-24">{t('product_detail.category')}</span>
                                    <span className="text-sm font-medium text-primary">{product.category}</span>
                                </div>
                                {product.types && (
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted w-24">Types</span>
                                        <span className="text-sm font-medium text-primary">{product.types}</span>
                                    </div>
                                )}
                                {product.quality && (
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted w-24">Quality</span>
                                        <span className="text-sm font-medium text-primary">{product.quality}</span>
                                    </div>
                                )}
                                {product.flavors && (
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted w-24">Flavors</span>
                                        <span className="text-sm font-medium text-primary">{product.flavors}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted w-24">{t('product_detail.packaging')}</span>
                                    <span className="text-sm font-medium text-primary">{product.packaging}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted w-24">{t('product_detail.storage')}</span>
                                    <span className="text-sm font-medium text-primary">{product.storage}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted w-24">{t('product_detail.origin')}</span>
                                    <span className="text-sm font-medium text-primary tracking-wide">{product.origin}</span>
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