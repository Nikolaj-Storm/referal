// JavaScript to handle momento drawer open/close
document.getElementById("momentodrawer-button").addEventListener("click", function () {
  const momentoDrawer = document.getElementById("momentodrawer");

  // Toggle the open class on the drawer
  momentoDrawer.classList.toggle("open");
});

// Close momento drawer function
function closeMomentoDrawer() {
  const momentoDrawer = document.getElementById("momentodrawer");

  // Ensure the drawer is hidden
  momentoDrawer.classList.remove("open");
}
