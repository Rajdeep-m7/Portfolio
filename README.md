# 🌐 Portfolio Website - Rajdeep Majumdar

🚀 **Live Demo:** https://rajdeep7.vercel.app

---

## 📌 Overview

A modern and responsive personal portfolio website built to showcase skills, projects, and experience as a **Full Stack Developer** (MERN, React Native, DevOps, Generative AI). The site emphasizes a clean design, smooth animations, strong SEO, and an engaging user experience.

---

## 🛠️ Tech Stack

* ▲ Next.js (App Router, statically prerendered)
* ⚛️ React
* 🎨 Tailwind CSS v4
* ✉️ Nodemailer (contact form over SMTP)
* 🌐 Vercel (Deployment)

---

## ✨ Features

* 💻 Fully responsive design (mobile + desktop)
* 🌙 Light / dark theme toggle (follows system preference)
* 🎯 Scroll reveals, hero entrance, tech marquee, count-up numbers (respects reduced motion)
* 🖱️ Smooth custom cursor (mouse devices only)
* 🔎 SEO: metadata, Open Graph / Twitter cards, JSON-LD, sitemap, robots, share image
* 📬 Working contact form that emails the message (honeypot, validation, rate limiting)
* 📂 Project showcase with live links
* ♿ Accessible: Lighthouse accessibility, best practices and SEO all 100

---

## 📸 Sections Included

* 🏠 Home
* 👨‍💻 About Me
* 💼 Experience
* 🎓 Education & Honors
* 🛠️ Skills (incl. DevOps)
* 📂 Projects
* 📞 Contact

---

## 🧑‍💻 Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

### Edit content

All text, links and projects live in `src/data/portfolio.js`. Components and SEO
metadata (title, Open Graph, JSON-LD) read from it.

### SEO

- Metadata, Open Graph / Twitter cards, canonical URL and JSON-LD: `src/app/layout.js`
- `sitemap.xml`, `robots.txt`, web manifest, generated share image, icon: `src/app/*`
- Set the real domain: copy `.env.example` to `.env` (or `.env.local`) and set
  `NEXT_PUBLIC_SITE_URL`. Otherwise canonical/sitemap URLs use `localhost:3000`.

### Contact form

The form posts to `src/app/api/contact/route.js`, which emails the message to you
over SMTP (Nodemailer). Set `SMTP_USER` and `SMTP_PASS` (see `.env.example`). For
Gmail, `SMTP_PASS` must be an **App Password**, not your normal password. Add the same
variables in your hosting dashboard (e.g. Vercel → Settings → Environment Variables)
and redeploy. `.env` is git-ignored; never commit it.

### Design

Colour, type and radius tokens live in `src/app/globals.css`, with light and dark
palettes switched by the `.dark` class (toggle in the header).

---

## 📈 Future Improvements

* 📝 Blog section
* 📄 Dedicated case-study page per project

---

## 👨‍💻 Author

**Rajdeep Majumdar**
<br>
Full Stack Developer

---

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!

---
