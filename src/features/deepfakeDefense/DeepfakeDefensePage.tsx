import React, { useState } from 'react';
import VoiceAuthDemo from './VoiceAuthDemo';
import MultiChannelVerification from './MultiChannelVerification';
import IncidentResponseChecklist from './IncidentResponseChecklist';
import { Video, Shield, AlertTriangle, FileText, Check, ChevronRight, ExternalLink, Info, User, Phone, Globe, Eye, Cpu, BarChart } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';

const DeepfakeDefensePage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('detection');

  // Example deepfake types
  const deepfakeTypes = [
    {
      type: 'Audio Deepfakes',
      description: 'AI-generated voice cloning that can mimic anyone\'s voice with just a few minutes of audio samples.',
      icon: <Phone className="h-6 w-6" />,
      color: 'bg-amber-50 border-amber-200 text-amber-700',
      example: '"/examples/audio-deepfake.mp3"'
    },
    {
      type: 'Video Deepfakes',
      description: 'Synthetic media that replaces someone\'s face or manipulates their movements and expressions.',
      icon: <Video className="h-6 w-6" />,
      color: 'bg-blue-50 border-blue-200 text-blue-700',
      example: '"/examples/video-deepfake.mp4"'
    },
    {
      type: 'Profile Deepfakes',
      description: 'AI-generated profile photos and biographies used for fake social media or professional accounts.',
      icon: <User className="h-6 w-6" />,
      color: 'bg-purple-50 border-purple-200 text-purple-700',
      example: '"/examples/profile-deepfake.jpg"'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Premium Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 rounded-2xl p-8 mb-10 shadow-xl overflow-hidden fade-in">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 bottom-0 w-full h-64 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <svg className="absolute right-0 bottom-0 opacity-10" width="300" height="300" viewBox="0 0 600 600">
            <path d="M300,500C136.9,500,5,368.1,5,205S136.9-90,300-90s295,131.9,295,295S463.1,500,300,500z"
              fill="none" stroke="#FFFFFF" strokeWidth="15" strokeDasharray="30 30" />
          </svg>
        </div>

        <div className="sm:flex items-center justify-between relative z-10">
          <div className="mb-6 sm:mb-0 max-w-2xl">
            <div className="flex items-center mb-3 space-x-2">
              <Shield className="h-6 w-6 text-blue-300" />
              <span className="text-blue-200 font-medium px-3 py-1 rounded-full bg-blue-900 bg-opacity-40 text-sm">
                Advanced Protection
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Deepfake Defense Center</h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Protect yourself against AI-generated deepfakes that can convincingly mimic faces, voices, and digital identities.
              Our advanced tools help detect, verify, and respond to this emerging threat.
            </p>

            <div className="flex gap-4 mt-6">
              <Button
                variant="primary"
                size="lg"
                className="bg-blue text-indigo-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all flex items-center gap-1"
              >
                <Shield className="h-4 w-4" />
                <span>Test Your Security</span>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 transition-all flex items-center gap-1"
              >
                <Info className="h-4 w-4" />
                <span>Report a Deepfake</span>
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative p-1 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-white border-opacity-20">
              <img
                src="/WhatsApp Image 2025-04-27 at 22.45.31_912a0fc0.jpg"
                alt="SIM Swap Protection"
                className="h-64 w-auto object-contain rounded-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x300/818cf8/ffffff?text=SIM+Swap+Protection";
                }}
              />
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="relative mt-8 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              stat: "600%",
              label: "Increase in deepfake incidents since 2021",
              icon: <BarChart className="h-5 w-5 text-blue-300" />
            },
            {
              stat: "90%",
              label: "Of people cannot identify sophisticated deepfakes",
              icon: <Eye className="h-5 w-5 text-blue-300" />
            },
            {
              stat: "₹15+ Lakh",
              label: "Average loss in deepfake fraud cases",
              icon: <Cpu className="h-5 w-5 text-blue-300" />
            }
          ].map((item, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 flex items-center">
              <div className="mr-4 p-3 rounded-full bg-blue-800 bg-opacity-50">
                {item.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{item.stat}</div>
                <div className="text-blue-200 text-sm">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Understanding Deepfakes */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
          <Info className="h-5 w-5 mr-2 text-indigo-600" />
          Understanding the Threat
        </h2>

        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 hover:shadow-lg transition-all">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deepfakeTypes.map((type, index) => (
              <div key={index} className={`rounded-xl p-5 border ${type.color} relative`}>
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-white border border-gray-100 shadow-sm mr-3">
                    {type.icon}
                  </div>
                  <h3 className="font-bold text-gray-900">{type.type}</h3>
                </div>

                <p className="text-gray-700 text-sm mb-4">{type.description}</p>

                <button className={`text-sm font-medium flex items-center ${type.color.split(' ')[2]} hover:underline`}>
                  See example <ChevronRight className="h-3 w-3 ml-1" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-indigo-900">Why Deepfakes Are Dangerous</h4>
                <p className="text-indigo-700 text-sm mt-1">
                  Unlike traditional identity theft, deepfakes can bypass biometric security, trick colleagues
                  into financial actions, damage reputations, and create false evidence. They're increasingly
                  difficult to detect without specialized tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Defense Tools - with Tabs */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
          <Shield className="h-5 w-5 mr-2 text-indigo-600" />
          Defense Tools
        </h2>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex -mb-px">
            {[
              { id: 'detection', label: 'Detection & Verification', icon: <Eye className="h-4 w-4 mr-2" /> },
              { id: 'prevention', label: 'Multi-Channel Authentication', icon: <Shield className="h-4 w-4 mr-2" /> },
              { id: 'response', label: 'Incident Response', icon: <AlertTriangle className="h-4 w-4 mr-2" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-3 flex items-center text-sm font-medium border-b-2 transition-colors ${selectedTab === tab.id
                  ? 'text-indigo-600 border-indigo-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                  }`}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
          {selectedTab === 'detection' && (
            <div className="p-6">
              <div className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="h-5 w-5 mr-2 text-indigo-600" />
                Voice & Video Authentication
              </div>
              <div>
                <VoiceAuthDemo />
              </div>
            </div>
          )}

          {selectedTab === 'prevention' && (
            <div className="p-6">
              <div className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-indigo-600" />
                Multi-Channel Verification
              </div>
              <div>
                <MultiChannelVerification />
              </div>
            </div>
          )}

          {selectedTab === 'response' && (
            <div className="p-6">
              <div className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-indigo-600" />
                Incident Response Protocol
              </div>
              <div>
                <IncidentResponseChecklist />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Deepfake Detection Guide */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
          <Check className="h-5 w-5 mr-2 text-green-600" />
          How to Spot a Deepfake
        </h2>

        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Indicators</h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "Unnatural Eye Movements",
                    description: "Eyes may not blink naturally or focus correctly"
                  },
                  {
                    title: "Facial Inconsistencies",
                    description: "Watch for blurring, flickering, or strange transitions around the face"
                  },
                  {
                    title: "Audio-Visual Misalignment",
                    description: "Lip movements don't match the audio precisely"
                  },
                  {
                    title: "Lighting Inconsistencies",
                    description: "Shadows may appear in the wrong direction or change unnaturally"
                  },
                  {
                    title: "Unnatural Boundaries",
                    description: "Look for blurring or artifacts where the face meets hair, glasses, etc."
                  }
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Check className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-xl aspect-video">
              <img
                src="/010dc0505efc2b1b99fe98f92ab4a8a5.jpeg"
                alt="Deepfake vs Real Comparison"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/800x450/f8fafc/64748b?text=Deepfake+vs+Real+Comparison";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white font-medium text-lg">Detailed Analysis</h4>
                <p className="text-gray-200 text-sm">
                  Compare the subtle differences between real and deepfake content
                </p>
                <a
                  href="https://detectfakes.kellogg.northwestern.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-3 py-1 bg-white text-indigo-700 rounded-lg text-sm font-medium flex items-center hover:bg-indigo-50 transition-colors"
                >
                  View Examples <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
          <FileText className="h-5 w-5 mr-2 text-indigo-600" />
          Additional Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Deepfake Technology Report",
              description: "In-depth analysis of current and emerging deepfake technologies",
              link: "#deepfake-report",
              icon: <Cpu className="h-5 w-5 text-gray-700" />
            },
            {
              title: "Legal Protections Guide",
              description: "Understanding your legal rights when targeted by deepfakes",
              link: "#legal-guide",
              icon: <FileText className="h-5 w-5 text-gray-700" />
            },
            {
              title: "Verification Protocol",
              description: "Multi-factor verification system for high-risk communications",
              link: "#verification-protocol",
              icon: <Shield className="h-5 w-5 text-gray-700" />
            }
          ].map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 mr-3">
                  {resource.icon}
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-indigo-700 transition-colors">
                  {resource.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
              <div className="text-indigo-600 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                View resource <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mb-10">
        <div className="bg-gradient-to-r from-indigo-700 to-blue-700 rounded-xl p-6 shadow-lg">
          <div className="sm:flex items-center justify-between">
            <div className="mb-6 sm:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">Need personalized help?</h3>
              <p className="text-indigo-100">
                Our experts can provide guidance on responding to suspected deepfake incidents
                or implementing additional security measures for high-risk individuals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="lg"
                className="bg-blue text-indigo-700 hover:bg-black-50 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
              >
                Contact an Expert
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 transition-all whitespace-nowrap"
              >
                Report an Incident
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepfakeDefensePage;
