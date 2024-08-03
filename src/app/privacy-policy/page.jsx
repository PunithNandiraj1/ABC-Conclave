import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl font-sato mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">1. Introduction</h2>
        <div className="space-y-4">
          {[1.1, 1.2, 1.3].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 1.1 && "This Privacy and Cookies Policy sets out the privacy and cookies policy of AlphablockZ Ventures a limited liability company registered in Hong Kong. For the purpose of the Data Protection Act, the data controller is AlphablockZ."}
                {item === 1.2 && "By providing your personal information to AlphablockZ, you consent to the collection and use of it and any other information provided to AlphablockZ in accordance with this Privacy Policy. If at any time you wish to change the uses of your personal information to which you have consented, please contact us at info@abcconclave.com."}
                {item === 1.3 && "AlphablockZ may revise this Privacy Policy at any time by posting an update on its website(s). This Privacy Policy was last updated in July 2024."}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">2. Collection of Personal Information</h2>
        <div className="space-y-4">
          {[2.1, 2.2].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 2.1 && "We acknowledge and agree that any personal data may be processed or otherwise used by us solely to the extent required for the use of the Website, your attendance of our conference(s), the execution of your orders and the performance of any of your requests and in accordance with the applicable law on the protection of personal data..."}
                {item === 2.2 && "We collect, process and use the following information: Information you give us, Information from other sources, Automatic information..."}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">3. Storage and retention of your information</h2>
        <div className="space-y-4">
          {[3.1, 3.2].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 3.1 && "If you would like to change, update or delete your personal information in our databases, you may do so through your account profile or by contacting our customer support..."}
                {item === 3.2 && "Your personal data will be held and used by AlphablockZ, and any third party hosting provider acting on its behalf, in order to run the event and for analysing visitor traffic with a view to improving the event experience for visitors."}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">4. Transfer Of Data/Disclosure</h2>
        <div className="space-y-4">
          {[4.1, 4.2].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-700">{item}</h3>
              <p className="text-gray-800">
                {item === 4.1 && "Except as set forth in this Privacy Policy or when specifically agreed to by you, we will not disclose Personal Data we gather from you through your use of our Website to third parties..."}
                {item === 4.2 && "We reserve the right to disclose your Personal Data as we reasonably feel is necessary to protect our systems or business, including but not limited to complying with judicial orders or with government agencies or law enforcement officials..."}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">5. Security</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-800">
            The security of your Personal Information is important to us. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your Personal Information, AlphablockZ cannot guarantee its absolute security and cannot accept any liability where the security of your Personal Information is compromised.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">6. Cookies</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-800">
            We, along with many other websites, make use of so-called &quot;Cookies&quot;. Cookies are small files that can be stored on your computer during visits to the Website. Cookies are used to facilitate your use of our services and to manage your visits...
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">7. Third Party Websites</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-800">
            Our Website may contain links to other Internet websites, including co-branded or other affiliated sites. These linked websites have separate and independent privacy policies. This Privacy Policy only covers our Website and does not cover any other website...
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;