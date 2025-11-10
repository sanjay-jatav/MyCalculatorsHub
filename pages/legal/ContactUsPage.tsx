import React, { useState, useEffect } from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const ContactUsPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        document.title = 'Contact Us | MyCalculatorsHub.com';
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle form submission here (e.g., API call)
        console.log({ name, email, message });
        setSubmitted(true);
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
            {submitted ? (
                <div className="text-center p-6 bg-green-100 text-green-800 rounded-lg">
                    <h2 className="text-2xl font-semibold">Thank You!</h2>
                    <p>Your message has been sent successfully. We will get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <p className="text-center text-gray-600">Have questions, feedback, or suggestions? We'd love to hear from you. Fill out the form below to get in touch with our team.</p>
                    <Input
                        label="Your Name"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        label="Your Email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        ></textarea>
                    </div>
                    <Button type="submit">Send Message</Button>
                </form>
            )}
        </div>
    );
};

export default ContactUsPage;