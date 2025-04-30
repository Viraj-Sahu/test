import React from 'react';
import OperatorGuide from './OperatorGuide';
import MfaSetup from './MfaSetup';
import { PhoneCall, Shield, AlertTriangle, Key, Smartphone, Lock, ChevronRight, ExternalLink, Info, CheckCircle } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';

const SimProtectionPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Premium Hero Section */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-8 mb-10 shadow-lg fade-in relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white rounded-full"></div>
          <div className="absolute -left-8 -top-8 w-32 h-32 bg-white rounded-full"></div>
        </div>

        <div className="sm:flex items-center justify-between relative z-10">
          <div className="mb-6 sm:mb-0 max-w-2xl">
            <div className="flex items-center mb-3">
              <Smartphone className="h-6 w-6 mr-2 text-purple-200" />
              <h5 className="text-purple-100 font-medium">Advanced Mobile Security</h5>
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">SIM-Swap Protection Suite</h1>
            <p className="text-purple-100 leading-relaxed">
              Protect your accounts from sophisticated SIM-swap attacks that bypass traditional security.
              Criminals use these tactics to take over your phone number and gain access to your accounts.
            </p>

            <div className="flex gap-4 mt-6">
              <Button
                variant="primary"
                size="md"
                className="bg-blue text-purple-700 hover:bg-black-50 shadow-md hover:shadow-lg transition-all flex items-center gap-1"
              >
                <Shield className="h-4 w-4" />
                <span>Activate Protection</span>
              </Button>
              <Button
                variant="secondary"
                size="md"
                className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 transition-all flex items-center gap-1"
              >
                <Info className="h-4 w-4" />
                <span>Learn More</span>
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative p-1 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-white border-opacity-20">
              <img
                src="/WhatsApp Image 2025-04-27 at 22.43.15_83d16a84.jpg"
                alt="SIM Swap Protection"
                className="h-64 w-auto object-contain rounded-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x300/818cf8/ffffff?text=SIM+Swap+Protection";
                }}
              />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="relative mt-8 p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl border border-white border-opacity-20 sm:flex justify-between">
          <div className="mb-4 sm:mb-0 text-center">
            <div className="text-2xl font-bold text-white">43%</div>
            <div className="text-purple-100 text-sm">Increase in SIM-swap attacks</div>
          </div>
          <div className="mb-4 sm:mb-0 text-center">
            <div className="text-2xl font-bold text-white">₹12 Lakh</div>
            <div className="text-purple-100 text-sm">Average financial loss</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">92%</div>
            <div className="text-purple-100 text-sm">Reduction with proper protection</div>
          </div>
        </div>
      </div>

      {/* What is a SIM-Swap Attack? Section */}
      <div className="mb-10">
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 hover:shadow-lg transition-all">
          <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
            <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
            What is a SIM-Swap Attack?
          </h2>

          <div className="sm:flex gap-6 items-center">
            <div className="sm:w-2/3">
              <p className="text-gray-700 mb-4 leading-relaxed">
                A SIM-swap attack occurs when a criminal convinces your mobile carrier to transfer your phone number to a new SIM card they control. Once successful, they can:
              </p>

              <ul className="space-y-3 mb-4">
                {[
                  "Receive all your calls and SMS messages, including OTPs and verification codes",
                  "Reset passwords for your email, banking, and cryptocurrency accounts",
                  "Bypass two-factor authentication that relies on SMS",
                  "Access and drain financial accounts linked to your phone number"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-2 mt-0.5">
                      <AlertTriangle className="h-3 w-3" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:w-1/3 mt-4 sm:mt-0 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                <Shield className="h-4 w-4 mr-1 text-purple-600" />
                High-Risk Targets
              </h3>
              <ul className="space-y-2">
                {[
                  "Cryptocurrency investors",
                  "High-net-worth individuals",
                  "Business executives",
                  "Those with significant online presence",
                  "Banking app users without MFA"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <CheckCircle className="h-3.5 w-3.5 mr-1.5 text-purple-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Tools Section - Enhanced */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
          <Shield className="h-5 w-5 mr-2 text-purple-600" />
          Protection Tools
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="h-full flex flex-col">
            <div className="bg-white rounded-xl border border-gray-200 border-t-4 border-t-purple-500 shadow-md overflow-hidden hover:shadow-lg transition-all flex-grow">
              <div className="p-4 bg-purple-50 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center">
                  <PhoneCall className="h-5 w-5 text-purple-700 mr-2" />
                  <h3 className="font-bold text-gray-900">Carrier Protection Guide</h3>
                </div>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">
                  Essential
                </span>
              </div>
              <div className="flex-grow">
                <OperatorGuide />
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col">
            <div className="bg-white rounded-xl border border-gray-200 border-t-4 border-t-indigo-500 shadow-md overflow-hidden hover:shadow-lg transition-all flex-grow">
              <div className="p-4 bg-indigo-50 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center">
                  <Key className="h-5 w-5 text-indigo-700 mr-2" />
                  <h3 className="font-bold text-gray-900">Multi-Factor Authentication</h3>
                </div>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                  Advanced
                </span>
              </div>
              <div className="flex-grow">
                <MfaSetup />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How SIM-Swap Attacks Work Process Flow */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
          <Info className="h-5 w-5 mr-2 text-blue-600" />
          How SIM-Swap Attacks Work
        </h2>

        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                title: "Information Gathering",
                description: "Attackers collect personal information through phishing, data breaches, or social media",
                icon: <Search className="h-6 w-6 text-gray-700" />,
                color: "bg-blue-50 border-blue-200"
              },
              {
                title: "Social Engineering",
                description: "They contact your mobile carrier pretending to be you, claiming to need a new SIM",
                icon: <Phone className="h-6 w-6 text-gray-700" />,
                color: "bg-purple-50 border-purple-200"
              },
              {
                title: "SIM Transfer",
                description: "Your number is transferred to their SIM card, disconnecting your phone",
                icon: <Smartphone className="h-6 w-6 text-gray-700" />,
                color: "bg-pink-50 border-pink-200"
              },
              {
                title: "Account Takeover",
                description: "They reset your passwords using SMS verification and access your accounts",
                icon: <Lock className="h-6 w-6 text-gray-700" />,
                color: "bg-red-50 border-red-200"
              }
            ].map((step, index) => (
              <div key={index} className={`rounded-lg p-4 border ${step.color} relative`}>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-white border border-gray-200 shadow-sm">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-center font-medium text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prevention Checklist */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
          <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
          Essential Protection Checklist
        </h2>

        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Set a SIM PIN",
                description: "Add a PIN to your SIM card through your phone settings",
                completed: false
              },
              {
                title: "Add Carrier PIN/Password",
                description: "Set up a separate PIN or password with your mobile carrier",
                completed: false
              },
              {
                title: "Use Authenticator Apps",
                description: "Switch from SMS to app-based 2FA for important accounts",
                completed: false
              },
              {
                title: "Monitor Your Accounts",
                description: "Enable notifications for all account activities",
                completed: false
              },
              {
                title: "Use Hardware Security Keys",
                description: "For maximum security, use physical security keys",
                completed: false
              },
              {
                title: "Limit Personal Information",
                description: "Reduce what you share on social media profiles",
                completed: false
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-2 mt-0.5">
                    <input
                      type="checkbox"
                      className="h-3 w-3 text-green-600 focus:ring-green-500"
                      defaultChecked={item.completed}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
          <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
          Additional Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "TRAI Guidelines on SIM Security",
              description: "Official recommendations from the Telecom Regulatory Authority of India",
              link: "https://trai.gov.in"
            },
            {
              title: "Mobile Carrier Security Contacts",
              description: "Direct security contacts for all major Indian mobile carriers",
              link: "#carrier-contacts"
            },
            {
              title: "Advanced MFA Options",
              description: "Comparison of hardware and software-based authentication methods",
              link: "#mfa-options"
            }
          ].map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all group"
            >
              <h3 className="font-medium text-gray-900 mb-2 group-hover:text-purple-700 transition-colors flex items-center">
                {resource.title}
                <ExternalLink className="h-3.5 w-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mb-6">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-xl p-6 shadow-lg">
          <div className="sm:flex items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-xl font-bold text-white mb-1">Ready to secure your SIM?</h3>
              <p className="text-purple-100">
                Follow our guides to protect your mobile number and prevent account takeovers.
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="bg-blue  text-purple-700 hover:bg-black-50 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components for icons
const Search = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const Phone = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const BookOpen = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

export default SimProtectionPage;
