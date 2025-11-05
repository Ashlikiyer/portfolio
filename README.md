# Ashley Kier Ferreol - Portfolio

A modern, interactive portfolio showcasing cloud engineering expertise, certifications, and projects built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Animated Hero Section** with profile image and typing effects
- **Interactive Skills Cards** with 3D tilt effects and spotlight
- **Professional Certificates** showcase with AWS, Cisco, and DataCamp certifications
- **Featured Projects** including Clash Arena 3D game and CareerAI platform
- **Animated Navigation Menu** with GSAP-powered transitions
- **WebGL Background** with interactive light rays
- **Fully Responsive** design with modern UI/UX

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **GSAP** - Animations
- **OGL** - WebGL graphics

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌐 Deploy to Vercel

This project is ready to deploy to Vercel:

### Quick Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect the Vite framework
6. Click "Deploy"

### Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── CertificateBento.tsx
│   │   ├── LightRays.tsx
│   │   ├── LogoLoop.tsx
│   │   ├── MagicBento.tsx
│   │   ├── StaggeredMenu.tsx
│   │   └── TextType.tsx
│   ├── assets/
│   │   ├── certificates/
│   │   ├── projects/
│   │   └── profile/
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── public/
├── vercel.json
└── package.json
```

## 🎨 Key Sections

- **Hero** - Introduction with animated name and role
- **Skills** - Interactive skill cards showcasing expertise
- **Certificates** - Professional certifications and badges
- **Projects** - Featured work with descriptions and tech stacks
- **Footer** - Contact information and quick links

## ⚙️ Configuration

The project uses:

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint rules (warnings only for deployment)
- `vercel.json` - Vercel deployment configuration

## 📝 Notes

- All linting errors are configured as warnings for smooth deployment
- Build output is optimized for production
- Images are properly optimized and lazy-loaded
- Responsive design works on all screen sizes

## 👤 Author

**Ashley Kier Ferreol**

- Cloud Engineer & Full-Stack Developer
- AWS Certified Solutions Architect & Cloud Practitioner

---

Built with 💜 and coffee by Ashley
