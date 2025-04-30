import React, { useState } from 'react';
import {
    PhoneCall, Mail, MapPin, Clock, Send, Linkedin, Twitter,
    Facebook, Instagram, ChevronDown, MessageCircle, AlertCircle,
    Check, Headphones, Building, Users, ChevronRight
} from 'lucide-react';
import Button from '../../components/Button';

interface FormState {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

const ContactUsPage: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (formData.phone && !/^[0-9+\-\s]{10,15}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message is too short';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            setSubmitting(true);

            // Simulate API call
            setTimeout(() => {
                setSubmitting(false);
                setSubmitted(true);

                // Reset form after 5 seconds
                setTimeout(() => {
                    setSubmitted(false);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiry',
                        message: ''
                    });
                }, 5000);
            }, 1500);
        }
    };

    // FAQs for the accordion
    const faqs = [
        {
            question: "What is the response time for inquiries?",
            answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters related to security incidents, we prioritize responses and aim to get back to you within 4 hours."
        },
        {
            question: "How can I report a security incident?",
            answer: "For security incidents, please use the 'Security Incident' option in the subject dropdown of our contact form. This will prioritize your message and alert our security team immediately."
        },
        {
            question: "Do you provide in-person consultations?",
            answer: "Yes, we offer in-person security consultations at our Jaipur office. Please schedule an appointment at least 48 hours in advance using our contact form or by calling our customer care line."
        },
        {
            question: "Can I request a security audit for my business?",
            answer: "Absolutely. We provide comprehensive security audits for businesses of all sizes. Contact us with details about your organization, and our team will prepare a customized security assessment proposal."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-8 mb-10 shadow-xl overflow-hidden fade-in">
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <svg className="absolute right-0 top-0 h-24 w-24 text-white opacity-10 transform translate-x-8 -translate-y-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <svg className="absolute left-0 bottom-0 h-24 w-24 text-white opacity-10 transform -translate-x-8 translate-y-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -left-16 -top-16 w-64 h-64 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center mb-3">
                        <MessageCircle className="h-6 w-6 text-blue-300 mr-2" />
                        <h5 className="text-blue-100 font-medium">Contact Us</h5>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
                    <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
                        Have questions about identity protection or need assistance with our services?
                        Our team is here to help. Reach out through any of the channels below.
                    </p>
                </div>
            </div>

            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 fade-in">
                {[
                    {
                        title: "Customer Care",
                        description: "24/7 Support for Security Incidents",
                        icon: <Headphones className="h-6 w-6 text-blue-500" />,
                        info: "+91 9876543210",
                        action: "Call Now",
                        link: "tel:+91 9876543210",
                        color: "bg-blue-50 border-blue-100"
                    },
                    {
                        title: "Email Us",
                        description: "We'll respond within 24 hours",
                        icon: <Mail className="h-6 w-6 text-indigo-500" />,
                        info: "contact@identityguard.in",
                        action: "Send Email",
                        link: "mailto:contact@identityguard.in",
                        color: "bg-indigo-50 border-indigo-100"
                    },
                    {
                        title: "Visit Our Office",
                        description: "Security Operations Center",
                        icon: <Building className="h-6 w-6 text-purple-500" />,
                        info: "C-11, Jhalana Institutional Area, Jaipur 302026",
                        action: "Get Directions",
                        link: "https://maps.google.com",
                        color: "bg-purple-50 border-purple-100"
                    }
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`${item.color} border rounded-xl p-6 shadow-sm hover:shadow-md transition-all`}
                    >
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm mr-3">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        <p className="text-gray-900 font-medium mb-4">{item.info}</p>
                        <a
                            href={item.link}
                            className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                            target={item.title === "Visit Our Office" ? "_blank" : undefined}
                            rel={item.title === "Visit Our Office" ? "noopener noreferrer" : undefined}
                        >
                            {item.action} <ChevronRight className="h-4 w-4 ml-1" />
                        </a>
                    </div>
                ))}
            </div>

            {/* Contact Form and Map Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 fade-in fade-in-delay-1">
                {/* Contact Form */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 overflow-hidden">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                        Send Us a Message
                    </h2>

                    {submitted ? (
                        <div className="rounded-lg bg-green-50 p-6 text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                                <Check className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-medium text-green-900 mb-2">Message Sent Successfully!</h3>
                            <p className="text-green-700">
                                Thank you for reaching out. Our team will get back to you shortly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.name ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-300'
                                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                                    placeholder="Your name"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                        <AlertCircle className="h-3.5 w-3.5 mr-1" /> {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-300'
                                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                                        placeholder="Your email"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="h-3.5 w-3.5 mr-1" /> {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number <span className="text-gray-400">(Optional)</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2.5 rounded-lg border ${errors.phone ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-300'
                                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                                        placeholder="+91 9876543210"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center">
                                            <AlertCircle className="h-3.5 w-3.5 mr-1" /> {errors.phone}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                >
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Security Incident">Security Incident</option>
                                    <option value="Product Support">Product Support</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Feedback">Feedback</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-300'
                                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                                    placeholder="How can we help you?"
                                ></textarea>
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center">
                                        <AlertCircle className="h-3.5 w-3.5 mr-1" /> {errors.message}
                                    </p>
                                )}
                            </div>

                            <div className="mt-6">
                                <Button
                                    type="submit"
                                    disabled={submitting}
                                    variant="primary"
                                    size="lg"
                                    className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 flex items-center justify-center gap-2"
                                >
                                    {submitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    )}

                </div>

                {/* Map and Office Hours */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
                        <div className="h-72 bg-gray-200 w-full relative">
                            {/* Replace with actual Google Maps embed */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.915281071014!2d75.83665591502948!3d26.893778983135305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40b1e71d57d%3A0xce9f9824e0dcd2e8!2sJhalana%20Institutional%20Area%2C%20Jaipur%2C%20Rajasthan%20302004!5e0!3m2!1sen!2sin!4v1619703457400!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Office Location"
                            ></iframe>

                            <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-md border border-gray-100">
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div className="ml-2">
                                        <h3 className="font-medium text-gray-900 text-sm">Security Operations Center</h3>
                                        <p className="text-gray-700 text-xs">C-11, Jhalana Institutional Area, Jaipur 302026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center mb-4">
                                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                                Office Hours
                            </h3>

                            <div className="space-y-3">
                                {[
                                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                                    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
                                    { day: "Sunday", hours: "Closed" }
                                ].map((schedule, index) => (
                                    <div
                                        key={index}
                                        className={`flex justify-between items-center py-2 px-4 rounded-lg ${index % 2 === 0 ? 'bg-gray-50' : ''
                                            }`}
                                    >
                                        <span className="font-medium text-gray-900">{schedule.day}</span>
                                        <span className={`${schedule.day === "Sunday" ? 'text-red-500' : 'text-gray-700'}`}>
                                            {schedule.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 pt-4 border-t border-gray-200">
                                <h4 className="font-medium text-gray-900 mb-2">Support Hours</h4>
                                <p className="text-sm text-gray-600">
                                    Our customer support team is available 24/7 for security incidents and emergencies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                        <h3 className="font-medium text-gray-900 mb-3">Connect With Us</h3>
                        <div className="flex gap-3">
                            {[
                                { icon: <Linkedin className="h-5 w-5" />, color: "bg-blue-500 hover:bg-blue-600" },
                                { icon: <Twitter className="h-5 w-5" />, color: "bg-sky-500 hover:bg-sky-600" },
                                { icon: <Facebook className="h-5 w-5" />, color: "bg-indigo-500 hover:bg-indigo-600" },
                                { icon: <Instagram className="h-5 w-5" />, color: "bg-pink-500 hover:bg-pink-600" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className={`${social.color} transition-colors h-10 w-10 rounded-full flex items-center justify-center text-white`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-10 fade-in fade-in-delay-2">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    Frequently Asked Questions
                </h2>

                <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
                    <div className="divide-y divide-gray-200">
                        {faqs.map((faq, index) => (
                            <div key={index} className="overflow-hidden">
                                <button
                                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                >
                                    <h3 className="text-base font-medium text-gray-900">{faq.question}</h3>
                                    <ChevronDown
                                        className={`h-5 w-5 text-gray-500 transition-transform ${activeAccordion === index ? 'transform rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === index ? 'max-h-40 pb-5' : 'max-h-0'
                                        }`}
                                >
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mb-10 fade-in fade-in-delay-3">
                <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl p-8 shadow-lg text-center">
                    <h2 className="text-2xl font-bold text-white mb-3">Ready to Secure Your Digital Identity?</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
                        Our team of security experts is ready to help you protect your personal information
                        and prevent identity theft in today's digital landscape.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button
                            variant="primary"
                            size="lg"
                            className="bg-blue text-blue-700 hover:bg-black-50 transform transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Get Started
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 transition-all"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
