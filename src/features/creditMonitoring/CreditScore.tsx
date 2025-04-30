import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import Card from '../../components/Card';
import ProgressBar from '../../components/ProgressBar';
import { CreditScore as CreditScoreType } from '../../types';
import '../../styles/animations.css'; // Ensure animations are imported if not globally

interface CreditScoreProps {
  creditData: CreditScoreType;
  isLoading?: boolean; // Add isLoading prop for potential loading state animation
}

const CreditScore: React.FC<CreditScoreProps> = ({ creditData, isLoading }) => {
  const { score, previousScore, lastUpdated, recentChanges } = creditData;

  const scoreDifference = score - previousScore;
  const isNegativeChange = scoreDifference < 0;
  const scoreChange = scoreDifference !== 0 ? (
    <span
      className={`flex items-center text-sm ${isNegativeChange ? 'text-red-500 pulse-alert shake-horizontal' : 'text-green-500 bounce' // Enhanced animations for score changes
        }`}
    >
      {scoreDifference > 0 ? (
        <>
          <TrendingUp className="w-4 h-4 mr-1" />
          +{scoreDifference}
        </>
      ) : (
        <>
          <TrendingDown className="w-4 h-4 mr-1" />
          {scoreDifference}
        </>
      )}
    </span>
  ) : null;

  // Color based on score range
  const getScoreColor = (score: number) => {
    if (score >= 750) return 'bg-green-500';
    if (score >= 650) return 'bg-blue-500';
    if (score >= 550) return 'bg-amber-500';
    return 'bg-red-500';
  };

  // Basic loading state placeholder
  if (isLoading) {
    return (
      <Card title="Your Credit Score" className="h-full flex items-center justify-center">
        <p>Loading score...</p> {/* Replace with a proper loading spinner/animation */}
      </Card>
    );
  }

  return (
    <Card title="Your Credit Score" className="h-full animated-card fade-in">
      <div className="flex flex-col items-center">
        <div className="text-center mb-4 fade-in">
          <div className="relative">
            <div className="text-5xl font-bold text-gray-800">{score}</div>
            {scoreChange && (
              <div className="absolute top-0 right-0 transform translate-x-full -translate-y-1/4">
                {scoreChange}
              </div>
            )}
          </div>
          <div className="text-sm text-gray-500 mt-1">
            Last updated on {new Date(lastUpdated).toLocaleDateString()}
          </div>
        </div>

        <div className="w-full mb-6 fade-in fade-in-delay-1">
          <ProgressBar
            value={score}
            maxValue={900}
            height="h-3"
            colorClass={getScoreColor(score)}
          // Add a class for potential longer transition if needed
          // className="progress-bar-long-transition" 
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>Poor</span>
            <span>Fair</span>
            <span>Good</span>
            <span>Excellent</span>
          </div>
        </div>

        <div className="w-full fade-in fade-in-delay-2">
          <h4 className="font-medium text-gray-700 mb-2">Recent Changes</h4>
          {recentChanges.length > 0 ? (
            <div className="space-y-3">
              {recentChanges.map((change, index) => (
                <div
                  key={index}
                  // Add subtle hover effect to change items
                  className="flex items-start border-b border-gray-100 pb-2 last:border-0 p-2 rounded hover:bg-gray-50 transition-colors duration-150"
                >
                  <div
                    className={`flex-shrink-0 rounded-full p-1 ${change.impact === 'positive'
                      ? 'bg-green-100 text-green-500'
                      : change.impact === 'negative'
                        ? 'bg-red-100 text-red-500'
                        : 'bg-gray-100 text-gray-500'
                      }`}
                  >
                    {change.impact === 'positive' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : change.impact === 'negative' ? (
                      <TrendingDown className="w-4 h-4" />
                    ) : (
                      <AlertTriangle className="w-4 h-4" />
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {change.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(change.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-600">No recent changes to your credit score.</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CreditScore;