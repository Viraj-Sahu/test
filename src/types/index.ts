// Common types used throughout the application

export type CreditScore = {
  score: number;
  previousScore: number;
  lastUpdated: string;
  recentChanges: Array<{
    date: string;
    description: string;
    impact: 'positive' | 'negative' | 'neutral';
  }>;
  loans: Array<{
    id: string;
    type: string;
    lender: string;
    amount: number;
    dateOpened: string;
    isNew: boolean;
  }>;
};

export type FintechApp = {
  id: string;
  name: string;
  url: string;
  securityRating: number;
  verified: boolean;
  features: {
    encryption: boolean;
    twoFactor: boolean;
    dataPrivacy: boolean;
    regulatedEntity: boolean;
  };
  reviews: number;
};

export type PhoneScamReport = {
  phoneNumber: string;
  reportCount: number;
  lastReported: string;
  scamType: string[];
  isSafe: boolean;
};

export type PhishingEmail = {
  id: string;
  subject: string;
  sender: string;
  body: string;
  containsScam: boolean;
  scamIndicators: string[];
};

export type SimOperator = {
  name: string;
  logo: string;
  lockProcedure: string[];
};

export type PersonaType = 'digital-native' | 'senior-citizen' | 'professional' | 'business-owner';

export type UserSettings = {
  persona: PersonaType;
  name: string;
  email: string;
  phoneNumber: string;
  notificationsEnabled: boolean;
  creditAlertThreshold: number;
  preferredAuthMethod: 'sms' | 'email' | 'authenticator' | 'video';
  completedModules: string[];
};