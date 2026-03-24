# Portfolio Website

A personal portfolio website built with **React** and **Tailwind CSS**, designed to showcase projects, skills, and contact information in a clean, interactive UI.

## Live Demo

[View Live Site](https://portfolio-website-ochre-phi-25.vercel.app/)

---

## Features

- **Transparent Navbar with Scroll Effect** — The navbar uses `useRef` and `window.addEventListener` to detect scroll activity. While scrolling, the navbar background blurs; when the user stops, the border fades out for a clean, minimal look.
- **Project Folders** — Projects are rendered dynamically from a global data array, each displaying the title, description, tech stack, and links to GitHub and live demos.
- **Downloadable CV** — A direct hyperlink allows visitors to download the CV without leaving the page.
- **Social Links** — Icon-based anchor tags link out to external social profiles, opening in a new tab.
- **Vercel Deployment** — The site is continuously deployed via Vercel on every push to the master branch.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI framework |
| Tailwind CSS v4 | Styling |
| Vite | Build tool |
| Vercel | Deployment |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Andy-Ops254/portfolio-website.git

# Navigate into the project
cd portfolio-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Project Structure

```

├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── public
│   ├── gradient.png
│   └── my-cv.pdf
├── README.md
├── src
│   ├── assets
│   ├── Components
│   │   ├── About.jsx
│   │   ├── App.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── TechStack.jsx
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

---

## Deployment

This project is deployed on [Vercel](https://vercel.com). Every push to the `master` branch triggers an automatic deployment.

To deploy your own version:

1. Fork the repository
2. Import the project into Vercel
3. Set the build command to `npm run build` and output directory to `dist`

---

## License

MIT License

Copyright (c) 2026 Andrew Rimongi W.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Author

**Andrew Rimongi W.**