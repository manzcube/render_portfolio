import React from "react";

const d0a1 = "/images/d0a1.webp";

const D0A1: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <h1 className="text-gray-900 m-10 font-bold text-4xl">D0A1</h1>
      <div className="p-10 text-gray-900">
        <h1 className="text-2xl font-bold mb-4">App Description</h1>
        <p className="mb-4">
          Take control of your personal finances with{" "}
          <span className="font-bold">D0A1</span>, the ultimate offline finance
          tracking app. Whether it's managing your cash, multiple bank accounts,
          or even tracking debts, D0A1 allows you to:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <span className="font-semibold">Track your finances offline:</span>{" "}
            No internet required, and your data stays private on your device.
          </li>
          <li>
            <span className="font-semibold">
              Organize transactions effortlessly:
            </span>{" "}
            Add income and expenses, categorize them, and monitor your financial
            health.
          </li>
          <li>
            <span className="font-semibold">Manage multiple assets:</span> View
            totals across bank accounts, cash, and more, all in one place.
          </li>
          <li>
            <span className="font-semibold">Gain financial insights:</span>{" "}
            Analyze your income and expenses with easy-to-read charts and
            summaries.
          </li>
          <li>
            <span className="font-semibold">Fully customizable:</span> Choose
            your currency, language, and categories to tailor the app to your
            needs.
          </li>
        </ul>
        <p className="mb-4">
          Your privacy matters—<span className="font-bold">D0A1</span> does not
          collect or share your personal data. Start tracking your finances with
          confidence today!
        </p>
        <p className="mb-4">
          If you want to try the app, go to{" "}
          <span className="font-bold text-blue-600">App Store</span> in your IOS
          device.
        </p>
        <p className="mb-4">
          Check our{" "}
          <a href="/d0a1-privacy-policy" className="text-blue-500 underline">
            Privacy Policy
          </a>
        </p>
      </div>
      <div className="px-60 py-10 w-100">
        <img src={d0a1} alt="d0a1 images" />
      </div>
    </div>
  );
};

export default D0A1;
