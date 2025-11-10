import React, { useEffect } from 'react';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | MyCalculatorsHub.com';
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
      <div className="prose lg:prose-xl max-w-none text-gray-700">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>MyCalculatorsHub.com ("us", "we", or "our") operates the MyCalculatorsHub.com website (the "Service").</p>
        <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>

        <h2>Information Collection and Use</h2>
        <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
        <h3>Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, Cookies and Usage Data.</p>
        <h4>Usage Data</h4>
        <p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
        
        <h2>Use of Data</h2>
        <p>MyCalculatorsHub.com uses the collected data for various purposes:</p>
        <ul>
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2>Advertising</h2>
        <p>We may use third-party Service Providers to show advertisements to you to help support and maintain our Service. Google AdSense is one such provider. Google's use of the DART cookie enables it to serve ads to users based on their visit to our Service and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</p>

        <h2>Links to Other Sites</h2>
        <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please <a href="#/contact-us">contact us</a>.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;