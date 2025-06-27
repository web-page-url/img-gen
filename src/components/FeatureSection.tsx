export function FeatureSection() {
  const features = [
    {
      icon: '🎨',
      title: 'AI-Powered Creation',
      description: 'Advanced AI generates unique stickers from your text descriptions'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Get your custom stickers in seconds, not minutes'
    },
    {
      icon: '🎯',
      title: 'Multiple Styles',
      description: 'Choose from cute, cartoon, minimal, retro, anime, and street art styles'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Perfect experience on all devices - phone, tablet, or desktop'
    },
    {
      icon: '💾',
      title: 'Instant Download',
      description: 'Download your stickers immediately in high quality'
    },
    {
      icon: '🔄',
      title: 'Unlimited Usage',
      description: 'Create as many stickers as you want with no limits'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto mt-16 mb-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why You'll Love Our AI Sticker Generator
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Powerful features designed to make sticker creation effortless and fun
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="glass rounded-2xl p-6 hover-scale group transition-all duration-300"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 