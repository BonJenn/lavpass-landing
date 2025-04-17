"use client";
import Image from "next/image";
import Link from "next/link";

export default function EULA() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">End User License Agreement</h1>
        <h2 className="text-center mb-6">This End User License Agreement (&quot;EULA&quot;) is a legal agreement between you and LavPass governing your use of the LavPass mobile application.</h2>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-4">1. License Grant</h2>
          <p className="mb-6">
            Subject to your compliance with this EULA, LavPass grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App for your personal, non-commercial purposes on a single mobile device owned or controlled by you.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Restrictions</h2>
          <p className="mb-6">
            You may not: (a) copy, modify, or create derivative works of the App; (b) distribute, transfer, sublicense, lease, lend, or rent the App to any third party; (c) reverse engineer, decompile, or disassemble the App; (d) make the App available over a network where it could be used by multiple devices at the same time; (e) remove proprietary notices from the App; (f) use the App for any unlawful purpose or in violation of any third-party rights.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. User Content</h2>
          <p className="mb-6">
            The App allows you to submit content including but not limited to restroom locations and access codes (&quot;User Content&quot;). You retain ownership of your User Content, but grant LavPass a worldwide, royalty-free, perpetual, irrevocable, non-exclusive license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in connection with the App.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Privacy</h2>
          <p className="mb-6">
            Your use of the App is subject to our Privacy Policy, which describes how we collect, use, and disclose information about you. By using the App, you consent to the data practices described in our Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Materials</h2>
          <p className="mb-6">
            The App may display, include, or make available third-party content or provide links to third-party websites. These third-party materials are not owned or controlled by LavPass, and LavPass assumes no responsibility for them.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Disclaimer of Warranties</h2>
          <p className="mb-6">
            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY LAW, LAVPASS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="mb-6">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LAVPASS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OR INABILITY TO USE THE APP.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
          <p className="mb-6">
            This EULA is effective until terminated. Your rights under this EULA will terminate automatically or otherwise cease to be effective without notice if you fail to comply with any term of this EULA. Upon termination, you shall cease all use of the App and delete all copies, full or partial, of the App.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p className="mb-6">
            This EULA shall be governed by and construed in accordance with the laws of the United States, without giving effect to any principles of conflicts of law.
          </p>

          <h2 className="text-2xl font-semibold mb-4">10. Changes to this EULA</h2>
          <p className="mb-6">
            LavPass reserves the right to modify this EULA at any time. We will notify you of any changes by posting the new EULA on this page and updating the &quot;Last Updated&quot; date. You are advised to review this EULA periodically for any changes.
          </p>

          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p className="mb-6">
            If you have any questions about this EULA, please contact us at contact@lavpass.com.
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
            <a href="https://www.facebook.com/profile.php?id=61574902000865&mibextid=wwXIfr&mibextid=wwXIfr" className="hover:opacity-80 transition transform hover:scale-110 cursor-pointer">
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
            <a href="https://youtube.com/@lavpass?si=HHjMdvlrevd4cMrI" className="hover:opacity-80 transition transform hover:scale-110 cursor-pointer">
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
            <Link href="/end-user-license-agreement" className="text-sm mx-3 my-1 hover:underline cursor-pointer">User Agreement</Link>
            <a href="#" className="text-sm mx-3 my-1 hover:underline cursor-pointer">Contact Us</a>
            <Link href="/about" className="text-sm mx-3 my-1 hover:underline cursor-pointer">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 