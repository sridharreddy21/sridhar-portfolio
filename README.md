# B. Rama Sridhar Reddy — Developer Portfolio

[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A modern, responsive, high-performance personal developer portfolio website designed and built for **B. Rama Sridhar Reddy**, Computer Science & Engineering student at Amrita Vishwa Vidyapeetham and software developer.

Designed with a premium dark aesthetic inspired by Linear, Vercel, and Raycast, combining OLED black backgrounds with electric cyan, violet, and atmospheric lighting.

---

## 🌟 Key Features

- **Atmospheric Canvas Background**: Interactive particle constellation with physics-based mouse proximity deflection.
- **Hero Telemetry Terminal**: Interactive developer console showcasing live code pipelines across computer vision (`01.vision.py`), algorithmic shortest path routing (`02.dijkstra.py`), and system profiles (`profile.json`).
- **Interactive Project Playground**: Modal simulations allowing evaluators to interact directly with prototypes:
  - *Drowsy-Guard PRO*: Real-time Eye Aspect Ratio (EAR) fatigue threshold simulation.
  - *Traffic Navigation*: Dijkstra route recalculation under simulated urban road congestion.
  - *Movie Booking System*: Interactive cinema seat selection matrix.
  - *Smart Study Planner*: Dynamic task progress tracker and time logger.
  - *Pharmacy Management System*: Inventory tracking and automated POS billing console.
  - *Hotel Management System*: Operational room status and check-in workflow.
- **Dynamic GitHub Sync**: Integrated with the GitHub API (`sridharreddy21`) with graceful offline fallback to verified repository data.
- **In-Browser Curriculum Vitae**: Printable and downloadable resume viewer with dedicated clean print styling.
- **Contact Channel**: Professional inquiry form with instant validation and email draft integration.

---

## 🛠️ Tech Stack

| Domain | Technologies |
|---|---|
| **Core Framework** | React.js 19, Vite 8 |
| **Styling & Design** | Tailwind CSS v4, Glassmorphism, CSS Keyframes |
| **Icons & Motion** | Lucide React, Framer Motion |
| **Typography** | Plus Jakarta Sans, JetBrains Mono, Space Grotesk |
| **Deployment Target** | Vercel / Netlify / GitHub Pages |

---

## 📂 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg             # Custom developer logo favicon
├── src/
│   ├── assets/                 # Static graphical assets
│   ├── components/
│   │   ├── About.jsx           # Background narrative & academic highlight cards
│   │   ├── Achievements.jsx    # Hackathon certificates & CGPA showcase
│   │   ├── Contact.jsx         # Direct channels & contact message form
│   │   ├── Experience.jsx      # Architectural experience timeline
│   │   ├── Footer.jsx          # Dynamic copyright, social links & top scroller
│   │   ├── Hero.jsx            # Hero section with interactive terminal console
│   │   ├── Icons.jsx           # SVG brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx          # Sticky glass navbar with scroll-spy & mobile menu
│   │   ├── ParticleBackground.jsx # HTML5 interactive canvas particle network
│   │   ├── ProjectDemoModal.jsx # Live prototype simulators
│   │   ├── Projects.jsx        # Project showcases & GitHub repo cards
│   │   ├── ResumeModal.jsx     # Printable in-browser CV viewer
│   │   └── Skills.jsx          # Categorized technical arsenal cards
│   ├── data/
│   │   └── portfolioData.js    # Centralized portfolio data models
│   ├── App.css                 # Custom keyframes & glowing animations
│   ├── App.jsx                 # Main application layout
│   ├── index.css               # Tailwind v4 import & glassmorphic utilities
│   └── main.jsx                # React root mount
├── index.html                  # SEO metadata, OpenGraph tags & web fonts
├── package.json
└── vite.config.js              # Vite & Tailwind CSS build configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed.

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sridharreddy21/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

### Production Build

To build the static production bundle:

```bash
npm run build
```

To preview the built bundle locally:

```bash
npm run preview
```

---

## 🌐 Deploying to Vercel / Netlify

This project is configured out of the box for instantaneous one-click deployment:

### Deploy with Vercel
1. Push this repository to GitHub: `https://github.com/sridharreddy21/portfolio`.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the `portfolio` repository.
4. Leave framework preset as **Vite** and click **Deploy**.

---

## 👤 Author

**B. Rama Sridhar Reddy**  
- GitHub: [@sridharreddy21](https://github.com/sridharreddy21)  
- Email: [sridharreddy2112@gmail.com](mailto:sridharreddy2112@gmail.com)  
- Education: B.Tech Computer Science & Engineering, Amrita Vishwa Vidyapeetham  

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
