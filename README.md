# Anima Project - Next.js 16

This project has been migrated from Vite to Next.js 16 with App Router.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

To create a production build:

```bash
npm run build
```

To run the production build:

```bash
npm start
```

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/src/components` - Reusable UI components
- `/src/screens` - Page sections and screen components
- `/src/lib` - Utility functions
- `/public` - Static assets

## Technologies

- **Next.js 16** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - UI component library (Radix UI primitives)
- **Lucide React** - Icon library

## Migration Notes

This project was automatically converted from Vite to Next.js 16:
- Added "use client" directives to components using hooks and interactivity
- Migrated Tailwind configuration to TypeScript
- Set up Next.js App Router with `app/` directory
- Configured Google Fonts (Roboto, Acme) in the layout
- All existing components and functionality preserved
