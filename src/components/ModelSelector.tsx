'use client';

import { useState } from 'react';

interface Model {
  id: string;
  name: string;
  description: string;
  icon: string;
  badge?: string;
  isWorking: boolean;
  speed: 'Fast' | 'Medium' | 'Slow';
  quality: 'Good' | 'Great' | 'Excellent';
}

interface ModelSelectorProps {
  selectedModel: string;
  onModelSelect: (modelId: string) => void;
}

export function ModelSelector({ selectedModel, onModelSelect }: ModelSelectorProps) {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const models: Model[] = [
    {
      id: 'stabilityai/sdxl-turbo:free',
      name: 'SDXL Turbo',
      description: 'Lightning fast generation with excellent quality',
      icon: '⚡',
      badge: 'FAST',
      isWorking: true,
      speed: 'Fast',
      quality: 'Great'
    },
    {
      id: 'google/gemini-2.0-flash-exp:free',
      name: 'Gemini Flash',
      description: 'Google\'s latest AI model with creative flair',
      icon: '🧠',
      badge: 'NEW',
      isWorking: true,
      speed: 'Medium',
      quality: 'Excellent'
    },
    {
      id: 'black-forest-labs/FLUX-1-schnell:free',
      name: 'FLUX Schnell',
      description: 'High-quality artistic generation',
      icon: '🎨',
      badge: 'ARTISTIC',
      isWorking: true,
      speed: 'Medium',
      quality: 'Excellent'
    },
    {
      id: 'HiDream-ai/HiDream-I1-Full:free',
      name: 'HiDream AI',
      description: 'Advanced AI model for stunning visuals',
      icon: '✨',
      badge: 'PREMIUM',
      isWorking: false,
      speed: 'Slow',
      quality: 'Excellent'
    },
    {
      id: 'Chroma:free',
      name: 'Chroma',
      description: 'Vibrant color-focused generation',
      icon: '🌈',
      isWorking: false,
      speed: 'Medium',
      quality: 'Good'
    }
  ];

  const getSpeedColor = (speed: string) => {
    switch (speed) {
      case 'Fast': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Slow': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'Excellent': return 'text-purple-400';
      case 'Great': return 'text-blue-400';
      case 'Good': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'FAST': return 'bg-green-500/20 text-green-300 border-green-400';
      case 'NEW': return 'bg-blue-500/20 text-blue-300 border-blue-400';
      case 'ARTISTIC': return 'bg-purple-500/20 text-purple-300 border-purple-400';
      case 'PREMIUM': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400';
    }
  };

  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          🤖 Choose Your AI Model
        </h3>
        <p className="text-white/70">
          Each model has unique strengths and generation styles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {models.map((model) => (
          <div
            key={model.id}
            className={`relative group cursor-pointer transition-all duration-300 ${
              !model.isWorking ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => model.isWorking && onModelSelect(model.id)}
            onMouseEnter={() => setShowTooltip(model.id)}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <div
              className={`glass rounded-2xl p-4 border-2 transition-all duration-300 hover-scale ${
                selectedModel === model.id
                  ? 'border-pink-400 bg-pink-400/20 pulse-glow'
                  : model.isWorking
                  ? 'border-white/20 hover:border-white/40'
                  : 'border-red-400/30 bg-red-500/10'
              }`}
            >
              {/* Badge */}
              {model.badge && (
                <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold border ${getBadgeColor(model.badge)}`}>
                  {model.badge}
                </div>
              )}

              {/* Status indicator */}
              <div className="absolute top-3 left-3">
                <div className={`w-3 h-3 rounded-full ${
                  model.isWorking ? 'bg-green-400 animate-pulse' : 'bg-red-400'
                }`}></div>
              </div>

              {/* Icon */}
              <div className="text-center mb-3 mt-2">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {model.icon}
                </div>
                <h4 className="text-white font-bold text-sm">
                  {model.name}
                </h4>
              </div>

              {/* Specs */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-white/60">Speed:</span>
                  <span className={`font-medium ${getSpeedColor(model.speed)}`}>
                    {model.speed}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Quality:</span>
                  <span className={`font-medium ${getQualityColor(model.quality)}`}>
                    {model.quality}
                  </span>
                </div>
              </div>

              {/* Status */}
              <div className="mt-3 text-center">
                <span className={`text-xs font-medium ${
                  model.isWorking ? 'text-green-400' : 'text-red-400'
                }`}>
                  {model.isWorking ? '🟢 Available' : '🔴 Maintenance'}
                </span>
              </div>

              {/* Selection indicator */}
              {selectedModel === model.id && (
                <div className="absolute inset-0 rounded-2xl bg-pink-400/10 border-2 border-pink-400 flex items-center justify-center">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    ✓
                  </div>
                </div>
              )}
            </div>

            {/* Tooltip */}
            {showTooltip === model.id && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50">
                <div className="glass-dark rounded-lg p-3 max-w-xs">
                  <p className="text-white/90 text-sm text-center">
                    {model.description}
                  </p>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-black/30 rotate-45 border-r border-b border-white/20"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Selected model info */}
      {selectedModel && (
        <div className="mt-6 glass-dark rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">
              {models.find(m => m.id === selectedModel)?.icon}
            </div>
            <div>
              <h4 className="text-white font-bold">
                Selected: {models.find(m => m.id === selectedModel)?.name}
              </h4>
              <p className="text-white/70 text-sm">
                {models.find(m => m.id === selectedModel)?.description}
              </p>
            </div>
            <div className="ml-auto">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 