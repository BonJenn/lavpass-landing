"use client";
import Image from "next/image";
import Link from "next/link";

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <h2>Lavpass provides user-submitted information about publicly accessible restrooms. Businesses may have their own policies regarding restroom use. Availability is not guaranteed. Please be respectful and comply with all business rules</h2>
        <br></br>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing or using the LavPass application (&quot;App&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="mb-6">
            LavPass is a mobile application that helps users locate and access public restrooms. The App provides user-generated information about restroom locations and access codes.
            
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p className="mb-6">
            You may be required to create an account to use certain features of the App. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
          <p className="mb-6">
            The App allows users to submit content, including restroom locations and access codes. By submitting content, you grant LavPass a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute such content in connection with the App.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Prohibited Conduct</h2>
          <p className="mb-6">
            You agree not to use the App for any unlawful purpose or in any way that could damage, disable, or impair the App. This includes submitting false or misleading information.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Disclaimer of Warranties</h2>
          <p className="mb-6">
            The App is provided &quot;as is&quot; without warranties of any kind. LavPass does not guarantee the accuracy, completeness, or reliability of user-generated content.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="mb-6">
            LavPass shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the App.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p className="mb-6">
            LavPass reserves the right to modify these Terms of Service at any time. We will notify users of significant changes through the App or by email.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p className="mb-6">
            These Terms of Service shall be governed by the laws of the United States without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
          <p className="mb-6">
            If you have questions about these Terms of Service, please contact us at contact@lavpass.com.
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
          <Link href="/" className="cursor-pointer">
            <Image src="/images/lavpass_logo_white.png" alt="LavPass Logo" width={140} height={60} className="mx-auto mb-6" />
          </Link>
          
          <div className="flex justify-center space-x-6 mb-8">
            {/* Social Media Icons */}
            <a href="#" className="hover:opacity-80 transition transform hover:scale-110 cursor-pointer">
              {/* Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/lavpass.app/" className="hover:opacity-80 transition transform hover:scale-110 cursor-pointer">
              {/* Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@lavpass.app" className="hover:opacity-80 transition transform hover:scale-110 cursor-pointer">
              {/* TikTok */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition transform hover:scale-110 cursor-pointer">
              {/* YouTube */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
          
          <p className="text-sm mb-4">&copy; 2025 LavPass. All rights reserved.</p>
          <div className="flex flex-wrap justify-center">
            <Link href="/terms-of-service" className="text-sm mx-3 my-1 hover:underline cursor-pointer">Terms of Service</Link>
            <Link href="/privacy-policy" className="text-sm mx-3 my-1 hover:underline cursor-pointer">Privacy Policy</Link>
            <a href="#" className="text-sm mx-3 my-1 hover:underline cursor-pointer">Contact Us</a>
            <Link href="/about" className="text-sm mx-3 my-1 hover:underline cursor-pointer">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 