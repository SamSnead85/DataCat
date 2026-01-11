import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
    const variants = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg',
        secondary: 'bg-white text-primary-900 border border-primary-200 hover:bg-primary-50 shadow-sm',
        outline: 'bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50',
        white: 'bg-white text-primary-600 hover:bg-slate-50 shadow-md',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type={type}
            onClick={onClick}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${variants[variant]} ${className}`}
        >
            {children}
        </motion.button>
    );
};

export const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } : {}}
            className={`bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export const Badge = ({ children, className = '' }) => {
    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-primary-50 text-primary-700 border border-primary-100 ${className}`}>
            {children}
        </span>
    );
};

export const SectionHeader = ({ badge, title, subtitle, centered = false, dark = false }) => {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {badge && <Badge className="mb-4">{badge}</Badge>}
            <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${dark ? 'text-white' : 'text-primary-950'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};
