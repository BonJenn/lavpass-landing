"use client";

import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen text-white relative bg-gradient-to-b from-[#1a1f3d] via-[#2a3356] to-[#1a1f3d]">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/background_texture.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-blue-900/20"></div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center md:justify-between items-center">
          <Link href="/">
            <Image src="/images/lavpass_logo_white.png" alt="LavPass Logo" width={160} height={64} className="cursor-pointer" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#features" className="text-white/80 hover:text-white transition">Features</Link>
            <Link href="/#stats" className="text-white/80 hover:text-white transition">Stats</Link>
            <Link href="/#faq" className="text-white/80 hover:text-white transition">FAQ</Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-blue-100">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Account information (email address, password)</li>
                <li>Location data (to find nearby restrooms)</li>
                <li>User contributions (restroom locations, access codes)</li>
                <li>Device information (device type, operating system)</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide and maintain the LavPass service</li>
                <li>Improve and personalize your experience</li>
                <li>Communicate with you about updates and changes</li>
                <li>Ensure the security of our service</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">3. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Service providers who assist in operating our service</li>
                <li>Law enforcement when required by law</li>
                <li>Other users (only the information you choose to share)</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet 
                or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">5. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of certain data collection</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black/50 backdrop-blur-sm py-16 px-6 mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Image src="/images/lavpass_logo_white.png" alt="LavPass Logo" width={140} height={60} />
              <p className="text-blue-100">
                Your trusted companion for finding clean, accessible restrooms wherever you go.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-blue-100 hover:text-white transition">About</Link></li>
                <li><Link href="/terms-of-service" className="text-blue-100 hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="/privacy-policy" className="text-blue-100 hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61574902000865" className="text-blue-100 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/lavpass.app/" className="text-blue-100 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@lavpass.app" className="text-blue-100 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a href="https://youtube.com/@lavpass" className="text-blue-100 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a href="https://www.snapchat.com/add/lavpass?sender_web_id=133102ee-99ce-4257-bc85-aeab12bf9f8f&device_type=desktop&is_copy_url=true" className="text-blue-100 hover:text-white transition">
                  <Image
                    src="/images/snapchat_logo.png"
                    alt="Snapchat"
                    width={24}
                    height={24}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-blue-100">
                Have questions? We&apos;re here to help.
              </p>
              <a href="mailto:contact@lavpass.com" className="text-blue-100 hover:text-white transition mt-2 inline-block">
                contact@lavpass.com
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-blue-100">
            <p>&copy; 2025 LavPass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 