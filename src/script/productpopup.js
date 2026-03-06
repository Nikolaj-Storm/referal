function initPopups() {
  const overlay = document.getElementById('overlay3');

  // Function to close the popup
  function closePopup(popup = null) {
    overlay.classList.remove('show'); // Remove 'show' class from overlay
    if (popup) {
      popup.classList.remove('show'); // Remove 'show' class from the specific popup
    } else {
      // If no popup is provided, close all popups
      document.querySelectorAll('.popup').forEach(popup => {
        popup.classList.remove('show');
      });
    }
  }

  // Open popup logic
  document.querySelectorAll('[data-popup-target]').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-popup-target');
      const popup = document.getElementById(targetId);

      // Show overlay and popup
      overlay.classList.add('show');
      popup.classList.add('show');
    });
  });

  // Close popup logic using the close button
  document.querySelectorAll('.close-popup').forEach(closeButton => {
    closeButton.addEventListener('click', () => {
      const popup = closeButton.closest('.popup');
      closePopup(popup);
    });
  });

  // Close popup when clicking on the overlay
  overlay.addEventListener('click', event => {
    if (event.target === overlay) {
      closePopup(); // Close all popups
    }
  });
}

// Initialize popups on page load
document.addEventListener('DOMContentLoaded', initPopups);
