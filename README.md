# Truck Sales Website

A modern, SEO-optimized static website for selling trucks built with Astro.

## 🚀 Features

- **Lightning Fast**: Built with Astro for optimal performance
- **SEO Optimized**: Comprehensive SEO with structured data, sitemaps, and meta tags
- **Responsive Design**: Mobile-first design that works on all devices
- **Performance Optimized**: Lazy loading, image optimization, and service worker caching
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Static Generation**: Fast loading and easy deployment

## 🛠️ Technology Stack

- **Astro**: Static site generator for optimal performance
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Service Worker**: Offline caching and performance
- **Structured Data**: Rich snippets for search engines

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── FeaturedTrucks.astro
│   ├── Features.astro
│   ├── TruckCard.astro
│   ├── TruckFilters.astro
│   └── OptimizedImage.astro
├── data/               # Data files
│   └── trucks.ts
├── layouts/            # Page layouts
│   └── Layout.astro
├── pages/              # Pages and routes
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── trucks/
│   │   ├── index.astro
│   │   └── [id].astro
│   ├── sitemap.xml
│   └── robots.txt
├── scripts/            # JavaScript files
│   └── lazy-loading.js
└── styles/             # CSS files
    ├── global.css
    └── responsive.css
public/                 # Static assets
├── favicon.svg
├── logo.svg
└── sw.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd truck-sales-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

- Responsive navigation with mobile menu
- Touch-friendly buttons and links
- Optimized images for different screen sizes
- Flexible grid layouts
- Dark mode support

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD structured data for rich snippets
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Open Graph**: Social media sharing optimization
- **Canonical URLs**: Duplicate content prevention

## ⚡ Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **Service Worker**: Offline caching and faster loading
- **Image Optimization**: Optimized images with proper sizing
- **Minification**: CSS and JavaScript minification
- **Critical CSS**: Inline critical CSS for faster rendering

## 🎨 Customization

### Adding New Trucks

Edit `src/data/trucks.ts` to add new truck listings:

```typescript
{
  id: 7,
  title: "New Truck Model",
  brand: "Brand",
  model: "Model",
  price: 1000000000,
  // ... other properties
}
```

### Styling

The website uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.mjs` - Tailwind configuration
- `src/styles/global.css` - Global styles
- `src/styles/responsive.css` - Responsive utilities

### SEO Configuration

Update SEO settings in:
- `astro.config.mjs` - Site URL and configuration
- `src/layouts/Layout.astro` - Default meta tags
- Individual page files for page-specific SEO

## 📊 Analytics and Monitoring

To add analytics:

1. Add Google Analytics or other tracking code to `src/layouts/Layout.astro`
2. Configure search console verification
3. Set up performance monitoring

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect Astro
3. Deploy!

### Other Static Hosts

The built `dist/` folder can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## 📈 Performance Metrics

Expected performance scores:
- **Lighthouse Performance**: 95+
- **Lighthouse SEO**: 100
- **Lighthouse Accessibility**: 95+
- **Lighthouse Best Practices**: 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- Email:  lethanhtuan@thaco.com.vn
- Phone: 0900.xxx.xxx

---

Built with ❤️ using Astro and modern web technologies.
