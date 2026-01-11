import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { SectionHeader, Card, Button } from '../components/common/UIComponents';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Securely targeting sales@zerogfoundry.com internally
        console.log('Routing request to sales@zerogfoundry.com...');
        // Simulate API call
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', company: '', message: '' });
            alert('Your request has been received. A ZeroG Foundry representative will contact you within 4 business hours.');
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-surface-gray min-h-screen">
            {/* Header */}
            <section className="bg-white py-24 border-b border-slate-100">
                <div className="section-padding">
                    <SectionHeader
                        badge="Contact Sales"
                        title="Start Your Transformation Journey"
                        subtitle="Ready to unlock the potential of your legacy data? Our enterprise sales team will guide you through the transition to AI-native infrastructure."
                    />
                </div>
            </section>

            <section className="section-padding py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="bg-primary-950 text-white">
                            <h3 className="text-xl font-bold mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary-800 p-2 rounded-lg">
                                        <MessageSquare className="w-5 h-5 text-primary-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-primary-400 font-bold mb-1">Inquiry Portal</p>
                                        <p className="font-medium">Secure Sales Form Below</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary-800 p-2 rounded-lg">
                                        <Phone className="w-5 h-5 text-primary-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-primary-400 font-bold mb-1">Call Us Directly</p>
                                        <p className="font-medium">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary-800 p-2 rounded-lg">
                                        <MapPin className="w-5 h-5 text-primary-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-primary-400 font-bold mb-1">Our Headquarters</p>
                                        <p className="font-medium">100 AI Plaza, Tech City, NY 10001</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-white border-slate-200">
                            <h4 className="font-bold mb-4 flex items-center space-x-2">
                                <Clock className="w-5 h-5 text-primary-600" />
                                <span>Response Time</span>
                            </h4>
                            <p className="text-sm text-slate-600">
                                We typically respond to all sales inquiries within 4 business hours. Technical support remains available 24/7 for existing enterprise clients.
                            </p>
                        </Card>

                        <Card className="bg-white border-slate-200">
                            <h4 className="font-bold mb-4 flex items-center space-x-2">
                                <MessageSquare className="w-5 h-5 text-primary-600" />
                                <span>Product Demo</span>
                            </h4>
                            <p className="text-sm text-slate-600">
                                Want to see it in action first? Check out our interactive demo for a simulated transformation experience.
                            </p>
                            <button className="text-primary-600 font-bold text-sm mt-4 hover:underline">View Demo →</button>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="bg-white border-slate-200 p-10 lg:p-16">
                            <h3 className="text-2xl font-display font-bold mb-8 text-primary-950">Send Us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Jane Doe"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Work Email</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="jane@company.com"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Company Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Enter your organization"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">How can we help?</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        placeholder="Tell us about your legacy infrastructure and AI goals..."
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full py-4 text-lg"
                                    disabled={submitted}
                                >
                                    {submitted ? 'Sending...' : 'Send Message'}
                                    {!submitted && <Send className="ml-2 w-5 h-5" />}
                                </Button>
                                <p className="text-xs text-slate-500 text-center">
                                    By submitting this form, you agree to our Privacy Policy and consent to receiving marketing communications.
                                </p>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
