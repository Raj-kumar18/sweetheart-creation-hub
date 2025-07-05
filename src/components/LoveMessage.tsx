
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Sparkles } from 'lucide-react';

const LoveMessage = () => {
  return (
    <div className="mb-12 animate-fade-in">
      <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-300 shadow-2xl">
        <CardContent className="p-10">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Sparkles className="text-pink-500" size={24} />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                My Love Letter to You
              </h3>
              <Sparkles className="text-purple-500" size={24} />
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl font-medium text-center text-pink-600 mb-8">
              "My Dearest Priyanshi..."
            </p>
            
            <p>
              From the moment you entered my life, everything changed. The world became brighter, 
              colors became more vivid, and every day felt like a new adventure waiting to unfold. 
              You didn't just steal my heart - you became the very reason it beats.
            </p>
            
            <p>
              Your laugh is my favorite melody, your smile is my daily dose of sunshine, and your 
              presence is the peace I've been searching for all my life. When you're happy, my world 
              lights up. When you're sad, I want to move mountains just to see you smile again.
            </p>
            
            <p>
              I love the way you scrunch your nose when you're thinking, how you get excited about 
              little things, and how you make ordinary moments feel extraordinary. I love your 
              kindness, your strength, your dreams, and even your adorable quirks that make you uniquely you.
            </p>
            
            <p>
              Every night I fall asleep grateful that I get to love you, and every morning I wake up 
              excited for another day by your side. You are my yesterday's joy, today's blessing, 
              and tomorrow's promise.
            </p>
            
            <div className="text-center mt-8 p-6 bg-pink-100 rounded-lg border-2 border-pink-200">
              <p className="text-xl font-bold text-pink-700 mb-2">
                I love you beyond words, beyond time, beyond everything.
              </p>
              <div className="flex justify-center items-center gap-2">
                <Heart className="text-red-500 animate-pulse" size={20} />
                <span className="text-lg text-gray-600">Forever and Always Yours</span>
                <Heart className="text-red-500 animate-pulse" size={20} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoveMessage;
