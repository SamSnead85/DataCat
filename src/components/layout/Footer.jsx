import { Link } from 'react-router-dom';
import { Database, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-950 text-slate-300">
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-2">
                            <Database className="w-8 h-8 text-primary-400" />
                            <span className="text-2xl font-display font-bold text-white tracking-tight">
                                DataCatalyst <span className="text-primary-400">AI</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Accelerating enterprise AI adoption by unlocking legacy DB2 data and transforming it into AI-native assets for the modern cloud.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                            <li><Link to="/demo" className="hover:text-white transition-colors">Interactive Demo</Link></li>
                            <li><Link to="/compliance" className="hover:text-white transition-colors">Compliance & Security</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold mb-6">Get in Touch</h4>
                        <div className="flex items-start space-x-3 text-sm">
                            <Mail className="w-5 h-5 text-primary-400 shrink-0" />
                            <span>Contact us via our secure portal</span>
                        </div>
                        <div className="flex items-start space-x-3 text-sm">
                            <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-start space-x-3 text-sm">
                            <MapPin className="w-5 h-5 text-primary-400 shrink-0" />
                            <span>100 AI Plaza, Tech City, NY 10001</span>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-xs text-slate-500">
                        © {currentYear} ZeroG Foundry. All rights reserved. DataCatalyst AI is a product of ZeroG Foundry.
                    </p>
                    <div className="flex space-x-6 text-xs text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
