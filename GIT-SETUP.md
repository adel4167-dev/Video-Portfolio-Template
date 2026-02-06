# Git Setup Instructions

Since Git needs to be installed/configured on your system, follow these steps to initialize the repository:

## Option 1: Install Git (Recommended)

1. **Download Git for Windows:**
   - Visit: https://git-scm.com/download/win
   - Download and install Git for Windows

2. **After installation, run these commands in PowerShell:**
   ```powershell
   cd "f:\OneDrive\Portfolio-Template"
   git init
   git add .
   git commit -m "Initial commit: Video portfolio template with category filtering"
   ```

3. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name it (e.g., "video-portfolio-template")
   - Don't initialize with README (you already have one)
   - Click "Create repository"

4. **Push to GitHub:**
   ```powershell
   git remote add origin https://github.com/YOUR-USERNAME/video-portfolio-template.git
   git branch -M main
   git push -u origin main
   ```

## Option 2: Use GitHub Desktop (Easier)

1. **Download GitHub Desktop:**
   - Visit: https://desktop.github.com/
   - Install GitHub Desktop

2. **Add Repository:**
   - Open GitHub Desktop
   - File → Add Local Repository
   - Choose: `f:\OneDrive\Portfolio-Template`
   - Click "Create a repository" if prompted

3. **Initial Commit:**
   - Write commit message: "Initial commit: Video portfolio template"
   - Click "Commit to main"

4. **Publish to GitHub:**
   - Click "Publish repository"
   - Choose name and description
   - Uncheck "Keep this code private" if you want it public
   - Click "Publish Repository"

## Option 3: Manual ZIP Upload to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name your repository
   - Make it public
   - Click "Create repository"

2. **Compress the folder:**
   - Right-click on `Portfolio-Template` folder
   - Send to → Compressed (zipped) folder

3. **Upload to GitHub:**
   - On your new GitHub repository page
   - Click "uploading an existing file"
   - Drag and drop all files
   - Commit changes

## What's Included in This Template

✅ Generic portfolio website (no personal info)
✅ Category filtering system
✅ Comprehensive documentation
✅ Well-organized code structure
✅ README.md with full instructions
✅ .gitignore file
✅ CONTRIBUTING.md

## Next Steps After Git Setup

1. Edit README.md to customize for your project
2. Tag this as v1.0.0 release
3. Add a LICENSE file if desired
4. Share your template!

---

**Your original portfolio site at `f:\OneDrive\Portfolio Site` remains unchanged!**
