import React, { useState } from 'react';
import { Smartphone, Mail, Video, CheckCircle, AlertCircle } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';

interface VerificationChannel {
  id: string;
  name: string;
  icon: React.ReactNode;
  status: 'pending' | 'verified' | 'failed';
}

const MultiChannelVerification: React.FC = () => {
  const [channels, setChannels] = useState<VerificationChannel[]>([
    {
      id: 'sms',
      name: 'SMS Verification',
      icon: <Smartphone className="h-5 w-5" />,
      status: 'pending',
    },
    {
      id: 'email',
      name: 'Email Verification',
      icon: <Mail className="h-5 w-5" />,
      status: 'pending',
    },
    {
      id: 'video',
      name: 'Video Verification',
      icon: <Video className="h-5 w-5" />,
      status: 'pending',
    },
  ]);
  
  const [transaction, setTransaction] = useState({
    amount: 50000,
    recipient: 'Rahul Sharma',
    account: 'XXXX-XXXX-1234',
    date: new Date().toISOString(),
  });
  
  const [verificationCount, setVerificationCount] = useState(0);
  const [isApproved, setIsApproved] = useState(false);
  const [showVerificationUI, setShowVerificationUI] = useState(false);

  const handleStartVerification = () => {
    setShowVerificationUI(true);
  };

  const handleVerifyChannel = (channelId: string) => {
    setChannels(channels.map(channel => 
      channel.id === channelId 
        ? { ...channel, status: 'verified' } 
        : channel
    ));
    
    setVerificationCount(prev => prev + 1);
    
    // Auto-approve if we have at least 2 verifications
    if (verificationCount + 1 >= 2) {
      setTimeout(() => {
        setIsApproved(true);
      }, 1000);
    }
  };

  const handleRestart = () => {
    setChannels(channels.map(channel => ({ ...channel, status: 'pending' })));
    setVerificationCount(0);
    setIsApproved(false);
    setShowVerificationUI(false);
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getVerificationProgress = () => {
    return (verificationCount / 2) * 100;
  };

  return (
    <Card title="Multi-Channel Approval Workflow">
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          This demo shows how requiring multiple verification channels can protect against deepfake attacks, by ensuring that an attacker would need to compromise multiple systems simultaneously.
        </p>
      </div>

      {!showVerificationUI ? (
        <div>
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Payment Approval Required</h3>
            <div className="space-y-2 text-sm text-blue-700">
              <div className="flex justify-between">
                <span>Amount:</span>
                <span className="font-medium">{formatAmount(transaction.amount)}</span>
              </div>
              <div className="flex justify-between">
                <span>Recipient:</span>
                <span className="font-medium">{transaction.recipient}</span>
              </div>
              <div className="flex justify-between">
                <span>Account:</span>
                <span className="font-medium">{transaction.account}</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span className="font-medium">{new Date(transaction.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-4 text-sm text-gray-600">
              To approve this high-value transaction, we'll need to verify your identity through multiple channels.
            </p>
            <Button onClick={handleStartVerification}>
              Start Verification Process
            </Button>
          </div>
        </div>
      ) : isApproved ? (
        <div className="text-center py-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-900">Transaction Approved!</h3>
          <p className="mt-2 text-base text-gray-500">
            Your transaction has been successfully verified and approved through multiple channels.
          </p>
          <div className="mt-6">
            <Button variant="outline" onClick={handleRestart}>
              Try Another Transaction
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <div className="text-sm font-medium text-gray-700 mb-2">
              Verification Progress (2 of 3 channels required)
            </div>
            <ProgressBar
              value={getVerificationProgress()}
              colorClass={getVerificationProgress() >= 100 ? 'bg-green-500' : 'bg-blue-500'}
            />
          </div>

          <p className="mb-4 text-sm text-gray-600">
            Select at least 2 different verification methods to approve this transaction:
          </p>

          <div className="space-y-4">
            {channels.map(channel => (
              <div 
                key={channel.id}
                className={`border rounded-lg p-4 ${
                  channel.status === 'verified'
                    ? 'bg-green-50 border-green-200'
                    : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${
                      channel.status === 'verified'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {channel.icon}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">
                        {channel.name}
                        {channel.status === 'verified' && (
                          <span className="ml-2 text-green-600 text-xs">
                            Verified
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>
                  {channel.status === 'pending' && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleVerifyChannel(channel.id)}
                    >
                      Verify
                    </Button>
                  )}
                  {channel.status === 'verified' && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-amber-800">Why multiple channels matter</h3>
                <p className="mt-2 text-sm text-amber-700">
                  Even if an attacker creates a convincing deepfake of your face or voice, they would still need to access your email and phone to complete the verification process, making fraud much more difficult.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default MultiChannelVerification;