import React from 'react';
import { ClipboardList } from 'lucide-react';

export default function AssessmentPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4 flex items-center">
                <ClipboardList className="mr-2 h-6 w-6" />
                Security Assessment
            </h1>
            <p className="text-gray-600">
                Complete your personalized identity protection assessment to get
                tailored security recommendations.
            </p>
        </div>
    );
}