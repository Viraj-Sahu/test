import React, { useState } from 'react';
import { Search, Phone, ShieldOff, Shield } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { mockScamReports } from '../../services/mockData';
import { PhoneScamReport } from '../../types';

const PhoneChecker: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<PhoneScamReport | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState('');

  const validatePhoneNumber = (number: string) => {
    // Simple validation for demo - a real app would have more robust validation
    return /^\d{10}$/.test(number);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!phoneNumber.trim()) {
      setError('Please enter a phone number');
      return;
    }
    
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSearching(true);
    setHasSearched(false);
    
    // Simulate API request
    setTimeout(() => {
      const result = mockScamReports[phoneNumber] || {
        phoneNumber,
        reportCount: 0,
        lastReported: '',
        scamType: [],
        isSafe: true,
      };
      
      setSearchResult(result);
      setIsSearching(false);
      setHasSearched(true);
    }, 1500);
  };

  const formatPhoneNumber = (number: string) => {
    if (number.length !== 10) return number;
    return `${number.substring(0, 3)}-${number.substring(3, 6)}-${number.substring(6)}`;
  };

  return (
    <Card title="Caller Verification">
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Check if a phone number has been reported for scam or fraud activity.
        </p>
      </div>

      <form onSubmit={handleSearch}>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Enter Phone Number to Check
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className={`block w-full pl-10 pr-12 py-2 sm:text-sm border rounded-md ${
                error ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }`}
              placeholder="10-digit phone number"
              value={phoneNumber}
              onChange={(e) => {
                // Only allow digits, limit to 10 characters
                const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                setPhoneNumber(value);
                if (error) setError('');
              }}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">IN (+91)</span>
            </div>
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            variant="primary"
            isLoading={isSearching}
          >
            <Search className="mr-2 h-4 w-4" />
            Verify Number
          </Button>
        </div>
      </form>

      {hasSearched && searchResult && (
        <div className="mt-6 border-t border-gray-200 pt-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Results for {formatPhoneNumber(searchResult.phoneNumber)}
            </h3>
          </div>

          {searchResult.isSafe ? (
            <div className="bg-green-50 rounded-lg p-4 flex items-start">
              <div className="flex-shrink-0">
                <Shield className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">No reports found</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>This number has not been reported for scam or fraud activity in our database. However, always remain cautious when sharing personal information over the phone.</p>
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    Add to Safe List
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 rounded-lg p-4 flex items-start">
              <div className="flex-shrink-0">
                <ShieldOff className="h-6 w-6 text-red-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Potential scam number detected!</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    <strong>Reported {searchResult.reportCount} times</strong> with the latest report on {new Date(searchResult.lastReported).toLocaleDateString()}.
                  </p>
                  <p className="mt-1">
                    <strong>Scam types:</strong>{' '}
                    {searchResult.scamType.join(', ')}
                  </p>
                </div>
                <div className="mt-4 space-x-3">
                  <Button variant="danger" size="sm">
                    Block Number
                  </Button>
                  <Button variant="outline" size="sm">
                    Report This Number
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6">
            <Alert
              variant="info"
              title="Safety Tip"
              message="Never share sensitive information like OTPs, credit card details, or passwords over the phone, even if the caller claims to be from your bank or a government agency."
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default PhoneChecker;