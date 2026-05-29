import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import AboutPage from '@/pages/AboutPage';
import TeamPage from '@/pages/TeamPage';
import ContactPage from '@/pages/ContactPage';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/context/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <ScrollToTop />
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#1a4d2e" />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="Prasad Dairy" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                </Helmet>
                <div className="min-h-screen bg-white text-primary font-sans selection:bg-accent/30">
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/products/:productId" element={<ProductDetailPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                    <Footer />
                    <Toaster />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;