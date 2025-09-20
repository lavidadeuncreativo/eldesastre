# El Desastre — Café + Libros (Static site)

This is a **static website** ready for GitHub Pages. It contains:
- `index.html` — main page
- `assets/style.css` — styles
- `assets/main.js` — JavaScript
- `favicon.svg` — icon
- `.nojekyll` — ensures Pages serves files as-is

## Local preview
1. Download & unzip the project.
2. Double-click `index.html` to open it in your browser.
3. If it looks cached or plain, hard refresh (**Ctrl/⌘ + Shift + R**).

## Upload to GitHub Pages
1. Go to **github.com** → log in.
2. Click **“+” → “New repository”** → Name it (e.g. `el-desastre-site`) → **Public** → **Create repository**.
3. Click **“Upload files”** and drag the entire folder contents (all files and the `assets` folder) → **Commit changes**.
4. In your repo, go to **Settings → Pages**.
5. Under **Source**, choose **Branch: `main`** and **Folder: `/ (root)`** → **Save**.
6. After ~1 minute your site is live at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

## Notes
- All images are loaded from Unsplash (no local image assets required).
- The map uses HERE Static Maps _with a fallback_ to OpenStreetMap if HERE fails (no API key required).
- You can customize contact info and content in `assets/main.js` under the `SITE` object.
- For a custom domain, add a `CNAME` file in the repo with your domain (`tienda.midominio.com`).

---

© 2025 El Desastre — Café + Libros.
