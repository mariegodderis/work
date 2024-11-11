import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
      <img src="/header.png" alt="Header" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Frames Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/frame1" className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
              <img
                src="/frame 1.png"
                alt="Frame 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="text-white text-2xl font-bold">Mountain Views</h2>
              </div>
            </div>
          </Link>

          <Link to="/frame2" className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
              <img
                src="frame2.png"
                alt="Frame 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="text-white text-2xl font-bold">Ocean Depths</h2>
              </div>
            </div>
          </Link>

          <Link to="/frame3" className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
              <img
                src="/frame 3.png"
                alt="Frame 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="text-white text-2xl font-bold">Forest Tales</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;