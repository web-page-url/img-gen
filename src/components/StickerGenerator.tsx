'use client';

import { useState } from 'react';
import { LoadingOverlay } from './LoadingOverlay';
import { StickerCard } from './StickerCard';
import { Toast } from './Toast';

interface GeneratedSticker {
  url: string;
  prompt: string;
  id: string;
}

export function StickerGenerator() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedStickers, setGeneratedStickers] = useState<GeneratedSticker[]>([]);
  const [selectedStyle, setSelectedStyle] = useState('cute');
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
    isVisible: boolean;
  }>({
    message: '',
    type: 'info',
    isVisible: false
  });

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const stickerStyles = [
    { id: 'cute', name: 'Cute & Kawaii', emoji: '🥰', description: 'Adorable and sweet' },
    { id: 'cartoon', name: 'Cartoon', emoji: '🎨', description: 'Fun and colorful' },
    { id: 'minimal', name: 'Minimalist', emoji: '✨', description: 'Clean and simple' },
    { id: 'retro', name: 'Retro', emoji: '🌈', description: 'Vintage vibes' },
    { id: 'anime', name: 'Anime', emoji: '🌸', description: 'Japanese style' },
    { id: 'graffiti', name: 'Street Art', emoji: '🎭', description: 'Urban and bold' },
  ];

  const promptSuggestions = [
    'A happy cat wearing sunglasses',
    'Rainbow unicorn with sparkles',
    'Cute panda eating bamboo',
    'Smiling avocado with arms',
    'Dancing pizza slice',
    'Sleepy moon with stars',
    'Magical crystal gem',
    'Friendly robot with heart eyes'
  ];

  const generateSticker = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-sticker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `${selectedStyle} style sticker: ${prompt}`,
        }),
      });

      const data = await response.json();
      
      if (data.success && data.imageUrl) {
        const newSticker: GeneratedSticker = {
          id: Date.now().toString(),
          url: data.imageUrl,
          prompt: prompt,
        };
        setGeneratedStickers(prev => [newSticker, ...prev]);
        setPrompt('');
      } else {
        alert('Failed to generate sticker. Please try again!');
      }
    } catch (error) {
      console.error('Error generating sticker:', error);
      alert('Something went wrong. Please try again!');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadSticker = async (url: string, prompt: string) => {
    try {
      // Show downloading feedback
      const downloadButton = document.activeElement as HTMLButtonElement;
      const originalText = downloadButton?.textContent;
      if (downloadButton) {
        downloadButton.textContent = '⬇️ Downloading...';
        downloadButton.disabled = true;
      }

      // Fetch the image as blob
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch image');
      
      const blob = await response.blob();
      
      // Create a local URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create download link
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `sticker-${prompt.slice(0, 20).replace(/[^a-zA-Z0-9]/g, '_')}.png`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);
      
      // Reset button
      if (downloadButton) {
        downloadButton.textContent = originalText;
        downloadButton.disabled = false;
      }
      
      // Show success message
      showToast('🎉 Sticker downloaded successfully!', 'success');
      
    } catch (error) {
      console.error('❌ Download failed:', error);
      
      // Reset button on error
      const downloadButton = document.activeElement as HTMLButtonElement;
      if (downloadButton) {
        downloadButton.textContent = '💾 Download';
        downloadButton.disabled = false;
      }
      
      // Show error message
      showToast('❌ Download failed. Opening image in new tab...', 'error');
      
      // Fallback: open in new tab if download fails
      setTimeout(() => {
        window.open(url, '_blank');
      }, 1000);
    }
  };

  return (
    <>
      <LoadingOverlay isVisible={isLoading} />
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <div className="max-w-6xl mx-auto">
      {/* Main Generator Card */}
      <div className="glass rounded-3xl p-8 mb-8 hover-scale">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            🎨 Create Your Perfect Sticker
          </h2>
          <p className="text-white/70">
            Describe your idea and watch AI bring it to life!
          </p>
        </div>

        {/* Style Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Choose Your Style
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {stickerStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                  selectedStyle === style.id
                    ? 'border-pink-400 bg-pink-400/20 pulse-glow'
                    : 'border-white/20 bg-white/5 hover:border-white/40'
                }`}
              >
                <div className="text-2xl mb-2">{style.emoji}</div>
                <div className="text-white text-sm font-medium">{style.name}</div>
                <div className="text-white/60 text-xs mt-1">{style.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Input */}
        <div className="mb-6">
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your sticker idea... (e.g., 'a cute cat with rainbow wings')"
              className="w-full p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-white/50 resize-none focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/50 transition-all duration-300"
              rows={3}
              maxLength={200}
            />
            <div className="absolute bottom-3 right-3 text-white/40 text-sm">
              {prompt.length}/200
            </div>
          </div>
        </div>

        {/* Prompt Suggestions */}
        <div className="mb-8">
          <p className="text-white/70 text-sm mb-3">✨ Need inspiration? Try these:</p>
          <div className="flex flex-wrap gap-2">
            {promptSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setPrompt(suggestion)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full text-white/80 text-sm transition-all duration-300 hover-scale"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center">
          <button
            onClick={generateSticker}
            disabled={!prompt.trim() || isLoading}
            className={`px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              !prompt.trim() || isLoading
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white hover-scale pulse-glow'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center gap-3">
                <div className="spinner"></div>
                Creating Magic...
              </div>
            ) : (
              <>🚀 Generate Sticker</>
            )}
          </button>
        </div>
      </div>

      {/* Generated Stickers Gallery */}
      {generatedStickers.length > 0 && (
        <div className="glass rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🎨 Your Awesome Stickers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {generatedStickers.map((sticker) => (
              <StickerCard
                key={sticker.id}
                sticker={sticker}
                onDownload={downloadSticker}
                onShowToast={showToast}
              />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {generatedStickers.length === 0 && !isLoading && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🎨</div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-white/60">
            Your generated stickers will appear here
          </p>
        </div>
      )}
    </div>
    </>
  );
} 