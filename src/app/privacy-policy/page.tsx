"use client";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#445382] text-white">
      {/* Header Section */}
      <header className="flex justify-center py-6 bg-[#445382]">
        <Link href="/">
          <Image src="/images/lavpass_logo_white.png" alt="LavPass Logo" width={160} height={60} />
        </Link>
      </header>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-6">
            This Privacy Policy explains how LavPass (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and shares your information when you use our mobile application (&quot;App&quot;).
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="mb-6">
            We collect several types of information from and about users of our App, including:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>Personal information such as your email address when you subscribe to notifications or create an account</li>
            <li>Location data when you use the App to find nearby restrooms</li>
            <li>User-generated content, including restroom locations and access codes that you submit</li>
            <li>Usage data and analytics about how you interact with the App</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-6">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>Provide, maintain, and improve our App</li>
            <li>Communicate with you about updates, features, and promotions</li>
            <li>Personalize your experience and show you relevant content</li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Protect the security and integrity of our App</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
          <p className="mb-6">
            We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li>With service providers who help us operate the App</li>
            <li>To comply with legal obligations</li>
            <li>With your consent or at your direction</li>
            <li>If we believe disclosure is necessary to protect our rights or the safety of our users</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
          <p className="mb-6">
            You can control certain information we collect by adjusting your device settings, such as location permissions. You can also opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p className="mb-6">
            We implement reasonable measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
          <p className="mb-6">
            Our App is not intended for children under 13, and we do not knowingly collect personal information from children under 13.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="mb-6">
            If you have questions about this Privacy Policy, please contact us at contact@lavpass.com.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm opacity-80">Last Updated: April 2025</p>
          <Link href="/" className="inline-block mt-4 text-white hover:text-gray-200 underline">
            Return to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#445382] text-white py-6 text-center border-t border-white/20">
        <p className="text-sm">&copy; 2025 LavPass. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/terms-of-service" className="text-sm mx-2 hover:underline">Terms of Service</Link>
          <Link href="/privacy-policy" className="text-sm mx-2 hover:underline">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
} 