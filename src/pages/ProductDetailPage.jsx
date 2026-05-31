import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Package, Refrigerator, Star, ShoppingCart, ChevronRight, Share2, Info, Droplets, ShieldCheck, Sparkles } from 'lucide-react';
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
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const productDetails = {
        ghee: { 
            name: t('products.ghee'), 
            description: t('products.ghee_desc'), 
            category: t('products.spreads'),
            image: gheeImg,
            storage: 'Cool, dry place',
            origin: 'Talala-Gir, Gujarat',
            packaging: '500 ml, 1 liter, 15 kg',
            features: ['Traditionally Crafted', 'Rich Aroma', 'Granular Texture', '100% Pure']
        },
        'a2-ghee': { 
            name: t('products.ghee'), 
            description: t('products.ghee_desc'), 
            category: t('products.spreads'),
            image: detailGhee,
            storage: 'Cool, dry place',
            origin: 'Talala-Gir (Gir Cow Belt), Gujarat',
            packaging: '500 ml, 1 liter',
            features: ['A2 Cow Milk', 'Bilona Method', 'Rich in Nutrients', 'Gir Cow Belt']
        },
        'masala-chhas': { 
            name: t('products.masala_chhas'), 
            description: t('products.masala_chhas_desc'), 
            category: t('products.beverages'),
            image: masalaChhasImg,
            storage: 'Chilled (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '200ml',
            features: ['Natural Cooling', 'Spiced Blend', 'Digestive Benefits', 'Fresh Daily']
        },
        'traditional-sweets': { 
            name: t('products.sweets'), 
            description: t('products.sweets_desc'), 
            category: t('products.desserts'),
            image: sweetsImg,
            storage: 'Cool, dry place or Refrigerated',
            origin: 'Talala-Gir, Gujarat',
            packaging: '250g, 500g, 1kg',
            features: ['Handcrafted', 'Pure Mawa Base', 'Artisanal Collection', 'Natural Ingredients']
        },
        'chakka': {
            name: t('products.chakka'),
            description: t('products.chakka_desc'),
            category: t('products.milk_solids'),
            image: maskaImg,
            storage: 'Refrigerated (-10°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '20 kg',
            types: 'Low Fat Maska , Full Cream Maska',
            features: ['Thick Texture', 'Pure Yogurt Base', 'Versatile Use', 'Bulk Available']
        },

        paneer: { 
            name: t('products.paneer'), 
            description: t('products.paneer_desc'), 
            category: t('products.cheese_cat'),
            image: malaiPaneerImg,
            storage: 'Refrigerated (4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '200g, 1kg, 5kg',
            features: ['Malai Softness', 'High Protein', 'No Preservatives', 'Freshly Crafted']
        },
        shrikhand: { 
            name: t('products.shrikhand'), 
            description: t('products.shrikhand_desc'), 
            category: t('products.desserts'),
            image: shrikhandAllImg,
            storage: 'Refrigerated (-10°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '500g, 1kg, 12kg, 20kg (Customization available)',
            flavors: 'Plain, Green Fruit, Shahi Rajbhog, Butterscotch, Kesar Pista, Afghani Mewa, Rajwadi Dryfruit, Mawa Badam, Pancharatana Delight, American Nuts, Chappan Bhog',
            features: ['Exotic Flavors', 'Creamy Texture', 'Celebration Dessert', 'Custom Sizing']
        },
        curd: { 
            name: t('products.butter'), 
            description: t('products.butter_desc'), 
            category: t('products.spreads'),
            image: detailButter,
            storage: 'Refrigerated (-10°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '200g, 500g, 1kg',
            features: ['Naturally Fermented', 'Probiotic Rich', 'Thick & Creamy', 'Fresh Daily']
        },
        khoa: { 
            name: t('products.khoa'), 
            description: t('products.khoa_desc'), 
            category: t('products.milk_solids'),
            image: aOneImg,
            gallery: [aOneImg, superImg, classicImg],
            storage: 'Refrigerated (-10°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '10 kg (Customization available as per request)',
            types: 'Regular, Danedar, Bengali',
            quality: 'Classic, Super, A-one',
            features: ['Premium Grades', 'Artisanal Methods', 'Bulk Customization', 'Pure Milk Solids']
        },
        'plain-mawo': { 
            name: t('products.plain_mawo'), 
            description: t('products.plain_mawo_desc'), 
            category: t('products.milk_solids'),
            image: plainMawoImg,
            storage: 'Refrigerated (-10°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '1kg, 10kg',
            features: ['Farm Fresh', 'Authentic Cooking', 'Gir Heritage', 'No Additives']
        },
        chaas: { 
            name: t('products.chaas'), 
            description: t('products.chaas_desc'), 
            category: t('products.beverages'),
            image: detailPaneer,
            storage: 'Chilled (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '250ml, 500ml',
            features: ['Light Refreshment', 'Traditional Taste', 'Natural Cooling', 'Digestive']
        },
        lassi: {
            name: t('products.lassi'),
            description: t('products.lassi_desc'),
            category: t('products.beverages'),
            image: lassiImg,
            storage: 'Chilled (0-4°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '250ml',
            features: ['Sweetly Blended', 'Thick Yogurt', 'Premium Quality', 'Refreshing']
        },
        thabdi: { 
            name: t('products.thabdi'), 
            description: t('products.thabdi_desc'), 
            category: t('products.desserts'),
            image: thabdiPackImg,
            storage: 'Cool, dry place or Refrigerated',
            origin: 'Talala-Gir, Gujarat',
            packaging: '10kg',
            types: 'Thabdi Dano, Special Thabdi',
            features: ['Saurashtra Style', 'Slow Cooked', 'Rich Caramelized', 'Authentic Taste']
        },
        basundi: { 
            name: t('products.basundi'), 
            description: t('products.basundi_desc'), 
            category: t('products.desserts'),
            image: basundiPackImg,
            storage: 'Refrigerated (-10°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '20kg',
            features: ['Thickened Milk', 'Saffron Infused', 'Celebration Rich', 'Premium Quality']
        },
        butter: { 
            name: t('products.butter'), 
            description: t('products.butter_desc'), 
            category: t('products.spreads'),
            image: butterPackImg,
            storage: 'Refrigerated (-10°C)',
            origin: 'Talala-Gir, Gujarat',
            packaging: '1kg, 20kg (Customization available as per request)',
            features: ['Desi Churned', 'Pure White Butter', 'Authentic Aroma', 'Fresh Daily']
        }
    };

    const product = productDetails[productId] || productDetails.ghee;
    const [activeImage, setActiveImage] = useState(product.image);

    useEffect(() => {
        setActiveImage(product.image);
    }, [product.image]);

    return (
        <div ref={containerRef} className="bg-[#FAFAFA] min-h-screen">
            <Helmet>
                <title>{product.name} | Prasad Dairy Products</title>
                <meta name="description" content={product.description} />
                <meta property="og:title" content={`${product.name} | Prasad Dairy`} />
                <meta property="og:description" content={product.description} />
                <meta property="og:image" content={product.image} />
                <meta name="twitter:title" content={`${product.name} | Prasad Dairy`} />
                <meta name="twitter:description" content={product.description} />
                <meta name="twitter:image" content={product.image} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": product.name,
                        "image": product.image,
                        "description": product.description,
                        "brand": {
                            "@type": "Brand",
                            "name": "Prasad Dairy"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": window.location.href,
                            "priceCurrency": "INR",
                            "availability": "https://schema.org/InStock"
                        }
                    })}
                </script>
            </Helmet>

            <div className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Navigation */}
                    <motion.nav 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase text-muted/60 mb-16"
                    >
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary tracking-[0.4em]">{product.name}</span>
                    </motion.nav>

                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                        {/* Luxury Image Showcase */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="relative group">
                                <motion.div
                                    key={activeImage}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="aspect-[4/5] bg-white rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-black/[0.03] flex items-center justify-center p-8 md:p-12"
                                >
                                    <motion.img 
                                        alt={product.name} 
                                        className="w-full h-full object-contain mix-blend-multiply" 
                                        src={activeImage} 
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8 }}
                                    />
                                    
                                    {/* Feature Badges Overlay */}
                                    <div className="absolute top-8 left-8 flex flex-col gap-3">
                                        <div className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-black/5 shadow-sm flex items-center gap-2">
                                            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                                            <span className="text-[9px] font-black uppercase tracking-widest">Quality Guaranteed</span>
                                        </div>
                                        <div className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-black/5 shadow-sm flex items-center gap-2">
                                            <Sparkles className="w-3.5 h-3.5 text-accent" />
                                            <span className="text-[9px] font-black uppercase tracking-widest">Natural Purity</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Interactive Zoom Hint */}
                                <div className="absolute bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Info className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Refined Gallery */}
                            {product.gallery && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex gap-4 justify-center"
                                >
                                    {product.gallery.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImage(img)}
                                            className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                                                activeImage === img 
                                                ? 'border-accent shadow-lg scale-105' 
                                                : 'border-transparent opacity-40 hover:opacity-100'
                                            }`}
                                        >
                                            <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Premium Content Information */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-12"
                            >
                                {/* Headers */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="px-3 py-1 bg-accent/10 rounded-full">
                                            <span className="text-[10px] font-black text-accent uppercase tracking-widest">{product.category}</span>
                                        </div>
                                        <div className="flex text-accent gap-0.5">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                        </div>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary tracking-tighter leading-[0.9]">
                                        {product.name}
                                    </h1>
                                    <div className="h-1 w-24 bg-accent/20 rounded-full" />
                                </div>

                                {/* Description */}
                                <div className="space-y-8">
                                    <p className="text-muted text-lg md:text-xl leading-relaxed font-light italic opacity-80">
                                        "{product.description}. {t('product_detail.desc_suffix')}"
                                    </p>

                                    {/* Quick Features List */}
                                    <div className="grid grid-cols-2 gap-y-4">
                                        {(product.features || ['100% Organic', 'Farm Fresh', 'Pure Quality', 'Eco-Friendly']).map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                <span className="text-[11px] font-bold text-primary/70 uppercase tracking-widest">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dynamic Spec Grid */}
                                <div className="p-8 bg-white rounded-3xl border border-black/[0.03] shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-6">
                                    {[
                                        { icon: Package, label: 'Packaging', value: product.packaging },
                                        { icon: Refrigerator, label: 'Storage', value: product.storage },
                                        { icon: Droplets, label: 'Origin', value: product.origin },
                                        { label: 'Types', value: product.types },
                                        { label: 'Quality', value: product.quality },
                                        { label: 'Flavors', value: product.flavors }
                                    ].filter(spec => spec.value).map((spec, i) => (
                                        <div key={i} className="flex items-start justify-between pb-6 border-b border-black/[0.03] last:border-0 last:pb-0 group">
                                            <div className="flex items-center gap-3">
                                                {spec.icon && <spec.icon className="w-4 h-4 text-accent/40 group-hover:text-accent transition-colors" />}
                                                <span className="text-[10px] font-bold text-muted/60 uppercase tracking-widest">{spec.label}</span>
                                            </div>
                                            <span className="text-[11px] font-bold text-primary text-right max-w-[200px]">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Call to Action */}
                                <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                                    <Link
                                        to="/contact"
                                        className="w-full sm:w-auto px-12 py-6 bg-primary text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-accent transition-all duration-500 shadow-[0_20px_40px_rgba(26,77,46,0.2)] flex items-center justify-center gap-3 group"
                                    >
                                        Place Inquiry
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <button className="flex items-center gap-3 text-muted/60 hover:text-accent transition-colors">
                                        <Share2 className="w-4 h-4" />
                                        <span className="text-[9px] font-bold uppercase tracking-widest">Share Product</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Heritage Banner */}
            <section className="py-40 relative overflow-hidden bg-primary">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">The Essence of Gir</span>
                        <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-12 tracking-tight leading-tight">
                            Bringing the purest <br />legacy to your table.
                        </h2>
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white hover:text-accent transition-colors group"
                        >
                            <span className="w-12 h-[1px] bg-white group-hover:bg-accent group-hover:w-16 transition-all duration-500"></span>
                            View Curated Collection
                        </Link>
                    </motion.div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -ml-48 -mb-48" />
            </section>
        </div>
    );
};

export default ProductDetailPage;