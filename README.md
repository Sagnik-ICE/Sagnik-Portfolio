# Portfolio (HTML / CSS / JS)

This is a responsive, single-page portfolio designed to be hosted on GitHub Pages. The site is driven by a single editable data file so you can update details and the website will reflect those changes automatically.

Files added:
- `index.html` — main page
- `css/style.css` — styles
- `js/main.js` — client code fetching `data/profile.json`
- `data/profile.json` — single source of truth for your bio, projects, papers, and links

How to update content
- Edit `data/profile.json` with your details (name, email, projects, publications, social links). The site loads this file at runtime, so changes are picked up automatically when redeployed.

Preview locally
- Using Python 3 (works in Windows PowerShell):
```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deploy to GitHub Pages
1. Create a repo (for example `yourname.github.io` for a user page) and push these files to the repository root.
2. In repo Settings -> Pages, set the branch to `main` (or `gh-pages`) and folder to `/ (root)`.
3. After a few minutes your site will be available at `https://yourname.github.io/`.

Optional improvements
- Add `assets/resume.pdf` and set `resume` in `data/profile.json` to that path.
- Replace the avatar placeholder with an image and adjust `index.html`.
- Add analytics or contact form backend as needed.
