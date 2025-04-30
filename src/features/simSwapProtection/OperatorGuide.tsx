import React, { useState } from 'react';
import { Smartphone, Check, ChevronDown, ChevronUp } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { mockTelecomOperators } from '../../services/mockData';
import { SimOperator } from '../../types';

const OperatorGuide: React.FC = () => {
  const [selectedOperator, setSelectedOperator] = useState<SimOperator | null>(null);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleStep = (index: number) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSelectOperator = (operator: SimOperator) => {
    setSelectedOperator(operator);

    // Initialize all steps as expanded
    const initialExpanded = operator.lockProcedure.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {} as { [key: string]: boolean });

    setExpanded(initialExpanded);
  };

  return (
    <Card title="SIM Lock Protection Guide" className="h-full min-h-[600px]">
      <div className="h-full flex flex-col mb-6">
        <p className="text-sm text-gray-600">
          Follow these steps to lock your SIM card against unauthorized SIM swaps with your mobile operator.
        </p>
      </div>

      {!selectedOperator ? (
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Select your mobile operator:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockTelecomOperators.map((operator) => (
              <div
                key={operator.name}
                className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => handleSelectOperator(operator)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white rounded-full border">
                    <Smartphone className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="font-medium text-gray-900">{operator.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Smartphone className="h-6 w-6 text-blue-500 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">{selectedOperator.name}</h3>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedOperator(null)}
            >
              Change Operator
            </Button>
          </div>

          <div className="space-y-4 mb-6">
            {selectedOperator.lockProcedure.map((step, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden"
              >
                <div
                  className="flex items-center justify-between bg-gray-50 px-4 py-3 cursor-pointer"
                  onClick={() => toggleStep(index)}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-blue-100 text-blue-600 mr-3">
                      {index + 1}
                    </div>
                    <h4 className="font-medium text-gray-900">Step {index + 1}</h4>
                  </div>
                  <div>
                    {expanded[index] ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
                {expanded[index] && (
                  <div className="p-4 bg-white">
                    <p className="text-sm text-gray-600">{step}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">SIM Swap Protection Benefits</h3>
                <div className="mt-2 text-sm text-green-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Prevents unauthorized SIM swaps at retail stores</li>
                    <li>Adds an extra verification layer to your mobile account</li>
                    <li>Protects your WhatsApp, banking, and other OTP-based accounts</li>
                    <li>Receives notifications for any attempted SIM change</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default OperatorGuide;