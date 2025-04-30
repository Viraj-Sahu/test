import React, { useState } from 'react';
import { Calendar, DollarSign, AlertCircle } from 'lucide-react';
import Card from '../../components/Card';
import Alert from '../../components/Alert';
import { CreditScore } from '../../types';

interface LoansListProps {
  loans: CreditScore['loans'];
}

const LoansList: React.FC<LoansListProps> = ({ loans }) => {
  const [alerts, setAlerts] = useState<{ [key: string]: boolean }>(
    loans.reduce((acc, loan) => {
      if (loan.isNew) {
        acc[loan.id] = true;
      }
      return acc;
    }, {} as { [key: string]: boolean })
  );

  const dismissAlert = (loanId: string) => {
    setAlerts({ ...alerts, [loanId]: false });
  };

  const hasNewLoans = loans.some(loan => loan.isNew);

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card title="Active Loans">
      {hasNewLoans && (
        <div className="mb-4">
          <Alert
            variant="warning"
            title="New loan activity detected"
            message="We've detected new loan accounts in your credit report. Please review them to ensure they're authorized."
          />
        </div>
      )}

      <div className="divide-y divide-gray-200">
        {loans.map((loan) => (
          <div key={loan.id} className="py-4 first:pt-0 last:pb-0">
            {loan.isNew && alerts[loan.id] && (
              <div className="mb-2">
                <Alert
                  variant="error"
                  title={`New ${loan.type} detected`}
                  message="If you did not authorize this loan, please contact your bank immediately."
                  dismissible
                  onDismiss={() => dismissAlert(loan.id)}
                />
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <DollarSign className="w-5 h-5" />
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900 flex items-center">
                    {loan.type}
                    {loan.isNew && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        New
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-gray-500">
                    Lender: {loan.lender}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:mt-0 sm:text-right">
                <p className="text-lg font-semibold text-gray-900">
                  {formatAmount(loan.amount)}
                </p>
                <div className="flex items-center text-sm text-gray-500 sm:justify-end">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(loan.dateOpened).toLocaleDateString()}
                </div>
              </div>
            </div>
            
            {loan.isNew && (
              <div className="mt-3 flex justify-end space-x-3">
                <button
                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <AlertCircle className="mr-1 h-4 w-4" />
                  Report Unauthorized
                </button>
                <button
                  className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Confirm Authorized
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default LoansList;