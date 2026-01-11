import { motion } from 'framer-motion';
import { Database, Cloud, Zap, MessageSquare, BarChart3, ShieldCheck, Lock, Activity, RefreshCw } from 'lucide-react';
import { SectionHeader, Card, Badge } from '../components/common/UIComponents';

const Features = () => {
    const mainFeatures = [
        {
            icon: Database,
            title: 'DB2 Extraction & Cloud Migration',
            desc: 'Secure, high-speed extraction from legacy DB2 mainframes to PostgreSQL or Amazon Aurora. Our proprietary bridge ensures 100% data integrity with sub-second latency for transactional data.',
            highlights: ['Zero-downtime migration', 'Automated schema mapping', 'Data integrity validation'],
            color: 'text-primary-600',
            bg: 'bg-primary-50'
        },
        {
            icon: Zap,
            title: 'AI-Native Data Structuring',
            desc: 'Most legacy data is incompatible with AI. We transform raw records into semantically indexed, vectorized assets optimized for Large Language Models (LLMs) and RAG architectures.',
            highlights: ['Semantic metadata enrichment', 'Vectorization prep', 'LLM-optimized schema'],
            color: 'text-accent-purple',
            bg: 'bg-purple-50'
        },
        {
            icon: MessageSquare,
            title: 'Natural Language Querying (NLQ)',
            desc: 'Empower your business users. DataCatalyst AI translates plain English questions into complex SQL queries against your modernized cloud database, returning accurate results in seconds.',
            highlights: ['Zero SQL knowledge required', 'Context-aware reasoning', 'Human-in-the-loop validation'],
            color: 'text-accent-green',
            bg: 'bg-emerald-50'
        }
    ];

    const secondaryFeatures = [
        {
            icon: BarChart3,
            title: 'Dynamic AI Dashboards',
            subtitle: 'Self-Generating Visuals',
            desc: 'AI-driven visualization that interprets user requests and generates real-time charts, pivot tables, and summary reports and identifies key trends automatically.'
        },
        {
            icon: ShieldCheck,
            title: 'Compliance-First Engineering',
            subtitle: 'HIPAA & HITRUST Ready',
            desc: 'Built-in data masking, anonymization, and field-level encryption to satisfy the most demanding regulatory requirements in Healthcare and Finance.'
        },
        {
            icon: RefreshCw,
            title: 'Always-Sync Architecture',
            subtitle: 'Real-time Readiness',
            desc: 'Our continuous synchronization engine ensures your AI layer is never more than 5 minutes behind your core mainframe production system.'
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-surface-gray py-20 border-b border-slate-100">
                <div className="section-padding">
                    <SectionHeader
                        badge="Platform Features"
                        title="The Future of Data Transformation"
                        subtitle="Explore the core technologies that make DataCatalyst AI the premier choice for enterprise modernization."
                    />
                </div>
            </section>

            {/* Main Features Grid */}
            <section className="section-padding py-24">
                <div className="space-y-24">
                    {mainFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1">
                                <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-6 text-primary-950">{feature.title}</h3>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    {feature.desc}
                                </p>
                                <ul className="space-y-4">
                                    {feature.highlights.map((item, j) => (
                                        <li key={j} className="flex items-center space-x-3 text-slate-900 font-medium">
                                            <Activity className="w-5 h-5 text-primary-600" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="bg-slate-100 rounded-3xl aspect-video relative overflow-hidden shadow-inner border border-slate-200">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <feature.icon className="w-24 h-24 text-slate-300 animate-pulse-slow" />
                                    </div>
                                    {/* Decorative element */}
                                    <div className="absolute bottom-4 left-4 right-4 h-24 bg-white/50 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-4">
                                        <div className={`w-12 h-12 rounded-lg ${feature.bg} shrink-0`} />
                                        <div className="space-y-2 w-full">
                                            <div className="h-2 w-1/3 bg-slate-300 rounded" />
                                            <div className="h-2 w-2/3 bg-slate-200 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Secondary Features Grid */}
            <section className="bg-primary-950 py-24">
                <div className="section-padding">
                    <SectionHeader
                        dark
                        badge="Advanced Capabilities"
                        title="Beyond Traditional ETL"
                        subtitle="Modernize your tech stack with integrated intelligence and military-grade security."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {secondaryFeatures.map((f, i) => (
                            <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10" hoverEffect={true}>
                                <div className="bg-primary-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                    <f.icon className="w-6 h-6 text-primary-400" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{f.title}</h4>
                                <p className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-4">{f.subtitle}</p>
                                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Overview CTA */}
            <section className="section-padding text-center py-32">
                <h2 className="text-4xl font-display font-bold mb-8">Technical Architecture Blueprint</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
                    Request our full technical whitepaper to see high-level diagrams illustrating the data flow, security layers, and component interaction.
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="btn-primary">Download Whitepaper</button>
                    <button className="btn-secondary">Request Tech Brief</button>
                </div>
            </section>
        </div>
    );
};

export default Features;
