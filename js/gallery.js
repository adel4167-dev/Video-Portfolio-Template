// ==========================================
// PHOTO GALLERY AUTO-SCROLL & NAVIGATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const photoGallery = document.getElementById('photoGallery');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryNext = document.getElementById('galleryNext');
    const galleryContainer = document.querySelector('.photo-gallery-container');
    
    // Check if device is touch-enabled
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const isDesktop = window.innerWidth > SiteConfig.breakpoints.tablet && !isTouchDevice;
    
    // Clone gallery items for infinite scroll (all devices)
    const galleryItems = Array.from(photoGallery.children);
    galleryItems.forEach(item => {
        const clone = item.cloneNode(true);
        photoGallery.appendChild(clone);
    });
    
    // Auto-scroll only on desktop non-touch devices
    if (isDesktop) {
        // Auto-scroll variables
        let autoScrollSpeed = SiteConfig.gallery.autoScrollSpeed;
        let animationId;
        let isHovered = false;
        
        // Auto-scroll function (desktop only)
        function autoScroll() {
            if (!isHovered) {
                photoGallery.scrollLeft += autoScrollSpeed;
                
                // Reset to beginning for infinite loop
                if (photoGallery.scrollLeft >= photoGallery.scrollWidth / 2) {
                    photoGallery.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(autoScroll);
        }
        
        // Pause auto-scroll on hover
        galleryContainer.addEventListener('mouseenter', () => {
            isHovered = true;
        });
        
        galleryContainer.addEventListener('mouseleave', () => {
            isHovered = false;
        });
        
        // Start auto-scrolling
        setTimeout(() => {
            autoScroll();
        }, SiteConfig.gallery.autoScrollDelay);
    }
    
    // Update navigation button visibility
    function updateGalleryButtons() {
        const scrollLeft = photoGallery.scrollLeft;
        const maxScroll = photoGallery.scrollWidth - photoGallery.clientWidth;
        
        if (scrollLeft > 0) {
            galleryPrev.classList.add('visible');
        } else {
            galleryPrev.classList.remove('visible');
        }
        
        if (scrollLeft < maxScroll - 10) {
            galleryNext.classList.add('visible');
        } else {
            galleryNext.classList.remove('visible');
        }
    }
    
    // Navigation button click handlers
    galleryPrev.addEventListener('click', () => {
        photoGallery.scrollBy({
            left: -SiteConfig.gallery.scrollDistance,
            behavior: 'smooth'
        });
    });
    
    galleryNext.addEventListener('click', () => {
        photoGallery.scrollBy({
            left: SiteConfig.gallery.scrollDistance,
            behavior: 'smooth'
        });
    });
    
    // Update buttons on scroll
    photoGallery.addEventListener('scroll', updateGalleryButtons);
    updateGalleryButtons();
});
