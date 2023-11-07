document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeText = document.getElementById('theme-text');
    const body = document.body;
    let darkTheme = false;

    // Function to update button text and theme
    function toggleTheme() {
        darkTheme = !darkTheme;
        body.setAttribute('data-theme', darkTheme ? 'dark' : 'light');

        // Update the button text
        themeToggle.textContent = darkTheme ? 'Light' : 'Dark';

        // Animate the text
        if (darkTheme) {
            themeText.style.top = '0';
            themeText.textContent = 'Dark';
        } else {
            themeText.style.top = '-100px';
            themeText.textContent = 'Light';
        }
    }

    themeToggle.addEventListener('click', toggleTheme);

    // Initially set the button text based on the theme
    themeToggle.textContent = darkTheme ? 'Light' : 'Dark';
});
