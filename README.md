# indu brolk Desktop Portfolio

A desktop-inspired portfolio built with Next.js 16 and Tailwind CSS 4. The experience mimics an OS desktop with a dock, draggable windows, and animated sections to highlight projects, skills, and contact links.

## Features

- OS-style layout with a dock, desktop icons, and windowed panels for sections
- Hero section with rotating headline copy and quick navigation to About, Projects, and Contact
- Project cards with tech stack tags and outbound links
- Gallery grid for visual work streams (UI, branding, maker, and media)
- Contact shortcuts for email and social profiles
- Fully responsive styling with Tailwind CSS and Radix-inspired UI pieces

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- lucide-react icons, motion for animation, three.js utilities available

## Getting Started

Prereqs: Node.js 18+ and npm (or pnpm/yarn/bun).

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open http://localhost:3000.

Build for production:

```bash
npm run build
```

Start the production build locally:

```bash
npm run start
```

Lint the project:

```bash
npm run lint
```

## Project Structure

- `src/app/page.jsx` � main page UI, sections, and data (projects, gallery, contact links)
- `src/components/Dock.jsx` � dock menu and quick-launch icons
- `src/components/DesktopWindow.jsx` � window wrapper used across sections
- `src/components/DownloadButton.jsx` � download/resume button styling
- `src/app/globals.css` � global styles and desktop background grid
- `public/` � static assets like `profile pic.jpeg`

## Customization

- Update menu items, projects, gallery cards, and contact links in `src/app/page.jsx`.
- Swap profile imagery in `public/` and adjust hero copy as needed.
- Tweak colors/spacing in `src/app/globals.css` or component-level classes.

## Deployment

Deploy to Vercel for best out-of-the-box support (`next build` / `next start` ready). Any Next.js-compatible host works as long as it runs Node 18+.
