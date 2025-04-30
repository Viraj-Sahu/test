// Mock data for the application to simulate API responses
import { CreditScore, FintechApp, PhoneScamReport, PhishingEmail, SimOperator } from '../types';

// Mock credit score data
export const mockCreditScore: CreditScore = {
  score: 756,
  previousScore: 742,
  lastUpdated: '2025-04-01',
  recentChanges: [
    {
      date: '2025-03-28',
      description: 'Credit card utilization decreased',
      impact: 'positive',
    },
    {
      date: '2025-03-15',
      description: 'New credit inquiry',
      impact: 'negative',
    },
    {
      date: '2025-03-01',
      description: 'On-time payment recorded',
      impact: 'positive',
    },
  ],
  loans: [
    {
      id: 'loan-1',
      type: 'Home Loan',
      lender: 'State Bank of India',
      amount: 2500000,
      dateOpened: '2023-05-12',
      isNew: false,
    },
    {
      id: 'loan-2',
      type: 'Personal Loan',
      lender: 'HDFC Bank',
      amount: 350000,
      dateOpened: '2024-10-05',
      isNew: false,
    },
    {
      id: 'loan-3',
      type: 'Auto Loan',
      lender: 'ICICI Bank',
      amount: 700000,
      dateOpened: '2025-03-25',
      isNew: true,
    },
  ],
};

// Mock fintech app data
export const mockFintechApps: FintechApp[] = [
  {
    id: 'app-1',
    name: 'PayTM',
    url: 'https://paytm.com',
    securityRating: 4.2,
    verified: true,
    features: {
      encryption: true,
      twoFactor: true,
      dataPrivacy: true,
      regulatedEntity: true,
    },
    reviews: 24563,
  },
  {
    id: 'app-2',
    name: 'Google Pay',
    url: 'https://pay.google.com',
    securityRating: 4.5,
    verified: true,
    features: {
      encryption: true,
      twoFactor: true,
      dataPrivacy: true,
      regulatedEntity: true,
    },
    reviews: 35782,
  },
  {
    id: 'app-3',
    name: 'PhonePe',
    url: 'https://phonepe.com',
    securityRating: 4.3,
    verified: true,
    features: {
      encryption: true,
      twoFactor: true,
      dataPrivacy: true,
      regulatedEntity: true,
    },
    reviews: 19435,
  },
  {
    id: 'app-4',
    name: 'QuickCash',
    url: 'https://quickcash-loans.example.com',
    securityRating: 1.8,
    verified: false,
    features: {
      encryption: false,
      twoFactor: false,
      dataPrivacy: false,
      regulatedEntity: false,
    },
    reviews: 124,
  },
  {
    id: 'app-5',
    name: 'InstantLoan',
    url: 'https://instantloan.example.com',
    securityRating: 2.1,
    verified: false,
    features: {
      encryption: true,
      twoFactor: false,
      dataPrivacy: false,
      regulatedEntity: false,
    },
    reviews: 342,
  },
];

// Mock phone scam report data
export const mockScamReports: Record<string, PhoneScamReport> = {
  '9876543210': {
    phoneNumber: '9876543210',
    reportCount: 27,
    lastReported: '2025-03-30',
    scamType: ['Banking Fraud', 'KYC Verification'],
    isSafe: false,
  },
  '9988776655': {
    phoneNumber: '9988776655',
    reportCount: 12,
    lastReported: '2025-03-25',
    scamType: ['Impersonation', 'Government Official'],
    isSafe: false,
  },
  '9900112233': {
    phoneNumber: '9900112233',
    reportCount: 0,
    lastReported: '',
    scamType: [],
    isSafe: true,
  },
};

// Mock phishing email samples
export const mockPhishingEmails: PhishingEmail[] = [
  {
    id: 'email-1',
    subject: 'Urgent: Your account has been compromised',
    sender: 'security@bank-verification.example.com',
    body: 'Dear Customer, We have detected unusual activity in your account. Please verify your details immediately by clicking on the link below: [SECURE LINK]',
    containsScam: true,
    scamIndicators: [
      'Urgency creating panic',
      'Suspicious sender email domain',
      'Generic greeting',
      'Request to click on a link',
    ],
  },
  {
    id: 'email-2',
    subject: 'Your package delivery notification',
    sender: 'delivery@shipping-notify.example.com',
    body: 'Your package is waiting for delivery. Please confirm your address and payment details by downloading the attachment.',
    containsScam: true,
    scamIndicators: [
      'Unexpected package notification',
      'Request to download an attachment',
      'Request for payment details',
    ],
  },
  {
    id: 'email-3',
    subject: 'Your SBI statement is ready',
    sender: 'statements@sbi.co.in',
    body: 'Dear Valued Customer, Your monthly account statement for March 2025 is now available. Please log in to your net banking account to view. Do not reply to this email.',
    containsScam: false,
    scamIndicators: [],
  },
];

// Mock scam call scenarios
export const mockScamScenarios = [
  {
    id: 'scenario-1',
    title: 'Bank Representative Call',
    description: 'Someone claiming to be from your bank calls about suspicious activity on your account.',
    script: [
      {
        speaker: 'Scammer',
        line: 'Hello, I am calling from SBI Bank security department. We have detected suspicious transactions on your account. I need to verify your identity.',
        isScam: true,
        explanation: 'Banks never call to ask for full security details over the phone.'
      },
      {
        speaker: 'Scammer',
        line: 'Can you confirm your full account number and ATM PIN for verification?',
        isScam: true,
        explanation: 'Never share your PIN with anyone, even bank representatives.'
      },
      {
        speaker: 'Scammer',
        line: 'We need to transfer your money to a safe account temporarily. I will help you do that now.',
        isScam: true,
        explanation: 'Banks never ask you to transfer money to another account for "safety".'
      },
    ],
    correctResponses: [
      'I will hang up and call the bank directly using the number on my card.',
      'I will not share my PIN or password with you.',
      'Can you provide me with a reference number so I can call the bank\'s official number to verify this?'
    ]
  },
  {
    id: 'scenario-2',
    title: 'KYC Verification Call',
    description: 'A caller claiming to be from your mobile provider says your KYC needs updating.',
    script: [
      {
        speaker: 'Scammer',
        line: 'Hello, I am calling from Jio. Your KYC is incomplete and your SIM will be deactivated in 24 hours.',
        isScam: true,
        explanation: 'Service providers typically send official notifications through multiple channels before deactivation.'
      },
      {
        speaker: 'Scammer',
        line: 'To complete your KYC instantly, we need you to download a remote assistance app so I can guide you.',
        isScam: true,
        explanation: 'Legitimate KYC never requires remote access to your device.'
      },
      {
        speaker: 'Scammer',
        line: 'Please open your banking app while I\'m connected so we can verify your identity.',
        isScam: true,
        explanation: 'No legitimate representative would ask you to open your banking app during a call.'
      }
    ],
    correctResponses: [
      'I will visit the official store to complete my KYC in person.',
      'I will not download any remote assistance apps.',
      'I will check my KYC status through the official mobile app.'
    ]
  }
];

// Mock voice authentication samples
export const mockVoiceSamples = [
  {
    id: 'voice-1',
    title: 'Authentic Voice Recording',
    audioUrl: '/assets/authentic-voice.mp3',
    isDeepfake: false,
    indicators: ['Natural voice variations', 'Appropriate background noise', 'Consistent speech patterns']
  },
  {
    id: 'voice-2',
    title: 'Deepfake Voice Sample',
    audioUrl: '/assets/deepfake-voice.mp3',
    isDeepfake: true,
    indicators: ['Robotic undertones', 'Unnatural pauses', 'Inconsistent pronunciation', 'Audio artifacts']
  }
];

// Mock telecom operators
export const mockTelecomOperators: SimOperator[] = [
  {
    name: 'Jio',
    logo: 'https://1000logos.net/wp-content/uploads/2021/02/Jio-logo.png',
    lockProcedure: [
      'Open the MyJio app',
      'Go to the Menu section',
      'Select JioCare: Help & Support',
      'Look for the option to Block SIM',
      'Enter the Jio number you want to block and proceed',
      'Complete the verification process by answering the prompts'
    ],
  },
  {
    name: 'Airtel',
    logo: 'https://1000logos.net/wp-content/uploads/2021/02/Airtel-logo.png',
    lockProcedure: [
      "1. Open Airtel Thanks app and head over to the ‘Help’ section of the app.",
      "2. Opt for the Live Chat Support option to know further steps to block your SIM.",
      "3. Follow the steps as instructed and your SIM will be blocked easily.",
      "4. You can also drop an email to the Airtel executives at 121@in.airtel.com. Explain your issue in detail and ask for a quick resolution."
    ],
},
{
  name: 'Vi (Vodafone Idea)',
    logo: 'https://1000logos.net/wp-content/uploads/2021/02/Vodafone-Idea-logo.png',
      lockProcedure: [
        "please download the Vi App to update your alternate number.",
        "Visit the SIM block page on the Vi website & enter your Vi prepaid number",
        "Click on 'Get OTP to block SIM'(a verification code will be sent via SMS)",
        "Enter the OTP, once confirmed, your SIM card will be blocked",
      ]
},
];