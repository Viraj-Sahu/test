import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Shield, PhoneCall, Smartphone, Video, AlertTriangle, ClipboardList, IndianRupee, Globe, ChevronRight, Activity, Shield as ShieldIcon } from 'lucide-react';
import RiskProfileTree from './RiskProfileTree';
import InteractiveStats from './InteractiveStats';
import { PersonaType } from '../../types';
import Button from '../../components/Button';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  personas: PersonaType[];
}

const personaColors: Record<PersonaType, string> = {
  'digital-native': 'bg-blue-50 text-blue-700 border border-blue-200',
  'senior-citizen': 'bg-amber-50 text-amber-700 border border-amber-200',
  'professional': 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  'business-owner': 'bg-violet-50 text-violet-700 border border-violet-200',
};

const personaLabels: Record<PersonaType, string> = {
  'digital-native': 'Digital Native',
  'senior-citizen': 'Senior Citizen',
  'professional': 'Professional',
  'business-owner': 'Business Owner',
};

const HomePage: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      title: 'Credit Monitoring',
      description: 'Track your credit score and get alerts for suspicious activities on your credit report.',
      icon: <CreditCard className="h-6 w-6 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />,
      path: '/credit-monitoring',
      personas: ['digital-native', 'professional'],
    },
    {
      title: 'Fintech App Verification',
      description: 'Verify the security of financial apps before downloading or sharing your information.',
      icon: <Shield className="h-6 w-6 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />,
      path: '/fintech-verification',
      personas: ['digital-native', 'professional'],
    },
    {
      title: 'Deepfake Defense',
      description: 'Detect and defend against sophisticated deepfake-based identity theft.',
      icon: <Video className="h-6 w-6 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />,
      path: '/deepfake-defense',
      personas: ['business-owner'],
    },
    {
      title: 'SIM-Swap Protection',
      description: 'Protect your accounts from SIM-swap attacks and related identity theft attempts.',
      icon: <Smartphone className="h-6 w-6 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />,
      path: '/sim-protection',
      personas: ['professional', 'business-owner'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      {/* Enhanced Hero Section with gradient and design elements */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-8 mb-16 shadow-xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full -mr-40 -mb-40"></div>
          <div className="absolute left-0 top-0 w-64 h-64 bg-white rounded-full -ml-20 -mt-20"></div>
        </div>

        <div className="relative sm:flex items-center justify-between">
          <div className="mb-6 sm:mb-0 max-w-2xl">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 bg-opacity-30">
                <ShieldIcon className="h-4 w-4 text-white" />
              </div>
              <span className="text-blue-100 font-medium">Identity Protection Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
              सुरक्षित डिजिटल भारत
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Secure Digital India
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              As India goes digital, cyber fraud and identity theft are rising. Learn how to protect your Aadhaar, PAN, and financial information from scammers and fraudsters.
            </p>

            <div className="flex gap-4 mt-8">
              <Button
                variant="primary"
                size="lg"
                className="bg-blue text-blue-700 hover:bg-black-9000 transform transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                जोखिम मूल्यांकन | Risk Assessment
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

          <div className="hidden sm:block relative">
            <div className="absolute -inset-4 bg-blue-400 bg-opacity-30 rounded-full blur-xl"></div>
            <div className="relative">
              <AlertTriangle className="h-32 w-32 text-white" />
            </div>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="relative mt-12 p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl border border-white border-opacity-20 sm:flex justify-between">
          <div className="mb-4 sm:mb-0 text-center">
            <div className="text-3xl font-bold text-white">78%</div>
            <div className="text-blue-100 text-sm">Increase in Digital Fraud</div>
          </div>
          <div className="mb-4 sm:mb-0 text-center">
            <div className="text-3xl font-bold text-white">₹1.25L Cr</div>
            <div className="text-blue-100 text-sm">Annual Losses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">62M</div>
            <div className="text-blue-100 text-sm">Indians Affected</div>
          </div>
        </div>
      </div>

      {/* Interactive Risk Profile Tree Section with enhanced styling */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Activity className="h-5 w-5 mr-2 text-blue-600" />
            Risk Profile Assessment
          </h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
            Learn more about risk profiles <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <RiskProfileTree />
        </div>
      </div>

      {/* Identity Protection Tools with enhanced card design */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-blue-600" />
            Identity Protection Tools
          </h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
            View all tools <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="flex-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  to={feature.path}
                  className="group relative overflow-hidden bg-white rounded-xl border border-gray-100 hover:border-blue-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="absolute h-full w-1 bg-gradient-to-b from-blue-500 to-blue-600 left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="ml-4 text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{feature.description}</p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {feature.personas.map(persona => (
                      <span
                        key={persona}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${personaColors[persona]}`}
                      >
                        {personaLabels[persona]}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center mt-3 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore feature <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl border border-gray-100 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
              <img
                src="/WhatsApp Image 2025-04-27 at 22.36.29_5062d64a.jpg"
                alt="Protection Tools"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Comprehensive Protection</h3>
                <p className="text-gray-200 mb-4">Our tools work together to create a security shield around your digital identity.</p>
                <button className="px-6 py-2 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Statistics Section with enhanced container */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <ClipboardList className="h-5 w-5 mr-2 text-blue-600" />
            Identity Theft in India: Key Statistics
          </h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
            View detailed report <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <InteractiveStats />
        </div>
      </div>

      {/* New section: User Testimonials */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            What Our Users Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              quote: "This platform helped me recover from identity theft when my Aadhaar details were compromised. The guidance was invaluable.",
              author: "Priya Sharma",
              role: "Bank Employee, Delhi"
            },
            {
              quote: "As a senior citizen, I was worried about digital fraud. The senior-specific tools made me feel secure in today's digital economy.",
              author: "Rajesh Khanna",
              role: "Retired Professor, Mumbai"
            },
            {
              quote: "The deepfake detection tool helped my business avoid a major fraud attempt through a video call. Truly cutting-edge protection.",
              author: "Ananya Patel",
              role: "Business Owner, Jaipur"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-8 shadow-xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Protected in the Digital Age</h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
          Join thousands of Indians who trust our platform to protect their identities
          against evolving cyber threats and financial fraud.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            className="bg-blue text-blue-700 hover:bg-black-900 transform transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Free
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 transition-all"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
