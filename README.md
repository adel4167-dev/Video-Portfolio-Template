# Video Portfolio Website Template

A modern, responsive portfolio website template for filmmakers, videographers, and content creators. Features a sleek design with video modals, category filtering, and smooth animations.

## ✨ Features

- **🎬 Video Portfolio Grid** - Showcase your work with an elegant video card layout
- **🔍 Category Filtering** - Filter videos by genre/category without page reload (see `index-test.html`)
- **🎥 Video Modal** - Beautiful popup player for Vimeo videos
- **📱 Fully Responsive** - Mobile-first design that looks great on all devices
- **✨ Smooth Animations** - Polished hover effects and transitions
- **🎨 Easy Customization** - Well-organized CSS and configuration files
- **📚 Documentation** - Comprehensive editing guide included

## 🚀 Quick Start

1. **Clone this repository**
   ```bash
   git clone <repository-url>
   cd Portfolio-Template
   ```

2. **Open `index.html`** in your browser to see the basic portfolio

3. **Open `index-test.html`** to see the version with category filtering

4. **Customize your content:**
   - Replace "Your Name" and "Your Title" throughout the HTML files
   - Update social media links with your profiles
   - Replace placeholder video IDs with your Vimeo video IDs
   - Add your banner images to the `images/` folder

## 📁 File Structure

```
Portfolio-Template/
├── index.html              # Main portfolio page
├── index-test.html         # Portfolio with category filtering
├── editing-guide.html      # Visual documentation guide
├── css/
│   ├── base.css           # Core styles & typography
│   ├── components.css     # UI components
│   ├── animations.css     # Animation effects
│   ├── responsive.css     # Mobile responsive styles
│   └── landscape.css      # Landscape orientation adjustments
├── js/
│   ├── config.js          # Site configuration
│   ├── header.js          # Sticky header behavior
│   ├── video-modal.js     # Video popup functionality
│   ├── video-effects.js   # Video hover effects
│   ├── video-categories.js # Category filtering (NEW)
│   └── gallery.js         # Photo gallery
└── images/
    └── (your banner images)
```

## 🎨 Customization

### Change Your Information

1. **Personal Details** - Search for "Your Name" and "Your Title" in HTML files
2. **Social Links** - Update URLs in the social icons sections
3. **Email** - Replace `your.email@example.com` with your actual email

### Add Your Videos

Replace the placeholder video IDs with your Vimeo video IDs:

```html
<div class="video-card" 
     data-video-id="YOUR_VIMEO_ID" 
     data-title="Your Video Title" 
     data-credits="Your Role: Your Name" 
     data-description="Video description..."
     data-categories="narrative documentary">
    <img src="https://vumbnail.com/YOUR_VIMEO_ID.jpg" alt="Your Video Title">
    <!-- Video card content -->
</div>
```

**Finding Your Vimeo ID:**
- Your Vimeo URL: `https://vimeo.com/123456789`
- Your Vimeo ID: `123456789`

### Add Video Categories (in index-test.html)

Videos can have multiple categories:
- `narrative` - Narrative films
- `documentary` - Documentary projects
- `commercial` - Commercial work
- `music-video` - Music videos
- `experimental` - Experimental films
- `motion-graphics` - Motion graphics

Add categories to videos using the `data-categories` attribute:
```html
data-categories="narrative experimental"
```

### Change Colors

Edit the gradient colors in your CSS files:
- Primary: `#667eea` (purple)
- Secondary: `#764ba2` (darker purple)
- Dark: `#1a1a1a` (dark gray)

### Configure Behavior

Edit `js/config.js` to adjust:
- Sticky header scroll threshold
- Video hover effects
- Gallery scroll speed
- Vimeo player parameters

## 📖 Documentation

Open `editing-guide.html` in your browser for a comprehensive visual guide showing:
- Where to edit every element
- Code examples with syntax highlighting
- Visual examples of each component
- Quick reference tables
- Tips and best practices

## 🎯 Using Category Filtering

The category filtering system is demonstrated in `index-test.html`:

1. **Test the Feature:**
   Open `index-test.html` to see category filtering in action

2. **Add to Main Site:**
   - Copy the category filter section from `index-test.html`
   - Add `<script src="js/video-categories.js"></script>` to your HTML
   - Add the category filter styles (in the `<style>` section)

3. **Customize Categories:**
   - Edit the category buttons in the HTML
   - Assign categories to videos using `data-categories`
   - Videos can belong to multiple categories

## 🌐 Deployment

### GitHub Pages
1. Push your repository to GitHub
2. Go to Settings → Pages
3. Select your main branch
4. Your site will be live at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Deploy with default settings
3. Done! Your site is live

### Traditional Hosting
Upload all files to your web hosting via FTP/cPanel

## 🔧 Configuration Options

Key settings in `js/config.js`:

| Setting | Default | Description |
|---------|---------|-------------|
| `header.showThreshold` | 300 | Scroll position to show sticky header (px) |
| `videoEffects.horizontalScale` | 0.98 | Scale for adjacent video cards |
| `modal.vimeoParams` | autoplay=1... | Vimeo embed parameters |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Credits

- Bootstrap 5.3.2
- Font Awesome 6.5.1
- Custom JavaScript and CSS

## 📄 License

This template is free to use for personal and commercial projects.

## 💡 Tips

1. **Optimize Images:** Compress your banner images before uploading
2. **Cache Busting:** Update version parameters in CSS/JS file links (`?v=...`)
3. **Testing:** Always test on mobile devices
4. **Vimeo Privacy:** Set your Vimeo videos to "Unlisted" if you only want them viewable through your portfolio
5. **Performance:** Keep your video thumbnails optimized for web

## 🆘 Support

For help with customization, refer to:
- `editing-guide.html` - Visual documentation
- Code comments throughout the files
- Inline documentation in JavaScript files

## 🚀 Getting Started Checklist

- [ ] Replace "Your Name" with your actual name
- [ ] Replace "Your Title" with your profession/title
- [ ] Update all social media links
- [ ] Add your banner images to `images/` folder
- [ ] Replace placeholder video IDs with your Vimeo IDs
- [ ] Update video titles and descriptions
- [ ] Customize colors if desired
- [ ] Test on mobile devices
- [ ] Deploy to hosting/GitHub Pages

---

**Ready to showcase your work? Start editing and make it yours!** 🎬✨
