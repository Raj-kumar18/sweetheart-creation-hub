
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Heart } from 'lucide-react';

const PhotoGallery = () => {
  const memories = [
    {
      title: "Our Beautiful Moments",
      description: "Every picture tells the story of our love 📸",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      title: "Adventures Together",
      description: "Creating memories that last forever 🌟",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "Sweet Memories",
      description: "The moments that make my heart skip 💕",
      gradient: "from-rose-400 to-purple-400"
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Our Memory Lane
        </h2>
        <p className="text-gray-600 text-lg">A collection of our beautiful moments together</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {memories.map((memory, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
            <CardContent className="p-6">
              <div className={`w-full h-48 bg-gradient-to-br ${memory.gradient} rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <div className="text-center text-white">
                  <Camera size={48} className="mx-auto mb-2 opacity-80" />
                  <p className="text-sm opacity-90">Beautiful memories</p>
                  <div className="flex justify-center gap-1 mt-2">
                    <Heart size={16} className="animate-pulse" />
                    <Heart size={16} className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <Heart size={16} className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{memory.title}</h3>
              <p className="text-gray-600">{memory.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
