export function Footer() {
  return (
    <footer className="relative z-20 mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="glass-dark rounded-2xl p-6 text-center">
          <p className="text-white/60 text-sm">
            Generate unlimited stickers with AI • Made with ❤️ By Anubhav
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <span className="text-white/40 text-xs">Created with 💜 by</span>
            <a 
              href="https://www.linkedin.com/in/anubhav-chaudhary-4bba7918b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors duration-300 text-sm font-medium hover:underline"
            >
              Anubhav
            </a>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-white/40 text-xs">Real-time Generation</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 