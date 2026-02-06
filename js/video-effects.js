// ==========================================
// VIDEO CARD HOVER EFFECTS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const videoCards = document.querySelectorAll('.video-card');
    
    // Get current grid columns based on screen width
    function getGridColumns() {
        if (window.innerWidth <= SiteConfig.breakpoints.mobile) return 1;
        if (window.innerWidth <= SiteConfig.breakpoints.tablet) return 2;
        if (window.innerWidth <= SiteConfig.breakpoints.large) return 3;
        return 4;
    }
    
    // Apply adjacent card effects on hover
    videoCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            const gridColumns = getGridColumns();
            
            videoCards.forEach((otherCard, otherIndex) => {
                if (otherIndex !== index) {
                    // Calculate adjacency
                    const rowDiff = Math.abs(Math.floor(index / gridColumns) - Math.floor(otherIndex / gridColumns));
                    const colDiff = Math.abs((index % gridColumns) - (otherIndex % gridColumns));
                    
                    const isHorizontal = rowDiff === 0 && colDiff === 1;
                    const isVertical = rowDiff === 1 && colDiff === 0;
                    const isDiagonal = rowDiff === 1 && colDiff === 1;
                    
                    if (isHorizontal) {
                        otherCard.style.transition = `all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${SiteConfig.videoEffects.transitionDelay}s`;
                        otherCard.style.transform = `scale(${SiteConfig.videoEffects.horizontalScale})`;
                        otherCard.style.opacity = `${SiteConfig.videoEffects.horizontalOpacity}`;
                    } else if (isVertical || isDiagonal) {
                        otherCard.style.transition = `all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${SiteConfig.videoEffects.transitionDelay}s`;
                        otherCard.style.transform = `scale(${SiteConfig.videoEffects.verticalScale})`;
                        otherCard.style.opacity = `${SiteConfig.videoEffects.verticalOpacity}`;
                    }
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            videoCards.forEach((otherCard) => {
                if (otherCard !== card) {
                    otherCard.style.transition = '';
                    otherCard.style.transform = '';
                    otherCard.style.opacity = '';
                }
            });
        });
    });
});
