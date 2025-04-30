import React, { useState } from 'react';
import AppVerifier from './AppVerifier';
import SecurityChecklist from './SecurityChecklist';
import Card from '../../components/Card';
import Button from '../../components/Button';
import {
  ShieldCheck, ShieldAlert, AlertTriangle, Shield, Search,
  CheckCircle, XCircle, ExternalLink, ChevronRight, FileText,
  LockKeyhole, Download, InfoIcon, Star, Smartphone, Users
} from 'lucide-react';
import { mockFintechApps } from '../../services/mockData';

const FintechVerificationPage: React.FC = () => {
  const [appFilterTab, setAppFilterTab] = useState('safe');

  // Split apps into verified and unverified
  const verifiedApps = mockFintechApps.filter(app => app.verified);
  const unverifiedApps = mockFintechApps.filter(app => !app.verified);

  // Common risks in fintech apps
  const commonRisks = [
    {
      risk: "Data Collection",
      description: "Apps collecting excessive personal and financial data",
      percentage: 78,
      color: "bg-amber-500"
    },
    {
      risk: "Weak Encryption",
      description: "Inadequate encryption for sensitive financial information",
      percentage: 64,
      color: "bg-red-500"
    },
    {
      risk: "Permissions Abuse",
      description: "Requesting unnecessary device permissions",
      percentage: 82,
      color: "bg-orange-500"
    },
    {
      risk: "Regulatory Non-Compliance",
      description: "Apps operating without proper regulatory approval",
      percentage: 42,
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Premium Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-emerald-600 rounded-2xl p-8 mb-10 shadow-xl overflow-hidden relative fade-in">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full -mr-20 -mb-20"></div>
          <div className="absolute left-0 top-0 w-64 h-64 bg-white rounded-full -ml-10 -mt-10"></div>
          <svg className="absolute right-10 top-10 text-white opacity-20" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <div className="sm:flex items-center justify-between relative z-10">
          <div className="mb-6 sm:mb-0 max-w-2xl">
            <div className="flex items-center mb-3">
              <Shield className="h-6 w-6 mr-2 text-blue-200" />
              <h5 className="text-blue-100 font-medium px-3 py-1 rounded-full bg-blue-800 bg-opacity-40 text-sm">
                Financial Security Tools
              </h5>
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">Fintech App Verification Center</h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Not all financial apps are created equal. Verify the security practices and regulatory
              compliance of fintech apps before trusting them with your sensitive financial information.
            </p>

            <div className="flex gap-4 mt-6">
              <Button
                variant="primary"
                size="lg"
                className="bg-blue text-blue-700 hover:bg-black-50 shadow-lg hover:shadow-xl transition-all flex items-center gap-1"
              >
                <Search className="h-4 w-4" />
                <span>Verify An App</span>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 transition-all flex items-center gap-1"
              >
                <FileText className="h-4 w-4" />
                <span>View Security Guide</span>
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-5 rounded-2xl border border-white border-opacity-20 shadow-lg">
                <div className="space-y-4">
                  {[
                    { text: "RBI Compliance", status: true },
                    { text: "Data Encryption", status: true },
                    { text: "Privacy Policy", status: true },
                    { text: "Minimal Permissions", status: false },
                    { text: "Regular Security Audits", status: false }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      {item.status ? (
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-400 mr-2" />
                      )}
                      <span className="text-white">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="relative mt-10 sm:mt-8 p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl border border-white border-opacity-20 sm:flex justify-between">
          <div className="mb-4 sm:mb-0 text-center">
            <div className="text-2xl font-bold text-white">48%</div>
            <div className="text-blue-100 text-sm">Apps with security issues</div>
          </div>
          <div className="mb-4 sm:mb-0 text-center">
            <div className="text-2xl font-bold text-white">₹900+ Cr</div>
            <div className="text-blue-100 text-sm">Annual financial fraud in India</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">72%</div>
            <div className="text-blue-100 text-sm">Users skip security checks</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-10">
        <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden fade-in">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center mb-6">
              <Search className="h-5 w-5 mr-2 text-blue-600" />
              App Verification Tool
            </h2>
            <AppVerifier />
          </div>
        </div>
      </div>

      {/* Common Risks in Financial Apps */}
      <div className="mb-10 fade-in fade-in-delay-1">
        <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
          <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
          Common Risks in Financial Apps
        </h2>

        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-6">
                Many financial apps have security vulnerabilities that could put your personal information
                and finances at risk. Here are the most common issues we find during our security audits:
              </p>

              <div className="space-y-6">
                {commonRisks.map((risk, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium text-gray-900">{risk.risk}</h3>
                      <span className="text-sm font-bold text-gray-900">{risk.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                      <div
                        className={`${risk.color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${risk.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600">{risk.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <LockKeyhole className="h-5 w-5 mr-2 text-blue-600" />
                What to Look For in Secure Apps
              </h3>

              <ul className="space-y-3">
                {[
                  {
                    title: "Regulatory Compliance",
                    description: "Verified by RBI, SEBI, or other relevant authorities"
                  },
                  {
                    title: "Data Encryption",
                    description: "End-to-end encryption for financial transactions and data"
                  },
                  {
                    title: "Transparent Privacy Policy",
                    description: "Clear information about data collection and sharing"
                  },
                  {
                    title: "Security Features",
                    description: "Supports biometric login, 2FA, and session timeouts"
                  },
                  {
                    title: "Regular Updates",
                    description: "Consistent security patches and improvements"
                  }
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-blue-200">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                >
                  Download complete security checklist
                  <Download className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Checklist and App Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2 fade-in fade-in-delay-2">
          <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden h-full">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                App Security Checklist
              </h2>
            </div>
            <div className="p-6">
              <SecurityChecklist />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 fade-in fade-in-delay-3">
          <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex">
              <button
                className={`py-2 px-4 font-medium text-sm rounded-lg mr-2 transition-colors ${appFilterTab === 'safe'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                onClick={() => setAppFilterTab('safe')}
              >
                <div className="flex items-center">
                  <ShieldCheck className="h-4 w-4 mr-1" />
                  Safe Apps
                </div>
              </button>
              <button
                className={`py-2 px-4 font-medium text-sm rounded-lg transition-colors ${appFilterTab === 'unsafe'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                onClick={() => setAppFilterTab('unsafe')}
              >
                <div className="flex items-center">
                  <ShieldAlert className="h-4 w-4 mr-1" />
                  Unsafe Apps
                </div>
              </button>
            </div>

            {appFilterTab === 'safe' && (
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Verified Safe Apps</h3>
                <div className="divide-y divide-gray-200">
                  {verifiedApps.slice(0, 4).map((app) => (
                    <div key={app.id} className="py-4 first:pt-0 last:pb-0 group">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-3 overflow-hidden">
                          {app.logo ? (
                            <img src={app.logo} alt={app.name} className="w-10 h-10 object-contain" />
                          ) : (
                            <Smartphone className="h-6 w-6 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors flex items-center">
                            {app.name}
                            <ShieldCheck className="h-4 w-4 ml-1.5 text-green-500" />
                          </h4>
                          <div className="mt-1 flex items-center">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3.5 w-3.5 ${i < Math.floor(app.securityRating)
                                      ? 'text-blue-500 fill-blue-500'
                                      : 'text-gray-300'
                                    }`}
                                />
                              ))}
                            </div>
                            <p className="ml-2 text-xs text-gray-500">
                              {app.securityRating.toFixed(1)} security rating
                            </p>
                          </div>
                          <div className="mt-1 flex items-center text-xs text-gray-500">
                            <Users className="h-3 w-3 mr-1" />
                            <span>{app.reviews.toLocaleString()} users</span>
                          </div>
                        </div>
                        <div className="ml-2">
                          <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-center">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center mx-auto">
                    View All Safe Apps
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            )}

            {appFilterTab === 'unsafe' && (
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                  Potentially Unsafe Apps
                </h3>
                <div className="divide-y divide-gray-200 mb-4">
                  {unverifiedApps.map((app) => (
                    <div key={app.id} className="py-3 first:pt-0 last:pb-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mr-3">
                          <ShieldAlert className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 flex items-center">
                            {app.name}
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                              Caution
                            </span>
                          </h4>
                          <div className="mt-1">
                            <p className="text-xs text-red-700 flex items-start">
                              <XCircle className="h-3.5 w-3.5 mr-1 mt-0.5 flex-shrink-0" />
                              <span>Security issues: Unregulated, weak encryption</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800 text-sm">Security Warning</h4>
                      <p className="text-xs text-amber-700 mt-1">
                        These apps may not meet security standards and could put your financial information
                        at risk. We recommend using only verified apps for financial transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-5 shadow-md">
            <div className="flex items-center mb-3">
              <InfoIcon className="h-5 w-5 text-blue-200 mr-2" />
              <h3 className="text-white font-bold">Need Help?</h3>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Our team can help verify apps not listed in our database or provide guidance on securing your financial information.
            </p>
            <Button
              variant="primary"
              size="sm"
              className="bg-blue text-black-700 hover:bg-black-50 w-full flex items-center justify-center"
            >
              Contact Security Team
            </Button>
          </div>
        </div>
      </div>

      {/* Educational Resources */}
      <div className="mb-10 fade-in fade-in-delay-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
          <FileText className="h-5 w-5 mr-2 text-blue-600" />
          Educational Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Secure Banking Guide",
              description: "Learn how to secure your financial apps and protect your money online",
              icon: <LockKeyhole className="h-6 w-6 text-blue-500" />
            },
            {
              title: "Spotting Fraudulent Apps",
              description: "Key warning signs that a financial app might be attempting to steal your data",
              icon: <AlertTriangle className="h-6 w-6 text-amber-500" />
            },
            {
              title: "RBI Guidelines for Digital Finance",
              description: "Official regulations that all legitimate financial apps must follow",
              icon: <FileText className="h-6 w-6 text-green-500" />
            }
          ].map((resource, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all p-5 group">
              <div className="flex items-center mb-3">
                <div className="p-3 rounded-lg bg-gray-50 mr-3">
                  {resource.icon}
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
              >
                Read guide <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FintechVerificationPage;
