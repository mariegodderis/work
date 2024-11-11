import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Frame2() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Link to="/" className="fixed top-4 left-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
        <ArrowLeft className="w-6 h-6" />
      </Link>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Ocean Depths</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Explore the mysterious depths of our oceans. The endless blue expanse holds countless secrets
            and incredible marine life.
          </p>
          <img
            src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?auto=format&fit=crop&q=80"
            alt="Ocean view"
            className="w-full rounded-lg shadow-lg mb-8"
          />
        </div>
      </div>
    </div>
  );
}

export default Frame2;