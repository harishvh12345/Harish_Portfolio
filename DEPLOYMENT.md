# Deployment Guide

Your ultra-premium portfolio is ready to go live! Here are the steps to deploy it to popular hosting platforms.

## 🚀 Option 1: Vercel (Recommended)
Vercel is the creators of Next.js and provides the best performance for React/Vite apps.

1.  **Push your code to GitHub.**
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    # Create a new repo on GitHub and follow instructions to push
    ```

2.  **Go to [Vercel.com](https://vercel.com) and Sign Up/Login.**
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your GitHub repository.
5.  **Framework Preset:** Verify it says "Vite".
6.  Click **Deploy**.

Done! Vercel will give you a live URL (e.g., `harish-portfolio.vercel.app`).

---

## ⚡ Option 2: Netlify
Netlify is another excellent choice with great free tier features.

1.  **Push your code to GitHub.**
2.  **Go to [Netlify.com](https://netlify.com) and Sign Up/Login.**
3.  Click **"Add new site"** -> **"Import from existing project"**.
4.  Connect GitHub and select your repository.
5.  **Build Settings:**
    - **Build Command:** `npm run build`
    - **Publish Directory:** `dist`
6.  Click **Deploy Site**.

---

## 🐙 Option 3: GitHub Pages
If you prefer to host directly on GitHub.

1.  Install `gh-pages`:
    ```bash
    npm install gh-pages --save-dev
    ```

2.  Update `package.json`:
    
    Add `homepage` at the top:
    ```json
    "homepage": "https://<your-username>.github.io/<repo-name>",
    ```

    Add `predeploy` and `deploy` scripts:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist",
      ...
    }
    ```

3.  Deploy:
    ```bash
    npm run deploy
    ```

---

## 🔧 Post-Deployment Tips
- **Custom Domain:** Buy a domain (e.g., `harish.dev`) from Namecheap or GoDaddy and connect it in Vercel/Netlify settings.
- **Analytics:** Add Vercel Analytics or Google Analytics to track visitors.
- **SEO:** Update the `<title>` and `<meta>` tags in `index.html` with your specific details.
