import React, { useState, useEffect } from 'react';
import AdPlaceholder from '../../components/AdPlaceholder';
import Button from '../../components/ui/Button';

const PasswordGenerator: React.FC = () => {
    const [length, setLength] = useState<number>(16);
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
    const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
    const [password, setPassword] = useState<string>('');
    const [copied, setCopied] = useState<boolean>(false);

    const generatePassword = () => {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        let charPool = '';
        if (includeUppercase) charPool += uppercaseChars;
        if (includeLowercase) charPool += lowercaseChars;
        if (includeNumbers) charPool += numberChars;
        if (includeSymbols) charPool += symbolChars;

        if (charPool === '') {
            setPassword('Please select at least one character type.');
            return;
        }

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);
            newPassword += charPool[randomIndex];
        }
        setPassword(newPassword);
        setCopied(false);
    };
    
    const copyToClipboard = () => {
        if(password && !password.startsWith('Please')) {
            navigator.clipboard.writeText(password);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Secure Password Generator</h2>
            <div className="relative mb-4">
                <input
                    type="text"
                    value={password}
                    readOnly
                    placeholder="Your generated password will appear here"
                    className="w-full p-4 pr-20 text-lg bg-secondary border border-gray-300 rounded-md"
                />
                <button onClick={copyToClipboard} className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-gray-600 bg-gray-200 rounded-r-md hover:bg-gray-300">
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="length" className="block text-sm font-medium text-gray-700">Password Length: {length}</label>
                    <input type="range" id="length" min="8" max="32" value={length} onChange={e => setLength(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center"><input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} className="mr-2 h-4 w-4" /> Uppercase</label>
                    <label className="flex items-center"><input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} className="mr-2 h-4 w-4" /> Lowercase</label>
                    <label className="flex items-center"><input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} className="mr-2 h-4 w-4" /> Numbers</label>
                    <label className="flex items-center"><input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} className="mr-2 h-4 w-4" /> Symbols</label>
                </div>
            </div>
            <Button onClick={generatePassword}>Generate Password</Button>
        </div>
    );
};

const PasswordGeneratorPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Secure Password Generator | MyCalculatorsHub.com';
    }, []);

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">Password Generator</h1>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">Create strong, secure, and unique passwords to protect your digital identity. Customize the length and character types to meet any requirement.</p>
            <AdPlaceholder />
            <PasswordGenerator />
            <AdPlaceholder />
            <div className="prose lg:prose-xl max-w-none mx-auto mt-12 text-gray-700">
                <h2>The Importance of Strong Passwords</h2>
                <p>In today's digital age, our lives are intertwined with countless online accounts, from email and social media to online banking and shopping. Each account is a gateway to our personal and financial information, and a weak password is like leaving the door unlocked. Cybercriminals constantly attempt to breach accounts using common passwords and brute-force attacks. Using a strong, unique password for each of your accounts is the first and most critical line of defense against unauthorized access and identity theft.</p>
                <p>The security of your financial accounts is paramount. Imagine the consequences of a compromised bank account or credit card portal. This is why financial institutions insist on strong password policies. When you apply for a financial product online, such as a <strong>debt consolidation loan</strong>, you are entrusting the provider with sensitive data. Securing your access to that provider's online portal with a robust password is your responsibility. Our generator helps you create passwords that meet the highest security standards.</p>

                <h2>What Makes a Password Strong?</h2>
                <p>A strong password has several key characteristics:</p>
                <ul>
                    <li><strong>Length:</strong> Longer passwords are exponentially harder to crack. We recommend a minimum of 12-16 characters.</li>
                    <li><strong>Complexity:</strong> It should include a mix of uppercase letters, lowercase letters, numbers, and symbols. This increases the pool of possible characters, making brute-force attacks more difficult.</li>
                    <li><strong>Uniqueness:</strong> Never reuse passwords across different websites. If one site is breached, criminals won't be able to access your other accounts.</li>
                    <li><strong>Randomness:</strong> Avoid using personal information like birthdays, names, or common words (e.g., "password123"). Truly random combinations are the most secure.</li>
                </ul>
                <p>Just as you would shop for the best <strong>car insurance quotes</strong> to protect your vehicle, you should invest a moment to create a strong password to protect your digital assets. It's a small effort for a huge security payoff. In legal situations, proving ownership and authorized access to accounts can be critical. A <strong>personal injury attorney</strong>, for example, might need to access digital evidence, and secure account access is part of maintaining the integrity of that evidence.</p>

                <h2>Protecting Your Digital Life</h2>
                <p>Creating strong passwords is one part of a broader digital security strategy. You should also enable two-factor authentication (2FA) wherever possible, be wary of phishing emails, and use a password manager to store your unique passwords securely. A password manager eliminates the need to remember dozens of complex passwords; you only need to remember one master password.</p>
                <p>Your digital security habits have real-world implications. Protecting your financial information online is just as important as securing your family's future with <strong>life insurance</strong>. Both are proactive measures to mitigate risk. When you take control of your financial health through steps like <strong>debt consolidation</strong>, you are also reducing the potential attack surface for fraud by streamlining your financial footprint. Strong digital security is an integral part of modern financial prudence.</p>

                <h2>How to Use Our Password Generator</h2>
                <ol>
                    <li><strong>Set the Length:</strong> Use the slider to choose your desired password length. Longer is better!</li>
                    <li><strong>Select Character Types:</strong> Check the boxes for uppercase, lowercase, numbers, and symbols to include in your password. For maximum security, use all four.</li>
                    <li><strong>Generate:</strong> Click the "Generate Password" button. A new, random password will be created.</li>
                    <li><strong>Copy and Use:</strong> Click the "Copy" button to copy the password to your clipboard, then paste it where needed. Remember to save it in a secure password manager.</li>
                </ol>
                <p>Use our tool to fortify your online accounts and take a significant step towards a more secure digital life.</p>
            </div>
        </div>
    );
};

export default PasswordGeneratorPage;