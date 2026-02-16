# Food App - PWA

A Progressive Web App (PWA) built with Next.js. Install it on your device for an app-like experience with offline support.

## Features

- **PWA Ready** - Web app manifest, installable on home screen
- **Modern Stack** - Next.js 16, React 19, TypeScript, Tailwind CSS
- **Vercel Optimized** - Zero config deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

```bash
# Install dependencies (already done if you cloned)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel (Automated CI/CD)

### Step 1: Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new)
2. Push your code:

```bash
git remote add origin https://github.com/YOUR_USERNAME/foodapp.git
git branch -M main
git push -u origin main
```

### Step 2: Connect with Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use your GitHub account)
2. Click **Add New Project**
3. Import your `foodapp` repository
4. Vercel auto-detects Next.js - no config needed
5. Click **Deploy**

### Step 3: Automated Deployments

Once connected, every push to `main` will automatically deploy:

- **Production**: Pushes to `main` → deploys to your production URL
- **Preview**: Pull requests get unique preview URLs
- **HTTPS**: Automatic SSL for your PWA (required for install)

## PWA Installation

After deploying, users can install your app:

- **Chrome/Edge**: Click the install icon in the address bar
- **Safari (iOS)**: Share → Add to Home Screen
- **Android**: Browser menu → Add to Home Screen

## Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   ├── manifest.ts   # PWA manifest
│   └── globals.css   # Global styles
public/
├── icon-192x192.png  # PWA icon (small)
└── icon-512x512.png  # PWA icon (large)
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
