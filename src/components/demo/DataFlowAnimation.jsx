import { motion } from 'framer-motion';
import { Database, Zap, Cloud, MessageSquare, ArrowRight } from 'lucide-react';

const DataFlowAnimation = () => {
    const lineVariants = {
        initial: { pathLength: 0, opacity: 0 },
        animate: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.5, repeat: Infinity, repeatDelay: 1 }
        }
    };

    const dotVariants = {
        animate: {
            offset: [0, 1],
            transition: { duration: 3, repeat: Infinity, ease: "linear" }
        }
    };

    return (
        <div className="relative w-full py-12 px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-4xl mx-auto space-y-12 lg:space-y-0 relative">

                {/* Step 1: DB2 */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center z-10"
                >
                    <div className="w-20 h-20 rounded-2xl bg-slate-800 flex items-center justify-center text-white border-4 border-slate-700 shadow-xl">
                        <Database className="w-10 h-10" />
                    </div>
                    <span className="mt-4 font-bold text-slate-800 tracking-tight">Legacy DB2</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Mainframe</span>
                </motion.div>

                {/* Connector 1 */}
                <div className="hidden lg:block absolute left-24 right-[70%] top-10 pointer-events-none">
                    <svg className="w-full h-2" viewBox="0 0 100 2">
                        <line x1="0" y1="1" x2="100" y2="1" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                        <motion.circle r="3" fill="#3b82f6" cx="0" cy="1">
                            <animate attributeName="cx" from="0" to="100" dur="2s" repeatCount="indefinite" />
                        </motion.circle>
                    </svg>
                </div>

                {/* Step 2: DataCatalyst AI */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="flex flex-col items-center z-10"
                >
                    <div className="w-24 h-24 rounded-full bg-primary-950 flex items-center justify-center text-white shadow-[0_0_50px_-12px_rgba(30,58,138,0.5)] border-4 border-primary-800">
                        <Zap className="w-12 h-12 text-blue-400" />
                    </div>
                    <span className="mt-4 font-bold text-primary-900 tracking-tight">DataCatalyst AI</span>
                    <span className="text-[10px] uppercase font-bold text-blue-600 tracking-widest mt-1">Transformation</span>
                </motion.div>

                {/* Connector 2 */}
                <div className="hidden lg:block absolute left-[35%] right-[35%] top-10 pointer-events-none">
                    <svg className="w-full h-2" viewBox="0 0 100 2">
                        <line x1="0" y1="1" x2="100" y2="1" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                        <motion.circle r="3" fill="#8b5cf6" cx="0" cy="1">
                            <animate attributeName="cx" from="0" to="100" dur="1.5s" repeatCount="indefinite" />
                        </motion.circle>
                    </svg>
                </div>

                {/* Step 3: Cloud DB */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center z-10"
                >
                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-primary-200 flex items-center justify-center text-primary-600 shadow-lg">
                        <Cloud className="w-10 h-10" />
                    </div>
                    <span className="mt-4 font-bold text-slate-800 tracking-tight">Cloud Database</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">PostgreSQL/Aurora</span>
                </motion.div>

                {/* Connector 3 */}
                <div className="hidden lg:block absolute left-[70%] right-24 top-10 pointer-events-none">
                    <svg className="w-full h-2" viewBox="0 0 100 2">
                        <line x1="0" y1="1" x2="100" y2="1" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                        <motion.circle r="3" fill="#10b981" cx="0" cy="1">
                            <animate attributeName="cx" from="0" to="100" dur="2.5s" repeatCount="indefinite" />
                        </motion.circle>
                    </svg>
                </div>

                {/* Step 4: LLM */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center z-10"
                >
                    <div className="w-20 h-20 rounded-2xl bg-accent-purple/10 border-2 border-accent-purple/30 flex items-center justify-center text-accent-purple shadow-xl">
                        <MessageSquare className="w-10 h-10" />
                    </div>
                    <span className="mt-4 font-bold text-slate-800 tracking-tight">AI Insights Layer</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">LLM / NLQ</span>
                </motion.div>

            </div>
        </div>
    );
};

export default DataFlowAnimation;
