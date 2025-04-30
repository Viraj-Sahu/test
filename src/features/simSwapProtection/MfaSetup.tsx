import React, { useState } from 'react';
import { Key, Smartphone, ShieldCheck, QrCode } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';

type MfaMethodType = 'authenticator' | 'sms' | 'email' | 'backup';

interface SetupStep {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
}

const MfaSetup: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<MfaMethodType | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Setup steps for authenticator app
  const authenticatorSteps: SetupStep[] = [
    {
      id: 'auth-step-1',
      title: 'Download an Authenticator App',
      description: 'First, download and install an authenticator app on your smartphone.',
      component: (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Download one of these recommended authenticator apps:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 bg-gray-50">
              <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en-US&pli=1" target="_blank" rel="noopener noreferrer" className="no-underline">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <QrCode className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Google Authenticator</h3>
                    <p className="text-xs text-gray-500">Available on iOS and Android</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <a href="https://www.authy.com/download/" target="_blank" rel="noopener noreferrer" className="no-underline">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Key className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Authy</h3>
                    <p className="text-xs text-gray-500">Available on iOS and Android</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button onClick={() => setCurrentStep(1)}>
              Next: Scan QR Code
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: 'auth-step-2',
      title: 'Scan the QR Code',
      description: 'Open your authenticator app and scan this QR code.',
      component: (
        <div className="space-y-4">
          <div className="flex justify-center my-6">
            <div className="p-4 bg-white border-2 border-gray-300 rounded-lg">
              <img
                src="/Identity Theft.png"
                alt="QR Code"
                className="h-48 w-48 object-contain"
              />
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Can't scan the code? Use this setup key instead:
          </p>
          <div className="flex items-center justify-center">
            <pre className="bg-gray-100 p-2 rounded text-sm font-mono">ABCD-EFGH-IJKL-MNOP</pre>
          </div>
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={() => setCurrentStep(0)}>
              Back
            </Button>
            <Button onClick={() => setCurrentStep(2)}>
              Next: Verify Code
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: 'auth-step-3',
      title: 'Verify Setup',
      description: 'Enter the 6-digit code from your authenticator app to verify setup.',
      component: (
        <div className="space-y-4">
          <div className="mt-4">
            <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-1">
              Enter the 6-digit code from your authenticator app
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="verificationCode"
                id="verificationCode"
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="123456"
                maxLength={6}
              />
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={() => setCurrentStep(1)}>
              Back
            </Button>
            <Button onClick={() => {
              setIsComplete(true);
              setCurrentStep(3);
            }}>
              Verify & Complete
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: 'auth-step-4',
      title: 'Setup Complete',
      description: 'Two-factor authentication has been successfully set up.',
      component: (
        <div className="space-y-4">
          <div className="text-center py-6">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <ShieldCheck className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-3 text-lg font-medium text-gray-900">Setup Complete</h3>
            <p className="mt-2 text-sm text-gray-500">
              Your account is now protected with two-factor authentication.
            </p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Key className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Save your backup codes</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>Store these backup codes in a safe place in case you lose access to your authenticator app:</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="text-xs font-mono bg-white p-1 rounded border border-yellow-200">5792-XYZW</div>
                    <div className="text-xs font-mono bg-white p-1 rounded border border-yellow-200">3845-ABCD</div>
                    <div className="text-xs font-mono bg-white p-1 rounded border border-yellow-200">9217-EFGH</div>
                    <div className="text-xs font-mono bg-white p-1 rounded border border-yellow-200">6158-IJKL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button variant="outline" onClick={() => {
              setSelectedMethod(null);
              setCurrentStep(0);
              setIsComplete(false);
            }}>
              Start Over
            </Button>
          </div>
        </div>
      ),
    },
  ];

  // Determine current steps based on selected method
  const currentSteps = authenticatorSteps;
  const totalSteps = currentSteps.length - 1; // Exclude final completion step
  const currentProgress = isComplete ? 100 : (currentStep / totalSteps) * 100;

  return (
    <Card title="Multi-Factor Authentication Setup" className="h-full min-h-[600px]">
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Multi-factor authentication adds an extra layer of security to your accounts, protecting against unauthorized access even if your password is compromised.
        </p>
      </div>

      {!selectedMethod ? (
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Choose an authentication method:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => setSelectedMethod('authenticator')}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <Smartphone className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-900">Authenticator App</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Generate verification codes using an app like Google Authenticator or Authy.
                  </p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Recommended
                    </span>
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Works offline
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => setSelectedMethod('sms')}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-900">SMS Authentication</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Receive verification codes via text message.
                  </p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <span className="mr-1">⚠️</span> Vulnerable to SIM swaps
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-700">Setup Progress</h3>
              <span className="text-xs text-gray-500">
                Step {currentStep + 1} of {totalSteps + 1}
              </span>
            </div>
            <ProgressBar value={currentProgress} height="h-2" showPercentage={false} />
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">{currentSteps[currentStep].title}</h3>
              <p className="mt-1 text-sm text-gray-600">{currentSteps[currentStep].description}</p>
            </div>
            <div className="p-4 bg-white">
              {currentSteps[currentStep].component}
            </div>
          </div>

          {!isComplete && (
            <div className="mt-6 text-right">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedMethod(null);
                  setCurrentStep(0);
                }}
              >
                Cancel Setup
              </Button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default MfaSetup;