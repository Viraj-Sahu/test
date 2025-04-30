import React, { useState } from 'react';
import { ClipboardList, Download, Check, ChevronDown, ChevronUp } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  steps: string[];
}

const checklistItems: ChecklistItem[] = [
  {
    id: 'immediate',
    title: 'Immediate Response Steps',
    description: 'Take these actions immediately if you suspect you are a victim of identity theft',
    steps: [
      'Contact your bank to freeze accounts and cards',
      'File a police report with your local station',
      'Report to the National Cyber Crime Portal at cybercrime.gov.in',
      'Change passwords for all important accounts using a different device',
      'Enable two-factor authentication on all accounts where available',
    ],
  },
  {
    id: 'financial',
    title: 'Financial Protection',
    description: 'Steps to protect your financial accounts',
    steps: [
      'Contact credit bureaus (CIBIL, Experian, Equifax) to place a fraud alert',
      'Review all recent transactions on bank and credit card statements',
      'Request your credit report and check for unauthorized accounts',
      'Dispute any fraudulent transactions or accounts',
      'Set up credit monitoring services',
    ],
  },
  {
    id: 'documents',
    title: 'Document Recovery',
    description: 'What to do if your physical ID documents are compromised',
    steps: [
      'Report lost or stolen Aadhaar card to UIDAI',
      'Apply for a new PAN card if compromised',
      'File an FIR for lost or stolen passport and apply for re-issuance',
      'Replace driving license through your RTO',
      'Keep copies of all police reports and correspondence',
    ],
  },
  {
    id: 'digital',
    title: 'Digital Identity Recovery',
    description: 'Reclaim your digital presence if compromised by deepfakes',
    steps: [
      'Document all instances of deepfakes by taking screenshots/recordings',
      'Report deepfakes to the platforms where they appear',
      'Contact cyber cell if deepfakes are being used for extortion or harassment',
      'Send legal notices to platforms that refuse to remove deepfake content',
      'Consider engaging a reputation management service if widespread',
    ],
  },
];

const IncidentResponseChecklist: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const toggleCheckItem = (itemId: string, stepIndex: number) => {
    const checkId = `${itemId}-${stepIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [checkId]: !prev[checkId],
    }));
  };

  const getCompletionPercentage = (itemId: string) => {
    const item = checklistItems.find(i => i.id === itemId);
    if (!item) return 0;

    const totalSteps = item.steps.length;
    const completedSteps = item.steps.filter((_, index) =>
      checkedItems[`${itemId}-${index}`]
    ).length;

    return Math.round((completedSteps / totalSteps) * 100);
  };

  return (
    <Card title="Incident Response Checklist">
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          If you suspect you're a victim of identity theft, follow this checklist to contain the damage and begin recovery.
        </p>
      </div>

      <div className="mb-6 flex justify-end">
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download as PDF
        </Button>
      </div>

      <div className="space-y-4">
        {checklistItems.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden">
            <div
              className="flex items-center justify-between bg-gray-50 px-4 py-3 cursor-pointer"
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <ClipboardList className="h-5 w-5 text-blue-600" />
                  {getCompletionPercentage(item.id) === 100 && (
                    <span className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                      <Check className="h-3 w-3 text-green-500 bg-white rounded-full" />
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <div className="flex items-center mt-1">
                    <div className="h-1.5 w-16 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${getCompletionPercentage(item.id)}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs text-gray-500">
                      {getCompletionPercentage(item.id)}%
                    </span>
                  </div>
                </div>
              </div>
              <div>
                {expandedItems[item.id] ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>

            {expandedItems[item.id] && (
              <div className="px-4 py-3 bg-white">
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 pt-0.5">
                        <label className="flex items-center justify-center h-5 w-5 rounded border border-gray-300 cursor-pointer hover:bg-gray-50">
                          <input
                            type="checkbox"
                            className="opacity-0 absolute h-5 w-5 cursor-pointer"
                            checked={!!checkedItems[`${item.id}-${index}`]}
                            onChange={() => toggleCheckItem(item.id, index)}
                          />
                          {checkedItems[`${item.id}-${index}`] && (
                            <Check className="h-3 w-3 text-blue-600" />
                          )}
                        </label>
                      </div>
                      <span
                        className={`ml-3 text-sm ${checkedItems[`${item.id}-${index}`]
                          ? 'text-gray-400 line-through'
                          : 'text-gray-700'
                          }`}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default IncidentResponseChecklist;