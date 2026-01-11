import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Database, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Features', path: '/features' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Demo', path: '/demo' },
        { name: 'Compliance', path: '/compliance' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 group">
                    <div className="bg-primary-950 p-1.5 rounded-lg group-hover:bg-primary-800 transition-colors">
                        <Database className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-display font-bold text-primary-950 tracking-tight">
                        DataCatalyst <span className="text-primary-600">AI</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-semibold transition-colors ${location.pathname === link.path
                                ? 'text-primary-600'
                                : 'text-slate-600 hover:text-primary-600'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn-primary py-2 px-5 text-sm flex items-center space-x-1">
                        <span>Contact Sales</span>
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-primary-950" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-lg font-medium ${location.pathname === link.path ? 'text-primary-600' : 'text-slate-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" className="btn-primary text-center">
                                Contact Sales
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
