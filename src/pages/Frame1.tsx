import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Frame1() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Link to="/" className="fixed top-4 left-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
        <ArrowLeft className="w-6 h-6" />
      </Link>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Mountain Views</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Discover the majestic beauty of mountain landscapes. Each peak tells a story of ancient geological forces
            and natural wonder.
          </p>
          <img
            src="/frame 1.png"
            alt="frame1"
            className="w-full rounded-lg shadow-lg mb-8"
          />
        </div>
      </div>
    </div>
  );
}

export default Frame1;