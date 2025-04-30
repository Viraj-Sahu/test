import React from 'react';
import CreditScoreInfo from './CreditScoreInfo';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { Shield, AlertTriangle, Check, ExternalLink, Info, Bell, Lock, FileText, TrendingUp } from 'lucide-react';
import '../../styles/animations.css';

const CreditMonitoringPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 mb-10 shadow-lg fade-in">
        <div className="sm:flex items-center justify-between">
          <div className="mb-6 sm:mb-0 max-w-2xl">
            <div className="flex items-center mb-3">
              <Shield className="h-6 w-6 mr-2 text-blue-200" />
              <h5 className="text-blue-100 font-medium">Credit Protection</h5>
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">Monitor & Safeguard Your Credit</h1>
            <p className="text-blue-100 leading-relaxed">
              Stay ahead of identity thieves by actively monitoring your credit reports, setting up alerts,
              and following best practices to protect your financial reputation.
            </p>
          </div>
          <div className="hidden sm:block bg-white bg-opacity-20 p-4 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-medium">Did you know?</span>
            </div>
            <p className="text-blue-100 text-sm mt-2 max-w-xs">
              It takes an average of 6 months to recover from credit-related identity theft in India,
              with financial damages averaging ₹4.8 lakhs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 w-full mb-10">
        {/* Credit Protection Tips Card - Enhanced */}
        <div className="flex-1">
          <Card
            title={
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-blue-600 mr-2" />
                <span>Credit Protection Strategies</span>
              </div>
            }
            className="fade-in animated-card-premium border-t-4 border-blue-500 shadow-md hover:shadow-xl"
          >
            <ul className="space-y-4 my-4">
              {[
                {
                  title: "Regular Monitoring",
                  description: "Check your credit report quarterly from CIBIL, Experian, and Equifax"
                },
                {
                  title: "Set Up Fraud Alerts",
                  description: "Register for SMS/email notifications with credit bureaus for any changes"
                },
                {
                  title: "Consider Credit Freezes",
                  description: "Freeze your credit reports when not actively seeking new credit lines"
                },
                {
                  title: "Immediate Reporting",
                  description: "Report unauthorized accounts to both lenders and credit bureaus"
                },
                {
                  title: "Strong Account Security",
                  description: "Use unique passwords and enable two-factor authentication"
                }
              ].map((tip, index) => (
                <li key={index} className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="font-medium text-blue-900">{tip.title}</h4>
                    <p className="text-sm text-blue-700 mt-1">{tip.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-between items-center border-t border-gray-100 pt-4">
              <div className="text-sm text-gray-500 flex items-center">
                <Info className="h-4 w-4 mr-1" />
                Updated monthly with latest practices
              </div>
              <a
                href="https://www.moneycontrol.com/news/business/personal-finance/smart-habits-to-boost-your-credit-score-and-build-financial-confidence-13001828.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button variant="outline" size="sm" className="animated-button flex items-center gap-1">
                  <span>Expert Resources</span>
                  <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </Card>
        </div>

        {/* Image Section - Enhanced */}
        <div className="flex-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              {/* Credit Protection Banner */}
              <div className="absolute top-4 left-4 z-10 bg-blue-600 bg-opacity-90 text-white px-4 py-2 rounded-lg shadow-md">
                <div className="flex items-center">
                  <Lock className="h-4 w-4 mr-2" />
                  <span className="font-medium">Credit Shield</span>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                <img
                  src="/WhatsApp Image 2025-04-27 at 22.37.48_7d85bec0.jpg"
                  alt="Credit Protection Visual Guide"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">Protect Your Financial Identity</h3>
                  <p className="text-gray-200 text-sm mb-3">
                    Your credit score is the cornerstone of your financial reputation.
                    Guard it carefully against increasingly sophisticated identity thieves.
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    className="bg-blue text-black-700 hover:bg-black-50 transition-colors"
                  >
                    Security Guide
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 divide-x divide-gray-200 bg-gradient-to-r from-gray-50 to-white">
              {[
                { label: "Average recovery time", value: "6 months", icon: <TrendingUp className="h-4 w-4 text-amber-500" /> },
                { label: "Identity theft cases", value: "+45% in 2024", icon: <AlertTriangle className="h-4 w-4 text-red-500" /> },
                { label: "Digital fraud attempts", value: "1 in 400 txns", icon: <FileText className="h-4 w-4 text-blue-500" /> }
              ].map((stat, index) => (
                <div key={index} className="p-4 text-center">
                  <div className="flex justify-center mb-1">{stat.icon}</div>
                  <div className="font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Alert Card */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start shadow-sm">
            <Bell className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-amber-800 font-medium">Credit Monitoring Alert</h4>
              <p className="text-amber-700 text-sm mt-1">
                Enable real-time notifications to be alerted immediately when new accounts are opened
                in your name or significant changes appear on your credit report.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Score Information Section - Enhanced container */}
      <div className="mb-10 fade-in fade-in-delay-1">
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              Your Credit Score Overview
            </h2>
            <Button variant="outline" size="sm" className="animated-button">
              Refresh Data
            </Button>
          </div>
          <CreditScoreInfo />
        </div>
      </div>

      {/* New Section: Educational Resources */}
      <div className="mb-10 fade-in fade-in-delay-2">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
          Educational Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Understanding Credit Scores in India",
              description: "Learn how CIBIL and other credit bureaus calculate your score and what factors impact it.",
              image: "/credit-score-guide.jpg"
            },
            {
              title: "Spotting Signs of Identity Theft",
              description: "Key warning signs that someone may be using your identity to access credit fraudulently.",
              image: "/identity-theft-signs.jpg"
            },
            {
              title: "Credit Recovery Plan",
              description: "Step-by-step guide to rebuilding your credit after identity theft or financial fraud.",
              image: "/credit-recovery.jpg"
            }
          ].map((resource, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow hover:shadow-md transition-all group">
              <div className="h-40 bg-gray-200 overflow-hidden">
                {resource.image ? (
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x200/e2e8f0/64748b?text=Resource+Guide";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                    <FileText className="h-10 w-10 text-blue-500" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-50 transition-colors">
                  Read Guide
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Import needed for the Educational Resources section
const BookOpen = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

export default CreditMonitoringPage;
