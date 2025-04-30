import React, { useState, useEffect } from 'react';
import styles from './AssessmentPage.module.css';

interface Question {
    id: number;
    question: string;
    options: string[];
    riskScores: number[];
}

interface UserAnswer {
    questionId: number;
    optionIndex: number;
    riskScore: number;
}

const IdentityTheftSimulator: React.FC = () => {
    // Pool of 30 privacy-related questions
    const questionsPool: Question[] = [
        // Data Sharing Practices
        {
            id: 1,
            question: "How often do you check privacy settings on your social media accounts?",
            options: ["Never", "Rarely", "Occasionally", "Regularly"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 2,
            question: "Do you read privacy policies before agreeing to them?",
            options: ["Never", "Rarely", "Sometimes", "Always"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 3,
            question: "How do you typically respond to requests to share your location data with apps?",
            options: ["Always allow it", "Allow while using the app", "Rarely allow it", "Never allow it"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 4,
            question: "How often do you share your full birth date on social media?",
            options: ["Frequently", "Sometimes", "Rarely", "Never"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 5,
            question: "When an app requests access to your contacts, what do you typically do?",
            options: ["Always allow", "Allow if necessary", "Usually deny", "Always deny"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 6,
            question: "Do you share your travel plans on social media before or during trips?",
            options: ["Always", "Often", "Occasionally", "Never"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 7,
            question: "How do you handle photos containing personal information (ID cards, addresses)?",
            options: ["Share without editing", "Sometimes blur information", "Always blur sensitive info", "Never share such photos"],
            riskScores: [3, 2, 1, 0]
        },

        // Password Security
        {
            id: 8,
            question: "How do you typically create passwords for your accounts?",
            options: ["Same password for everything", "Few variations of one password", "Different passwords with pattern", "Unique complex passwords"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 9,
            question: "How often do you change your important passwords?",
            options: ["Never", "Only when required", "Once a year", "Every few months"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 10,
            question: "Do you use a password manager?",
            options: ["No, I memorize all passwords", "No, I write them down", "Yes, sometimes", "Yes, for all accounts"],
            riskScores: [2, 3, 1, 0]
        },
        {
            id: 11,
            question: "Do you enable two-factor authentication when available?",
            options: ["Never", "Rarely", "On some accounts", "On all important accounts"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 12,
            question: "What is your typical password length?",
            options: ["Less than 8 characters", "8-10 characters", "11-15 characters", "More than 15 characters"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 13,
            question: "How do you store login information for important accounts?",
            options: ["In an unprotected document", "In notes on my phone", "Written in a secure location", "In an encrypted password manager"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 14,
            question: "When you receive a password reset link via email, what do you do?",
            options: ["Click immediately", "Check sender then click", "Only click if I requested it", "Go directly to the website instead"],
            riskScores: [3, 2, 1, 0]
        },

        // Personal Information Protection
        {
            id: 15,
            question: "How do you dispose of documents containing personal information?",
            options: ["Regular trash", "Tear them up", "Shred them", "Shred and dispose in different locations"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 16,
            question: "How often do you check your credit reports?",
            options: ["Never", "Only when applying for credit", "Once a year", "Multiple times per year"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 17,
            question: "Do you carry your Social Security card or ID with sensitive information in your wallet?",
            options: ["Yes, always", "Often", "Rarely", "Never"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 18,
            question: "How do you respond to phone calls asking to verify your personal information?",
            options: ["Provide if they seem legitimate", "Provide partial information", "Ask why they need it first", "Refuse and contact company directly"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 19,
            question: "Do you use public Wi-Fi for banking or shopping transactions?",
            options: ["Yes, regularly", "Sometimes", "Only with a VPN", "Never"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 20,
            question: "How often do you review your bank and credit card statements?",
            options: ["Rarely or never", "Only when I notice an issue", "Monthly", "Weekly or more frequently"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 21,
            question: "Do you have fraud alerts or credit freezes on your credit reports?",
            options: ["No", "I don't know", "On some but not all", "Yes, on all reports"],
            riskScores: [3, 2, 1, 0]
        },

        // Identity Theft Scenarios
        {
            id: 22,
            question: "You receive an email from your bank about an account issue with a login link. What do you do?",
            options: ["Click the link and log in", "Reply for more information", "Call the number in the email", "Contact bank through official website/phone"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 23,
            question: "You receive a call claiming to be from the IRS saying you owe taxes. What do you do?",
            options: ["Pay immediately", "Ask for more information", "Provide partial verification", "Hang up and report (IRS doesn't call for payments)"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 24,
            question: "A seller sends you a check for more than your item price, asking for a refund of the difference. What do you do?",
            options: ["Return the difference immediately", "Deposit check first, then refund", "Refuse and ask for exact amount", "Recognize as a scam and end contact"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 25,
            question: "You find a USB drive in a public place. What do you do?",
            options: ["Plug it in to identify the owner", "Give to IT without plugging in", "Throw it away", "Turn in to lost and found"],
            riskScores: [3, 1, 0, 2]
        },
        {
            id: 26,
            question: "You receive a text about a failed package delivery needing updated preferences. What do you do?",
            options: ["Click link and provide information", "Reply asking for details", "Check status on official website", "Ignore and delete"],
            riskScores: [3, 2, 0, 1]
        },
        {
            id: 27,
            question: "A job offer requires upfront payment for training materials. What do you do?",
            options: ["Pay immediately", "Negotiate payment from first check", "Research company thoroughly", "Decline as potential scam"],
            riskScores: [3, 2, 1, 0]
        },
        {
            id: 28,
            question: "A social media quiz asks for your first pet's name, childhood street, and mother's maiden name. What do you do?",
            options: ["Answer truthfully", "Make up fake answers", "Answer privately", "Skip it (recognize as security questions)"],
            riskScores: [3, 1, 2, 0]
        },
        {
            id: 29,
            question: "Your computer shows a pop-up saying it's infected and you need to call tech support. What do you do?",
            options: ["Call immediately", "Click to scan", "Force quit browser", "Run legitimate antivirus software"],
            riskScores: [3, 3, 1, 0]
        },
        {
            id: 30,
            question: "You receive a message that you've won a contest you don't remember entering. What do you do?",
            options: ["Click link and claim prize", "Provide minimal info to verify", "Research before responding", "Ignore as potential scam"],
            riskScores: [3, 2, 1, 0]
        }
    ];

    // State variables
    const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
    const [showStartScreen, setShowStartScreen] = useState<boolean>(true);
    const [showQuestionScreen, setShowQuestionScreen] = useState<boolean>(false);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [riskScore, setRiskScore] = useState<number>(0);

    // Function to randomly select 11 questions from the pool
    const getRandomQuestions = (allQuestions: Question[], count: number): Question[] => {
        const questionsCopy = [...allQuestions];
        const selected: Question[] = [];

        for (let i = 0; i < count; i++) {
            if (questionsCopy.length === 0) break;
            const randomIndex = Math.floor(Math.random() * questionsCopy.length);
            selected.push(questionsCopy[randomIndex]);
            questionsCopy.splice(randomIndex, 1);
        }

        return selected;
    };

    // Function to save answer
    const handleOptionSelect = (optionIndex: number): void => {
        const question = selectedQuestions[currentQuestionIndex];
        const newAnswer: UserAnswer = {
            questionId: question.id,
            optionIndex: optionIndex,
            riskScore: question.riskScores[optionIndex]
        };

        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = newAnswer;
        setUserAnswers(newAnswers);
    };

    // Navigate to next question
    const goToNextQuestion = (): void => {
        if (currentQuestionIndex < selectedQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    // Navigate to previous question
    const goToPreviousQuestion = (): void => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    // Calculate risk score
    const calculateRisk = (): void => {
        if (userAnswers.length < selectedQuestions.length) {
            alert("Please answer all questions before calculating your risk.");
            return;
        }

        let totalRisk = 0;
        userAnswers.forEach(answer => {
            totalRisk += answer.riskScore;
        });

        const maxPossibleScore = selectedQuestions.length * 3; // Each question has max score of 3
        const riskPercentage = Math.round((totalRisk / maxPossibleScore) * 100);

        setRiskScore(riskPercentage);
        setShowQuestionScreen(false);
        setShowResults(true);
    };

    // Function to restart the simulator
    const restartSimulator = (): void => {
        const newQuestions = getRandomQuestions(questionsPool, 11);
        setSelectedQuestions(newQuestions);
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setShowResults(false);
        setShowStartScreen(false);
        setShowQuestionScreen(true);
    };

    // Start the assessment
    const startAssessment = (): void => {
        const randomQuestions = getRandomQuestions(questionsPool, 11);
        setSelectedQuestions(randomQuestions);
        setShowStartScreen(false);
        setShowQuestionScreen(true);
    };

    // Get risk level and color based on score
    const getRiskInfo = (score: number): { level: string, color: string, recommendations: string } => {
        if (score < 25) {
            return {
                level: 'Low',
                color: '#34a853',
                recommendations: 'You have good security habits! Keep up the good practices and stay vigilant.'
            };
        } else if (score < 50) {
            return {
                level: 'Moderate',
                color: '#fbbc05',
                recommendations: 'Your security could use some improvement. Consider strengthening passwords and being more cautious with personal information.'
            };
        } else if (score < 75) {
            return {
                level: 'High',
                color: '#fa7b17',
                recommendations: 'Your current habits put you at significant risk. Review your security practices and consider implementing stronger protection measures.'
            };
        } else {
            return {
                level: 'Very High',
                color: '#ea4335',
                recommendations: 'Your identity is highly vulnerable to theft. Take immediate action to secure your accounts and personal information.'
            };
        }
    };

    return (
        <div>
            <header className={styles.header}>
                <h1>Identity Theft Simulator</h1>
                <p>Test your vulnerability to identity theft by answering these privacy questions. Each session presents 11 randomly selected questions from our database.</p>
            </header>

            <main>
                <div className={styles.contentLayout}>
                    <div className={styles.simulatorContainer}>
                        {showStartScreen && (
                            <div id="start-screen" className={styles.startScreen}>
                                <h2>Welcome to the Identity Theft Risk Assessment</h2>
                                <p>This simulator will help you understand how vulnerable you might be to identity theft. You'll be asked 11 questions about your online habits and security practices.</p>
                                <p>Answer honestly for the most accurate assessment.</p>
                                <button
                                    onClick={startAssessment}
                                    className={`${styles.startBtn} transition-transform duration-300 ease-in-out hover:scale-105`}
                                >
                                    Start Assessment
                                </button>
                            </div>
                        )}

                        {showQuestionScreen && (
                            <div id="question-screen">
                                <div className={styles.progressContainer}>
                                    <div className={styles.progressBar}>
                                        <div
                                            className={`${styles.progressFill} transition-all duration-500 ease-in-out`}
                                            style={{ width: `${(currentQuestionIndex / selectedQuestions.length) * 100}%` }}
                                        ></div>
                                    </div>
                                    <div className={styles.progressText}>
                                        Question {currentQuestionIndex + 1} of {selectedQuestions.length}
                                    </div>
                                </div>

                                <div className={styles.questionCard}>
                                    <div className={styles.questionText}>
                                        {selectedQuestions[currentQuestionIndex].question}
                                    </div>

                                    <div className={styles.optionsContainer}>
                                        {selectedQuestions[currentQuestionIndex].options.map((option, optIndex) => (
                                            <div key={optIndex} className={`${styles.option} hover:bg-gray-100 transition-colors duration-300`}
                                            >
                                                <input
                                                    type="radio"
                                                    id={`q${selectedQuestions[currentQuestionIndex].id}-opt${optIndex}`}
                                                    name={`question-${selectedQuestions[currentQuestionIndex].id}`}
                                                    checked={userAnswers[currentQuestionIndex]?.optionIndex === optIndex}
                                                    onChange={() => handleOptionSelect(optIndex)}
                                                />
                                                <label htmlFor={`q${selectedQuestions[currentQuestionIndex].id}-opt${optIndex}`}>
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.navigation}>
                                    <button
                                        disabled={currentQuestionIndex === 0}
                                        onClick={goToPreviousQuestion}
                                        className={`${styles.prevBtn} transition-transform duration-300 ease-in-out hover:scale-105`}
                                    >
                                        Previous
                                    </button>
                                    {currentQuestionIndex === selectedQuestions.length - 1 ? (
                                        <button
                                            disabled={!userAnswers[currentQuestionIndex]}
                                            onClick={calculateRisk}
                                            className={`${styles.calculateBtn} transition-transform duration-300 ease-in-out hover:scale-105`}
                                        >
                                            Calculate Risk
                                        </button>
                                    ) : (
                                        <button
                                            disabled={!userAnswers[currentQuestionIndex]}
                                            onClick={goToNextQuestion}
                                            className={`${styles.nextBtn} transition-transform duration-300 ease-in-out hover:scale-105`}
                                        >
                                            Next
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                        {showResults && (
                            <div id="results" className={styles.results}>
                                <h2>Your Identity Theft Risk Assessment</h2>
                                <div className={styles.riskMeter}>
                                    <div
                                        className={styles.riskLabel}
                                        style={{ color: getRiskInfo(riskScore).color }}
                                    >
                                        Risk Level: {getRiskInfo(riskScore).level} ({riskScore}%)
                                    </div>
                                    <div className={styles.riskBar}>
                                        <div
                                            className={styles.riskFill}
                                            style={{
                                                width: `${riskScore}%`,
                                                backgroundColor: getRiskInfo(riskScore).color
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className={styles.recommendations}>
                                    <h3>Recommendations:</h3>
                                    <p>{getRiskInfo(riskScore).recommendations}</p>
                                </div>
                                <button
                                    className={`${styles.restartBtn} transition-transform duration-300 ease-in-out hover:scale-105`}
                                    onClick={restartSimulator}
                                >
                                    Take Assessment Again
                                </button>
                            </div>
                        )}
                    </div>
                    <div className={styles.videoContainer}>
                        <div className={`${styles.videoWrapper} transition-transform duration-300 hover:scale-105`}>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/kDFeSUUwRnA?si=CzYAftPfQLl2tCup"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className={styles.videoIframe}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>This simulator is designed for educational purposes. Stay informed about privacy best practices to protect your identity.</p>
            </footer>
        </div>
    );
};

export default IdentityTheftSimulator;
