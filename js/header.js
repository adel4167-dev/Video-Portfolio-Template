// ==========================================
// STICKY HEADER SCROLL BEHAVIOR
// ==========================================

window.addEventListener('scroll', function() {
    const stickyHeader = document.getElementById('stickyHeader');
    const scrollPosition = window.scrollY;
    const aboutSection = document.getElementById('one');
    const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
    
    // Show header with name/title
    if (scrollPosition > SiteConfig.header.showThreshold) {
        stickyHeader.classList.add('visible');
    } else {
        stickyHeader.classList.remove('visible');
    }
    
    // Show social icons after scrolling past about section
    if (scrollPosition > aboutBottom - SiteConfig.header.socialIconsOffset) {
        stickyHeader.classList.add('show-social');
    } else {
        stickyHeader.classList.remove('show-social');
    }
});
