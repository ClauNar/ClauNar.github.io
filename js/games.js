(function() {
    // Wait for the dynamically loaded DOM elements to be available
    const interval = setInterval(() => {
        const button = document.getElementById('click-counter'); // Get the button
        const countDisplay = document.getElementById('click-count'); // Get the display element

        // Proceed only if both elements are found
        if (button && countDisplay) {
            let clickCount = 0; // Initialize the click counter

            // Initialize the display text dynamically
            countDisplay.textContent = "You have clicked the button 0 times.";

            // Add event listener for button clicks
            button.addEventListener('click', () => {
                clickCount++; // Increment the counter
                countDisplay.textContent = `You have clicked the button ${clickCount} times.`; // Update the display
            });

            clearInterval(interval); // Stop checking once the elements are found
        }
    }, 100); // Check every 100ms for dynamically loaded elements
})();
