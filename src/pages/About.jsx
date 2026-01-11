import { SectionHeader, Card } from '../components/common/UIComponents';
import { Target, Lightbulb, Users, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-primary-950 py-32 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                </div>
                <div className="section-padding relative z-10">
                    <SectionHeader
                        dark
                        badge="Our Mission"
                        title="Accelerating the World's Transition to AI-Native Data"
                        subtitle="We believe that the most valuable data in the world is currently trapped in legacy systems. Our mission is to liberate that data and power the next generation of enterprise intelligence."
                    />
                </div>
            </section>

            {/* Vision Section */}
            <section className="section-padding py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-display font-bold mb-8">Bridging the Gap Between Legacy and the Future</h2>
                        <p className="text-lg text-slate-600 mb-6 font-medium">
                            DataCatalyst AI was founded by a group of mainframe veterans and AI researchers who saw a massive hurdle for enterprise innovation.
                        </p>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            While the world was racing ahead with Large Language Models, the bedrock of enterprise data—stored in DB2 mainframes—remained essentially "dark." Traditional modernization project failed 70% of the time due to complexity and risk. We built DataCatalyst AI to change that.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-3xl font-display font-bold text-primary-600 mb-2">10+</h4>
                                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-display font-bold text-primary-600 mb-2">50B+</h4>
                                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Records Migrated</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-gray rounded-3xl p-12 border border-slate-200 aspect-square flex items-center justify-center">
                        <div className="relative">
                            <div className="w-48 h-48 bg-primary-600 rounded-full blur-3xl opacity-20 absolute -top-12 -left-12" />
                            <div className="w-48 h-48 bg-accent-purple rounded-full blur-3xl opacity-20 absolute -bottom-12 -right-12" />
                            <Target className="w-32 h-32 text-primary-950 relative z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-slate-50 py-24">
                <div className="section-padding">
                    <SectionHeader
                        centered
                        title="What Drives Us"
                        subtitle="Our core values shape every line of code we write and every partnership we build."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <Card className="text-center">
                            <div className="bg-white shadow-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Lightbulb className="w-8 h-8 text-accent-orange" />
                            </div>
                            <h4 className="text-xl font-bold mb-4">Innovation with Purpose</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">We don't build tech for tech's sake. We build solutions that solve the hardest data challenges in the enterprise.</p>
                        </Card>
                        <Card className="text-center">
                            <div className="bg-white shadow-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck className="w-8 h-8 text-accent-green" />
                            </div>
                            <h4 className="text-xl font-bold mb-4">Integrity in Data</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Security and compliance aren't afterthoughts; they are the foundation of everything we do.</p>
                        </Card>
                        <Card className="text-center">
                            <div className="bg-white shadow-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-primary-600" />
                            </div>
                            <h4 className="text-xl font-bold mb-4">Client-Centricity</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Our success is measured by the ROI and transformative speed we deliver to our partners.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Partnerships */}
            <section className="section-padding py-32 text-center">
                <SectionHeader
                    centered
                    badge="Ecosystem"
                    title="Our Strategic Partners"
                    subtitle="We work with the world's leading cloud and AI providers to ensure seamless integration."
                />
                <div className="flex flex-wrap justify-center items-center gap-16 mt-12 opacity-50 grayscale">
                    <div className="h-10 w-32 bg-slate-300 rounded" />
                    <div className="h-10 w-40 bg-slate-300 rounded" />
                    <div className="h-10 w-28 bg-slate-300 rounded" />
                    <div className="h-10 w-36 bg-slate-300 rounded" />
                </div>
            </section>
        </div>
    );
};

export default About;
