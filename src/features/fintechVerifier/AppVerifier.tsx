import React, { useState } from 'react';
import { Search, Shield, ShieldAlert, ExternalLink } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { mockFintechApps } from '../../services/mockData';
import { FintechApp } from '../../types';

const AppVerifier: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FintechApp[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!searchQuery.trim()) {
      setError('Please enter an app name or URL');
      return;
    }

    setIsSearching(true);
    setHasSearched(false);

    // Simulate API request
    setTimeout(() => {
      const results = mockFintechApps.filter(
        app => app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.url.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(results);
      setIsSearching(false);
      setHasSearched(true);
    }, 1000);
  };

  const getSecurityRatingColor = (rating: number) => {
    if (rating >= 4.0) return 'bg-green-500';
    if (rating >= 3.0) return 'bg-blue-500';
    if (rating >= 2.0) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const getSecurityRatingLabel = (rating: number) => {
    if (rating >= 4.0) return 'Excellent';
    if (rating >= 3.0) return 'Good';
    if (rating >= 2.0) return 'Fair';
    return 'Poor';
  };

  return (
    <Card title="Fintech App Security Verifier">
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Verify the security of financial apps before you download or share your information with them.
        </p>
      </div>

      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className={`block w-full pl-10 pr-3 py-2 border rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 sm:text-sm ${error
                ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                }`}
              placeholder="Enter app name or URL (e.g., PayTM, Google Pay)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (error) setError('');
              }}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
          <Button
            type="submit"
            variant="primary"
            isLoading={isSearching}
            className="sm:flex-shrink-0"
          >
            Verify App
          </Button>
        </div>
      </form>

      {hasSearched && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Search Results</h3>

          {searchResults.length === 0 ? (
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <ShieldAlert className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
              <p className="mt-1 text-sm text-gray-500">
                We couldn't find any apps matching your search. This could be a warning sign if someone is asking you to use this app.
              </p>
              <div className="mt-6">
                <Button variant="outline" size="sm">
                  Report Suspicious App
                </Button>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">App Name</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Security Rating</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {searchResults.map((app) => (
                    <tr key={app.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                            {app.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{app.name}</div>
                            <div className="text-gray-500 text-xs flex items-center">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              {app.url}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-4 w-4 rounded-full ${getSecurityRatingColor(app.securityRating)} mr-2`}></div>
                          <div>
                            <div>{app.securityRating.toFixed(1)}/5.0</div>
                            <div className="text-xs text-gray-500">{getSecurityRatingLabel(app.securityRating)}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {app.verified ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <Shield className="mr-1 h-3 w-3" />
                            Verified
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <ShieldAlert className="mr-1 h-3 w-3" />
                            Unverified
                          </span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <Button
                          variant="outline"
                          size="sm"
                        >
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default AppVerifier;