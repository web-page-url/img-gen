# 🎨 AI Sticker Magic - Ultimate Sticker Generator

A stunning, AI-powered sticker generator that creates amazing custom stickers from text descriptions. Built with Next.js 15, React 19, and powered by HiDream AI.

![AI Sticker Magic](https://img.shields.io/badge/AI%20Sticker-Magic-purple?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **AI-Powered Creation** - Advanced AI generates unique stickers from text descriptions
- ⚡ **Lightning Fast** - Get custom stickers in seconds
- 🎯 **Multiple Styles** - Choose from 6 different artistic styles:
  - 🥰 Cute & Kawaii
  - 🎨 Cartoon
  - ✨ Minimalist
  - 🌈 Retro
  - 🌸 Anime
  - 🎭 Street Art
- 📱 **Mobile Responsive** - Perfect experience on all devices
- 💾 **Instant Download** - Download stickers immediately in high quality
- 🔄 **Unlimited Usage** - Create as many stickers as you want
- 🌟 **Beautiful UI** - Eye-catching design with glassmorphism effects
- 🎭 **Smooth Animations** - Delightful micro-interactions and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- ImageRouter API key from [imagerouter.io](https://imagerouter.io)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-sticker-generator.git
   cd ai-sticker-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local
   
   # Edit .env.local and add your API key
   # IMAGEROUTER_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Frontend**: React 19.0.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **AI Service**: HiDream AI via ImageRouter API
- **Fonts**: Geist Sans & Geist Mono

## 🎨 Usage

1. **Choose Your Style**: Select from 6 artistic styles (Cute, Cartoon, Minimal, etc.)
2. **Describe Your Idea**: Enter a text description of your desired sticker
3. **Generate**: Click the "Generate Sticker" button
4. **Download**: Save your AI-generated sticker instantly

### Example Prompts

- "A happy cat wearing sunglasses"
- "Rainbow unicorn with sparkles"
- "Cute panda eating bamboo"
- "Smiling avocado with arms"
- "Dancing pizza slice"
- "Magical crystal gem"

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Required: ImageRouter API Key
IMAGEROUTER_API_KEY=your_api_key_here

# Optional: App configuration
NEXT_PUBLIC_APP_NAME=AI Sticker Magic
```

### Security Notes

- ✅ **Never commit `.env.local` to Git** - it's automatically ignored
- ✅ **Use `.env.example` as a template** for team members
- ✅ **Store production keys securely** in your deployment platform
- ✅ **API key is server-side only** - never exposed to clients

### API Configuration

The app uses multiple AI models through ImageRouter:
- **SDXL Turbo**: Fast generation with great quality
- **Gemini Flash**: Google's latest AI with creative flair  
- **FLUX Schnell**: High-quality artistic generation
- **HiDream AI**: Premium model (when available)
- **Chroma**: Vibrant color-focused generation

## 📱 Mobile Experience

The app is fully responsive and provides an excellent experience on:
- 📱 Mobile phones
- 📟 Tablets  
- 💻 Desktop computers

## 🎭 Design Features

- **Glassmorphism Effects**: Modern glass-like UI elements
- **Gradient Backgrounds**: Beautiful animated gradient backgrounds
- **Smooth Animations**: Hover effects, loading states, and transitions
- **Custom Animations**: Blob animations, pulse effects, and more
- **Dark Theme**: Eye-friendly dark interface
- **Modern Typography**: Clean, readable fonts

## 🚀 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**
2. **Connect your repository to Vercel**
3. **Add environment variables in Vercel dashboard:**
   - Go to Settings → Environment Variables
   - Add `IMAGEROUTER_API_KEY` with your API key
4. **Deploy with one click**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**Live Demo**: [https://sticker-magic.vercel.app](https://sticker-magic.vercel.app)

### Deploy to Netlify

1. **Build the project**: `npm run build`
2. **Add environment variables in Netlify:**
   - Go to Site Settings → Environment Variables
   - Add `IMAGEROUTER_API_KEY` with your API key
3. **Upload the `out` folder to Netlify**

### Other Platforms

For any deployment platform, ensure you set the environment variable:
```bash
IMAGEROUTER_API_KEY=your_actual_api_key_here
```

## 🛡️ Features Overview

| Feature | Description | Status |
|---------|-------------|---------|
| AI Generation | Text-to-sticker with AI | ✅ |
| Multiple Styles | 6 different artistic styles | ✅ |
| Mobile Responsive | Works on all devices | ✅ |
| Instant Download | Download generated stickers | ✅ |
| Beautiful UI | Modern glassmorphism design | ✅ |
| Smooth Animations | Micro-interactions | ✅ |
| Loading States | User feedback during generation | ✅ |
| Error Handling | Graceful error management | ✅ |

## 🎯 Future Enhancements

- [ ] User accounts and saved stickers
- [ ] Batch sticker generation
- [ ] Custom size options
- [ ] Sticker collections and categories
- [ ] Social sharing features
- [ ] Advanced editing tools

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **HiDream AI** for the powerful image generation
- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first styling
- **Vercel** for hosting and deployment

---

## 🎨 **SEO & Branding**

### **🖼️ Custom Branding**
- **Custom favicon and app icons** generated from your sticker image
- **Social media preview cards** with your branding
- **Progressive Web App (PWA)** capabilities
- **Brand colors and theme** throughout the interface

### **🚀 SEO Optimization**
- **Comprehensive meta tags** for search engines
- **Open Graph tags** for social media sharing
- **Twitter Card optimization** for Twitter previews
- **Structured data (JSON-LD)** for rich snippets
- **Sitemap.xml** for search engine indexing
- **Robots.txt** for crawler guidance
- **Perfect Lighthouse scores** for performance and SEO

### **📱 App Icons & Favicons**
The app automatically generates all required icon sizes from `public/Sticker-magic-1.png`:
- `favicon.ico` (32x32) - Browser tab icon
- `favicon.png` (32x32) - Modern PNG favicon
- `icon-192.png` (192x192) - PWA icon
- `icon-512.png` (512x512) - High-res PWA icon
- `apple-icon-180.png` (180x180) - Apple touch icon

**Regenerate icons:** `npm run generate-icons`

## 🛠️ **Development Scripts**

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Generate app icons from your image
npm run generate-icons
```

### **🔧 Icon Customization**
1. Replace `public/Sticker-magic-1.png` with your own image
2. Run `npm run generate-icons` to create all icon sizes
3. Icons are automatically generated before each build

---

**Made with ❤️ and AI Magic** 

🌟 **Star this repo if you found it helpful!** 🌟