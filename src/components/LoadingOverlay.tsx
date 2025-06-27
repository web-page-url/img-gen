interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
}

export function LoadingOverlay({ isVisible, message = "Creating your amazing sticker..." }: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="glass rounded-3xl p-8 max-w-md mx-4 text-center">
        <div className="relative">
          {/* Animated sticker icons */}
          <div className="flex justify-center items-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce animation-delay-2000"></div>
              <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-ping animation-delay-4000"></div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">
            ✨ AI Magic in Progress
          </h3>
          <p className="text-white/70 mb-6">
            {message}
          </p>
          
          {/* Progress bar animation */}
          <div className="w-full bg-white/20 rounded-full h-2 mb-4">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full animate-pulse" style={{
              width: '70%',
              animation: 'progress 3s ease-in-out infinite'
            }}></div>
          </div>
          
          <p className="text-white/50 text-sm">
            This usually takes a few seconds...
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
} 