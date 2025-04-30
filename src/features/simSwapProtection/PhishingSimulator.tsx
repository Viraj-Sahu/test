import React, { useState } from 'react';
import { Mail, AlertTriangle, Check, X } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { mockPhishingEmails } from '../../services/mockData';
import { PhishingEmail } from '../../types';

const PhishingSimulator: React.FC = () => {
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [completed, setCompleted] = useState(false);

  const currentEmail = mockPhishingEmails[currentEmailIndex];

  const handleAnswer = (isScam: boolean) => {
    setUserAnswer(isScam);
    setShowFeedback(true);
    
    if (isScam === currentEmail.containsScam) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    }
    
    setScore(prev => ({ ...prev, total: prev.total + 1 }));
  };

  const handleNext = () => {
    setShowFeedback(false);
    setUserAnswer(null);
    
    if (currentEmailIndex < mockPhishingEmails.length - 1) {
      setCurrentEmailIndex(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentEmailIndex(0);
    setShowFeedback(false);
    setUserAnswer(null);
    setScore({ correct: 0, total: 0 });
    setCompleted(false);
  };

  return (
    <Card title="Phishing Email Simulator">
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Practice identifying phishing emails in this safe simulation environment. Flag emails that you think are scams.
        </p>
      </div>

      {completed ? (
        <div className="text-center py-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-900">Simulation Complete!</h3>
          <p className="mt-2 text-base text-gray-500">
            You correctly identified {score.correct} out of {score.total} emails.
          </p>

          <div className="mt-6">
            {score.correct === score.total ? (
              <Alert
                variant="success"
                title="Perfect Score!"
                message="Great job! You successfully identified all phishing emails. Keep using these skills to stay safe online."
              />
            ) : score.correct >= score.total * 0.7 ? (
              <Alert
                variant="info"
                title="Good Job!"
                message="You did well at identifying most phishing attempts. With a little more practice, you'll be able to spot all scams."
              />
            ) : (
              <Alert
                variant="warning"
                title="Room for Improvement"
                message="Phishing can be tricky to spot. Review the email indicators and try the simulation again to improve your skills."
              />
            )}
          </div>

          <div className="mt-6">
            <Button onClick={handleRestart}>Try Again</Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Email {currentEmailIndex + 1} of {mockPhishingEmails.length}</span>
              <span>Score: {score.correct}/{score.total}</span>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden mb-6">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-gray-900">Subject: {currentEmail.subject}</h3>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                From: {currentEmail.sender}
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-sm text-gray-800 whitespace-pre-line">
                {currentEmail.body}
              </p>
            </div>
          </div>

          {showFeedback ? (
            <div className="mb-6">
              {userAnswer === currentEmail.containsScam ? (
                <Alert
                  variant="success"
                  title="Correct!"
                  message={currentEmail.containsScam 
                    ? "This is indeed a phishing email. Good catch!" 
                    : "This is a legitimate email. Good job identifying it correctly."}
                />
              ) : (
                <Alert
                  variant="error"
                  title="Incorrect"
                  message={currentEmail.containsScam 
                    ? "This is actually a phishing email. Be careful with emails like this in real life." 
                    : "This is actually a legitimate email. Be careful not to dismiss important communications."}
                />
              )}

              {currentEmail.containsScam && currentEmail.scamIndicators.length > 0 && (
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="text-sm font-medium text-yellow-800 mb-2">Phishing Indicators:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-700">
                    {currentEmail.scamIndicators.map((indicator, index) => (
                      <li key={index}>{indicator}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 text-right">
                <Button onClick={handleNext}>
                  {currentEmailIndex < mockPhishingEmails.length - 1 ? "Next Email" : "Complete Simulation"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="success"
                onClick={() => handleAnswer(false)}
                className="flex-1 sm:flex-grow-0"
              >
                <Check className="mr-2 h-5 w-5" />
                Safe Email
              </Button>
              <Button
                variant="danger"
                onClick={() => handleAnswer(true)}
                className="flex-1 sm:flex-grow-0"
              >
                <AlertTriangle className="mr-2 h-5 w-5" />
                Phishing Attempt
              </Button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default PhishingSimulator;