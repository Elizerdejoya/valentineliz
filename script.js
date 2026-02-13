// ==================== VERSION CHECK ====================

(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

// ==================== NAVIGATION ====================

function navigateTo(page) {
    // Smooth page transition
    const content = document.querySelector('.page-content');
    if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        setTimeout(() => {
            window.location.href = page;
        }, 300);
    } else {
        window.location.href = page;
    }
}

// ==================== PAGE 7 - TRICKY NO BUTTON ====================

function trickNoButton() {
    const noBtn = document.getElementById('trickNo');
    if (noBtn) {
        // Move button away on click for mobile
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        noBtn.style.opacity = '0';
    }
}

// ==================== PAGE 8 - AUTO REDIRECT ====================

document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on
    const isPage8 = document.querySelector('.page-8');
    
    if (isPage8) {
        // Auto redirect to page 9 after 3 seconds
        setTimeout(() => {
            navigateTo('page9.html');
        }, 3000);
    }
    
    // Page 7 hover behavior
    const trickNoButton = document.getElementById('trickNo');
    if (trickNoButton) {
        // Desktop hover behavior
        trickNoButton.addEventListener('mouseenter', function(e) {
            const randomX = Math.random() * 150 - 75;
            const randomY = Math.random() * 150 - 75;
            this.style.transform = `translate(${randomX}px, ${randomY}px)`;
            this.style.opacity = '0.3';
        });
        
        // Mobile touch behavior
        trickNoButton.addEventListener('touchstart', function(e) {
            e.preventDefault();
            const randomX = Math.random() * 150 - 75;
            const randomY = Math.random() * 150 - 75;
            this.style.transform = `translate(${randomX}px, ${randomY}px)`;
            this.style.opacity = '0.3';
        });
    }
});

// ==================== ACCESSIBILITY ====================

// Prevent text selection on heart emojis
document.addEventListener('selectstart', function(e) {
    if (e.target.classList.contains('heart')) {
        e.preventDefault();
    }
});