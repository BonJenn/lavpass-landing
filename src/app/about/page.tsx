"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">About LavPass</h1>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg text-white mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            At LavPass, we believe that access to clean, safe restrooms should be a right, not a privilege. 
            Our mission is to help people find and access public restrooms quickly and easily, 
            removing the stress and uncertainty from one of life's basic necessities.
          </p>

          <h2 className="text-2xl font-semibold mb-4">The Problem We're Solving</h2>
          <p className="mb-6">
            We've all been there – walking around a city, desperately looking for a restroom, only to find 
            that many are locked behind access codes or restricted to customers. LavPass was born from this 
            universal frustration and seeks to create a community-driven solution.
          </p>

          <div className="my-8 flex justify-center">
            <Image 
              src="/images/lavpass_icon.png"
              alt="LavPass Icon"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-6">
            LavPass was founded in 2024 by a group of friends who were tired of the "bathroom scramble" 
            during their urban adventures. What started as a shared Google Doc of restroom codes quickly 
            evolved into a passion project to create a comprehensive app that could help millions.
          </p>

          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="mb-6">
            Our app uses crowdsourced information to map accessible restrooms, including those in coffee shops, 
            department stores, and public facilities. Users can find nearby restrooms, access entry codes when 
            needed, and contribute by verifying or updating information to keep our database current and reliable.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-8 mb-6 space-y-2">
            <li><span className="font-semibold">Community First:</span> We believe in the power of collective knowledge and mutual support.</li>
            <li><span className="font-semibold">Accessibility:</span> We're committed to making our app usable by everyone, regardless of ability.</li>
            <li><span className="font-semibold">Respect:</span> We encourage respectful use of facilities and respect for business policies.</li>
            <li><span className="font-semibold">Innovation:</span> We're constantly looking for better ways to serve our users' needs.</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="mb-6">
            We're always looking for passionate individuals to help build LavPass. Whether you're an engineer or designer, we'd love to hear from you.
            Shoot us a message at contact@lavpass.com
          </p>
          <Link href="/" className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 duration-200 cursor-pointer">
            Download LavPass Today
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
