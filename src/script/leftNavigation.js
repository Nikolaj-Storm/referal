function selectButton(button) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.remove("hoverBgColor"));

  button.classList.add("hoverBgColor");
  closeDrawer();
}

document
  .getElementById("toggle-drawer")
  .addEventListener("click", function () {
    const leftNavigation = document.getElementById("left-navigation");
    const overlay = document.getElementById("overlay");

    leftNavigation.classList.toggle("open");
    overlay.classList.toggle("show");
  });

function closeDrawer() {
  const leftNavigation = document.getElementById("left-navigation");
  const overlay = document.getElementById("overlay");

  leftNavigation.classList.remove("open");
  overlay.classList.remove("show");
}
