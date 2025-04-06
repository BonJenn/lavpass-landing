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