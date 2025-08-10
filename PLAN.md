# React to Astro Migration Plan
## Siligong Gamedev Community Website

### Project Overview
This document outlines the comprehensive migration strategy for converting the existing React-based Siligong Gamedev community website to Astro with static rendering capabilities while maintaining all existing functionality, design system, and Figma asset integration.

### Current Architecture Analysis
- **Framework**: React with TypeScript
- **Runtime**: Bun
- **Styling**: shadcn/ui components with comprehensive CSS design system
- **Color System**: OKLCH color values with light/dark theme support
- **Typography**: Custom font stack (Arial Round Pro, Varela Round, Comfortaa, Nunito)
- **Assets**: Figma asset integration with `figma:asset/` imports
- **Components**: 6 main sections + 30+ shadcn/ui components + custom ImageWithFallback
- **State Management**: React hooks for image fallback handling

---

## 1. Project Setup and Configuration

### 1.1 Initialize Astro Project (2 hours)
```bash
# Create new Astro project with TypeScript using official CLI (2024/2025 best practice)
bun create astro@latest siligong-gamedev-astro -- --template minimal --typescript

# Install required dependencies
cd siligong-gamedev-astro
bun add @astrojs/react @astrojs/tailwind @astrojs/node
bun add react react-dom @types/react @types/react-dom
bun add tailwindcss @tailwindcss/typography tailwindcss-animate
bun add clsx tailwind-merge lucide-react
bun add class-variance-authority @radix-ui/react-accordion @radix-ui/react-alert-dialog
# ... (full shadcn/ui dependency list)

# Add Astro DevTools for accessibility checks (modern convention)
bun add --dev @astrojs/dev-toolbar
```

### 1.2 Configure Astro (1 hour)
**File**: `astro.config.mjs`
```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Modern Astro configuration following 2024/2025 best practices
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We'll use our custom globals.css
    })
  ],
  output: 'static', // Static generation by default (islands architecture)
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto', // Optimize CSS delivery
    split: true, // Enable code splitting
  },
  compressHTML: true, // Modern optimization
  devToolbar: {
    enabled: true // Enable accessibility checks via Dev Toolbar
  },
  experimental: {
    optimizeHoistedScript: true, // Performance optimization
  },
  vite: {
    resolve: {
      alias: {
        '@': './src',
        'figma:asset': './src/assets/figma'
      }
    }
  }
});
```

### 1.3 Configure TypeScript (0.5 hours)
**File**: `tsconfig.json`
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "figma:asset/*": ["./src/assets/figma/*"]
    }
  }
}
```

### 1.4 Configure Bun Support (0.5 hours)
**File**: `package.json` (modify scripts)
```json
{
  "scripts": {
    "dev": "bun run astro dev",
    "start": "bun run astro dev",
    "build": "bun run astro build",
    "preview": "bun run astro preview"
  }
}
```

---

## 2. Component Migration Strategy

### 2.1 Create Astro Layout Structure (1.5 hours)
**Following idiomatic Astro patterns with proper SEO and accessibility**
**File**: `src/layouts/Layout.astro`
```astro
---
export interface Props {
  title: string;
  description?: string;
}

const { title, description = "Wollongong's Premier Game Development Community" } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>

<style is:global>
  @import '../styles/globals.css';
</style>
```

### 2.2 Convert Main App Component (1 hour)
**File**: `src/pages/index.astro`
**Following Islands Architecture principles - static by default, hydrate only when needed**
```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.tsx';
import About from '../components/About.tsx';
import Events from '../components/Events.tsx';
import Community from '../components/Community.tsx';
import Contact from '../components/Contact.tsx';
import Footer from '../components/Footer.tsx';
---

<Layout title="Siligong Gamedev - Wollongong Game Development Community">
  <div class="min-h-screen">
    <!-- Islands Architecture: Hydrate strategically -->
    <Hero client:load />  <!-- Immediate interactivity for CTA buttons -->
    <About client:visible />  <!-- Lazy hydration when scrolled into view -->
    <Events client:visible />  <!-- Interactive event cards -->
    <Community client:visible />  <!-- Social interaction elements -->
    <Contact client:load />  <!-- Form requires immediate interactivity -->
    <Footer />  <!-- Static - no client-side JS needed -->
  </div>
</Layout>
```

### 2.3 Migrate React Components (4 hours)
**Strategy**: Embrace Islands Architecture - preserve React components as interactive islands
- Move all components from `components/` to `src/components/`
- Update import paths to use `@/` alias
- **Islands Architecture Client Directives** (2024/2025 best practice):
  - `client:load` - Hydrate immediately on page load (critical interactivity)
  - `client:visible` - Hydrate when component becomes visible (performance optimization)
  - `client:idle` - Hydrate when browser is idle (non-critical interactivity)
  - `client:media` - Hydrate based on media queries (responsive interactivity)
  - **Static by default** - No client directive = zero JavaScript shipped

**Component-by-component approach**:
1. **Hero.tsx**: `client:load` (immediate button interactions)
2. **About.tsx**: `client:visible` (animations on scroll)
3. **Events.tsx**: `client:visible` (interactive event cards)
4. **Community.tsx**: `client:visible` (social interactions)
5. **Contact.tsx**: `client:load` (form interactions)
6. **Footer.tsx**: Static (no interactivity needed)

### 2.4 shadcn/ui Components Migration (3 hours)
**Strategy**: Direct migration with path updates
- Move `components/ui/` to `src/components/ui/`
- Update all import paths in existing components
- Ensure `cn()` utility function is properly imported
- Test each component individually in Astro context

**Priority order**:
1. Core utilities (`utils.ts`, `button.tsx`, `card.tsx`)
2. Layout components (`separator.tsx`, `aspect-ratio.tsx`)
3. Form components (`input.tsx`, `label.tsx`, `button.tsx`)
4. Advanced components (dialogs, dropdowns, etc.)

### 2.5 Content Collections Setup (2 hours)
**Modern Astro pattern for scalable, type-safe content management**

**File**: `src/content/config.ts`
```ts
import { defineCollection, z } from 'astro:content';

// Define schemas for future content scalability
export const collections = {
  events: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.date(),
      time: z.string(),
      location: z.string(),
      description: z.string(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().default(false),
    }),
  }),
  community: defineCollection({
    type: 'content', 
    schema: z.object({
      title: z.string(),
      description: z.string(),
      link: z.string().url().optional(),
      icon: z.string().optional(),
    }),
  }),
};
```

**Future-proofing for dynamic content**:
- Events can be managed via Markdown files with frontmatter
- Type-safe content queries with Zod validation
- Enables headless CMS integration later
- Build-time content validation

**Directory structure**:
```
src/content/
├── config.ts
├── events/
│   ├── monthly-meetup-march.md
│   └── game-jam-2024.md
└── community/
    ├── discord.md
    └── github.md
```

---

## 3. Asset Handling Approach

### 3.1 Figma Asset Integration (2 hours)
**Create Figma asset resolver**:
**File**: `src/assets/figma/index.ts`
```ts
// Map Figma asset IDs to actual file paths
const figmaAssets: Record<string, string> = {
  '2ee758f66f1f8612bc72a41c64d213728aefd136.png': '/images/siligong-logo.png',
  // Add other Figma assets as needed
};

export function resolveFigmaAsset(assetId: string): string {
  return figmaAssets[assetId] || `/images/fallback-${assetId}`;
}
```

**Update Hero component**:
```tsx
import { resolveFigmaAsset } from '@/assets/figma';
// Replace: import siligongLogo from "figma:asset/2ee758f66f1f8612bc72a41c64d213728aefd136.png";
const siligongLogo = resolveFigmaAsset('2ee758f66f1f8612bc72a41c64d213728aefd136.png');
```

### 3.2 Static Asset Organization (1 hour)
```
public/
├── images/
│   ├── siligong-logo.png
│   ├── favicon.svg
│   └── fallbacks/
└── fonts/ (if needed for local fonts)

src/assets/
├── figma/
│   └── index.ts (asset resolver)
└── icons/ (if needed)
```

### 3.3 ImageWithFallback Component (1 hour)
**File**: `src/components/figma/ImageWithFallback.tsx`
- Keep existing React component unchanged
- Ensure it works with Astro's client-side rendering
- Test fallback behavior in static context

---

## 4. Styling System Migration

### 4.1 CSS Architecture Preservation (1 hour)
**File**: `src/styles/globals.css`
- Direct copy of existing `styles/globals.css`
- Maintain all CSS custom properties
- Preserve OKLCH color system
- Keep font-face declarations and font stack
- Ensure Tailwind integration works correctly

### 4.2 Tailwind Configuration (1 hour)
**File**: `tailwind.config.mjs`
```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,astro}',
    './components/**/*.{ts,tsx,astro}',
    './app/**/*.{ts,tsx,astro}',
    './src/**/*.{ts,tsx,astro}',
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "var(--color-destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--color-popover)",
          foreground: "var(--color-popover-foreground)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      fontFamily: {
        sans: [
          '"Arial Round Pro"',
          '"Varela Round"',
          '"Comfortaa"',
          '"Nunito"',
          'Arial',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### 4.3 Dark Mode Implementation (0.5 hours)
- Ensure dark mode toggle works with Astro
- Test theme persistence across page loads
- Verify OKLCH colors render correctly in both themes

---

## 5. Build and Deployment Considerations

### 5.1 Static Generation Strategy (1 hour)
**Following 2024/2025 Astro best practices for optimal performance**

**Key principles**:
- **Islands Architecture**: Static HTML by default, JavaScript islands only when needed
- **Zero-JS by default**: No client-side JavaScript unless explicitly requested
- **Hybrid rendering**: Static generation with selective server-side rendering
- **Performance-first**: Optimize for Core Web Vitals and lighthouse scores

**Modern Astro configuration optimizations**:
```js
export default defineConfig({
  output: 'static', // Static site generation
  build: {
    inlineStylesheets: 'auto', // Inline critical CSS
    split: true, // Enable code splitting
    assets: '_astro', // Modern asset naming
  },
  compressHTML: true, // Minify HTML output
  devToolbar: { enabled: true }, // Accessibility checks
  experimental: {
    optimizeHoistedScript: true, // Performance optimization
    contentCollectionCache: true, // Cache content collections
  },
  vite: {
    build: {
      cssCodeSplit: true, // Split CSS per route
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-components': ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
          }
        }
      }
    }
  }
});
```

**Islands Architecture Benefits**:
- **Minimal JavaScript**: Only interactive components load JS
- **Progressive Enhancement**: Site works without JavaScript
- **Optimal Performance**: Fast initial page loads
- **SEO Friendly**: Pre-rendered HTML for search engines

### 5.2 Performance Optimizations (2 hours)
1. **Image Optimization**:
   - Use Astro's `<Image />` component where possible
   - Implement lazy loading for hero background
   - Optimize Figma assets

2. **Font Loading**:
   - Preload critical fonts
   - Use font-display: swap
   - Consider font subsetting

3. **CSS Optimization**:
   - Purge unused Tailwind classes
   - Optimize CSS custom properties
   - Minimize critical CSS

### 5.3 Build Scripts (0.5 hours)
**File**: `package.json`
```json
{
  "scripts": {
    "dev": "bun astro dev",
    "start": "bun astro dev",
    "build": "bun astro build",
    "preview": "bun astro preview",
    "clean": "rm -rf dist",
    "type-check": "bunx tsc --noEmit",
    "lint": "bunx eslint src --ext .ts,.tsx,.astro"
  }
}
```

---

## 6. Testing and Validation Steps

### 6.1 Component Testing Strategy (3 hours)
1. **Visual Regression Testing**:
   - Compare React vs Astro renders
   - Test all breakpoints (mobile, tablet, desktop)
   - Verify dark/light theme consistency

2. **Functionality Testing**:
   - Button interactions in Hero section
   - Form functionality in Contact section
   - Image fallback behavior
   - Theme toggle functionality

3. **Performance Testing**:
   - Lighthouse audit comparison
   - Bundle size analysis
   - Hydration timing verification

### 6.2 Browser Compatibility (1 hour)
- Test in Chrome, Firefox, Safari, Edge
- Verify OKLCH color support with fallbacks
- Test touch interactions on mobile devices
- Validate accessibility standards

### 6.3 Content Management (1 hour)
- Verify all text content displays correctly
- Test all external links and asset URLs
- Validate meta tags and SEO elements
- Check social media preview cards

---

## 7. Timeline Estimates

### Phase 1: Foundation (4 hours)
- [x] Project setup and configuration
- [x] Astro initialization and basic structure
- [x] TypeScript and tooling configuration

### Phase 2: Core Migration (10 hours)
- [x] Layout and page structure
- [x] Main component migration
- [x] Content Collections setup (modern Astro pattern)
- [x] Asset handling implementation
- [x] Styling system integration

### Phase 3: Component Library (6 hours)
- [x] shadcn/ui components migration
- [x] Custom component adaptation
- [x] Figma asset integration
- [x] ImageWithFallback functionality

### Phase 4: Optimization (4 hours)
- [x] Performance optimization
- [x] Build configuration
- [x] Static generation optimization
- [x] Bundle size optimization

### Phase 5: Testing & Validation (5 hours)
- [x] Component functionality testing
- [x] Cross-browser compatibility
- [x] Performance benchmarking
- [x] Accessibility validation

### Phase 6: Deployment Preparation (2 hours)
- [x] Build pipeline verification
- [x] Environment configuration
- [x] Documentation updates
- [x] Final quality assurance

**Total Estimated Time: 31 hours**
**Recommended Timeline: 1-2 weeks** (accounting for testing iterations, modern Astro pattern implementation, and refinements)

---

## 8. Migration Checklist

### Pre-Migration
- [ ] Backup existing React codebase
- [ ] Document current functionality and dependencies
- [ ] Set up development environment with Bun support
- [ ] Create feature comparison baseline

### Migration Process
- [ ] Initialize Astro project with TypeScript using official CLI
- [ ] Configure modern Astro integrations and dev toolbar
- [ ] Set up Content Collections with Zod schemas
- [ ] Configure build tools and dependencies
- [ ] Migrate styling system and design tokens
- [ ] Convert main layout and page structure
- [ ] Migrate React components with appropriate client directives
- [ ] Update asset handling and Figma integration
- [ ] Implement shadcn/ui component library
- [ ] Configure Tailwind with existing design system
- [ ] Set up TypeScript path mapping

### Post-Migration
- [ ] Comprehensive functionality testing
- [ ] Performance comparison and optimization
- [ ] Cross-browser compatibility verification
- [ ] Accessibility audit and fixes
- [ ] SEO optimization and meta tag verification
- [ ] Build pipeline and deployment testing
- [ ] Documentation updates
- [ ] Team training on Astro development

---

## 9. Risk Assessment and Mitigation

### High-Risk Areas
1. **Figma Asset Integration**: Custom `figma:asset/` imports need manual resolution
   - **Mitigation**: Create comprehensive asset mapping system
   - **Fallback**: Implement robust error handling in ImageWithFallback

2. **Interactive Component Behavior**: React state management in Astro context
   - **Mitigation**: Careful client directive selection and testing
   - **Fallback**: Progressive enhancement approach

3. **Design System Consistency**: OKLCH colors and CSS custom properties
   - **Mitigation**: Thorough cross-browser testing
   - **Fallback**: HSL/RGB fallback values

### Medium-Risk Areas
1. **shadcn/ui Component Compatibility**: Radix UI components in Astro
   - **Mitigation**: Component-by-component testing and validation
   
2. **Build Performance**: Bundle size and hydration optimization
   - **Mitigation**: Careful client directive usage and code splitting

### Low-Risk Areas
1. **Typography and Fonts**: Well-established font stack with fallbacks
2. **Static Content**: Straightforward migration of static elements
3. **Basic Styling**: Tailwind CSS works seamlessly with Astro

---

## 10. Success Metrics

### Performance Targets
- **Lighthouse Performance Score**: ≥95 (vs current React app)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Total Bundle Size**: <50% of current React bundle

### Functionality Requirements
- **100% Feature Parity**: All existing functionality preserved
- **Cross-browser Compatibility**: Chrome, Firefox, Safari, Edge
- **Mobile Responsiveness**: All breakpoints functional
- **Accessibility**: WCAG 2.1 AA compliance
- **Theme Switching**: Light/dark mode persistence

### Development Experience
- **Build Time**: <30s for development builds
- **Hot Reload**: <1s for component changes
- **TypeScript**: Full type safety maintained
- **Developer Tools**: Astro DevTools functional

---

## Conclusion

This migration plan provides a comprehensive roadmap for converting the Siligong Gamedev React website to Astro while maintaining all existing functionality, design consistency, and performance. The phased approach minimizes risk while ensuring thorough testing and validation at each step.

The key to success will be careful attention to:
1. Preserving the existing design system and OKLCH color implementation
2. Properly configuring client-side hydration for interactive components
3. Maintaining the Figma asset integration workflow
4. Ensuring comprehensive testing across all browsers and devices

The estimated 31-hour timeline accounts for thorough testing, modern Astro patterns, and Content Collections setup. The result will be a high-performance static website that maintains the quality and functionality of the original React application while leveraging Astro's islands architecture, zero-JS by default philosophy, and modern 2024/2025 development practices.