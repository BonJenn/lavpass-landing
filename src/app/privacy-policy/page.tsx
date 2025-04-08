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
      <footer className="relative z-30 bg-black text-white py-12 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <Image src="/images/lavpass_logo_white.png" alt="LavPass Logo" width={140} height={60} className="mx-auto mb-6" />
          
          <div className="flex justify-center space-x-6 mb-8">
            {/* Social Media Icons */}
            <a href="#" className="hover:opacity-80 transition transform hover:scale-110">
              {/* Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition transform hover:scale-110">
              {/* Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition transform hover:scale-110">
              {/* TikTok */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition transform hover:scale-110">
              {/* YouTube */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
          
          <p className="text-sm mb-4">&copy; 2025 LavPass. All rights reserved.</p>
          <div className="flex flex-wrap justify-center">
            <Link href="/terms-of-service" className="text-sm mx-3 my-1 hover:underline">Terms of Service</Link>
            <Link href="/privacy-policy" className="text-sm mx-3 my-1 hover:underline">Privacy Policy</Link>
            <a href="#" className="text-sm mx-3 my-1 hover:underline">Contact Us</a>
            <a href="#" className="text-sm mx-3 my-1 hover:underline">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 