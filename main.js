// Function to set the mode and save it to localStorage
function setModePreference(mode) {
  localStorage.setItem('mode', mode);
}

// Function to toggle dark mode and save the preference
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Check if dark mode is active and save the preference
  if (body.classList.contains('dark-mode')) {
    setModePreference('dark');
  } else {
    setModePreference('light');
  }
}

// Function to apply the saved mode preference on page load
function applySavedModePreference() {
  const savedMode = localStorage.getItem('mode');

  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// Apply the saved mode preference when the page loads
applySavedModePreference();
