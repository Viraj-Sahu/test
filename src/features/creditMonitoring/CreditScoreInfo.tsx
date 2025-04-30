import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '../../components/Card';
import '../../styles/animations.css'; // Ensure animations are imported if not globally

const CreditScoreInfo: React.FC = () => {
  const scoreRanges = [
    {
      range: '800+',
      rating: 'Excellent',
      meaning: 'Low-risk customers with favorable loan terms',
    },
    {
      range: '750-799',
      rating: 'Very Good',
      meaning: 'Good credit history with easy approval',
    },
    {
      range: '701-749',
      rating: 'Good',
      meaning: 'Good credit history with standard approval',
    },
    {
      range: '651-700',
      rating: 'Fair',
      meaning: 'Higher risk, more difficult approval process',
    },
    {
      range: '300-650',
      rating: 'Bad',
      meaning: 'High likelihood of credit refusal',
    },
  ];

  return (
    <Card title="Understanding Your Credit Score" className="animated-card">
      {/* Add fade-in to content sections with delays */}
      <div className="space-y-6">
        <div className="fade-in">
          <p className="text-gray-600">
            A credit score is a three-digit number between 300-900 that represents your creditworthiness.
            This score is crucial for loan approvals, determining interest rates, and accessing various
            financial opportunities.
          </p>
        </div>

        <div className="fade-in fade-in-delay-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Credit Scores Matter</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg animated-card">
              <h4 className="font-medium text-blue-900 mb-2">For Borrowers</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Better loan approval chances</li>
                <li>• Lower interest rates</li>
                <li>• Higher credit limits</li>
                <li>• Better negotiating power</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg animated-card">
              <h4 className="font-medium text-green-900 mb-2">For Lenders</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Risk assessment</li>
                <li>• Decision making tool</li>
                <li>• Portfolio management</li>
                <li>• Default prediction</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="fade-in fade-in-delay-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Credit Score Ranges</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score Range
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    What It Means
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {scoreRanges.map((score, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors duration-150`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {score.range}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {score.rating}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {score.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="fade-in fade-in-delay-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Factors Affecting Your Score</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Apply animated-card to factor cards */}
            <div className="border rounded-lg p-4 animated-card">
              <h4 className="font-medium text-gray-900 mb-1">Payment History</h4>
              <p className="text-sm text-gray-600">Record of on-time payments and defaults</p>
            </div>
            <div className="border rounded-lg p-4 animated-card">
              <h4 className="font-medium text-gray-900 mb-1">Credit Utilization</h4>
              <p className="text-sm text-gray-600">Amount of credit used vs. available credit</p>
            </div>
            <div className="border rounded-lg p-4 animated-card">
              <h4 className="font-medium text-gray-900 mb-1">Credit History Length</h4>
              <p className="text-sm text-gray-600">How long you've had credit accounts</p>
            </div>
            <div className="border rounded-lg p-4 animated-card">
              <h4 className="font-medium text-gray-900 mb-1">Credit Mix</h4>
              <p className="text-sm text-gray-600">Types of credit accounts you have</p>
            </div>
            <div className="border rounded-lg p-4 animated-card">
              <h4 className="font-medium text-gray-900 mb-1">Hard Inquiries</h4>
              <p className="text-sm text-gray-600">Recent applications for new credit</p>
            </div>
          </div>
        </div>

        <div className="text-center fade-in fade-in-delay-4">
          <p className="text-sm text-gray-600 mb-4">
            Check your credit score for free - it won't affect your credit rating!
          </p>
          <a
            href="https://www.livemint.com/credit-score"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 animated-button"
          >
            Check Your Credit Score
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default CreditScoreInfo;