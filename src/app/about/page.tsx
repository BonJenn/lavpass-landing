"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen text-white relative bg-gradient-to-b from-[#1a1f3d] via-[#2a3356] to-[#1a1f3d]">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/background_texture.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-blue-900/20"></div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
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
            About LavPass
          </h1>
          
          <div className="space-y-8 text-blue-100">
            <p className="text-xl">
              LavPass was born from a simple yet universal need: finding clean, accessible restrooms when you need them most.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
              <p>
                We're on a mission to make restroom access easier for everyone. Whether you're traveling, shopping, or just out and about, 
                LavPass helps you find the nearest clean restroom with verified access codes.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Story</h2>
              <p>
                After experiencing the frustration of searching for restrooms in unfamiliar places, our team decided to create a solution. 
                LavPass combines community knowledge with technology to provide a reliable restroom finder that works for everyone.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Join Our Community</h2>
              <p>
                LavPass is more than just an app - it's a community of people helping each other find clean, accessible restrooms. 
                By contributing locations and codes, you're helping make life easier for everyone.
              </p>
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
