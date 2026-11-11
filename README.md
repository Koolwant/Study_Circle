# Study Circle 🎓

> **Find the mind that complements your own.**
> A modern, collegiate web application for university students to find compatible study partners, form collaborative study circles, and synchronize weekly availability.

---

## ✨ Features

- **Algorithmic Compatibility Engine**: Calculates real multi-factor compatibility (0–100%) grounded in actual academic profiles:
  - **35% Course Overlap**: Exact course intersections (`CS 61B`, `MATH 54`) and department subject proximity.
  - **25% Schedule Synchrony**: Jaccard intersection of 28 weekly study windows (Morning, Afternoon, Evening, Night).
  - **20% Learning Modalities**: Alignment across Visual, Auditory, Kinesthetic, Collaborative, and Independent styles.
  - **10% Study Habits & Venues**: Shared preference for quiet library corners, whiteboards, coffee shops, or labs.
  - **10% Mutual Academic Interests**: Common career trajectories, research fields, and extracurriculars.
- **Explainable Match Breakdown**: View exact dimensional progress bars, shared course tags, and an interactive side-by-side mutual schedule overlay matrix.
- **Collaborative Study Circles**: Browse, create, join, and manage course-focused study pods with meeting times and member rosters.
- **7×4 Weekly Availability Planner**: Interactive calendar matrix (7 days × 4 time slots). Toggling slots instantly recalculates compatibility across all peers.
- **Network & Request Hub**: Send personalized study invitations, accept/decline inbound requests, and bookmark peer profiles.
- **8 Interactive Student Personas**: Instantly switch perspective between students in CS, Data Science, Mechanical Engineering, Cognitive Science, Applied Math, Pre-Med Biology, and Economics to test matching recalculations live.
- **Zero-Dependency & GitHub Pages Ready**: Pure vanilla ES modules, clean CSS tokens, and instant client-side persistence via `localStorage`.

---

## 🚀 Quick Start

### Option 1: Direct in Browser (No Installation Required)
Simply double-click `index.html` or open it with any web browser!

### Option 2: Local Static Server
If you have Node.js installed, run:

```bash
# Using npx serve
npx serve . -p 4173

# Or with python
python3 -m http.server 4173
```
Then visit **`http://localhost:4173`** in your browser.

---

## 🌐 Deploy to GitHub Pages

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Study Circle"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. On GitHub, go to your repository's **Settings** → **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/` in 1–2 minutes!

---

## 📂 Project Structure

```
study-circle/
├── index.html       # HTML entry point with Manrope & Playfair typography
├── style.css        # Bespoke collegiate design tokens, responsive cards, modals & grid
├── app.js           # Algorithmic engine, demo personas, reactive UI & localStorage
├── package.json     # Project metadata and quick start scripts
└── README.md        # Documentation and deployment instructions
```

---

## 📄 License
MIT License. Free to use, adapt, and build upon!
