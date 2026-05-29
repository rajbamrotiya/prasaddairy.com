import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

// Import local image
import teamMemberPlaceholder from '@/assets/images/team-member-placeholder.jpg';

const TeamPage = () => {
    const { t } = useLanguage();

    const team = [
        { name: 'Rosalina D. William', role: t('team.founder'), img: teamMemberPlaceholder },
        { name: 'Alexis D. Dowson', role: t('team.head_idea'), img: teamMemberPlaceholder },
        { name: 'Miranda H. Halim', role: t('team.ceo'), img: teamMemberPlaceholder },
        { name: 'Kevin Martin', role: t('team.farmer'), img: teamMemberPlaceholder },
        { name: 'Sarah Albert', role: t('team.designer'), img: teamMemberPlaceholder },
        { name: 'John Doe', role: t('team.marketer'), img: teamMemberPlaceholder }
    ];

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>{t('team.title')} - Prasad Dairy</title>
            </Helmet>

            {/* Hero Header */}
            <div className="relative bg-primary pt-48 pb-32 overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full -mr-64 -mt-64 blur-3xl"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">{t('team.meet_farmers')}</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">{t('team.title')}</h1>
                        <nav className="flex justify-center items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-muted">
                            <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
                            <span>/</span>
                            <span className="text-white">{t('nav.team')}</span>
                        </nav>
                    </motion.div>
                </div>
            </div>

            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="group"
                            >
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
                                    <img 
                                        alt={member.name} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                        src={member.img} 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-serif font-bold text-primary tracking-tight">{member.name}</h3>
                                    <p className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">{member.role}</p>
                                    
                                    <div className="pt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {[Linkedin, Mail, Facebook, Twitter].map((Icon, i) => (
                                            <a key={i} href="#" className="text-muted hover:text-primary transition-colors">
                                                <Icon className="w-4 h-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            <section className="py-32 bg-secondary/30 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">Interested in joining our mission?</h2>
                    <p className="text-muted mb-12 text-lg">We're always looking for passionate individuals who care about quality and community.</p>
                    <Link
                        to="/contact"
                        className="px-12 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent transition-all duration-300"
                    >
                        Contact Recruitment
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;