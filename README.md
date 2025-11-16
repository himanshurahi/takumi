# Takumi – Asian Kitchen

A modern, elegant restaurant portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern Asian/Japanese aesthetic design
- 📱 Fully responsive layout
- 🎭 Smooth animations and transitions
- 🍱 Menu with category filtering
- 📸 Gallery showcase
- 📝 Contact form
- 🎯 SEO optimized

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the production version:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Project Structure

```
takumi/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AboutPreview.tsx
│   ├── ChefSection.tsx
│   ├── ContactForm.tsx
│   ├── ContactInfo.tsx
│   ├── Footer.tsx
│   ├── GalleryGrid.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── MenuCard.tsx
│   ├── MenuList.tsx
│   └── MenuPreview.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Color Palette

- **Takumi Black**: `#1a1a1a`
- **Takumi Red**: `#c41e3a`
- **Takumi Beige**: `#f5f1e8`
- **White**: `#ffffff`

## Customization

### Menu Items

Edit menu items in `components/MenuList.tsx` to add or modify dishes.

### Contact Information

Update contact details in:
- `components/ContactInfo.tsx`
- `components/Footer.tsx`

### Images

Replace placeholder images with your own. Update image URLs in:
- `components/MenuList.tsx`
- `components/GalleryGrid.tsx`
- `components/AboutPreview.tsx`
- `components/ChefSection.tsx`

## License

This project is created for Takumi – Asian Kitchen.

