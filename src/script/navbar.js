// JavaScript to handle drawer open/close
document.getElementById("drawer-button").addEventListener("click", function () {
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");

  // Toggle the open class on the drawer and show class on the overlay
  drawer.classList.toggle("open");
  overlay.classList.toggle("show");
});

// Close drawer function
function closeDrawer() {
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");

  // Ensure the drawer is hidden and overlay is not visible
  drawer.classList.remove("open");
  overlay.classList.remove("show");
}

// Add event listener to overlay to close drawer when clicked
document.getElementById("overlay").addEventListener("click", closeDrawer);

function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownIcon = dropdownMenu.previousElementSibling.querySelector("svg");

  // Toggle the display of the dropdown menu
  dropdownMenu.classList.toggle("hidden");

  // Toggle the rotation of the dropdown icon
  dropdownIcon.classList.toggle("rotate-180");
}

function toggleDeskDropdown() {
    const dropdownMenu = document.getElementById('desktop-dropdown-menu');

    // Toggle the display of the dropdown menu
    dropdownMenu.classList.toggle('hidden');
}

// Hide dropdown if clicking outside
document.addEventListener('click', function (event) {
    const dropdownButton = document.getElementById('desktop-dropdown-button');
    const dropdownMenu = document.getElementById('desktop-dropdown-menu');

    // Close the dropdown if clicking outside
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
});
