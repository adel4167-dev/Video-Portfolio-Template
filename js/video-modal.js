// ==========================================
// VIDEO MODAL FUNCTIONALITY - CLOUDINARY
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

            const videoUrl = this.getAttribute('data-video-id');
            const title = this.getAttribute('data-title');
            const credits = this.getAttribute('data-credits');
            const description = this.getAttribute('data-description');

            // Set modal content
            modalTitle.textContent = title;
            modalCredits.innerHTML = `<strong>${credits}</strong>`;
            modalDescription.textContent = description;

            // Create Cloudinary iframe
            const iframe = document.createElement('iframe');

            iframe.src = videoUrl;

            iframe.width = '640';
            iframe.height = '360';

            iframe.style.width = '100%';
            iframe.style.height = 'auto';
            iframe.style.aspectRatio = '640 / 360';

            iframe.allow = 'autoplay; fullscreen; encrypted-media; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.frameBorder = '0';

            // Clear previous player
            modalPlayer.innerHTML = '';

            // Add new player
            modalPlayer.appendChild(iframe);

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal function
    function closeModal() {
        modal.classList.remove('active');

        // Remove video completely
        modalPlayer.innerHTML = '';

        document.body.style.overflow = 'auto';
    }

    // Close button
    modalClose.addEventListener('click', closeModal);

    // Close when clicking outside the video
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
