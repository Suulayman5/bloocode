// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold mb-4">CONTACT US</h5>
              {/* Contact links */}
            </div>
            {/* Repeat for other columns */}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>© Copyright 2021. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }