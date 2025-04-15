// components/HeroSection.tsx
export default function HeroSection() {
    return (
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Listen to ABR Live Radio</h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 mb-4">
            Play Now
          </button>
          <p className="text-blue-600 underline cursor-pointer">View schedules</p>
        </div>
      </section>
    );
  }