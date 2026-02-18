# AI Engineer Portfolio

A professional, automated portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Automated GitHub Feed:** Fetches your latest repositories via GitHub API.
- **Manual Project Case Studies:** Detailed breakdown of complex AI projects.
- **Responsive Design:** Dark mode aesthetic with glassmorphism effects.
- **Contact Form:** Integrated mailto link generator.

## Setup

1.  **Install Dependencies:**
    ```bash
    npm install
    npm install framer-motion lucide-react clsx tailwind-merge date-fns
    ```

2.  **Configuration:**
    - Edit `lib/config.ts` to update your bio, skills, and manual projects.
    - The GitHub feed automatically fetches from user `FATHIMA-ROSHINI`. To change this, edit `lib/github.ts`.

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```

4.  **Build for Production:**
    ```bash
    npm run build
    npm start
    ```

## Deployment

Deploy to Vercel for zero-config deployment:
1.  Push this repo to GitHub.
2.  Import into Vercel.
3.  Deploy.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Lucide React
- **Animation:** Framer Motion
- **Data:** GitHub API
