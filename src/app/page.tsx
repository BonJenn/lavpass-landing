"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [heroEmail, setHeroEmail] = useState("");
  const [heroSubscribed, setHeroSubscribed] = useState(false);

  const [bottomEmail, setBottomEmail] = useState("");
  const [bottomSubscribed, setBottomSubscribed] = useState(false);

  // Create a ref for the hero text
  const heroTextRef = useRef<HTMLDivElement>(null);

  const handleHeroNotifyMe = async () => {
    try {
      const res = await fetch("/api/mailchimp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: heroEmail }),
      });
      if (!res.ok) throw new Error("Failed to subscribe.");
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
      if (!res.ok) throw new Error("Failed to subscribe.");
      setBottomSubscribed(true);
    } catch (error) {
      console.error(error);
      alert("There was an error subscribing. Please try again later.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Move the toilet vertically
      const toilet = document.querySelector(".toilet") as HTMLElement | null;
      if (toilet) {
        toilet.style.transform = `translate(-50%, calc(40% - ${scrollPosition * 0.8}px))`;
      }

      // Decouple scaling and fading:
      // Scale: from scroll 0 to 100, shrink text from scale 1 to 0.3
      // Opacity: from scroll 0 to 200, fade text from 1 to 0.
      if (heroTextRef.current) {
        const scaleProgress = Math.min(scrollPosition / 400, 0);
        const scale = 1 - scaleProgress * 5; // at scroll=0, scale=1; at scroll>=100, scale=0.3

        const opacityProgress = Math.min(scrollPosition / 100, 1);
        const newOpacity = 1 - opacityProgress;

        // Ensure the text shrinks from its center
        heroTextRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
        heroTextRef.current.style.opacity = `${newOpacity}`;
      }
    };

    handleScroll(); // Run once on mount
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      {/* Header */}
      <header className="flex justify-center py-6 bg-[#445382] shadow-lg">
        <Image src="/images/lavpass_logo_white.png" alt="LavPass Logo" width={200} height={80} />
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center px-6 md:px-12 bg-[#445382] min-h-[100vh] pt-32 pb-10 overflow-visible">
        {/* Background image (styled in globals.css) */}
        <div className="background"></div>

        {/* Toilet */}
        <div
          className="toilet absolute z-10 left-1/2"
          style={{ top: "-350px", width: "1400px", height: "1200px" }}
        >
          <Image
            src="/images/toilet.png"
            alt="Toilet"
            unoptimized
            fill
            className="object-contain"
          />
        </div>

        {/* Hero Text */}
        <div
          className="hero-text z-0 text-center"
          ref={heroTextRef}
          style={{ transformOrigin: "center center" }}
        >
          <h1 className="text-7xl font-extrabold">Your Throne Awaits.</h1>
          <p className="mt-4 text-2xl">Discover the best public restrooms near you.</p>
        </div>
      </section>

      {/* Discover Section */}
      <section className="relative z-20 -mt-32 max-w-md mx-auto py-10 bg-white text-[#445382] px-6 md:items-start text-center md:text-left shadow-lg rounded-lg">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">Discover Loos Near You</h1>
        <p className="mt-6 text-lg">
          Coming soon to iPhone.
          <br />
          Be notified when we launch.
        </p>
        {!heroSubscribed ? (
          <div className="flex mt-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-lg border-2 border-gray-300 focus:border-blue-500 transition text-[#445382] w-full"
              value={heroEmail}
              onChange={(e) => setHeroEmail(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white p-3 rounded-r-lg ml-2 hover:bg-blue-600 transition"
              onClick={handleHeroNotifyMe}
            >
              Notify Me
            </button>
          </div>
        ) : (
          <p className="mt-10 text-lg bg-blue-100 text-blue-900 px-6 py-3 rounded-lg transition">
            Thanks for subscribing! We&apos;ll keep you updated.
          </p>
        )}
      </section>

      {/* About Section */}
      <section className="flex flex-col items-center py-20 px-4 sm:px-6 md:px-8 bg-white text-[#445382] shadow-lg rounded-lg">
        {/* About content here */}
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 text-white py-20 px-8 shadow-lg rounded-lg">
        {/* FAQ content here */}
      </section>

      {/* Bottom Email Section */}
      <section className="bg-white text-[#445382] py-20 px-8 text-center shadow-lg rounded-lg">
        {/* Bottom email subscription here */}
      </section>

      {/* Footer */}
      <footer className="bg-[#445382] text-white py-6 text-center shadow-lg">
        <p className="text-sm">&copy; 2025 LavPass. All rights reserved.</p>
      </footer>
    </div>
  );
}