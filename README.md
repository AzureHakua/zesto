# Zesto Pizza 🍕

A modern, responsive web application for a local pizza business featuring an interactive menu showcase and streamlined ordering flow. **Currently live and serving customers** with deployment on Cloudflare Pages for optimal performance and global reach.

## 🚀 Live Demo

[View Live Site](https://zestospizza.com/) | [View Repository](https://github.com/AzureHakua/zesto)

## ✨ Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Interactive Menu** - Dynamic menu cards with category filtering and detailed item displays
- **Hero Section** - Eye-catching landing area with call-to-action
- **Order Integration** - Seamless flow directing customers to delivery platforms
- **Performance Optimized** - Image optimization, lazy loading, and SEO-friendly structure
- **Modern UI/UX** - Clean, professional design with smooth animations and hover effects

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - Modern state management

### Development & Deployment
- **Cloudflare Pages** - Global CDN with edge optimization
- **ESLint** - Code linting and formatting
- **Responsive Images** - Next.js Image component with optimization

## 🏗️ Architecture

The application follows Next.js 14 App Router conventions with a component-based architecture:

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx           # Home page with hero section
│   ├── menu/page.tsx      # Interactive menu display
│   └── order/page.tsx     # Order flow integration
├── components/
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   └── MenuCard.tsx       # Reusable menu item card
└── public/
    └── images/            # Optimized image assets
```

## 🎨 Key Components

### MenuCard Component
Reusable component featuring:
- Dynamic pricing display (single price vs. small/large options)
- Category badges
- Optimized image loading with Next.js Image component
- Responsive design with hover effects

### Hero Section
- Full-screen responsive hero with background image
- Overlay effects for text readability
- Clear call-to-action button
- Mobile-optimized typography

### Features Section
- Three-column grid layout (responsive)
- Custom SVG icons
- Consistent spacing and typography

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd pizza-shop-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production
```bash
npm run build
npm run export  # For Cloudflare Pages static export
```

## 📱 Responsive Design

The application implements a mobile-first approach with breakpoints:
- **Mobile**: < 768px - Single column layout, touch-optimized interactions
- **Tablet**: 768px - 1024px - Two-column menu grid, adjusted spacing
- **Desktop**: > 1024px - Three-column layout, full hero section

## ⚡ Performance Optimizations

- **Image Optimization** - Next.js Image component with proper sizing and lazy loading
- **Code Splitting** - Automatic route-based code splitting
- **SEO Optimized** - Meta tags, semantic HTML, and proper heading structure
- **Fast Loading** - Optimized bundle size and efficient rendering

## 🎯 Business Impact

This project demonstrates:
- **Client Satisfaction** - Live website actively used by pizza shop customers
- **User Experience Focus** - Intuitive navigation and clear ordering process
- **Technical Proficiency** - Modern React patterns and performance optimization
- **Responsive Development** - Cross-device compatibility
- **Production Deployment** - Cloudflare Pages with global CDN delivery
- **Real-World Application** - Generating actual business value for local restaurant

## 🔧 Development Highlights

- **TypeScript Integration** - Type-safe props and component interfaces
- **Component Architecture** - Reusable, maintainable components
- **Styling System** - Consistent design system with Tailwind CSS
- **Performance Monitoring** - Image priority loading for above-the-fold content

---

*This project showcases modern web development practices including responsive design, performance optimization, and user-centered design principles.*