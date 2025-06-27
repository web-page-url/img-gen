export function Header() {
  return (
    <header className="relative z-20 pt-6 pb-4">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
            ✨ AI Sticker Magic ✨
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into <span className="text-pink-400 font-semibold">stunning stickers</span> with the power of AI
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex -space-x-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 border-2 border-white"></div>
            </div>
            <span className="text-white/60 text-sm ml-2">Join 10K+ creators</span>
          </div>
        </div>
      </div>
    </header>
  );
} 