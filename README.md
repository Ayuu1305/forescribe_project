# Forescribe Dashboard

A modern, animated dashboard built with Next.js, Tailwind CSS, and Framer Motion. Features a responsive card grid, dark/light theme toggle, and smooth UI animations.

## 🚀 Live Demo

[View Live Demo](https://your-vercel-demo-link.vercel.app)

---

## 📦 Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/forescribe-dashboard.git
   cd forescribe-dashboard
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## 📝 Assumptions
- Built with Next.js 13+ (App Router).
- Tailwind CSS is used for all styling, with dark mode handled via CSS variables and a custom toggle.
- Framer Motion is used for all animations and transitions.
- No backend or database; all data is static for demo purposes.
- The project is intended as a UI/UX showcase and starter template.

---

## ✨ Features & Improvements
- **Responsive 5-column card grid** (4-3-4-3-4 pattern, Figma-matching alignment)
- **Animated card reveal** and hover effects (Framer Motion)
- **Light/Dark theme toggle** (CSS variable-based, persists in localStorage)
- **Modern, accessible UI** (keyboard focus, color contrast)
- **Industry-standard directory structure**
- **Easy deployment to Vercel or any Node.js host**

---

## 📁 Directory Structure

```
forescribe-assessment/
├── node_modules/
├── public/
├── src/
│   └── app/
│       ├── dashboard/
│       │   └── page.tsx
│       ├── contact/
│       ├── globals.css
│       └── layout.tsx
├── .gitignore
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── README.md
```

---

## 🌟 Improvements
- CSS variable-based theming for robust dark mode
- Animated theme toggle button
- Fully responsive and accessible
- Clean, maintainable codebase

---

## 📤 Deployment

Deploy easily to [Vercel](https://vercel.com/) or your preferred Node.js host.

---

## 🧑‍💻 Author & License

- Created by [Your Name]
- [MIT License](LICENSE)
