// ==========================================
// SITE CONFIGURATION
// Configuration values used across the site for easy maintenance
// ==========================================

const SiteConfig = {
    // Responsive breakpoints (should match CSS media queries)
    breakpoints: {
        mobile: 768,
        tablet: 1024,
        large: 1400
    },
    
    // Sticky header behavior
    header: {
        showThreshold: 300,      // Scroll position to show header (px)
        socialIconsOffset: 150   // Offset from bottom of about section (px)
    },
    
    // Photo gallery settings
    gallery: {
        autoScrollSpeed: 0.8,    // Auto-scroll speed (px per frame)
        scrollDistance: 440,     // Distance to scroll on button click (px)
        autoScrollDelay: 100     // Delay before starting auto-scroll (ms)
    },
    
    // Video card hover effects
    videoEffects: {
        horizontalScale: 0.98,   // Scale for horizontally adjacent cards
        horizontalOpacity: 0.85, // Opacity for horizontally adjacent cards
        verticalScale: 0.99,     // Scale for vertically/diagonally adjacent cards
        verticalOpacity: 0.9,    // Opacity for vertically/diagonally adjacent cards
        transitionDelay: 0.05    // Delay before animation starts (s)
    },
    
    // Video modal
    modal: {
        vimeoParams: 'autoplay=1&badge=0&autopause=0' // Default Vimeo embed parameters
    }
};
