import React, { useState } from 'react';
import { AlertTriangle, ClipboardList, IndianRupee, Globe, ChevronDown } from 'lucide-react'; // Added ChevronDown
import './InteractiveStats.css';

interface StatItem {
    id: string;
    value: string;
    label: string;
    // description: string; // Description removed as it's not in the new design floor
    icon: React.ReactNode;
    // positionClass: string; // Removed positionClass
}

const stats: StatItem[] = [
    {
        id: 'affected',
        value: '27%',
        label: 'Users Affected',
        // description: 'of users affected by identity theft in India (Recent Survey)',
        icon: <AlertTriangle className="stat-icon" />,
        // positionClass: 'stat-node-top',
    },
    {
        id: 'complaints',
        value: '59L+',
        label: 'Cybercrime Complaints',
        // description: 'Cybercrime complaints registered nationwide (NCRB Data)',
        icon: <ClipboardList className="stat-icon" />,
        // positionClass: 'stat-node-right',
    },
    {
        id: 'loss',
        value: '₹250 Cr+',
        label: 'Financial Loss Reported',
        // description: 'Financial losses due to identity theft & cyber fraud (Industry Reports)',
        icon: <IndianRupee className="stat-icon" />,
        // positionClass: 'stat-node-bottom',
    },
    {
        id: 'rank',
        value: '3rd Globally',
        label: "India's Rank in ID Theft",
        // description: 'India ranks globally in identity theft cases (Global Study)',
        icon: < Globe className="stat-icon" />,
        // positionClass: 'stat-node-left',
    },
];

const InteractiveStats: React.FC = () => {
    const [isActive, setIsActive] = useState(false); // Renamed for clarity

    const handleInteractionStart = () => {
        setIsActive(true);
    };

    const handleInteractionEnd = () => {
        setIsActive(false);
    };

    return (
        <div
            className={`interactive-stats-container ${isActive ? 'active' : ''}`}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onFocus={handleInteractionStart}
            onBlur={handleInteractionEnd}
            tabIndex={0}
            role="region"
            aria-label="Interactive Statistics on Identity Theft in India. Hover or focus to expand and see details."
            aria-expanded={isActive}
        >
            {/* Initial Compact View */}
            <div className="stats-content-initial">
                <h2 className="text-xl font-semibold text-white mb-2">Identity Theft in India</h2>
                {/* Downward indicator */}
                <ChevronDown className="interactive-indicator" aria-hidden="true" />
            </div>

            {/* Expanded Building View - Appears on hover/focus */}
            <div className={`stats-building ${isActive ? 'visible' : ''}`} aria-hidden={!isActive}>
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className="stat-floor"
                        role="figure" // Use figure role for self-contained content
                        aria-labelledby={`${stat.id}-value`}
                        aria-describedby={`${stat.id}-label`} // Label describes the value
                    >
                        {stat.icon} {/* Icon is now part of the floor directly */}
                        <div className="stat-details">
                            <div className="stat-value" id={`${stat.id}-value`}>{stat.value}</div>
                            <p className="stat-label" id={`${stat.id}-label`}>{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Screen Reader Only Content - Updated for clarity */}
            <div className="sr-only" aria-live="polite">
                {isActive
                    ? `Statistics expanded. ${stats.map(stat => `${stat.label}: ${stat.value}.`).join(' ')}`
                    : 'Statistics collapsed. Hover or focus to expand.'}
            </div>
        </div>
    );
};

export default InteractiveStats;