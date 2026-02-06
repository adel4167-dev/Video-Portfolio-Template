// ==========================================
// VIDEO MODAL FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('videoModal');
    const modalPlayer = document.getElementById('modalPlayer');
    const modalTitle = document.getElementById('modalTitle');
    const modalCredits = document.getElementById('modalCredits');
    const modalDescription = document.getElementById('modalDescription');
    const modalClose = document.querySelector('.modal-close');
    const videoTriggers = document.querySelectorAll('.video-card, .featured-video');
    
    // Open modal
    videoTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            const title = this.getAttribute('data-title');
            const credits = this.getAttribute('data-credits');
            const description = this.getAttribute('data-description');
            
            // Set modal content
            modalTitle.textContent = title;
            modalCredits.innerHTML = `<strong>${credits}</strong>`;
            modalDescription.textContent = description;
            
            // Create iframe
            const iframe = document.createElement('iframe');
            iframe.src = `https://player.vimeo.com/video/${videoId}?${SiteConfig.modal.vimeoParams}`;
            iframe.allow = 'autoplay; fullscreen; picture-in-picture';
            iframe.allowFullscreen = true;
            modalPlayer.innerHTML = '';
            modalPlayer.appendChild(iframe);
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        modalPlayer.innerHTML = '';
        document.body.style.overflow = 'auto';
    }
    
    // Close modal on button click
    modalClose.addEventListener('click', closeModal);
    
    // Close modal on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
