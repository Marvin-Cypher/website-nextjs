# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Work Memories
- Last job for n8n using my email to find leads to Attio
- Learned about priority of deal in sales workflow

## Project Overview

This is a Next.js 15 website for Phala Network, a confidential AI and computing platform. The site is built with TypeScript, React 19, and uses Tailwind CSS for styling.

## Development Commands

```bash
# Start development server (runs on phala.localhost)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Code Quality

The project uses Biome for linting and formatting instead of ESLint/Prettier:

```bash
# Check code with Biome
npx @biomejs/biome check

# Lint with Biome
npx @biomejs/biome lint

# Type checking
npx tsc
```

## Git Workflow

### Remote Repositories
- **origin**: `Phala-Network/website-nextjs` (upstream/main repository)
- **personal**: `Marvin-Cypher/website-nextjs` (personal fork)

### Keep Personal Main Branch Synced
**IMPORTANT**: Always keep the personal fork's main branch synced with Phala Network's main branch.

Before starting new work or when switching to main:
```bash
git checkout main
git fetch origin main
git reset --hard origin/main
git push personal main --force
```

### Branch Workflow
1. **Feature branches**: Create from latest `origin/main`
2. **PR to Phala Network**: Push feature branch to `origin` (Phala-Network)
3. **Vercel Preview**: Push to `personal/main` for public preview deployment

### Vercel Deployment for Public Preview
To deploy feature branch to personal Vercel for public sharing:
```bash
git checkout main
git reset --hard <feature-branch>
git push personal main --force
```

## Architecture

### Content Management
- **Notion Integration**: Content (blog posts, pages) is fetched from Notion databases using the `@notionhq/client` SDK
- **Key files**:
  - `src/lib/notion-client.ts`: Core Notion API client with pagination and retry logic
  - `src/lib/post.ts`: Post-related functions (getPostBySlug, getRecentPosts, etc.)
  - Custom Notion block renderers in `src/components/notion-render/`

### Environment Variables
- Managed via `@t3-oss/env-nextjs` with Zod validation in `src/env.ts`
- Required variables include NOTION_TOKEN and NOTION_POSTS_DATABASE_ID
- See `.env.example` for all available variables

### Routing Structure
- Next.js App Router with TypeScript
- Main pages under `src/app/`:
  - `/` - Home page
  - `/gpu-tee/*` - GPU TEE product pages (including /h100, /h200)
  - `/confidential-ai-models` - AI models page
  - `/dstack` - dStack product page
  - `/posts/[slug]` - Blog posts
  - `/blog` - Blog listing
  - `/pricing` - Pricing page
  - `/partnerships` - Partnerships page
  - `/success-stories/[slug]` - Case studies
  - `/compare/[slug]` - Comparison pages

### Components
- **UI Components**: shadcn/ui components in `src/components/ui/`
- **Product Components**: GPU TEE specific components in `src/components/gpu-tee/`
- **Notion Renderers**: Custom renderers for Notion blocks in `src/components/notion-render/`
- **Shared Components**: Nav, Footer, etc. in `src/components/`

### Data & Configuration
- Static data files in `src/data/`:
  - `gpu-configurations.ts` - GPU TEE configuration data
  - `comparisons.ts` - Comparison data
  - `success-stories-data.ts` - Success stories metadata
- `redirects.ts` - URL redirect configuration

### Styling
- Tailwind CSS v4 with custom configuration
- Global styles in `src/app/globals.css`
- Path alias `@/*` maps to `src/*`

### Analytics & Monitoring
- PostHog integration configured in `next.config.ts`
- Analytics utilities in `src/posthog.ts`

### MDX Support
- MDX pages supported via `@next/mdx`
- MDX layout in `src/app/(mdx-page)/layout.tsx`
- Uses remark-gfm plugin

## Key Patterns

### Notion Content Fetching
Posts are fetched server-side with pagination and retry logic. The `notion-client.ts` handles API rate limits with exponential backoff.

### Image Handling
- Custom image proxy for Notion images via `src/lib/image.ts`
- Images are served through an imgproxy service for optimization

### Type Safety
- Strict TypeScript configuration enabled
- Environment variables validated at build time with Zod schemas

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
