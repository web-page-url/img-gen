import Image from 'next/image';
import { useState } from 'react';

interface StickerCardProps {
  sticker: {
    id: string;
    url: string;
    prompt: string;
  };
  onDownload: (url: string, prompt: string) => Promise<void>;
  onShowToast?: (message: string, type: 'success' | 'error' | 'info') => void;
}

export function StickerCard({ sticker, onDownload, onShowToast }: StickerCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await onDownload(sticker.url, sticker.prompt);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopyPrompt = async () => {
    setIsCopying(true);
    try {
      await navigator.clipboard.writeText(sticker.prompt);
      onShowToast?.('📋 Prompt copied to clipboard!', 'success');
    } catch (error) {
      console.error('❌ Failed to copy prompt:', error);
      onShowToast?.('❌ Failed to copy prompt', 'error');
    } finally {
      setTimeout(() => setIsCopying(false), 1000);
    }
  };

  return (
    <div className="glass-dark rounded-2xl p-4 hover-scale group transition-all duration-300">
      <div className="relative mb-4 overflow-hidden rounded-xl">
        {!imageLoaded && !imageError && (
          <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse rounded-xl flex items-center justify-center">
            <div className="text-white/50">Loading...</div>
          </div>
        )}
        
        {imageError && (
          <div className="w-full h-48 bg-red-500/20 rounded-xl flex items-center justify-center">
            <div className="text-white/50 text-center">
              <div className="text-2xl mb-2">😵</div>
              <div className="text-sm">Failed to load</div>
            </div>
          </div>
        )}
        
        <Image
          src={sticker.url}
          alt={sticker.prompt}
          width={300}
          height={300}
          className={`w-full h-48 object-cover rounded-xl transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-center justify-center gap-3">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`px-4 py-2 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2 ${
              isDownloading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <span>{isDownloading ? '⬇️' : '💾'}</span>
            {isDownloading ? 'Downloading...' : 'Download'}
          </button>
          
          <button
            onClick={handleCopyPrompt}
            disabled={isCopying}
            className={`px-4 py-2 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2 ${
              isCopying ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            title="Copy prompt"
          >
            <span>{isCopying ? '✅' : '📋'}</span>
            {isCopying ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/80 text-sm line-clamp-2 leading-relaxed">
          "{sticker.prompt}"
        </p>
        <div className="flex items-center justify-between">
          <span className="text-white/40 text-xs">
            #{sticker.id.slice(-6)}
          </span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-white/40 text-xs">AI Generated</span>
          </div>
        </div>
      </div>
    </div>
  );
} 