"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // Hero subscription states
  const [heroEmail, setHeroEmail] = useState("");
  const [heroSubscribed, setHeroSubscribed] = useState(false);

  // Bottom email section subscription states
  const [bottomEmail, setBottomEmail] = useState("");
  const [bottomSubscribed, setBottomSubscribed] = useState(false);

  const handleHeroNotifyMe = async () => {
    try {
      const res = await fetch("/api/mailchimp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: heroEmail }),
      });
      if (!res.ok) {
        throw new Error("Failed to subscribe.");
      }
      // Hide the form and show a simple success message
      setHeroSubscribed(true);
    } catch (error) {
      console.error(error);
      alert("There was an error subscribing. Please try again later.");
    }
  };

  const handleBottomNotifyMe = async () => {
    try {
      const res = await fetch("/api/mailchimp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: bottomEmail }),
      });
      if (!res.ok) {
        throw new Error("Failed to subscribe.");
      }
      // Hide the form and show a simple success message
      setBottomSubscribed(true);
    } catch (error) {
      console.error(error);
      alert("There was an error subscribing. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      {/* Header Section */}
      <header className="flex justify-center py-6 bg-[#445382] shadow-lg">
        <Image src="/images/lavpass_logo_white.png" alt="LavPass Logo" width={160} height={60} />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-20 gap-12 bg-[#445382]">
        <Image src="/images/lavpass_home_feed.png" alt="Phone Mockup" width={320} height={640} />
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
          <h1 className="text-5xl font-extrabold leading-tight">Discover Loos Near You</h1>
          <p className="mt-6 text-lg">Launching soon on iPhone. Stay updated with the latest features.</p>

          {/* Conditionally render Hero input or success message */}
          {!heroSubscribed ? (
            <div className="flex mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-l-lg border-2 border-transparent focus:border-white transition text-[#445382]"
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
              />
              <button
                className="bg-white text-blue-900 p-3 rounded-r-lg ml-2 hover:bg-gray-200 transition"
                onClick={handleHeroNotifyMe}
              >
                Notify Me
              </button>
            </div>
          ) : (
            <p className="mt-10 text-lg bg-white text-blue-900 px-6 py-3 rounded-lg transition">
              Thanks for subscribing! We&apos;ll keep you updated.
            </p>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col items-center py-20 bg-white text-[#445382]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
          <div className="text-center md:text-right md:order-1 max-w-sm">
            <h2 className="text-3xl font-bold">Search Effortlessly</h2>
            <p className="mt-2 text-lg">Find restrooms within walking distance with ease.</p>
          </div>
          <Image src="/images/lavpass_home_feed.png" alt="Search Mockup" width={220} height={440} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
          <div className="text-center md:text-right max-w-sm">
            <h2 className="text-3xl font-bold">Unlock Access</h2>
            <p className="mt-2 text-lg">Access public restrooms without any hassle.</p>
          </div>
          <Image src="/images/lavpass_details_page.png" alt="Unlock Mockup" width={220} height={440} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="text-center md:text-right md:order-1 max-w-sm">
            <h2 className="text-3xl font-bold">Contribute & Share</h2>
            <p className="mt-2 text-lg">Help others by adding and verifying restroom codes.</p>
          </div>
          <Image src="/images/lavpass_change_code.png" alt="Contribute Mockup" width={220} height={440} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 text-white py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h3 className="text-2xl font-semibold">Is LavPass free?</h3>
            <p className="mt-2">Absolutely, LavPass is completely free to use.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">How accurate are the codes?</h3>
            <p className="mt-2">
              Our codes are community-sourced and verified. Each code shows the last update time, and users can confirm or report accuracy to ensure reliability.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">What if a code is incorrect?</h3>
            <p className="mt-2">
              If a code is incorrect, report it instantly. LavPass relies on community verification to flag outdated codes and add new ones for accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Email Section */}
      <section className="bg-white text-[#445382] py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Launching Soon</h2>
        <p className="mb-10 text-lg underline">Be the first to know.</p>
        {!bottomSubscribed ? (
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-[#445382] p-3 rounded-l-lg"
              value={bottomEmail}
              onChange={(e) => setBottomEmail(e.target.value)}
            />
            <button
              className="border-2 border-[#445382] bg-white text-[#445382] p-3 rounded-r-lg ml-2 hover:bg-gray-100 transition"
              onClick={handleBottomNotifyMe}
            >
              Submit
            </button>
          </div>
        ) : (
          <p className="mt-6 text-lg">
            Thank you! We&apos;ll notify you as soon as our app is available.
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-[#445382] text-white py-6 text-center">
        <p className="text-sm">&copy; 2025 LavPass. All rights reserved.</p>
      </footer>
    </div>
  );
}
