import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Filter, ChevronRight, LayoutGrid, List, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Import local image
import supportExpert from '@/assets/images/support-expert.png';

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
    const [activeCategory, setActiveCategory] = useState('All');
    const { t } = useLanguage();
    const { scrollY } = useScroll();
    
    const headerY = useTransform(scrollY, [0, 500], [0, -150]);
    const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    const categories = ['All', t('products.milk_solids'), t('products.desserts'), t('products.spreads'), t('products.cheese_cat'), t('products.beverages')];

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
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-[#FAFAFA] min-h-screen">
            <Helmet>
                <title>{t('products.title')} - Prasad Dairy</title>
            </Helmet>

            {/* Premium Hero Section */}
            <div className="relative h-[70vh] bg-primary flex items-center justify-center overflow-hidden">
                <motion.div 
                    style={{ y: headerY, opacity: headerOpacity }}
                    className="relative z-10 max-w-7xl mx-auto px-6 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex items-center justify-center gap-3 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-accent" />
                            <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px]">{t('products.shop_now')}</span>
                            <Sparkles className="w-4 h-4 text-accent" />
                        </motion.div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 tracking-tighter leading-none">
                            {t('products.title')}
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light italic">
                            Elevating daily rituals through generational craftsmanship and unwavering purity.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Decorative Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
                </div>
            </div>

            {/* Interactive Filter Bar */}
            <div className="sticky top-[70px] z-40 bg-white/90 backdrop-blur-3xl border-b border-black/[0.03] shadow-[0_1px_0_0_rgba(0,0,0,0.01)]">
                <div className="max-w-7xl mx-auto px-6 py-4 md:py-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
                        {/* Categories */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 lg:pb-0 no-scrollbar w-full lg:w-auto scroll-smooth">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`relative px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-500 overflow-hidden ${
                                        activeCategory === cat 
                                        ? 'text-white' 
                                        : 'text-muted hover:text-primary'
                                    }`}
                                >
                                    {activeCategory === cat && (
                                        <motion.div 
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-primary shadow-lg z-0"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat}</span>
                                </button>
                            ))}
                        </div>

                        {/* Search & Stats */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                            <div className="relative w-full sm:w-72 lg:w-80 group">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <Search className="w-3.5 h-3.5 text-muted/50 group-focus-within:text-accent transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    placeholder={t('products.search_placeholder')}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-black/[0.03] border-none rounded-full pl-11 pr-6 py-3 text-xs font-semibold text-primary placeholder:text-muted/40 focus:ring-2 focus:ring-accent/20 focus:bg-white transition-all shadow-inner"
                                />
                                {searchTerm && (
                                    <button 
                                        onClick={() => setSearchTerm('')}
                                        className="absolute inset-y-0 right-4 flex items-center text-muted/30 hover:text-accent transition-colors"
                                    >
                                        <Sparkles className="w-3 h-3" />
                                    </button>
                                )}
                            </div>
                            
                            <div className="flex items-center gap-4 pl-6 border-l border-black/[0.05] hidden sm:flex">
                                <div className="text-right">
                                    <div className="text-[11px] font-bold text-primary tracking-widest">{filteredProducts.length}</div>
                                    <div className="text-[8px] font-bold text-muted uppercase tracking-[0.2em] opacity-40 whitespace-nowrap">Results</div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center">
                                    <LayoutGrid className="w-3.5 h-3.5 text-accent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid with Advanced Animations */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.length === 0 ? (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-center py-40"
                            >
                                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                                    <Search className="w-8 h-8 text-muted" />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-primary mb-4">No treasures found</h3>
                                <p className="text-muted mb-8 max-w-md mx-auto">We couldn't find any products matching your criteria. Try adjusting your filters or search term.</p>
                                <button
                                    onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                                    className="px-8 py-4 bg-primary text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500 shadow-xl"
                                >
                                    Reset Selection
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div 
                                layout
                                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-24"
                            >
                                {filteredProducts.map((product, index) => (
                                    <React.Fragment key={product.id}>
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ 
                                                duration: 0.8, 
                                                delay: index * 0.05, 
                                                ease: [0.22, 1, 0.36, 1] 
                                            }}
                                            className="group"
                                        >
                                            <Link to={`/products/${product.id}`} className="block">
                                                {/* Advanced Product Image Card */}
                                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 mb-8">
                                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                                                    
                                                    <motion.img
                                                        whileHover={{ scale: 1.1, rotate: -2 }}
                                                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover p-4"
                                                    />

                                                    {/* Status Badges */}
                                                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                                                        <span className="bg-white/90 backdrop-blur-md text-primary text-[8px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-sm">
                                                            {product.category}
                                                        </span>
                                                        {product.isUpcoming && (
                                                            <motion.span 
                                                                animate={{ scale: [1, 1.1, 1] }}
                                                                transition={{ duration: 2, repeat: Infinity }}
                                                                className="bg-accent text-white text-[8px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg"
                                                            >
                                                                New
                                                            </motion.span>
                                                        )}
                                                    </div>

                                                    {/* Hover Interaction Overlay */}
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1]">
                                                        <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center shadow-2xl mb-4 group-hover:rotate-[360deg] transition-transform duration-1000">
                                                            <ArrowRight className="w-6 h-6" />
                                                        </div>
                                                        <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] drop-shadow-lg">
                                                            Discover
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Refined Product Details */}
                                                <div className="px-2">
                                                    <div className="flex justify-between items-center mb-3">
                                                        <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-500">
                                                            {product.name}
                                                        </h3>
                                                        <div className="h-[1px] flex-1 mx-4 bg-black/5 group-hover:bg-accent/20 transition-colors duration-500" />
                                                    </div>
                                                    <p className="text-muted/70 text-sm leading-relaxed font-medium line-clamp-2 mb-6">
                                                        {product.description}
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex -space-x-2">
                                                            {[1,2,3].map(i => (
                                                                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-secondary flex items-center justify-center overflow-hidden">
                                                                    <div className="w-full h-full bg-accent/20 animate-pulse" />
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <span className="text-[9px] font-bold text-muted/40 uppercase tracking-widest">Trusted by 2K+ Families</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                        {index === 3 && (
                                            <motion.div 
                                                className="col-span-full py-16 px-12 bg-primary rounded-[3rem] relative overflow-hidden my-12"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                                    <div className="max-w-xl text-center md:text-left">
                                                        <h2 className="text-4xl font-serif font-bold text-white mb-4">Quality you can taste, <br />Purity you can trust.</h2>
                                                        <p className="text-white/60 text-sm md:text-base leading-relaxed">Experience the difference of milk processed with traditional methods and modern safety standards.</p>
                                                    </div>
                                                    <Link to="/about" className="px-10 py-5 bg-accent text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl">
                                                        Learn Our Process
                                                    </Link>
                                                </div>
                                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl" />
                                            </motion.div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Premium Support / Trust Section */}
            <section className="py-40 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Personalized Care</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 tracking-tight leading-[1.1]">
                                Need assistance in <br />your wellness journey?
                            </h2>
                            <p className="text-muted text-lg mb-12 leading-relaxed">
                                Our experts are dedicated to helping you select the finest dairy products tailored to your family's specific nutritional needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    to="/contact"
                                    className="px-12 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 group"
                                >
                                    Speak with our team
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <div className="flex items-center gap-4 px-8">
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-accent" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Support 24/7</div>
                                        <div className="text-[9px] font-bold text-muted uppercase tracking-widest">Always here for you</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="relative"
                        >
                            <div className="aspect-square bg-secondary rounded-[4rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-1000">
                                <img 
                                    src={supportExpert} 
                                    alt="Expert Support" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block animate-bounce-slow">
                                <div className="text-accent text-3xl font-serif font-bold mb-1">100%</div>
                                <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Purity Guaranteed</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 -skew-x-12 translate-x-1/2" />
            </section>
        </div>
    );
};

export default ProductsPage;