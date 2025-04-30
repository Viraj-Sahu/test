import React from 'react';
import { Check, X, AlertCircle, Info } from 'lucide-react';
import Card from '../../components/Card';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  critical: boolean;
}

const checklist: ChecklistItem[] = [
  {
    id: 'regulated',
    title: 'Regulated Financial Entity',
    description: 'The app is developed by a regulated financial institution or company registered with appropriate financial authorities.',
    critical: true,
  },
  {
    id: 'playstore',
    title: 'Available on Official App Stores',
    description: 'The app is available on official platforms like Google Play Store or Apple App Store and not from third-party websites.',
    critical: true,
  },
  {
    id: 'encryption',
    title: 'Data Encryption',
    description: 'The app encrypts your data both during transmission and storage.',
    critical: true,
  },
  {
    id: 'permissions',
    title: 'Reasonable App Permissions',
    description: 'The app only requests permissions that are necessary for its functionality.',
    critical: false,
  },
  {
    id: 'privacy',
    title: 'Clear Privacy Policy',
    description: 'The app has a clear, accessible privacy policy that explains how your data is used.',
    critical: false,
  },
  {
    id: '2fa',
    title: 'Two-Factor Authentication',
    description: 'The app offers two-factor authentication to provide an extra layer of security.',
    critical: false,
  },
  {
    id: 'reviews',
    title: 'Positive User Reviews',
    description: 'The app has positive reviews from a large number of users over a long period of time.',
    critical: false,
  },
  {
    id: 'updates',
    title: 'Regular Updates',
    description: 'The app is regularly updated to fix security vulnerabilities and bugs.',
    critical: false,
  },
];

const SecurityChecklist: React.FC = () => {
  return (
    <Card title="Fintech App Security Checklist">
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Before using any financial app, verify it meets these security standards. Pay special attention to items marked as critical.
        </p>
      </div>

      <div className="space-y-4">
        {checklist.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden">
            <div className={`px-4 py-3 flex items-center justify-between ${item.critical ? 'bg-red-50' : 'bg-blue-50'}`}>
              <div className="flex items-center">
                {item.critical ? (
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                ) : (
                  <Info className="h-5 w-5 text-blue-600 mr-2" />
                )}
                <h3 className={`font-medium ${item.critical ? 'text-red-800' : 'text-blue-800'}`}>
                  {item.title}
                  {item.critical && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Critical
                    </span>
                  )}
                </h3>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <p className="text-sm text-gray-600">{item.description}</p>
              
              <div className="mt-2 flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-1 text-green-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-sm text-gray-700">Yes</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-red-100 rounded-full p-1 text-red-600">
                    <X className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-sm text-gray-700">No</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gray-100 rounded-full p-1 text-gray-600">
                    <span className="h-4 w-4 flex items-center justify-center font-medium text-xs">?</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-700">Not sure</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SecurityChecklist;