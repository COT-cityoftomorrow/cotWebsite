document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementById('language-dropdown');
    var toggleButton = document.getElementById('language-toggle');
  
    // Toggle the dropdown menu when the toggle button is clicked
    toggleButton.addEventListener('click', function() {
      if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
      } else {
        dropdown.style.display = 'none';
      }
    });
  
    // Change the language when a language option is clicked
    dropdown.addEventListener('click', function(e) {
      if (e.target && e.target.nodeName === 'A') {
        var selectedLang = e.target.getAttribute('data-lang');
        // Call a function to handle language change
        changeLanguage(selectedLang);
        // Hide the dropdown menu
        dropdown.style.display = 'none';
      }
    });
  
    // Function to handle language change
    function changeLanguage(lang) {
      // Add your logic here to update the website content based on the selected language
      // You can fetch translations from your data structure (e.g., JSON) or use an external translation API
      // Update the content on the page dynamically
      console.log('Language changed to ' + lang);
    }
  });
  