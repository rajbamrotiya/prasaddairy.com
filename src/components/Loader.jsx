import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '@/assets/images/logo_only.png';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[9999] bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Elegant Background Grid & Ambient Blurs */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center space-y-12">
                {/* Logo & Spinners Showcase */}
                <div className="relative w-36 h-36 flex items-center justify-center">
                    {/* Concentric Luxury Ring 1 */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-dashed border-accent/20"
                    />

                    {/* Concentric Luxury Ring 2 */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 rounded-full border border-double border-accent/10"
                    />

                    {/* Concentric Luxury Ring 3 (Accent Spinner) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-2 rounded-full border-2 border-transparent border-t-accent border-r-accent/30"
                    />

                    {/* Glowing Logo Frame */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                            scale: [0.9, 1.05, 0.95, 1],
                            opacity: 1
                        }}
                        transition={{ 
                            duration: 1.8, 
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="w-20 h-20 flex items-center justify-center p-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                    >
                        <img
                            src={logoImg}
                            alt="Prasad Dairy Logo"
                            className="w-full h-full object-contain filter drop-shadow-lg"
                        />
                    </motion.div>
                </div>

                {/* Brand Text */}
                <div className="text-center space-y-4">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-white text-3xl md:text-4xl font-serif font-bold tracking-[0.3em] uppercase leading-none"
                    >
                        PRASAD DAIRY PRODUCTS
                    </motion.h1>

                    <div className="flex justify-center items-center gap-3">
                        <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="h-[1px] w-8 bg-accent/40 origin-left"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-accent text-[9px] font-bold tracking-[0.5em] uppercase"
                        >
                            Purity Since 2005
                        </motion.p>
                        <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="h-[1px] w-8 bg-accent/40 origin-right"
                        />
                    </div>
                </div>

                {/* Progress bar line */}
                <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
