import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Frame3() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Link to="/" className="fixed top-4 left-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
        <ArrowLeft className="w-6 h-6" />
      </Link>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Forest Tales</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Venture into the heart of ancient forests. These verdant sanctuaries are home to countless species
            and timeless stories.
          </p>
          <img
            src="https://images.unsplash.com/photo-1682686580186-b55d2a91053c?auto=format&fit=crop&q=80"
            alt="Forest scene"
            className="w-full rounded-lg shadow-lg mb-8"
          />
        </div>
      </div>
    </div>
  );
}

export default Frame3;