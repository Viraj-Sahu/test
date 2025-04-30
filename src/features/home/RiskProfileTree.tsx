import React, { useState } from 'react';
import { Smartphone, Shield, Briefcase, BarChart } from 'lucide-react';
import './RiskProfileTree.css'; // We'll create this CSS file next

interface ProfileNode {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    colorClass: string;
}

const profiles: ProfileNode[] = [
    {
        id: 'digital-native',
        name: 'Digital Native',
        description: 'Young adults with high digital activity using fintech apps, digital wallets, and social media.',
        icon: <Smartphone className="h-8 w-8" />,
        colorClass: 'digital-native-color',
    },
    {
        id: 'senior-citizen',
        name: 'Senior Citizen',
        description: 'Seniors who may be vulnerable to phone scams and social engineering attacks.',
        icon: <Shield className="h-8 w-8" />,
        colorClass: 'senior-citizen-color',
    },
    {
        id: 'professional',
        name: 'Professional',
        description: 'Working professionals with multiple financial accounts and high-value digital assets.',
        icon: <Briefcase className="h-8 w-8" />,
        colorClass: 'professional-color',
    },
    {
        id: 'business-owner',
        name: 'Business Owner',
        description: 'Entrepreneurs and business owners who are high-value targets for sophisticated attacks.',
        icon: <BarChart className="h-8 w-8" />,
        colorClass: 'business-owner-color',
    },
];

const RiskProfileTree: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <div className="risk-profile-tree-container">
            <div className="tree-root">
                <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Personalized Solutions By Risk Profile</h2>
            </div>
            <div className="tree-branches">
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        className={`tree-branch ${profile.colorClass} ${hoveredId && hoveredId !== profile.id ? 'dimmed' : ''} ${hoveredId === profile.id ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredId(profile.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onFocus={() => setHoveredId(profile.id)} // Accessibility
                        onBlur={() => setHoveredId(null)}      // Accessibility
                        tabIndex={0} // Make focusable
                        role="treeitem"
                        aria-label={`${profile.name}: ${profile.description}`}
                    >
                        <div className="branch-content">
                            <div className="branch-icon">{profile.icon}</div>
                            <h3 className="branch-name">{profile.name}</h3>
                            <p className="branch-description">{profile.description}</p>
                        </div>
                        {/* Simple line connector using pseudo-element in CSS */}
                        <div className="branch-connector"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RiskProfileTree;