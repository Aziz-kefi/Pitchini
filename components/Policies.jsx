"use client"
import React ,{useState} from 'react'
const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
  
        <p className="mb-4">
          At PITCHINI, we take your privacy seriously. This Privacy
          Policy outlines how we collect, use, and protect your personal
          information when you use our platform.
        </p>
  
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We collect personal information that you provide to us when you create
          an account, such as your name, email address, and profile information.
          We also collect data related to your usage of our platform.
        </p>
  
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          We use your information to provide and improve our services. This may
          include matching freelancers with suitable projects, sending
          notifications, and ensuring the security of your account.
        </p>
  
        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p className="mb-4">
          We take measures to protect your personal information and ensure its
          confidentiality. We do not share your data with third parties without
          your consent.
        </p>
  
        {/* Add more sections as needed */}
      </div>
    );
  };
const TermsOfService = () => {
    return (
        <div className="container mx-auto p-8 mt-4">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
  
        <p className="mb-4">
          Welcome to PITCHINI. These Terms of Service govern your use
          of our platform. By accessing or using our platform, you agree to abide
          by these terms.
        </p>
  
        <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
        <p className="mb-4">
          As a user of our platform, you are responsible for maintaining the
          security of your account, complying with our policies, and treating
          others with respect and professionalism.
        </p>
  
        <h2 className="text-xl font-semibold mb-2">Platform Usage</h2>
        <p className="mb-4">
          You may use our platform to post projects, collaborate with freelancers,
          and access our services. You must not use our platform for any unlawful
          or prohibited activities.
        </p>
  
        <h2 className="text-xl font-semibold mb-2">Account Suspension</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate accounts that violate our
          policies. We aim to create a safe and professional environment for all
          users.
        </p>
  
        {/* Add more sections as needed */}
      </div>
    );
  };

const HireDetailsInformation = () => {
    return (
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Hire Details Information</h1>
    
          <p className="mb-4">
            Thank you for considering PITCHINI for hiring freelancers.
            Here are some key details you should know:
          </p>
    
          <h2 className="text-xl font-semibold mb-2">Selective Hiring</h2>
          <p className="mb-4">
            PITCHINI carefully screens and selects freelancers based on
            their skills and qualifications. We aim to match you with the most
            suitable candidates.
          </p>
    
          <h2 className="text-xl font-semibold mb-2">Project Management</h2>
          <p className="mb-4">
            Our platform offers project management tools to streamline your
            collaboration with freelancers. You can track progress, communicate,
            and ensure project success.
          </p>
    
          <h2 className="text-xl font-semibold mb-2">Payment and Contracts</h2>
          <p className="mb-4">
            We facilitate secure payments and provide contract templates for your
            projects. Payments are held in escrow until the project is completed to
            your satisfaction.
          </p>
    
          {/* Add more sections as needed */}
        </div>
    );
  };
const Policies = () => {
    const [selectedSection, setSelectedSection] = useState('privacy');

  return (
    <div >
       
      <div className="flex justify-center space-x-4 mt-8">
        <button
          className={` py-2 px-4 border-2  rounded-lg ${
            selectedSection === 'privacy' ? 'font-semibold bg-blue-100 border-blue-500 text-blue-500' : "bg-gray-100"
          }`}
          onClick={() => setSelectedSection('privacy')}
        >
          Privacy Policy
        </button>
        <button
         className={` py-2 px-4 border-2  rounded-lg ${
            selectedSection === 'terms' ? 'font-semibold bg-blue-100 border-blue-500 text-blue-500' : "bg-gray-100"
          }`}
          onClick={() => setSelectedSection('terms')}
        >
          Terms of Service
        </button>
        <button
          className={` py-2 px-4 border-2  rounded-lg ${
            selectedSection === 'hire' ? 'font-semibold bg-blue-100 border-blue-500 text-blue-500' : "bg-gray-100"
          }`}
          onClick={() => setSelectedSection('hire')}
        >
          Hire Details
        </button>
      </div>

      {selectedSection === 'privacy' && <PrivacyPolicy />}
      {selectedSection === 'terms' && <TermsOfService />}
      {selectedSection === 'hire' && <HireDetailsInformation />}
    </div>
  );
}

export default Policies