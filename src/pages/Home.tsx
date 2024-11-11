import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Frames Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/frame1" className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1682686581498-5e85c7228119?auto=format&fit=crop&q=80"
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
                src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?auto=format&fit=crop&q=80"
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
                src="https://images.unsplash.com/photo-1682686580186-b55d2a91053c?auto=format&fit=crop&q=80"
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