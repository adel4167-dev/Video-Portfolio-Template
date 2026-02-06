// ==========================================
// VIDEO CATEGORY FILTERING
// Handles filtering of video cards by categories/genres
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const videoCards = document.querySelectorAll('.video-card');
    const videoGrid = document.getElementById('videoGrid');
    
    // Track current active category
    let activeCategory = 'all';
    
    /**
     * Filter videos based on selected category
     * @param {string} category - The category to filter by
     */
    function filterVideos(category) {
        activeCategory = category;
        
        let visibleCount = 0;
        
        videoCards.forEach((card, index) => {
            const cardCategories = card.getAttribute('data-categories') || '';
            const shouldShow = category === 'all' || cardCategories.includes(category);
            
            if (shouldShow) {
                // Show card with staggered animation
                setTimeout(() => {
                    card.classList.remove('hidden');
                }, index * 50);
                visibleCount++;
            } else {
                // Hide card
                card.classList.add('hidden');
            }
        });
        
        // Show "no results" message if no videos match
        removeNoResultsMessage();
        if (visibleCount === 0) {
            showNoResultsMessage();
        }
        
        // Update active button state
        updateActiveButton(category);
    }
    
    /**
     * Update the active state of category buttons
     * @param {string} category - The active category
     */
    function updateActiveButton(category) {
        categoryButtons.forEach(btn => {
            const btnCategory = btn.getAttribute('data-category');
            if (btnCategory === category) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    /**
     * Show a "no results" message
     */
    function showNoResultsMessage() {
        const message = document.createElement('div');
        message.className = 'no-results';
        message.id = 'noResultsMessage';
        message.innerHTML = `
            <i class="fas fa-film mb-3" style="font-size: 3rem; opacity: 0.3;"></i>
            <p>No videos found in this category</p>
            <p style="font-size: 0.9rem; opacity: 0.5;">Try selecting a different category</p>
        `;
        videoGrid.appendChild(message);
    }
    
    /**
     * Remove the "no results" message if it exists
     */
    function removeNoResultsMessage() {
        const existingMessage = document.getElementById('noResultsMessage');
        if (existingMessage) {
            existingMessage.remove();
        }
    }
    
    /**
     * Count videos in each category and update button counts
     */
    function updateCategoryCounts() {
        const counts = {
            all: videoCards.length
        };
        
        // Count videos per category
        videoCards.forEach(card => {
            const categories = card.getAttribute('data-categories') || '';
            const categoryList = categories.split(' ').filter(c => c);
            
            categoryList.forEach(cat => {
                counts[cat] = (counts[cat] || 0) + 1;
            });
        });
        
        // Update button counts
        categoryButtons.forEach(btn => {
            const category = btn.getAttribute('data-category');
            const countSpan = btn.querySelector('.count');
            if (countSpan && counts[category] !== undefined) {
                countSpan.textContent = `(${counts[category]})`;
            }
        });
    }
    
    /**
     * Add smooth scroll to category filter when navigating
     */
    function scrollToCategoryFilter() {
        const categoryFilter = document.querySelector('.category-filter');
        if (categoryFilter) {
            const headerHeight = 80; // Approximate sticky header height
            const filterTop = categoryFilter.offsetTop - headerHeight;
            window.scrollTo({
                top: filterTop,
                behavior: 'smooth'
            });
        }
    }
    
    // Initialize category counts
    updateCategoryCounts();
    
    // Add click handlers to category buttons
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // If clicking the same category, do nothing
            if (category === activeCategory) {
                return;
            }
            
            // Filter videos
            filterVideos(category);
            
            // Optional: Add to URL hash for bookmarking/sharing
            if (category === 'all') {
                history.replaceState(null, '', window.location.pathname);
            } else {
                history.replaceState(null, '', `#category-${category}`);
            }
        });
    });
    
    // Check for category in URL hash on page load
    function checkUrlHash() {
        const hash = window.location.hash;
        if (hash.startsWith('#category-')) {
            const category = hash.replace('#category-', '');
            const validCategories = Array.from(categoryButtons).map(btn => 
                btn.getAttribute('data-category')
            );
            
            if (validCategories.includes(category)) {
                filterVideos(category);
                // Scroll to category filter after a brief delay
                setTimeout(scrollToCategoryFilter, 500);
            }
        }
    }
    
    // Initialize from URL hash
    checkUrlHash();
    
    // Listen for hash changes (for browser back/forward navigation)
    window.addEventListener('hashchange', checkUrlHash);
    
    // Optional: Keyboard navigation for categories
    document.addEventListener('keydown', (e) => {
        // Use number keys 1-8 to switch categories
        if (e.key >= '1' && e.key <= '9') {
            const index = parseInt(e.key) - 1;
            if (categoryButtons[index]) {
                categoryButtons[index].click();
            }
        }
    });
    
    console.log('📹 Video category filtering initialized');
    console.log(`   Active category: ${activeCategory}`);
    console.log(`   Total videos: ${videoCards.length}`);
});
