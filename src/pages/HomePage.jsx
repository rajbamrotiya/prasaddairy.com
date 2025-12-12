import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote, Award, Droplet, Tractor, Sprout, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import HeroSlider from '@/components/HeroSlider';

const HomePage = () => {
    const { t } = useLanguage();

    return (
        <>
            <Helmet>
                <title>{t('home.hero_title')} - {t('home.welcome')}</title>
                <meta name="description" content="Welcome to Prasad Dairy. We provide fresh, organic, and natural dairy products directly from our farm to your table." />
            </Helmet>

            {/* 1. Hero Slider Section (Replaces static hero) */}
            <HeroSlider />

            {/* 2. Know About Our Farm & History */}
            <section className="py-24 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('home.about_us')}</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#263238] mb-6 leading-tight">
                                {t('home.know_about')}
                            </h2>
                            <p className="text-[#546E7A] mb-8 leading-relaxed text-lg">
                                {t('home.know_about_desc')}
                            </p>

                            <div className="flex items-start gap-4 mb-8 bg-[#FFFDE7] p-4 rounded-lg border-l-4 border-[#0065B3]">
                                <Award className="w-10 h-10 text-[#0065B3]" />
                                <div>
                                    <h4 className="font-bold text-[#263238]">{t('home.award')}</h4>
                                    <Link to="/about" className="text-xs text-[#0065B3] font-bold uppercase hover:underline">{t('home.service_details')}</Link>
                                </div>
                            </div>

                            <Button variant="outline" className="border-[#263238] text-[#263238] hover:bg-[#263238] hover:text-white rounded-sm px-8 py-6 text-xs font-bold tracking-widest uppercase">
                                <Link to="/about">{t('home.read_more')}</Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mt-12">
                                    <img alt="Happy female farmer holding milk glass" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" src="https://images.unsplash.com/photo-1670607951160-d7780f0f0478" />
                                </div>
                                <div>
                                    <img alt="Cows grazing in green field" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" src="https://images.unsplash.com/photo-1642162045552-6e4679567282" />
                                    <div className="bg-[#0065B3] rounded-full w-16 h-16 flex items-center justify-center text-white absolute bottom-0 right-10 shadow-xl z-10">
                                        <Sprout className="w-8 h-8" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. What We Provide */}
            <section className="py-24 bg-[#FFFDE7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('home.services')}</span>
                    <h2 className="text-4xl font-serif text-[#263238] mb-16">{t('home.what_provide')}</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: t('home.fresh_milk'), img: 'Fresh milk pouring into glass', icon: Droplet },
                            { title: t('home.dairy_products'), img: 'Cheese and butter variety', icon: Star },
                            { title: t('home.organic_product'), img: 'Fresh vegetables and fruits basket', icon: Sprout }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white shadow-md group hover:-translate-y-2 transition-all duration-300 rounded-lg overflow-hidden"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1652086939922-9582b3367e61" />
                                    <div className="absolute bottom-[-20px] right-4 bg-[#0065B3] w-12 h-12 flex items-center justify-center text-white shadow-lg rounded-sm">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="p-8 text-left pt-10">
                                    <h3 className="text-xl font-serif font-bold text-[#263238] mb-2">{item.title}</h3>
                                    <Link to="/products" className="text-xs font-bold text-[#0065B3] uppercase tracking-wider hover:underline">{t('home.service_details')}</Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Statistics */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                        {[
                            { num: '442+', label: t('home.stats_projects') },
                            { num: '34+', label: t('home.stats_mates') },
                            { num: '213+', label: t('home.stats_capture') },
                            { num: '1462+', label: t('home.stats_customers') },
                            { num: '100%', label: t('home.stats_satisfaction') }
                        ].map((stat, i) => (
                            <div key={i}>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0065B3] mb-2">{stat.num}</h3>
                                <p className="text-xs uppercase tracking-widest text-[#263238]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Testimonials */}
            <section className="py-24 bg-[#FFFDE7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('home.testimonials_title')}</span>
                        <h2 className="text-4xl font-serif text-[#263238]">{t('home.testimonials_heading')}</h2>
                    </div>

                    <div className="bg-white p-12 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center relative rounded-lg">
                        <div className="bg-[#263238] text-white p-8 text-center min-w-[200px] rounded-sm">
                            <div className="mb-4 flex justify-center">
                                <Quote className="w-12 h-12 text-[#0065B3]" />
                            </div>
                            <h3 className="text-4xl font-bold mb-1">1462+</h3>
                            <p className="text-xs uppercase tracking-widest opacity-70">{t('home.stats_customers')}</p>
                        </div>
                        <div className="flex-1">
                            <div className="flex text-[#0065B3] mb-4">
                                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-[#546E7A] text-lg italic mb-6">
                                "{t('home.testimonials_quote')}"
                            </p>
                            <div className="flex gap-8 text-sm">
                                <div>
                                    <h5 className="font-bold text-[#263238]">HELSON JHONSON</h5>
                                    <span className="text-xs text-[#90A4AE]">{t('team.founder')}</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#263238]">ALONSO DOWSON</h5>
                                    <span className="text-xs text-[#90A4AE]">{t('team.ceo')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Featured Products */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('home.featured_title')}</span>
                    <h2 className="text-4xl font-serif text-[#263238] mb-16">{t('home.featured_heading')}</h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: t('products.ghee'), price: '$45.00', img: 'Jar of golden ghee' },
                            { name: t('home.fresh_milk'), price: '$29.00', img: 'Bottle of fresh milk' },
                            { name: t('products.paneer'), price: '$20.00', img: 'Wedge of cheese' },
                            { name: t('products.butter'), price: '$34.00', img: 'Bottle of oil' }
                        ].map((prod, i) => (
                            <div key={i} className="group">
                                <div className="h-64 flex items-center justify-center bg-[#FFFDE7] mb-6 rounded-full w-64 h-64 mx-auto overflow-hidden border-4 border-transparent group-hover:border-[#0065B3] transition-all">
                                    <img alt={prod.name} className="h-40 object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                                </div>
                                <h3 className="font-serif font-bold text-lg text-[#263238]">{prod.name}</h3>
                                <p className="text-[#0065B3] font-bold">{prod.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <Button variant="outline" className="border-[#263238] text-[#263238] rounded-sm uppercase tracking-widest text-xs font-bold px-8 py-4 hover:bg-[#263238] hover:text-white">
                            <Link to="/products">{t('home.more_products')}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 7. Blue Section (Benefits - formerly Green) */}
            <section className="py-16 bg-[#0065B3] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                        {[
                            { icon: Tractor, label: t('home.farm_house') },
                            { icon: Sprout, label: t('home.organic_100') },
                            { icon: Award, label: t('home.farm_fresh') },
                            { icon: Heart, label: t('home.made_love') },
                            { icon: Star, label: t('home.premium_quality') }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center group cursor-pointer">
                                <div className="border-2 border-white/30 p-4 rounded-full mb-4 group-hover:bg-white group-hover:text-[#0065B3] transition-colors">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Expert Farmer Team */}
            <section className="py-24 bg-[#263238] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img alt="Forest background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1694070787741-55c4ac713a73" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('home.team_title')}</span>
                    <h2 className="text-4xl font-serif text-white mb-16">{t('home.team_heading')}</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Rosalina D. William', role: t('team.founder'), img: 'Smiling female farmer' },
                            { name: 'Alexis D. Dowson', role: t('team.head_idea'), img: 'Male farmer in plaid shirt' },
                            { name: 'Miranda H. Halim', role: t('team.ceo'), img: 'Female agricultural expert' }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white p-8 pb-12 text-center rounded-lg relative mt-12"
                            >
                                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto -mt-24 mb-6 border-4 border-white shadow-lg">
                                    <img alt={member.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                                </div>
                                <h3 className="font-serif font-bold text-xl text-[#263238]">{member.name}</h3>
                                <p className="text-[#0065B3] text-xs uppercase tracking-widest mt-1">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Blog & Insights */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('home.news_title')}</span>
                            <h2 className="text-4xl font-serif text-[#263238]">{t('home.news_heading')}</h2>
                        </div>
                        <Button variant="outline" className="hidden md:flex border-[#E0E0E0] text-[#263238]">{t('home.more_news')}</Button>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: 'To Influence Consumer Behavior', date: 'May 20, 2022', img: 'Farmer market display' },
                            { title: 'Farmers Tend Enterprise Individual', date: 'May 22, 2022', img: 'Cows in barn' },
                            { title: 'Which Means That They Are Usually', date: 'May 25, 2022', img: 'Tractor in field' },
                            { title: 'Natural Leaders Who Thrive At', date: 'May 28, 2022', img: 'Green crops field' }
                        ].map((blog, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="overflow-hidden rounded-lg mb-4 h-48">
                                    <img alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6" />
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-[#90A4AE] uppercase tracking-wider mb-2">
                                    <Calendar className="w-3 h-3" /> {blog.date}
                                </div>
                                <h3 className="font-serif font-bold text-[#263238] leading-snug group-hover:text-[#0065B3] transition-colors">{blog.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;