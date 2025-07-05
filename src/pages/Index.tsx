
import React, { useState, useEffect } from 'react';
import { Heart, Star, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FloatingHearts from '@/components/FloatingHearts';
import LoveMessage from '@/components/LoveMessage';
import PhotoGallery from '@/components/PhotoGallery';
import CountdownTimer from '@/components/CountdownTimer';

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [sparkleCount, setSparkleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkleCount(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-4 bg-pink-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-purple-300 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-rose-300 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 right-10 w-5 h-5 bg-pink-200 rounded-full animate-pulse opacity-30"></div>
      </div>

      <FloatingHearts />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-pink-500 animate-spin" size={24} />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent animate-fade-in">
              For My Beautiful Priyanshi
            </h1>
            <Sparkles className="text-purple-500 animate-spin" size={24} />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Every star in the sky pales in comparison to the light you bring into my life ✨
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Love Declaration Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8">
              <div className="text-center">
                <Heart className="text-red-500 mx-auto mb-4 animate-pulse" size={48} />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">My Heart Belongs to You</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Priyanshi, you are the melody in my heart's song, the sunshine in my darkest days, 
                  and the dream I never want to wake up from. Your smile lights up my entire world, 
                  and your love gives my life meaning beyond words.
                </p>
                <Button 
                  onClick={() => setShowMessage(!showMessage)}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="mr-2" size={20} />
                  {showMessage ? 'Hide Love Letter' : 'Read My Love Letter'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Countdown Timer Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8">
              <div className="text-center">
                <Star className="text-yellow-500 mx-auto mb-4 animate-bounce" size={48} />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Love Story</h2>
                <CountdownTimer />
                <p className="text-gray-600 mt-4">
                  Every second with you is a precious gift that I treasure forever 💖
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Love Message Component */}
        {showMessage && <LoveMessage />}

        {/* Photo Gallery */}
        <PhotoGallery />

        {/* Final Love Declaration */}
        <div className="text-center mt-16 mb-8">
          <Card className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border-pink-300 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                You Are My Everything 💕
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Priyanshi, my darling, you are not just my love - you are my best friend, my confidant, 
                my inspiration, and my reason to smile every single day. In a world full of temporary things, 
                you are my forever. I love you more than all the stars in the sky, deeper than the ocean, 
                and stronger than any force in this universe.
              </p>
              <div className="flex justify-center items-center gap-4 text-3xl">
                <Heart className="text-red-500 animate-pulse" />
                <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Forever Yours
                </span>
                <Heart className="text-red-500 animate-pulse" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
