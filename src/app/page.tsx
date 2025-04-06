"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [heroEmail, setHeroEmail] = useState("");
  const [heroSubscribed, setHeroSubscribed] = useState(false);

  const [bottomEmail, setBottomEmail] = useState("");
  const [bottomSubscribed, setBottomSubscribed] = useState(false);

  const heroTextRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);

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

      // --- Toilet Animation ---
      // Clamp the scroll so the toilet stops moving after a threshold
      const threshold = 300; // Adjust as needed
      const effectiveScroll = Math.min(scrollPosition, threshold);
      const toiletScrollOffset = effectiveScroll * 0.8;

      const toilet = document.querySelector(".toilet") as HTMLElement | null;
      if (toilet) {
        toilet.style.transform = `translate(-50%, calc(0px - ${toiletScrollOffset}px))`;
      }

      // --- Hero Text Scaling & Fading ---
      if (heroTextRef.current) {
        // Scaling: from 0 to 100 scroll units, scale from 1 to 0.3
        const scaleProgress = Math.min(scrollPosition / 100, 1);
        const scale = 1 - scaleProgress * 0.7; // At 100, scale = 0.3

        // Fading: start fading after 100 scroll units and complete by 200
        let newOpacity = 1;
        if (scrollPosition < 100) {
          newOpacity = 1;
        } else {
          const opacityProgress = Math.min((scrollPosition - 100) / 100, 1);
          newOpacity = 1 - opacityProgress;
        }

        // Apply transformation (maintaining centering via translate and using transformOrigin)
        heroTextRef.current.style.transformOrigin = "center center";
        heroTextRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
        heroTextRef.current.style.opacity = `${newOpacity}`;
      }
    };

    handleScroll(); // Run once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (featuresSectionRef.current) {
      const featureRows = gsap.utils.toArray<HTMLDivElement>(
        featuresSectionRef.current.children
      );

      featureRows.forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <div className="relative">
        <div className="background absolute inset-0 z-0"></div>

        <header className="relative z-10 flex justify-center py-6">
          <Image src="/images/lavpass_logo_white.png" alt="LavPass Logo" width={200} height={80} />
        </header>

        <section className="relative z-10 px-6 md:px-12 min-h-[100vh] pt-200 pb-10 overflow-visible">
          <div 
            className="absolute z-0 w-full text-center"
            ref={heroTextRef}
            style={{
              top: '8%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="max-w-[800px] mx-auto px-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold">Your Throne Awaits.</h1>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl">Discover the best public restrooms near you.</p>
            </div>
          </div>

          <div
            className="toilet absolute z-10 left-1/2"
            style={{ 
              top: "80px",  
              width: "1400px", 
              height: "1200px",
              transform: "translate(-50%, 0)",
              filter: "drop-shadow(-15px 0 10px rgba(0, 0, 0, 0.3))"
            }}
          >
            <Image
              src="/images/toilet.png"
              alt="Toilet"
              unoptimized
              fill
              className="object-contain"
            />
          </div>
        </section>
      </div>

      <section className="relative z-20 -mt-32 py-10 bg-white text-[#445382] px-6 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">Discover Loos Near You</h1>
        <p className="mt-6 text-lg">
          Coming soon to iPhone.
          <br />
          Be notified when we launch.
        </p>
        {!heroSubscribed ? (
          <div className="flex mt-10 max-w-xl mx-auto">
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
          <p className="mt-10 text-lg bg-blue-100 text-blue-900 px-6 py-3 rounded-lg transition max-w-xl mx-auto">
            Thanks for subscribing! We&apos;ll keep you updated.
          </p>
        )}
      </section>

      <section className="py-20 px-6 sm:px-12 bg-white text-[#445382]">
        <div ref={featuresSectionRef} className="max-w-6xl mx-auto space-y-16">
          {/* Row 1: Image left, Text right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold">Search Effortlessly</h2>
              <p className="mt-4 text-lg">
                Find the nearest restrooms with ease.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center bg-[#445382] p-6 rounded-lg">
              <Image
                src="/images/lavpass_home_feed.png"
                alt="Our Story"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Row 2: Text left, Image right */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-right">
              <h2 className="text-4xl font-bold">Unlock Access to Clean Restrooms</h2>
              <p className="mt-4 text-lg">
                Crowdsourced restroom codes for whenever you need to go.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center bg-[#445382] p-6 rounded-lg">
              <Image
                src="/images/lavpass_details_page.png"
                alt="What We Do"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Row 3: Image left, Text right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold">Contribute and Share</h2>
              <p className="mt-4 text-lg">
                Help others by adding restrooms and verifying codes.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center bg-[#445382] p-6 rounded-lg">
              <Image
                src="/images/lavpass_change_code.png"
                alt="Join Our Community"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Row 4: Text left, Image right */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-right">
              <h2 className="text-4xl font-bold">Rate and Review</h2>
              <p className="mt-4 text-lg">
                Share your experience and help others find the best facilities.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center bg-[#445382] p-6 rounded-lg">
              <Image
                src="/images/lavpass_change_code.png"
                alt="Rate and Review"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#445382] py-20 px-8 shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold">Largest Restroom Database</h2>
            <p className="mt-4 text-lg">
              With thousands of verified restroom locations across the United States, LavPass maintains the most comprehensive database of accessible facilities in the country.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/USA.png"
              alt="United States Coverage Map"
              width={400}
              height={250}
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20 px-8 shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">How does LavPass work?</h3>
          <p className="text-lg">
            LavPass uses your location to find nearby restrooms and provides you with detailed information and user reviews.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Is LavPass free to use?</h3>
          <p className="text-lg">
            Yes, LavPass is completely free to use. We aim to provide a valuable service to all travelers.
          </p>
        </div>
      </section>

      <section className="bg-white text-[#445382] py-20 px-8 text-center shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
        <p className="text-lg mb-4">
          Sign up for our newsletter to receive the latest updates and news about LavPass.
        </p>
        {!bottomSubscribed ? (
          <div className="flex justify-center mt-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-lg border-2 border-gray-300 focus:border-blue-500 transition text-[#445382] w-full max-w-md"
              value={bottomEmail}
              onChange={(e) => setBottomEmail(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white p-3 rounded-r-lg ml-2 hover:bg-blue-600 transition"
              onClick={handleBottomNotifyMe}
            >
              Subscribe
            </button>
          </div>
        ) : (
          <p className="mt-10 text-lg bg-blue-100 text-blue-900 px-6 py-3 rounded-lg transition">
            Thanks for subscribing! We&apos;ll keep you updated.
          </p>
        )}
      </section>

      <footer className="bg-[#445382] text-white py-6 text-center shadow-lg">
        <p className="text-sm">&copy; 2025 LavPass. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/terms-of-service" className="text-sm mx-2 hover:underline">Terms of Service</Link>
          <Link href="/privacy-policy" className="text-sm mx-2 hover:underline">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}