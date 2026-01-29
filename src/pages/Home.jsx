import { motion } from 'framer-motion';
import { ChevronRight, Database, Cloud, Zap, ShieldCheck, ArrowRight, BarChart3, MessageSquare, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, SectionHeader, Badge } from '../components/common/UIComponents';
import heroImage from '../assets/hero.png';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-surface-dark overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950 to-transparent z-10Opacity-80" />
                    <img
                        src={heroImage}
                        alt="AI Data Transformation"
                        className="w-full h-full object-cover object-right opacity-40 lg:opacity-60"
                    />
                </div>

                <div className="section-padding relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge className="mb-6 bg-primary-900/50 text-primary-300 border-primary-700">
                                Next-Gen Legacy Modernization
                            </Badge>
                            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
                                Unlock Your Enterprise Data's <span className="text-primary-400">AI Potential</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                                Transform dormant DB2 mainframe data into active, AI-native assets. Bypassing ETL to deliver immediate insights through Natural Language Querying and Dynamic AI Dashboards.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link to="/contact">
                                    <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                                        Contact Sales
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link to="/features">
                                    <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                                        Explore Features
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Problem/Solution Section */}
            <section className="section-padding bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionHeader
                            badge="The Challenge"
                            title="Stop Letting Your Data Sit Dormant"
                            subtitle="Legacy DB2 systems hold 80% of enterprise institutional knowledge, but this data is siloed, inaccessible to modern AI, and expensive to maintain."
                        />
                        <div className="space-y-6">
                            {[
                                { title: 'Siloed Legacy Systems', desc: 'DB2 mainframes often act as "data graveyards" inaccessible to modern tools.' },
                                { title: 'Brittle ETL Pipelines', desc: 'Traditional transformation takes months and lacks the semantic depth for LLMs.' },
                                { title: 'AI Readiness Gap', desc: 'Enterprise data isn\'t structured for vectorization or RAG-based architectures.' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-4">
                                    <div className="mt-1 bg-red-50 p-2 rounded-lg">
                                        <X className="w-5 h-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-primary-50 rounded-3xl p-8 lg:p-12 border border-primary-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/50 rounded-full -mr-16 -mt-16 blur-3xl" />
                        <SectionHeader
                            badge="Our Solution"
                            title="The DataCatalyst Bridge"
                            subtitle="We provide a seamless, AI-native runway for your most valuable data assets."
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card hoverEffect={false} className="border-none shadow-none bg-white/60">
                                <Database className="w-10 h-10 text-primary-600 mb-4" />
                                <h4 className="font-bold mb-2">Direct Extraction</h4>
                                <p className="text-sm text-slate-600">Zero-downtime DB2 extraction to high-performance cloud databases.</p>
                            </Card>
                            <Card hoverEffect={false} className="border-none shadow-none bg-white/60">
                                <Zap className="w-10 h-10 text-accent-purple mb-4" />
                                <h4 className="font-bold mb-2">AI Structuring</h4>
                                <p className="text-sm text-slate-600">Semantic indexing and vector prep for immediate RAG integration.</p>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="bg-surface-gray py-24">
                <div className="section-padding">
                    <SectionHeader
                        centered
                        badge="Performance & ROI"
                        title="Designed for Enterprise Acceleration"
                        subtitle="Deliver rapid modernization with focus on compliance, speed, and intelligence."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Zap, title: '80% Faster ROI', desc: 'Bypass traditional ETL and see results in weeks, not years.', color: 'text-primary-600' },
                            { icon: ShieldCheck, title: 'HIPAA/HITRUST Ready', desc: 'Engineered for the most stringent healthcare data standards.', color: 'text-accent-green' },
                            { icon: MessageSquare, title: 'English-to-Data', desc: 'Enable non-technical users to query legacy data with plain language.', color: 'text-accent-purple' },
                            { icon: BarChart3, title: 'Dynamic Insights', desc: 'AI-generated dashboards that evolve with your business needs.', color: 'text-accent-orange' },
                        ].map((benefit, i) => (
                            <Card key={i} className="text-center">
                                <div className={`mx-auto w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6`}>
                                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* High-Level How It Works */}
            <section className="section-padding bg-white">
                <SectionHeader
                    centered
                    badge="Architecture"
                    title="The AI-Native Data Journey"
                    subtitle="A simplified view of how DataCatalyst AI bridges the gap between DB2 and generative AI."
                />
                <div className="relative mt-20 max-w-5xl mx-auto">
                    {/* Animated Connectors (represented by lines in a grid) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-100 via-primary-500 to-slate-100 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { icon: Database, name: 'Mainframe DB2', desc: 'Isolated Legacy Source' },
                            { icon: Zap, name: 'DataCatalyst AI', desc: 'Transformation Engine', highlight: true },
                            { icon: Cloud, name: 'Cloud DB', desc: 'PostgreSQL / Aurora' },
                            { icon: MessageSquare, name: 'LLM Integration', desc: 'Semantic Indexing' },
                            { icon: BarChart3, name: 'AI Insights', desc: 'NLQ & Dashboards' },
                        ].map((step, i) => (
                            <div key={i} className="relative flex flex-col items-center">
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 z-10 transition-transform hover:scale-110 ${step.highlight ? 'bg-primary-950 text-white shadow-2xl scale-110' : 'bg-white border border-slate-200 text-primary-600'
                                    }`}>
                                    <step.icon className="w-10 h-10" />
                                </div>
                                <h4 className="font-bold text-center mb-2">{step.name}</h4>
                                <p className="text-xs text-slate-500 text-center">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="bg-surface-gray py-20">
                <div className="section-padding text-center">
                    <p className="text-sm font-bold text-primary-900 tracking-[0.2em] uppercase mb-12">Compatible With Leading Platforms</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 text-slate-400">
                        <div className="flex items-center space-x-2">
                            <Cloud className="w-6 h-6" />
                            <span className="font-bold text-lg">AWS</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Cloud className="w-6 h-6" />
                            <span className="font-bold text-lg">Google Cloud</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Cloud className="w-6 h-6" />
                            <span className="font-bold text-lg">Azure</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Database className="w-6 h-6" />
                            <span className="font-bold text-lg">IBM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Database className="w-6 h-6" />
                            <span className="font-bold text-lg">Snowflake</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal CTA */}
            <section className="section-padding">
                <div className="bg-primary-950 rounded-3xl p-12 lg:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full -mr-48 -mt-48 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full -ml-48 -mb-48 blur-3xl" />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                            Ready to Modernize Your Legacy Infrastructure?
                        </h2>
                        <p className="text-xl text-primary-100 mb-10">
                            Schedule a personalized consultation with our data architects and see how DataCatalyst AI can accelerate your AI journey.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link to="/contact">
                                <Button variant="white" className="w-full sm:w-auto text-lg px-8">
                                    Contact Sales
                                </Button>
                            </Link>
                            <Link to="/demo">
                                <Button variant="outline" className="w-full sm:w-auto text-lg px-8 border-white text-white hover:bg-white/10">
                                    Interactive Demo
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
