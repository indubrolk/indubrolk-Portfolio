# Desktop Portfolio

A desktop-inspired portfolio built with Next.js and Tailwind CSS. The experience mimics an OS desktop with a dock, draggable windows, and animated sections to highlight projects, skills, and contact links.

## Features

- OS-style layout with a dock, desktop icons, and windowed panels for sections
- Hero section with rotating headline copy and quick navigation to About, Projects, and Contact
- Project cards with tech stack tags and outbound links
- Content showcase for articles and videos
- Contact shortcuts for email and social profiles
- Fully responsive styling with Tailwind CSS

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react) for icons
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Three.js](https://threejs.org/) for 3D graphics

## Getting Started

Prerequisites: Node.js 18+ and npm (or pnpm/yarn/bun).

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

- `src/app/page.jsx`: Main page UI, sections, and data.
- `src/app/layout.js`: The main layout for the application.
- `src/components/`: Contains all the React components.
  - `AppShell.jsx`: The main shell of the application.
  - `Dock.jsx`: Dock menu and quick-launch icons.
  - `DesktopWindow.jsx`: Window wrapper used across sections.
  - `ContentShowcase.jsx`: Component to showcase articles and videos.
  - `Footer.jsx`: The footer of the application.
- `src/lib/`: Contains utility functions and data.
- `public/`: Static assets like images and icons.

## Customization

- Update menu items, projects, articles, and videos in the respective data files in `src/lib/`.
- Swap profile imagery in `public/` and adjust hero copy as needed.
- Tweak colors/spacing in `src/app/globals.css` or component-level classes.

## Deployment

Deploy to Vercel for best out-of-the-box support (`next build` / `next start` ready). Any Next.js-compatible host works as long as it runs Node 18+.
