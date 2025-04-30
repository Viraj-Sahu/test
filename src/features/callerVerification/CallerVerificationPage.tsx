import React from 'react';
import PhoneChecker from './PhoneChecker';
import ScamSimulator from './ScamSimulator';

const CallerVerificationPage: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Caller Verification & Scam Protection</h1>
        <p className="mt-1 text-sm text-gray-600">
          Tools to verify callers and practice responding to scam calls safely.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <PhoneChecker />
        </div>
        <div>
          <ScamSimulator />
        </div>
      </div>
    </div>
  );
};

export default CallerVerificationPage;