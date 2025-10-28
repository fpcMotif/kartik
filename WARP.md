# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development

```bash
bun run dev          # Start development server (http://localhost:3000)
bun run build        # Build for production
bun start            # Start production server
bun run lint         # Run ESLint to check for code issues
```

### Environment Variables

The following environment variable must be set:

- `GITHUB_TOKEN`: Required for GitHub API integration to fetch contribution data

## Architecture Overview

### Tech Stack

- **Framework**: Next.js 15 (App Router with React 19)
- **Styling**: Tailwind CSS 4 with custom animations
- **UI Components**:
  - shadcn/ui (New York style, with RSC support)
  - Aceternity UI
  - MagicUI components
  - Radix UI primitives
- **Animation**: Framer Motion
- **Type System**: TypeScript with strict mode enabled
- **APIs**: GitHub Octokit for contribution data

### Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── api/                 # API routes
│   │   └── github-contributions/  # GitHub data fetching endpoint
│   ├── blogs/               # Blog listing and detail pages
│   │   └── [id]/           # Dynamic blog routes
│   ├── projects/            # Project listing and detail pages
│   │   └── [id]/           # Dynamic project routes
│   ├── layout.tsx          # Root layout with theme provider
│   └── page.tsx            # Home page
├── components/              # React components (organized flat)
│   ├── ui/                 # Base UI primitives
│   └── magicui/            # MagicUI components
├── data/                    # Static data sources
│   ├── projects.ts         # Project portfolio data
│   └── blogs.ts            # Blog content data
├── lib/                     # Utility functions
│   ├── github.ts           # GitHub API integration
│   ├── animations.ts       # Animation configurations
│   └── utils.ts            # General utilities
├── types/                   # TypeScript type definitions
│   ├── project.ts          # Project data types
│   └── blog.ts             # Blog post types
└── fonts/                   # Custom font files
```

### Key Architectural Patterns

**Data Layer**

- Static content is stored in `src/data/` as TypeScript objects (projects and blogs)
- Each data type has corresponding TypeScript interfaces in `src/types/`
- Dynamic GitHub contribution data is fetched via API route at `/api/github-contributions`
- Fallback data provided in `github.ts` if API fails

**Routing**

- Uses Next.js App Router with file-based routing
- Dynamic routes use `[id]` pattern for projects and blogs
- Individual not-found pages at `/blogs/not-found` and default 404 handling

**Component Organization**

- Flat component structure in `src/components/` (no deep nesting)
- UI primitives live in `components/ui/`
- Feature components at root level (e.g., `NewHeroSection`, `ProfileHeader`)
- Components are client-side by default (`'use client'` directive)

**Styling Approach**

- Path alias: `@/*` maps to `./src/*`
- Tailwind configured via `components.json` (shadcn/ui config)
- Custom animations using Framer Motion with `Reveal` wrapper component
- Dark mode via `next-themes` with system preference support

**Video Integration**

- Uses `next-video` for optimized video handling
- Video metadata stored in `/videos/*.mp4.json`
- Projects reference videos by string ID (e.g., `video: 'mind-mentor'`)

### Data Management

**Adding New Projects**

1. Add project object to `src/data/projects.ts` following the `Project` interface
2. Include video metadata file in `/videos/` if applicable
3. Project images go in `/public/images/`
4. Videos are referenced by ID string, not full path

**Adding New Blogs**

1. Add blog post to `src/data/blogs.ts` following the `BlogPost` interface
2. Content uses markdown format (rendered via `react-markdown`)
3. External blog posts link via `externalUrl` field

### GitHub Integration

The portfolio fetches merged pull requests from external repositories (excluding self-owned repos):

- Uses Octokit REST API with token authentication
- Implements conventional commit parsing for PR categorization
- Falls back to hardcoded contributions if API unavailable
- Only displays contributions to OTHER users' repositories

### Important Notes

- The app uses React 19 and Next.js 15 features
- TypeScript is configured with strict mode and ES2017 target
- All pages should include proper metadata for SEO
- The site is deployed at `kartik017.vercel.app`
- Background music feature controlled via `BackgroundMusic` component
- OnekoCat interactive element on homepage
- Google site verification meta tag in layout
- Refix.ai analytics script integrated
