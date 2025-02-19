import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">
      {/* Header Section */}
      <header className="flex justify-center py-4 bg-[#445382]">
        <Image src="/images/lavpass_logo_white.png" alt="LavPass Logo" width={150} height={50} />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row items-center justify-center py-16 gap-8 bg-[#445382]">
        <Image src="/images/lavpass_home_feed.png" alt="Phone Mockup" width={300} height={600} />
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-4xl font-bold">Loos near you.</h1>
          <p className="mt-4">Coming soon to iPhone. Be notified when we launch.</p>
          <div className="flex mt-8">
            <input type="email" placeholder="Email" className="p-2 rounded-l" />
            <button className="bg-white text-blue-900 p-2 rounded-r">Submit</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col items-center py-16 bg-white text-[#445382]">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
          <div className="text-center sm:text-right sm:order-1">
            <h2 className="text-2xl font-semibold">Search</h2>
            <p>for restrooms within walking distance</p>
          </div>
          <Image src="/images/lavpass_home_feed.png" alt="Search Mockup" width={200} height={400} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
          <div className="text-center sm:text-right">
            <h2 className="text-2xl font-semibold">Unlock</h2>
            <p>restrooms of public establishments without the hassle.</p>
          </div>
          <Image src="/images/lavpass_home_feed.png" alt="Unlock Mockup" width={200} height={400} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="text-center sm:text-right sm:order-1">
            <h2 className="text-2xl font-semibold">Contribute</h2>
            <p>by adding and verifying codes to help others.</p>
          </div>
          <Image src="/images/lavpass_home_feed.png" alt="Contribute Mockup" width={200} height={400} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-800 text-white py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Is LavPass free?</h3>
            <p>Yes, LavPass is completely free.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How accurate are the codes?</h3>
            <p>
              LavPass codes are community-sourced and user-verified. Each code displays the last update time, and users can confirm or report accuracy to keep the info reliable.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">What if a code is incorrect?</h3>
            <p>
              If a code is incorrect, users can report it instantly. LavPass relies on community verification, so outdated codes get flagged, and new ones are added to keep the info as accurate as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Email Section */}
      <section className="bg-white text-[#445382] py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Launching soon.</h2>
        <p className="mb-8 underline">be notified first.</p>
        <div className="flex justify-center">
          <input type="email" placeholder="Email" className="border-2 border-[#445382] p-2 rounded-l" />
          <button className="border-2 border-[#445382] bg-white text-[#445382] p-2 rounded-r">Submit</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#445382] text-white py-4 text-center">
        <p>&copy; 2023 LavPass. All rights reserved.</p>
      </footer>
    </div>
  );
}
