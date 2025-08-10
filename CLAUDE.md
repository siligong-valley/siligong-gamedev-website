# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based website for the Siligong Gamedev community, part of the Siligong Valley Community in Wollongong. The project was exported from Figma Make and uses a modern tech stack with shadcn/ui components.

## Technology Stack

- **Runtime**: Bun (configured in mise.toml)
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with comprehensive design system
- **Components**: shadcn/ui component library
- **Assets**: Figma assets with custom fallback handling

## Architecture

### Component Structure
- `App.tsx`: Main application component rendering all sections sequentially
- `components/`: Main feature components (Hero, About, Events, Community, Contact, Footer)
- `components/ui/`: Complete shadcn/ui component library with custom styling
- `components/figma/`: Figma-specific utilities, primarily ImageWithFallback for asset handling

### Design System
The project uses a comprehensive design system defined in `styles/globals.css`:
- Custom font stack: Arial Round Pro → Varela Round → Comfortaa → Nunito → Arial
- Full light/dark theme support with CSS custom properties
- OKLCH color system for better color consistency
- Comprehensive component theming via CSS variables

### Asset Handling
- Figma assets imported with `figma:asset/` prefix
- `ImageWithFallback` component provides graceful fallback for broken images
- Unsplash images used for backgrounds (see Attributions.md)

## Development Commands

Since this project uses Bun and has no package.json visible, common commands would be:
- `bun run dev` - Start development server (typical for React projects)
- `bun run build` - Build for production
- `bun install` - Install dependencies

## Code Conventions

### Component Patterns
- Functional components with TypeScript
- Props destructuring in function parameters
- Lucide React for icons
- shadcn/ui components with custom styling via `cn()` utility

### Styling
- Tailwind CSS classes for styling
- `cn()` utility function (clsx + tailwind-merge) for conditional classes
- CSS custom properties for theming
- Responsive design with mobile-first approach

### Import Patterns
- UI components from `./ui/[component]`
- Lucide icons as named imports
- Figma assets with `figma:asset/` prefix
- Custom utilities from `./figma/` directory

## Key Features

The website includes sections for:
- Hero landing with community branding
- About section with feature highlights
- Events listing and management
- Community information
- Contact details
- Footer with social links

All components follow consistent patterns and use the established design system for cohesive styling and behavior.