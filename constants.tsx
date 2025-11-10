import React from 'react';
import type { CalculatorInfo } from './types';

const CalculatorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h3m-3-10h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M12 17h.01M15 17h.01M9 10h.01M12 10h.01M15 10h.01M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const TrendingUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);


export const CALCULATORS: CalculatorInfo[] = [
  {
    path: '/sip-calculator',
    title: 'SIP Calculator',
    description: 'Plan your mutual fund investments with our Systematic Investment Plan (SIP) calculator.',
    icon: <TrendingUpIcon />,
  },
  {
    path: '/emi-calculator',
    title: 'EMI Calculator',
    description: 'Calculate your Equated Monthly Installment (EMI) for home, car, or personal loans.',
    icon: <CalculatorIcon />,
  },
  {
    path: '/gst-calculator',
    title: 'GST Calculator',
    description: 'Easily calculate the Goods and Services Tax (GST) for any amount.',
    icon: <CalculatorIcon />,
  },
  {
    path: '/age-calculator',
    title: 'Age Calculator',
    description: 'Find out your exact age in years, months, and days from your date of birth.',
    icon: <UserIcon />,
  },
  {
    path: '/bmi-calculator',
    title: 'BMI Calculator',
    description: 'Check your Body Mass Index (BMI) to understand your health and fitness level.',
    icon: <HeartIcon />,
  },
  {
    path: '/percentage-calculator',
    title: 'Percentage Calculator',
    description: 'A versatile tool for various percentage calculations you might need.',
    icon: <CalculatorIcon />,
  },
  {
    path: '/password-generator',
    title: 'Password Generator',
    description: 'Create strong, secure, and random passwords to protect your online accounts.',
    icon: <LockIcon />,
  },
];