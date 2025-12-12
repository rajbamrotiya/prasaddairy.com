import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const TeamPage = () => {
    const { t } = useLanguage();

    const team = [
        { name: 'Rosalina D. William', role: t('team.founder'), img: 'Smiling female farmer' },
        { name: 'Alexis D. Dowson', role: t('team.head_idea'), img: 'Male farmer in plaid shirt' },
        { name: 'Miranda H. Halim', role: t('team.ceo'), img: 'Female agricultural expert' },
        { name: 'Kevin Martin', role: t('team.farmer'), img: 'Young male farmer' },
        { name: 'Sarah Albert', role: t('team.designer'), img: 'Female farm manager' },
        { name: 'John Doe', role: t('team.marketer'), img: 'Male marketing lead' }
    ];

    return (
        <>
            <Helmet>
                <title>{t('team.title')} - Prasad Dairy</title>
            </Helmet>

            <div className="relative bg-[#FFFDE7] pt-32 pb-32 text-center overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
                <div className="relative z-10 px-4">
                    <span className="text-[#0065B3] font-bold uppercase tracking-widest text-xs mb-2 block">{t('team.meet_farmers')}</span>
                    <h1 className="text-5xl font-serif text-[#263238] mb-4">{t('team.title')}</h1>
                    <div className="flex justify-center items-center gap-2 mt-2 text-sm text-[#546E7A]">
                        <Link to="/" className="hover:text-[#0065B3]">{t('nav.home')}</Link> /
                        <span className="text-[#0065B3]">{t('nav.team')}</span>
                    </div>
                </div>
            </div>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group text-center bg-[#FFFDE7] rounded-lg p-8 hover:shadow-lg transition-all border border-[#263238]/5"
                            >
                                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-[#0065B3] transition-colors">
                                    <img alt={member.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-[#263238] mb-1">{member.name}</h3>
                                <p className="text-[#0065B3] text-xs uppercase tracking-widest mb-6">{member.role}</p>

                                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-[#263238] hover:bg-[#0065B3] hover:text-white cursor-pointer">
                                        <Facebook className="w-4 h-4" />
                                    </div>
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-[#263238] hover:bg-[#0065B3] hover:text-white cursor-pointer">
                                        <Twitter className="w-4 h-4" />
                                    </div>
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-[#263238] hover:bg-[#0065B3] hover:text-white cursor-pointer">
                                        <Linkedin className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamPage;