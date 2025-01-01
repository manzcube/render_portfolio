import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">
        Last updated: January 1, 2025
      </p>

      <p className="mb-4">
        Welcome to the Privacy Policy for <strong>D0A1</strong>. This document
        outlines how we manage your personal information and ensures your rights
        and privacy are protected. As the application is built with user
        security and transparency in mind, this policy is designed to comply
        with international standards, including GDPR and EU regulations.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Overview</h2>
        <p className="mb-4">
          The <strong>D0A1 application</strong> (referred to as 'App') is
          designed for financial tracking and operates fully offline. All user
          data is stored locally on your device and never transmitted or shared
          with external servers, cloud storage, or third parties. Your data is
          100% private and remains under your control.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          Interpretation and Definitions
        </h2>
        <p className="mb-4">
          <strong>Interpretation:</strong> Words with initial capitalization
          have specific meanings as outlined in this policy.
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Application:</strong> The D0A1 software program available on
            iOS.
          </li>
          <li>
            <strong>Personal Data:</strong> Information that can be used to
            identify an individual. D0A1 does not collect any personal data.
          </li>
          <li>
            <strong>Device:</strong> Any device capable of accessing the App,
            such as a smartphone or tablet.
          </li>
          <li>
            <strong>Service:</strong> Refers to the Application.
          </li>
          <li>
            <strong>You:</strong> The individual using the App.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Key Principles</h2>
        <ol className="list-decimal pl-5">
          <li>No Data Collection: The App collects no data from you.</li>
          <li>
            No Account Required: The App does not require sign-up or personal
            details.
          </li>
          <li>Offline Operation: The App works entirely offline.</li>
          <li>
            Full User Control: All data remains under your control and is
            deletable with the App.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          Data Storage and Security
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Local Storage:</strong> All data is saved locally on your
            device.
          </li>
          <li>
            <strong>Data Loss:</strong> Deleting the App removes all stored
            data, as there is no cloud backup.
          </li>
          <li>
            <strong>Security:</strong> Users should secure their devices to
            prevent unauthorized access.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">GDPR and EU Compliance</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Transparency:</strong> This policy explains all data
            handling practices.
          </li>
          <li>
            <strong>Data Subject Rights:</strong> As no data is collected, no
            GDPR actions are required.
          </li>
          <li>
            <strong>Consent:</strong> The App does not process or request
            personal data.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
        <p>
          The D0A1 App and its components are the intellectual property of the
          developer. Users are not permitted to reverse-engineer, distribute, or
          misuse the App in any unauthorized way.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
        <p>
          The App is not designed for individuals under the age of 13. As no
          personal data is collected, no special permissions are required for
          minors.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          Changes to This Privacy Policy
        </h2>
        <p>
          This Privacy Policy may be updated periodically. Updates will be
          posted on the App's official website. We encourage you to review this
          policy periodically for any changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
        <p>
          For questions or concerns, please contact:
          <br />
          <strong>Email:</strong> d0a1.developer@gmail.com
          <br />
          <strong>Country of Operation:</strong> Spain
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
