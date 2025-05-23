"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [statsCounted, setStatsCounted] = useState(false);
  const [restroomCount, setRestroomCount] = useState(0);
  const [citiesCount, setCitiesCount] = useState(0);
  const [codesCount, setCodesCount] = useState(0);

  const heroTextRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
  }, [statsCounted, restroomCount, citiesCount, codesCount]);

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
          <Image src="/images/lavpass_logo_white.png" alt="LavPass Logo" width={160} height={64} className="cursor-pointer" />
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
            <a href="#stats" className="text-white/80 hover:text-white transition">Stats</a>
            <a href="#faq" className="text-white/80 hover:text-white transition">FAQ</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Your Throne
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400">
                  Awaits.
                </span>
              </h1>
              <p className="text-xl text-blue-100">
                Find clean, accessible restrooms near you with real-time availability and verified access codes.
              </p>
              <div className="flex flex-col items-center md:items-start space-y-4">
                <a
                  href="https://apps.apple.com/us/app/lavpass/id6478728221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition hover:scale-105 duration-200"
                >
                  <Image
                    src="/images/app_store_logo.png"
                    alt="Download on the App Store"
                    width={200}
                    height={67}
                    className="rounded-xl shadow-lg"
                  />
                </a>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm transform rotate-3"></div>
              <Image
                src="/images/toilet.png"
                alt="Toilet"
                fill
                className="object-contain transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Find Restrooms Near You.
          </h2>
          <div ref={featuresSectionRef} className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition duration-300 text-center md:text-left">
              <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/lavpass_home_feed.png"
                  alt="Find Restrooms"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Find Restrooms</h3>
              <p className="text-blue-100">
                Locate clean, accessible restrooms near you with real-time availability and detailed information.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition duration-300 text-center md:text-left">
              <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/lavpass_details_page.png"
                  alt="Access Codes"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Access Codes</h3>
              <p className="text-blue-100">
                Get instant access to restrooms with our community-shared access codes and instructions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition duration-300 text-center md:text-left">
              <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/lavpass_change_code.png"
                  alt="Rate & Review"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Rate & Review</h3>
              <p className="text-blue-100">
                Share your experiences and help others find the best restrooms in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                {restroomCount.toLocaleString()}+
              </div>
              <p className="text-blue-100">Restrooms</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                {citiesCount.toLocaleString()}+
              </div>
              <p className="text-blue-100">Cities</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                {codesCount.toLocaleString()}+
              </div>
              <p className="text-blue-100">Access Codes</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
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
                className={`bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 ${
                  expandedFAQ === index ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                <button 
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={expandedFAQ === index}
                >
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <span className={`transform transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                <div 
                  className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedFAQ === index ? 'max-h-40 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-blue-100">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="py-32 px-6 relative bg-gradient-to-br from-[#1a1f3d] to-[#2a3356]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Get LavPass Today
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Your go-to restroom companion - open the app and instantly find the nearest public restroom. 
            Available now for iPhone.
          </p>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl inline-block">
            <a 
              href="https://apps.apple.com/us/app/lavpass-restroom-finder/id6744234737"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition hover:scale-105 duration-300 inline-block"
            >
              <Image 
                src="/images/app_store_logo.png" 
                alt="Download on the App Store" 
                width={200} 
                height={67}
                className="rounded-xl shadow-lg"
              />
            </a>
            <p className="text-sm text-blue-100 mt-4">Free download • 17+ • 30.7 MB</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/50 backdrop-blur-sm py-16 px-6">
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
                <a href="https://www.facebook.com/profile.php?id=61574902000865" className="text-blue-100 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
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