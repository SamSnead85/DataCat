import { motion } from 'framer-motion';
import { HeartPulse, Briefcase, TrendingUp, ShieldCheck, Users, Search, Microscope, BarChart3, Zap } from 'lucide-react';
import { SectionHeader, Card, Badge } from '../components/common/UIComponents';

const Solutions = () => {
    return (
        <div className="bg-surface-gray">
            {/* Header */}
            <section className="bg-white py-24 mb-12">
                <div className="section-padding">
                    <SectionHeader
                        badge="Industry Solutions"
                        title="Strategic AI for High-Stakes Industries"
                        subtitle="Tailored transformation paths for healthcare enterprises and IT service providers seeking to reclaim the value of their legacy data."
                    />
                </div>
            </section>

            {/* Healthcare Focus */}
            <section className="section-padding pb-24">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3 sticky top-32">
                        <div className="bg-primary-950 p-8 rounded-3xl text-white">
                            <HeartPulse className="w-12 h-12 text-primary-400 mb-6" />
                            <h2 className="text-3xl font-display font-bold mb-6">Healthcare</h2>
                            <p className="text-primary-100 mb-8">
                                Modernizing healthcare requires more than just migration; it requires a deep understanding of patient outcomes, clinical efficiency, and total regulatory compliance.
                            </p>
                            <ul className="space-y-4 text-sm text-primary-200">
                                <li className="flex items-center space-x-2">
                                    <ShieldCheck className="w-4 h-4 text-accent-green" />
                                    <span>HIPAA/HITRUST Certified</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <ShieldCheck className="w-4 h-4 text-accent-green" />
                                    <span>PHI/PII Data Anonymization</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <ShieldCheck className="w-4 h-4 text-accent-green" />
                                    <span>Clinical Data Integrity</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Microscope,
                                title: 'Patient Data Analysis',
                                desc: 'Leverage decades of historical DB2 patient records for predictive analytics, personalized treatment efficacy, and longitudinal outcome studies.'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Operational Efficiency',
                                desc: 'Optimize claims processing, fraud detection, and resource allocation by exposing latent insights within legacy billing and resource systems.'
                            },
                            {
                                icon: Search,
                                title: 'Compliance Reporting',
                                desc: 'AI-driven insights that automate regulatory audits, risk assessments, and adherence reporting for industry standards.'
                            },
                            {
                                icon: Users,
                                title: 'Population Health Management',
                                desc: 'Synthesize structured legacy data with modern clinical inputs to identify at-risk populations and intervene earlier.'
                            }
                        ].map((item, i) => (
                            <Card key={i} className="bg-white border-slate-200">
                                <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon className="w-6 h-6 text-accent-green" />
                                </div>
                                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* IT Services Focus */}
            <section className="bg-white py-24 border-t border-slate-100">
                <div className="section-padding">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
                        <div className="lg:w-1/3 sticky top-32">
                            <div className="bg-primary-600 p-8 rounded-3xl text-white">
                                <Briefcase className="w-12 h-12 text-blue-100 mb-6" />
                                <h2 className="text-3xl font-display font-bold mb-6">IT Services</h2>
                                <p className="text-blue-50 mb-8">
                                    Enable your consultants and engineering teams to deliver modernization projects faster, with higher accuracy and lower risk for your enterprise clients.
                                </p>
                                <ul className="space-y-4 text-sm text-blue-100">
                                    <li className="flex items-center space-x-2">
                                        <ShieldCheck className="w-4 h-4 text-white" />
                                        <span>Rapid Project Deployment</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <ShieldCheck className="w-4 h-4 text-white" />
                                        <span>Client Data Sovereignty</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <ShieldCheck className="w-4 h-4 text-white" />
                                        <span>Scalable Service Offering</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: RefreshCw,
                                    title: 'Modernization Accelerator',
                                    desc: 'Slash project timelines by 60% with automated DB2-to-Cloud transformation and AI-ready structuring for your clients.'
                                },
                                {
                                    icon: BarChart3,
                                    title: 'Enhanced Data Insights',
                                    desc: 'Provide deeper, faster insights from client legacy systems, enabling more strategic advisory and higher-value delivery.'
                                },
                                {
                                    icon: Zap,
                                    title: 'Accelerated AI Adoption',
                                    desc: 'Integrate DataCatalyst AI into your own service offerings to provide a differentiated "AI-First" modernization path.'
                                },
                                {
                                    icon: TrendingUp,
                                    title: 'ROI Maximizer',
                                    desc: 'Demonstrate immediate value to stakeholders by unlocking dormant data assets within the first 30 days of engagement.'
                                }
                            ].map((item, i) => (
                                <Card key={i} className="bg-slate-50 border-slate-200">
                                    <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                                        <item.icon className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions CTA */}
            <section className="section-padding py-32">
                <div className="bg-gradient-to-r from-primary-900 to-primary-950 rounded-3xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Not seeing your industry?</h2>
                    <p className="text-lg text-primary-200 max-w-2xl mx-auto mb-12">
                        While we specialize in Healthcare and IT Services, our core architecture is designed to handle high-volume legacy data across Finance, Logistics, and Manufacturing.
                    </p>
                    <button className="btn-primary bg-white text-primary-950 hover:bg-primary-50">Speak to an Architect</button>
                </div>
            </section>
        </div>
    );
};

const RefreshCw = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M3 21v-5h5" /></svg>;

export default Solutions;
