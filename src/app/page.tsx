"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [bottomEmail, setBottomEmail] = useState("");
  const [bottomSubscribed, setBottomSubscribed] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [statsCounted, setStatsCounted] = useState(false);
  const [restroomCount, setRestroomCount] = useState(0);
  const [citiesCount, setCitiesCount] = useState(0);
  const [codesCount, setCodesCount] = useState(0);

  const heroTextRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const waitlistSectionRef = useRef<HTMLDivElement>(null);

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

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Remove toilet animation completely by setting a fixed position
      const toilet = document.querySelector(".toilet") as HTMLElement | null;
      if (toilet) {
        // Keep toilet in fixed position on all devices
        toilet.style.transform = `translate(-50%, 0)`;
      }

      if (heroTextRef.current) {
        const scaleProgress = Math.min(scrollPosition / 120, 1);
        const scale = 1 - scaleProgress * 0.5;

        let newOpacity = 1;
        if (scrollPosition < 120) {
          newOpacity = 1;
        } else {
          const opacityProgress = Math.min((scrollPosition - 120) / 130, 1);
          newOpacity = 1 - opacityProgress;
        }

        heroTextRef.current.style.transformOrigin = "center center";
        heroTextRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
        heroTextRef.current.style.opacity = `${newOpacity}`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Only run animations if browser supports it and not in reduced motion mode
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (featuresSectionRef.current && !prefersReducedMotion) {
      // Cleanup first to prevent duplications
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      
      try {
        // Force an update to get proper positions
        ScrollTrigger.refresh(true);
        
        const featureRows = gsap.utils.toArray<HTMLDivElement>(
          featuresSectionRef.current.children
        );

        // Set all feature rows to be visible initially for mobile fallback
        featureRows.forEach(row => {
          gsap.set(row, { opacity: 1, y: 0 });
        });

        // Only use animation on non-mobile
        if (window.innerWidth > 768) {
          featureRows.forEach((row, index) => {
            // Apply animation with delay to ensure page is ready
            setTimeout(() => {
              gsap.fromTo(row, 
                { opacity: 0, y: 60 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power4.out",
                  scrollTrigger: {
                    trigger: row,
                    start: "top 95%",
                    toggleActions: "play none none reset",
                  },
                }
              );
            }, 100 * (index + 1));
          });
        }
      } catch (error) {
        console.error("Animation error:", error);
        // If animation fails, ensure content is visible
        if (featuresSectionRef.current) {
          const features = featuresSectionRef.current.children;
          for (let i = 0; i < features.length; i++) {
            (features[i] as HTMLElement).style.opacity = "1";
            (features[i] as HTMLElement).style.transform = "translateY(0)";
          }
        }
      }
    } else if (featuresSectionRef.current) {
      // Make sure features are visible if animation is skipped
      const features = featuresSectionRef.current.children;
      for (let i = 0; i < features.length; i++) {
        (features[i] as HTMLElement).style.opacity = "1";
        (features[i] as HTMLElement).style.transform = "translateY(0)";
      }
    }

    return () => {
      // Cleanup on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Only run animations if browser supports it and not in reduced motion mode
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    // For mobile, just set the final values immediately without animation
    if (isMobile && !statsCounted) {
      setStatsCounted(true);
      setRestroomCount(60000);
      setCitiesCount(4500);
      setCodesCount(10000);
      return; // Exit early, no animation needed
    }
    
    // For desktop, continue with animation
    // Force initial render of numbers for desktop (in case animation fails)
    if (!statsCounted && !isMobile) {
      // Set immediately to at least 80% of final value to ensure numbers are visible
      setRestroomCount(48000);  // 80% of 60000
      setCitiesCount(3600);     // 80% of 4500
      setCodesCount(8000);      // 80% of 10000
    }
    
    // Desktop-only animation with error handling
    try {
      if (statsRef.current && !prefersReducedMotion && !statsCounted && !isMobile) {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
          if (entries[0].isIntersecting) {
            try {
              // Start animation when section is visible
              animateStats();
            } catch (error) {
              console.error("Stats animation error:", error);
              // Fall back to static numbers on error
              setStatsCounted(true);
              setRestroomCount(60000);
              setCitiesCount(4500);
              setCodesCount(10000);
            }
            observer.disconnect();
          }
        };
        
        const observer = new IntersectionObserver(handleIntersection, { 
          threshold: 0.2,
          rootMargin: "0px" 
        });
        
        observer.observe(statsRef.current);
        
        return () => {
          if (observer) {
            observer.disconnect();
          }
        };
      }
    } catch (error) {
      console.error("Observer setup error:", error);
      // Fall back to static numbers on error
      setStatsCounted(true);
      setRestroomCount(60000);
      setCitiesCount(4500);
      setCodesCount(10000);
    }
  }, [statsCounted]);
  
  const animateStats = () => {
    if (statsCounted) return; // Don't animate again if already done
    
    try {
      setStatsCounted(true);
      
      // Duration in milliseconds
      const duration = 2000;
      const startTime = Date.now();
      const endValues = { restrooms: 60000, cities: 4500, codes: 10000 };
      
      // Start from current values rather than zero
      const startValues = {
        restrooms: restroomCount, 
        cities: citiesCount, 
        codes: codesCount
      };
      
      const updateCounts = () => {
        try {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          // Use easeOutQuart easing function for a nice effect
          const easeProgress = 1 - Math.pow(1 - progress, 4);
          
          // Calculate new values based on progress
          const newRestroomCount = Math.floor(startValues.restrooms + (endValues.restrooms - startValues.restrooms) * easeProgress);
          const newCitiesCount = Math.floor(startValues.cities + (endValues.cities - startValues.cities) * easeProgress);
          const newCodesCount = Math.floor(startValues.codes + (endValues.codes - startValues.codes) * easeProgress);
          
          // Update state
          setRestroomCount(newRestroomCount);
          setCitiesCount(newCitiesCount);
          setCodesCount(newCodesCount);
          
          if (progress < 1) {
            window.requestAnimationFrame(updateCounts);
          }
        } catch (error) {
          console.error("Animation frame error:", error);
          // Set final values if animation fails
          setRestroomCount(endValues.restrooms);
          setCitiesCount(endValues.cities);
          setCodesCount(endValues.codes);
        }
      };
      
      // Start the animation
      window.requestAnimationFrame(updateCounts);
    } catch (error) {
      console.error("Animation initialization error:", error);
      // Set final values if animation fails to start
      setRestroomCount(60000);
      setCitiesCount(4500);
      setCodesCount(10000);
    }
  };

  return (
    <div className="min-h-screen text-white relative">
      {/* BEAUTIFUL BACKGROUND (Gradient + Background Image) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#445382] via-[#445382] to-[#445382]">
        <div className="absolute inset-0 bg-[url('/images/background_texture.png')] bg-cover bg-center opacity-30"></div>
      </div>

      {/* HEADER */}
      <header className="relative z-10 flex justify-center py-6">
        <Image src="/images/lavpass_logo_white.png" alt="LavPass Logo" width={200} height={80} />
      </header>

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 min-h-[45vh] md:min-h-[100vh] pt-[5vh] md:pt-[5vh] pb-0 md:pb-10 overflow-hidden">
        <div 
          className="absolute z-0 w-full text-center"
          ref={heroTextRef}
          style={{
            top: '6%',
            left: '50%',
            transform: 'translate(-50%, 0)'
          }}
        >
          <div className="max-w-[800px] mx-auto px-4 mb-[20vh] md:mb-0">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold">Your Throne Awaits.</h1>
            <p className="mt-1 sm:mt-3 text-base sm:text-lg lg:text-2xl">Discover the best public restrooms near you.</p>
          </div>
        </div>

        <div
          className="toilet absolute z-10 left-1/2"
          style={{ 
            top: "13%", 
            width: "100%",
            maxWidth: "1600px",
            height: "auto",
            aspectRatio: "4/3",
            transform: "translate(-50%, 0)",
            filter: "drop-shadow(-15px 0 10px rgba(0, 0, 0, 0.3))",
            overflow: "hidden"
          }}
        >
          <Image
            src="/images/toilet.png"
            alt="Toilet"
            unoptimized
            fill
            className="object-contain max-h-[50vh] md:max-h-none w-full md:mt-0"
          />
        </div>
      </section>

      {/* THIS DIV ENSURES BLUE EXTENDS FULLY */}
      <div className="h-10 md:h-32 bg-blue-700 absolute left-0 right-0 -bottom-1 z-0"></div>

      {/* ABOUT */}
      <section className="relative z-20 mt-3 sm:-mt-16 md:-mt-32 py-10 bg-black text-white px-6 text-center shadow-lg rounded-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">Discover Loos Near You</h1>
        <p className="mt-6 text-lg mx-auto max-w-xl">
          Never get caught without a bathroom again. LavPass helps you find clean, accessible restrooms with verified entry codes wherever you go.
        </p>
        
        <div className="mt-8 flex justify-center">
          <div 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transform transition hover:scale-105 duration-200 cursor-pointer text-xl"
            onClick={() => {
              waitlistSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Coming Spring 2025 to iPhone - Click here to join waitlist
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 sm:px-12 bg-gray-900 text-white">
        <div ref={featuresSectionRef} className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 opacity-100">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Search Effortlessly</h2>
              <p className="mt-4 text-base md:text-lg">
                Find the nearest restrooms with ease.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center bg-gray-900 p-6 rounded-lg shadow-lg">
              <Image
                src="/images/lavpass_home_feed.png"
                alt="Home Feed"
                width={300}
                height={300}
                className="transform transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 opacity-100">
            <div className="md:w-1/2 text-center md:text-right">
              <h2 className="text-3xl md:text-4xl font-bold">Unlock Access to Clean Restrooms</h2>
              <p className="mt-4 text-base md:text-lg">
                Crowdsourced restroom codes for whenever you need to go.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center bg-gray-900 p-6 rounded-lg shadow-lg">
              <Image
                src="/images/lavpass_details_page.png"
                alt="Details Page"
                width={300}
                height={300}
                className="transform transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 opacity-100">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Contribute and Share</h2>
              <p className="mt-4 text-base md:text-lg">
                Help others by adding restrooms and verifying codes.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center bg-gray-900 p-6 rounded-lg shadow-lg">
              <Image
                src="/images/lavpass_change_code.png"
                alt="Change Code"
                width={300}
                height={300}
                className="transform transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative z-30 py-20 px-6 sm:px-12 bg-white text-gray-900" ref={statsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-1/2">
              <Image
                src="/images/USA.png"
                alt="USA Map with Restroom Locations"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Verified Restrooms All Over the US</h2>
              <p className="text-lg md:text-xl">
                LavPass has the largest database of verified public restrooms across the United States, 
                with real-time access codes and user reviews.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <div className="bg-blue-100 px-6 py-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">{restroomCount.toLocaleString()}+</span>
                  <span className="text-sm text-gray-600">Verified Restrooms</span>
                </div>
                <div className="bg-blue-100 px-6 py-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">{citiesCount.toLocaleString()}+</span>
                  <span className="text-sm text-gray-600">Cities Covered</span>
                </div>
                <div className="bg-blue-100 px-6 py-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-blue-600">{codesCount.toLocaleString()}+</span>
                  <span className="text-sm text-gray-600">Restroom Codes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative z-30 bg-black text-white py-20 px-8 shadow-lg rounded-lg mx-4 sm:mx-8 my-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: "How does LavPass work?",
              answer: "LavPass uses your location to find nearby restrooms and provides you with detailed information and user reviews."
            },
            {
              question: "Is LavPass free?",
              answer: "Absolutely, LavPass is completely free to use."
            },
            {
              question: "How accurate are the codes?",
              answer: "Our codes are community-sourced and verified. Each code shows the last update time, and users can confirm or report accuracy to ensure reliability."
            },
            {
              question: "What if a code is incorrect?",
              answer: "If a code is incorrect, report it instantly. LavPass relies on community verification to flag outdated codes and add new ones for accuracy."
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className={`bg-gray-900 rounded-lg overflow-hidden shadow-md transition-all duration-300 ${expandedFAQ === index ? 'ring-2 ring-blue-400' : ''}`}
            >
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={expandedFAQ === index}
              >
                <h3 className="text-xl sm:text-2xl font-semibold">{faq.question}</h3>
                <span className={`transform transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              <div 
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedFAQ === index ? 'max-h-40 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-base sm:text-lg text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STAY UPDATED */}
      <section className="relative z-30 bg-blue-100 text-blue-900 py-20 px-8 text-center shadow-lg rounded-lg mx-4 sm:mx-8 my-8" ref={waitlistSectionRef}>
        <h2 className="text-4xl font-bold mb-6">Join Waitlist <span className="inline-block mx-2">💩</span><span className="inline-block">😍</span></h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          LavPass is launching Spring 2025. Sign up now to be the first to know when we've launched!
        </p>
        {!bottomSubscribed ? (
          <div className="flex flex-col sm:flex-row justify-center mt-10 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg sm:rounded-l-lg sm:rounded-r-none border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-black w-full mb-3 sm:mb-0"
              value={bottomEmail}
              onChange={(e) => setBottomEmail(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white p-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-blue-700 transition transform hover:scale-105 duration-200 w-full sm:w-auto sm:px-6"
              onClick={handleBottomNotifyMe}
            >
              Join Waitlist
            </button>
          </div>
        ) : (
          <p className="mt-10 text-lg bg-blue-600 text-white px-6 py-4 rounded-lg transition max-w-xl mx-auto shadow-md">
            <span className="block font-semibold">Thank you for joining our waitlist!</span>
            We&apos;ll notify you as soon as LavPass launches in Spring 2025.
          </p>
        )}
      </section>

      {/* FOOTER */}
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