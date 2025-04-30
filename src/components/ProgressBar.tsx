import React from 'react';

interface ProgressBarProps {
  value: number;
  maxValue?: number;
  showPercentage?: boolean;
  height?: string;
  colorClass?: string;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  maxValue = 100,
  showPercentage = false,
  height = 'h-2',
  colorClass = 'bg-blue-600',
  className = '',
}) => {
  const percentage = Math.min(Math.max(0, (value / maxValue) * 100), 100);

  return (
    <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${height} ${className}`}>
      <div
        className={`${colorClass} ${height} rounded-full transition-all duration-300 ease-in-out`}
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={maxValue}
      ></div>
      {showPercentage && (
        <div className="text-xs text-gray-600 mt-1">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;