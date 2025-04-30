import React, { useState } from 'react';
import { MessageSquare, AlertTriangle, CheckCircle } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { mockScamScenarios } from '../../services/mockData';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'scammer' | 'user' | 'system';
  isCorrect?: boolean;
  explanation?: string;
}

const ScamSimulator: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(mockScamScenarios[0]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      text: `This is a simulation of a ${mockScamScenarios[0].title.toLowerCase()}. Respond appropriately to protect yourself.`,
      sender: 'system',
    },
  ]);
  const [showOptions, setShowOptions] = useState(false);
  const [simulationComplete, setSimulationComplete] = useState(false);
  const [correctResponses, setCorrectResponses] = useState(0);

  const startSimulation = (scenarioId: string) => {
    const scenario = mockScamScenarios.find(s => s.id === scenarioId) || mockScamScenarios[0];
    setActiveScenario(scenario);
    setChatMessages([
      {
        id: '0',
        text: `This is a simulation of a ${scenario.title.toLowerCase()}. Respond appropriately to protect yourself.`,
        sender: 'system',
      },
    ]);
    setCurrentLineIndex(0);
    setShowOptions(false);
    setSimulationComplete(false);
    setCorrectResponses(0);

    // Add first scammer message
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          id: `scammer-${currentLineIndex}`,
          text: scenario.script[0].line,
          sender: 'scammer',
        },
      ]);
      setShowOptions(true);
    }, 1000);
  };

  const handleUserResponse = (isCorrect: boolean, explanation: string) => {
    const responseText = isCorrect
      ? activeScenario.correctResponses[Math.floor(Math.random() * activeScenario.correctResponses.length)]
      : "Yes, I'll do that right away.";

    // Add user's response
    setChatMessages(prev => [
      ...prev,
      {
        id: `user-${currentLineIndex}`,
        text: responseText,
        sender: 'user',
        isCorrect,
        explanation,
      },
    ]);

    setShowOptions(false);

    if (isCorrect) {
      setCorrectResponses(prev => prev + 1);
    }

    // Move to next line or finish simulation
    const nextLineIndex = currentLineIndex + 1;
    if (nextLineIndex < activeScenario.script.length) {
      setCurrentLineIndex(nextLineIndex);

      // Add next scammer message after a delay
      setTimeout(() => {
        setChatMessages(prev => [
          ...prev,
          {
            id: `scammer-${nextLineIndex}`,
            text: activeScenario.script[nextLineIndex].line,
            sender: 'scammer',
          },
        ]);
        setShowOptions(true);
      }, 1500);
    } else {
      // Simulation complete
      setTimeout(() => {
        setChatMessages(prev => [
          ...prev,
          {
            id: 'final',
            text: `Simulation complete. You correctly identified ${correctResponses + (isCorrect ? 1 : 0)} out of ${activeScenario.script.length} scam attempts.`,
            sender: 'system',
          },
        ]);
        setSimulationComplete(true);
      }, 1500);
    }
  };

  return (
    <Card title="Scam Call Simulator">
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Practice responding to common scam calls in this safe simulation environment.
        </p>
      </div>

      {simulationComplete || chatMessages.length === 1 ? (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select a scenario:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockScamScenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => startSimulation(scenario.id)}
              >
                <div className="flex items-center mb-2">
                  <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
                  <h3 className="font-medium text-gray-900">{scenario.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
            <h3 className="font-medium text-gray-900">{activeScenario.title}</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">{activeScenario.description}</p>

          <div className="bg-white rounded-lg border border-gray-200 h-80 overflow-y-auto mb-4 p-4">
            <div className="space-y-4">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'system'
                        ? 'bg-gray-200 text-gray-800'
                        : message.sender === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    {message.explanation && (
                      <div className={`mt-2 text-xs ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        <div className="flex items-center">
                          {message.isCorrect ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <AlertTriangle className="h-3 w-3 mr-1" />
                          )}
                          {message.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {showOptions && (
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700">How would you respond?</p>
              <div className="grid grid-cols-1 gap-3">
                <Button
                  variant="success"
                  onClick={() => handleUserResponse(
                    true,
                    activeScenario.script[currentLineIndex].explanation
                  )}
                >
                  Protect yourself (Safe response)
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleUserResponse(
                    false,
                    "This would put you at risk. " + activeScenario.script[currentLineIndex].explanation
                  )}
                >
                  Comply with request (Unsafe response)
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {simulationComplete && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Key Takeaways</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-2">✓</span>
              <span className="text-sm">Legitimate organizations never ask for passwords or OTPs over the phone</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-2">✓</span>
              <span className="text-sm">If suspicious, hang up and call the official number of the organization</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-2">✓</span>
              <span className="text-sm">Never install remote access apps at the request of a caller</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-2">✓</span>
              <span className="text-sm">Urgent requests creating panic are a red flag for scams</span>
            </li>
          </ul>
        </div>
      )}
    </Card>
  );
};

export default ScamSimulator;