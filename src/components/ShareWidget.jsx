import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Copy, Check, X, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function ShareWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isNativeShareSupported, setIsNativeShareSupported] = useState(false);
    const { toast } = useToast();

    const currentUrl = window.location.href;
    const currentTitle = typeof document !== 'undefined' ? document.title : 'Prasad Dairy';

    useEffect(() => {
        // Detect native share capability
        if (typeof navigator !== 'undefined' && navigator.share) {
            setIsNativeShareSupported(true);
        }

        // Listen for global custom events to open share modal from navigation/footer
        const handleOpenShare = () => setIsOpen(true);
        window.addEventListener('open-share-modal', handleOpenShare);
        return () => window.removeEventListener('open-share-modal', handleOpenShare);
    }, []);

    // Copy to clipboard handler
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setCopied(true);
            toast({
                title: "Link Copied!",
                description: "The page link has been copied to your clipboard.",
                duration: 3000,
            });
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            toast({
                title: "Copy Failed",
                description: "Unable to copy the link. Please select and copy it manually.",
                variant: "destructive",
                duration: 3000,
            });
        }
    };

    // Native sharing handler
    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: currentTitle,
                    url: currentUrl,
                });
                setIsOpen(false);
            } catch (err) {
                // User cancelled share, ignore error
                console.log('Native share closed or failed', err);
            }
        }
    };

    // Social share links
    const shareOptions = [
        {
            name: 'WhatsApp',
            color: 'bg-[#25D366] hover:bg-[#20ba5a] text-white',
            url: `https://api.whatsapp.com/send?text=${encodeURIComponent(currentTitle + ' ' + currentUrl)}`,
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.42 9.86-9.86.001-2.636-1.026-5.112-2.893-6.982C16.743 1.894 14.265 .865 11.63.865c-5.442 0-9.866 4.422-9.869 9.865-.001 1.702.449 3.361 1.3 4.8l-.995 3.636 3.731-.978zm13.11-6.173c-.274-.136-1.62-.8-1.87-.89-.25-.09-.432-.136-.613.136-.18.273-.7.89-.858 1.07-.158.18-.317.202-.59.066-1.789-.893-2.91-1.579-3.977-3.41-.283-.487.283-.453.81-.15.228.127.432.227.59.387.16.16.2.27.27.4.07.13.03.24-.02.34-.05.1-.482 1.16-.662 1.59-.177.424-.372.366-.51.36-.14-.006-.3-.008-.46-.008-.16 0-.422.06-.643.3-.22.24-.842.823-.842 2.006 0 1.183.862 2.326.982 2.487.12.16 1.7 2.596 4.116 3.633.575.247 1.024.394 1.374.505.578.184 1.103.158 1.517.097.46-.067 1.62-.662 1.85-1.3.23-.637.23-1.183.162-1.3-.068-.117-.25-.183-.524-.32z"/>
                </svg>
            )
        },
        {
            name: 'X / Twitter',
            color: 'bg-black text-white hover:bg-zinc-900',
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(currentTitle)}`,
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            )
        },
        {
            name: 'Facebook',
            color: 'bg-[#1877F2] hover:bg-[#166fe5] text-white',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            color: 'bg-[#0A66C2] hover:bg-[#0957a5] text-white',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
    ];

    return (
        <>
            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8 print:hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="relative group pointer-events-auto"
                >
                    {/* Hover text label */}
                    <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md border border-white/10 mr-2">
                        Share this page
                    </span>
                    
                    <button
                        onClick={() => setIsOpen(true)}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary hover:bg-accent text-white flex items-center justify-center shadow-lg transition-all duration-300 border border-white/10 outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                        title="Share this page"
                        aria-label="Share this page"
                    >
                        <Share2 className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </motion.div>
            </div>

            {/* Glassmorphic Sharing Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                            className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-3xl w-full max-w-md overflow-hidden relative z-10 p-6 md:p-8"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-muted hover:text-primary dark:text-muted-foreground dark:hover:text-white transition-colors p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="mb-6 pr-6">
                                <h3 className="text-xl font-bold font-serif text-primary dark:text-white mb-2">Share This Page</h3>
                                <p className="text-sm text-muted dark:text-slate-400">Share this page with your colleagues, friends, or network.</p>
                            </div>

                            {/* visual link card preview */}
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 mb-6 flex items-start gap-4">
                                <div className="p-3 bg-accent/10 text-accent rounded-xl shrink-0">
                                    <Share2 className="w-5 h-5" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h4 className="text-sm font-semibold text-primary dark:text-white truncate" title={currentTitle}>
                                        {currentTitle}
                                    </h4>
                                    <p className="text-xs text-muted dark:text-slate-400 truncate mt-1">
                                        {currentUrl}
                                    </p>
                                </div>
                            </div>

                            {/* Share Options Grid */}
                            <div className="grid grid-cols-4 gap-4 mb-6">
                                {shareOptions.map((option) => (
                                    <motion.a
                                        key={option.name}
                                        href={option.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex flex-col items-center gap-2 group cursor-pointer"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${option.color}`}>
                                            {option.icon}
                                        </div>
                                        <span className="text-[11px] font-semibold tracking-wide text-primary/70 dark:text-slate-300 group-hover:text-accent transition-colors text-center">
                                            {option.name}
                                        </span>
                                    </motion.a>
                                ))}

                                {/* Direct Email Option */}
                                <motion.a
                                    href={`mailto:?subject=${encodeURIComponent(currentTitle)}&body=${encodeURIComponent(currentUrl)}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex flex-col items-center gap-2 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="text-[11px] font-semibold tracking-wide text-primary/70 dark:text-slate-300 group-hover:text-accent transition-colors text-center">
                                        Email
                                    </span>
                                </motion.a>
                            </div>

                            {/* Copy Link Input Bar */}
                            <div className="space-y-3">
                                <label className="text-xs font-bold tracking-widest text-primary/50 dark:text-slate-400 uppercase">Direct Link</label>
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <input
                                            type="text"
                                            readOnly
                                            value={currentUrl}
                                            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-xl px-4 py-2.5 text-xs text-primary/80 dark:text-slate-300 focus:outline-none select-all"
                                        />
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        className={`px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold shadow-md transition-all duration-300 outline-none ${
                                            copied
                                                ? 'bg-green-500 hover:bg-green-600 text-white'
                                                : 'bg-primary hover:bg-accent text-white dark:bg-accent dark:hover:bg-accent/80'
                                        }`}
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-4 h-4" />
                                                <span>Copied</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4" />
                                                <span>Copy</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Native System Share Link */}
                            {isNativeShareSupported && (
                                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                                    <button
                                        onClick={handleNativeShare}
                                        className="text-xs font-bold tracking-widest text-accent hover:text-accent/80 transition-colors uppercase flex items-center gap-2"
                                    >
                                        <Share2 className="w-3.5 h-3.5" />
                                        <span>More Share Options</span>
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
