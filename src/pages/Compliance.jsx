import { ShieldCheck, Lock, EyeOff, FileText, ClipboardCheck, History, UserCheck, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader, Card, Badge } from '../components/common/UIComponents';

const Compliance = () => {
    const securityMeasures = [
        {
            icon: Lock,
            title: 'Military-Grade Encryption',
            desc: 'All data is encrypted using AES-256 at rest and TLS 1.3 in transit. We utilize hardware security modules (HSM) for key management.'
        },
        {
            icon: EyeOff,
            title: 'Advanced Data Anonymization',
            desc: 'Proprietary pseudonymization engines automatically identify and mask PHI/PII during the transformation process, ensuring zero clinical risk.'
        },
        {
            icon: UserCheck,
            title: 'Granular Access Control',
            desc: 'Role-Based Access Control (RBAC) integrated with enterprise SSO (Okta, Azure AD) for precise data accessibility management.'
        },
        {
            icon: History,
            title: 'Complete Audit Traceability',
            desc: 'Comprehensive logs of every data access, transformation step, and user query, providing 100% lineage for regulatory compliance.'
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-surface-dark py-24 text-white">
                <div className="section-padding">
                    <SectionHeader
                        dark
                        badge="Security & Trust"
                        title="Enterprise-Grade Compliance"
                        subtitle="Engineered for the most regulated environments. DataCatalyst AI adheres to the highest global standards for data privacy, security, and governance."
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                        <div className="bg-white/10 border border-white/20 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                            <ShieldCheck className="w-8 h-8 text-accent-green mb-3" />
                            <span className="text-sm font-bold uppercase tracking-wider">HIPAA</span>
                        </div>
                        <div className="bg-white/10 border border-white/20 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                            <ShieldCheck className="w-8 h-8 text-accent-green mb-3" />
                            <span className="text-sm font-bold uppercase tracking-wider">HITRUST</span>
                        </div>
                        <div className="bg-white/10 border border-white/20 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                            <ShieldCheck className="w-8 h-8 text-accent-green mb-3" />
                            <span className="text-sm font-bold uppercase tracking-wider">SOC 2 TYPE II</span>
                        </div>
                        <div className="bg-white/10 border border-white/20 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                            <ShieldCheck className="w-8 h-8 text-accent-green mb-3" />
                            <span className="text-sm font-bold uppercase tracking-wider">GDPR</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Measures */}
            <section className="section-padding py-24">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader
                        centered
                        title="Data Privacy by Design"
                        subtitle="We don't just secure your data; we architect it to be intrinsically compliant with the latest privacy regulations."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        {securityMeasures.map((measure, i) => (
                            <Card key={i} className="flex flex-col h-full border-slate-100">
                                <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                    <measure.icon className="w-6 h-6 text-primary-600" />
                                </div>
                                <h4 className="text-xl font-bold mb-4">{measure.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                                    {measure.desc}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Residency & Sovereignty */}
            <section className="bg-slate-50 py-24">
                <div className="section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeader
                                badge="Governance"
                                title="Data Sovereignty & Residency"
                                subtitle="Your data never leaves your control. We support multi-region cloud deployment and private VPC installations to ensure compliance with local residency laws."
                            />
                            <ul className="space-y-6">
                                <li className="flex items-start space-x-4">
                                    <div className="bg-primary-600 p-1.5 rounded-full mt-1">
                                        <Server className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Private VPC Deployment</h5>
                                        <p className="text-sm text-slate-600">Run DataCatalyst AI entirely within your own AWS, Azure, or GCP environment.</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <div className="bg-primary-600 p-1.5 rounded-full mt-1">
                                        <FileText className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Automated Data Lineage</h5>
                                        <p className="text-sm text-slate-600">Complete visibility into how data flows from DB2 to AI, with immutable transformation history.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <ClipboardCheck className="w-12 h-12 text-primary-600 mb-6" />
                            <h4 className="text-2xl font-bold mb-6">Compliance Readiness Assessment</h4>
                            <p className="text-slate-600 mb-8">
                                Unsure if your current legacy infrastructure meets AI compliance standards? Schedule a free 1-hour assessment with our security officers.
                            </p>
                            <Link to="/contact">
                                <button className="btn-primary w-full py-4">Contact Sales</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Certifications CTA */}
            <section className="section-padding py-32 text-center">
                <h2 className="text-3xl font-display font-bold mb-6">Our Commitment to Security</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
                    We undergo annual third-party audits and continuous vulnerability assessments to ensure DataCatalyst AI remains the most secure data transformation platform in the industry.
                </p>
                <div className="inline-flex flex-wrap justify-center gap-8 opacity-60">
                    {/* Certification Badges Placeholder */}
                    <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center font-bold text-xs">SOC 2</div>
                    <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center font-bold text-xs">HIPAA</div>
                    <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center font-bold text-xs">HITRUST</div>
                    <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center font-bold text-xs">ISO 27001</div>
                </div>
            </section>
        </div>
    );
};

export default Compliance;
