// Function to toggle dark mode and save the preference
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  
  // Check if dark mode is active and save the preference
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
}

// Function to apply the saved mode preference on page load
function applySavedModePreference() {
  const savedMode = localStorage.getItem('mode');
  const body = document.body;

  if (savedMode === 'dark') {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

// Apply the saved mode preference when the page loads
applySavedModePreference();
