'use client';

import { useState } from 'react';
import { StickerGenerator } from '@/components/StickerGenerator';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FeatureSection } from '@/components/FeatureSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <StickerGenerator />
          <FeatureSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
