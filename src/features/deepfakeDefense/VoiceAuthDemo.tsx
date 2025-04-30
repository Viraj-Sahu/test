import React, { useState } from 'react';
import { Play, Volume2, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { mockVoiceSamples } from '../../services/mockData';

const VoiceAuthDemo: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState<string | null>(null);
  const [userGuess, setUserGuess] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelectSample = (sampleId: string) => {
    setSelectedSample(sampleId);
    setUserGuess(null);
    setShowResult(false);
  };

  const handleMakeGuess = (isDeepfake: boolean) => {
    setUserGuess(isDeepfake);
    setShowResult(true);
  };

  const currentSample = selectedSample 
    ? mockVoiceSamples.find(sample => sample.id === selectedSample) 
    : null;

  const isCorrect = currentSample && userGuess === currentSample.isDeepfake;

  return (
    <Card title="Voice Authentication Demo">
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          This demo illustrates how deepfake audio can be used to impersonate someone's voice, and how AI detection tools can flag potential voice deepfakes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {mockVoiceSamples.map((sample) => (
          <div
            key={sample.id}
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              selectedSample === sample.id
                ? 'ring-2 ring-blue-500 border-blue-500'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => handleSelectSample(sample.id)}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                  <Volume2 className="w-5 h-5" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-base font-medium text-gray-900">{sample.title}</h3>
                <div className="mt-2 flex items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                  >
                    <Play className="mr-1 h-4 w-4" /> Play Audio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedSample && !showResult && (
        <div className="mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Can you identify if this is a deepfake?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Listen to the audio and make your best guess whether this is an authentic recording or a digitally generated deepfake.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => handleMakeGuess(false)}
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Authentic Recording
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => handleMakeGuess(true)}
              >
                <AlertTriangle className="mr-2 h-4 w-4" />
                Deepfake
              </Button>
            </div>
          </div>
        </div>
      )}

      {showResult && currentSample && (
        <div className="mb-6">
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {isCorrect ? (
                  <CheckCircle className={`h-5 w-5 ${isCorrect ? 'text-green-500' : 'text-red-500'}`} />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                )}
              </div>
              <div className="ml-3">
                <h3 className={`text-sm font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? 'Correct!' : 'Incorrect!'}
                </h3>
                <div className={`mt-2 text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  <p>
                    This was {currentSample.isDeepfake ? 'a deepfake' : 'an authentic recording'}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">AI Detection Indicators</h3>
                <div className="mt-2">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">What our AI system detected:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-blue-700">
                    {currentSample.indicators.map((indicator, index) => (
                      <li key={index}>{indicator}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" onClick={() => setSelectedSample(null)}>
              Try Another Sample
            </Button>
          </div>
        </div>
      )}

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Protecting Against Voice Deepfakes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-2">✓</span>
            <span className="text-sm">Establish verification phrases or code words with family members</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-2">✓</span>
            <span className="text-sm">Use multi-channel verification (call back on a different number)</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-2">✓</span>
            <span className="text-sm">Be suspicious of urgent requests for money or sensitive information</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-2">✓</span>
            <span className="text-sm">Ask questions only the real person would know the answers to</span>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default VoiceAuthDemo;