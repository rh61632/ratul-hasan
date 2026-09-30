# Md. Ratul Hasan — Portfolio Website

Personal portfolio highlighting engineering projects, research thesis, awards, industrial experience, and certifications.

## 🚀 Quick Setup on a New Machine

When cloning this repository onto a new machine:

```bash
git clone https://github.com/rh61632/ratul-hasan.git
cd ratul-hasan
./setup.sh
```

Or manually:
```bash
pip install -r requirements.txt
git config core.hooksPath .githooks
```

This installs Python dependencies (`Pillow`) and enables the local git hook so that card thumbnails are automatically generated and optimized whenever you commit.

---

## 📸 Adding New Photos (Awards / Projects)

1. Drop the original photo into:
   - `assets/images/awards/` (for competition awards)
   - `assets/images/projects/` (for project covers)
2. In `js/data/awards.js` or `js/data/projects.js`, point the `media` property to the thumbnail:
   ```javascript
   media: "assets/images/thumbnails/your-photo.jpg",
   ```
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add new award photo"
   git push origin main
   ```
   *The pre-commit hook will automatically generate a clean, anti-aliased 1200px thumbnail into `assets/images/thumbnails/` and stage it into the commit.*
