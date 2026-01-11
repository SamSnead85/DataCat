import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, Database, Zap, ArrowRight, CheckCircle2, BarChart2, Table, LineChart, MessageSquare } from 'lucide-react';
import DataFlowAnimation from '../components/demo/DataFlowAnimation';
import { Button, Card, SectionHeader, Badge } from '../components/common/UIComponents';

const Demo = () => {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const demoScenarios = [
        {
            question: "Show me the average patient age for cardiovascular conditions in Q4 2025 by state.",
            answer: {
                summary: "Based on modernized DB2 patient records, the national average age for cardiovascular admissions in Q4 2025 was 64.2 years. New York showed a slightly higher average at 66.8 years, while Florida trended lower at 62.1 years.",
                data: [
                    { state: 'New York', age: 66.8, count: 1240 },
                    { state: 'Florida', age: 62.1, count: 2150 },
                    { state: 'California', age: 63.5, count: 1890 },
                    { state: 'Texas', age: 64.4, count: 1560 }
                ],
                type: 'chart'
            }
        },
        {
            question: "What is the correlation between claims processing time and provider region?",
            answer: {
                summary: "Analysis of transformed billing data indicates that Northeast region claims average 12.4 days processing time, compared to 18.2 days in the Southwest. The primary bottleneck identified is manual verification steps in outdated schema nodes.",
                data: [
                    { region: 'Northeast', time: 12.4 },
                    { region: 'Midwest', time: 14.8 },
                    { region: 'Southeast', time: 15.6 },
                    { region: 'Southwest', time: 18.2 }
                ],
                type: 'table'
            }
        }
    ];

    const handleQuery = (e) => {
        e?.preventDefault();
        if (!query) return;

        setIsLoading(true);
        setResponse(null);

        // Simulate API call to DataCatalyst AI backend
        setTimeout(() => {
            const match = demoScenarios.find(s => s.question.toLowerCase().includes(query.toLowerCase()));
            setResponse(match ? match.answer : {
                summary: "I've analyzed the legacy DB2 data schema and identified the relevant tables. While I can't provide live data for this specific query in the demo, I've confirmed that the 'PatientHist' and 'AdmissionLog' tables are mapped and AI-ready.",
                data: null,
                type: 'placeholder'
            });
            setIsLoading(false);
        }, 2000);
    };

    const handleScenarioClick = (q) => {
        setQuery(q);
    };

    return (
        <div className="bg-surface-gray min-h-screen pb-24">
            {/* Header */}
            <section className="bg-white py-20 border-b border-slate-100">
                <div className="section-padding">
                    <SectionHeader
                        centered
                        badge="Interactive Experience"
                        title="Experience DataCatalyst AI"
                        subtitle="Follow your data as it flows from legacy DB2 systems into our AI-native cloud environment, ready for natural language exploration."
                    />
                </div>
            </section>

            {/* Visual Data Flow */}
            <section className="py-12 bg-white">
                <div className="max-w-5xl mx-auto">
                    <Card className="border-none shadow-none bg-slate-50/50">
                        <h3 className="text-center font-bold text-slate-400 uppercase tracking-widest text-xs mb-8">Real-time Data Transformation Pipeline</h3>
                        <DataFlowAnimation />
                    </Card>
                </div>
            </section>

            {/* NLQ Interface */}
            <section className="section-padding py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center space-x-2 mb-6">
                        <Badge className="bg-primary-950 text-white border-primary-800">Demo Environment</Badge>
                        <span className="text-xs text-slate-500 flex items-center">
                            <CheckCircle2 className="w-3 h-3 text-accent-green mr-1" />
                            DB2 Connection: Active
                        </span>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                        {/* Input Area */}
                        <div className="p-8 border-b border-slate-50 bg-slate-50/30">
                            <label className="block text-sm font-bold text-slate-700 mb-3">Ask your data anything...</label>
                            <form onSubmit={handleQuery} className="relative">
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="e.g. 'What is the average patient age in NY?'"
                                    className="w-full pl-14 pr-32 py-5 rounded-2xl border-2 border-slate-100 focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-600/5 transition-all text-lg shadow-inner"
                                />
                                <Database className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="py-3 px-6"
                                        disabled={isLoading || !query}
                                    >
                                        {isLoading ? 'Thinking...' : 'Run Query'}
                                    </Button>
                                </div>
                            </form>

                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter mr-2 py-1">Try:</span>
                                {demoScenarios.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleScenarioClick(s.question)}
                                        className="text-xs bg-white border border-slate-200 hover:border-primary-400 hover:text-primary-600 px-3 py-1.5 rounded-full transition-colors font-medium text-slate-600"
                                    >
                                        "{s.question.slice(0, 40)}..."
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Response Area */}
                        <div className="p-8 min-h-[400px] relative bg-white">
                            <AnimatePresence mode="wait">
                                {isLoading ? (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center h-full py-20"
                                    >
                                        <div className="relative">
                                            <div className="w-16 h-16 border-4 border-primary-100 border-t-primary-600 rounded-full animate-spin" />
                                            <Zap className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 text-primary-600" />
                                        </div>
                                        <p className="mt-6 text-slate-500 font-medium animate-pulse">Consulting LLM and modern DB nodes...</p>
                                    </motion.div>
                                ) : response ? (
                                    <motion.div
                                        key="response"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-8"
                                    >
                                        <div className="flex items-start space-x-4 bg-primary-50 p-6 rounded-2xl border border-primary-100">
                                            <div className="shrink-0 bg-primary-600 p-2 rounded-lg mt-1">
                                                <Zap className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-primary-950 mb-2">AI Summary Output</h4>
                                                <p className="text-slate-700 leading-relaxed text-sm lg:text-base">
                                                    {response.summary}
                                                </p>
                                            </div>
                                        </div>

                                        {response.data && (
                                            <div className="space-y-6">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="font-bold text-slate-900 flex items-center space-x-2">
                                                        {response.type === 'chart' ? <BarChart2 className="w-5 h-5" /> : <Table className="w-5 h-5" />}
                                                        <span>Generated Visualization</span>
                                                    </h4>
                                                    <div className="flex space-x-2">
                                                        <button className="p-2 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-100 transition-all"><Table className="w-4 h-4 text-slate-400" /></button>
                                                        <button className="p-2 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-100 transition-all"><BarChart2 className="w-4 h-4 text-slate-400" /></button>
                                                        <button className="p-2 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-100 transition-all"><LineChart className="w-4 h-4 text-slate-400" /></button>
                                                    </div>
                                                </div>

                                                {response.type === 'chart' ? (
                                                    <div className="grid grid-cols-1 gap-4">
                                                        {response.data.map((item, i) => (
                                                            <div key={i} className="space-y-2">
                                                                <div className="flex justify-between text-xs font-bold text-slate-600 uppercase">
                                                                    <span>{item.state}</span>
                                                                    <span>{item.age} Years Avg.</span>
                                                                </div>
                                                                <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                                                                    <motion.div
                                                                        initial={{ width: 0 }}
                                                                        animate={{ width: `${(item.age / 70) * 100}%` }}
                                                                        transition={{ duration: 1, delay: i * 0.1 }}
                                                                        className="h-full bg-gradient-to-r from-primary-600 to-primary-400"
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="overflow-x-auto border border-slate-100 rounded-xl shadow-sm">
                                                        <table className="w-full text-sm text-left">
                                                            <thead className="bg-slate-50 text-slate-600 uppercase text-[10px] font-bold">
                                                                <tr>
                                                                    <th className="px-6 py-4">Region</th>
                                                                    <th className="px-6 py-4 text-right">Avg. Processing Days</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-slate-50">
                                                                {response.data.map((item, i) => (
                                                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                                        <td className="px-6 py-4 font-medium text-slate-900">{item.region}</td>
                                                                        <td className="px-6 py-4 text-right font-bold text-primary-600">{item.time} Days</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </motion.div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                                        <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                                            <MessageSquare className="w-10 h-10 text-slate-200" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Ready to query your modernized data.</h4>
                                        <p className="text-slate-500 max-w-sm mx-auto">
                                            Select one of the sample scenarios above or type your own question to see how DataCatalyst AI interprets legacy data.
                                        </p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-white border-slate-100 p-6 flex items-center space-x-4">
                            <div className="bg-green-100 p-3 rounded-xl">
                                <Zap className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-display font-bold text-primary-950">94%</p>
                                <p className="text-xs text-slate-500 font-bold uppercase">Accuracy Rate</p>
                            </div>
                        </Card>
                        <Card className="bg-white border-slate-100 p-6 flex items-center space-x-4">
                            <div className="bg-blue-100 p-3 rounded-xl">
                                <ArrowRight className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-display font-bold text-primary-950">&lt; 3s</p>
                                <p className="text-xs text-slate-500 font-bold uppercase">Response Latency</p>
                            </div>
                        </Card>
                        <Card className="bg-white border-slate-100 p-6 flex items-center space-x-4">
                            <div className="bg-purple-100 p-3 rounded-xl">
                                <Database className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-display font-bold text-primary-950">500TB+</p>
                                <p className="text-xs text-slate-500 font-bold uppercase">Scalable Capacity</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Demo CTA */}
            <section className="section-padding pt-12">
                <div className="bg-primary-950 rounded-3xl p-12 text-center text-white">
                    <h2 className="text-3xl font-display font-bold mb-6">See it with Your Own Data</h2>
                    <p className="text-lg text-primary-200 max-w-2xl mx-auto mb-12">
                        This demo uses simulated data. To see a proof-of-concept using a snapshot of your own DB2 environment, schedule a technical consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/contact">
                            <button className="btn-primary py-4 px-10">Request POC</button>
                        </Link>
                        <Link to="/contact">
                            <button className="btn-secondary py-4 px-10 bg-transparent text-white border-white/20 hover:bg-white/10">Contact Sales</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Demo;
