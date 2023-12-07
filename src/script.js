// sidebar script
function onSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const openToggle = document.getElementById("openShow");
  const closeToggle = document.getElementById("closeShow");
  const mainContent = document.querySelector(".main-content");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.remove("close");
    mainContent.style.marginLeft = "300px";
    openToggle.classList.add("d-none");
    closeToggle.classList.remove("d-none");
  } else {
    sidebar.classList.add("close");
    openToggle.classList.remove("d-none");
    closeToggle.classList.add("d-none");
    mainContent.style.marginLeft = "100px";
  }
}

// dropdown script
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    }); // addEventListener
  }); // forEach
});
// DOMContentLoaded  end

// dropdown script arrow
function toggleDropdown() {
  const dropdownRight = document.querySelector(".dropdown-right");
  const dropdownDown = document.querySelector(".dropdown-down");

  if (dropdownDown.classList.contains("d-none")) {
    dropdownDown.classList.remove("d-none");
    dropdownRight.classList.add("d-none");
  } else {
    dropdownRight.classList.remove("d-none");
    dropdownDown.classList.add("d-none");
  }
}

// login page
function formLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var alertDismissible = document.getElementById("alertDismissible");
  var alertMessage = document.getElementById("alertMessage");

  if (username === "") {
    alertDismissible.classList.add("alert-danger");
    alertMessage.innerHTML = "Username must be filled.";
    alertDismissible.style.display = "flex";
    alertDismissible.style.justifyContent = "space-between";
    alertDismissible.style.alignItems = "center";
    alertMessage.style.color = "red";
  } else if (password === "") {
    alertDismissible.classList.add("alert-danger");
    alertMessage.innerHTML = "Password must be filled.";
    alertDismissible.style.display = "flex";
    alertDismissible.style.justifyContent = "space-between";
    alertDismissible.style.alignItems = "center";
    alertMessage.style.color = "red";
  } else {
    window.location.href = "index.html";
  }
}

// alert fail login
function closeAlert() {
  var alertElement = document.getElementById("alertDismissible");
  if (alertElement) {
    alertElement.style.display = "none";
  }
}

// fitur darkmode
function darkMode() {
  const body = document.body,
    header = document.querySelector("header"),
    sidebars = document.getElementById("sidebars"),
    textH3 = document.querySelector("h3");

  if (body.classList.contains("bg-black-darkmode")) {
    body.classList.remove("bg-black-darkmode");
    header.classList.remove("bg-secondary");
    sidebars.classList.remove("bg-dark-subtle");
    textH3.classList.remove("text-white");
  } else {
    body.classList.add("bg-black-darkmode");
    header.classList.add("bg-secondary");
    sidebars.classList.add("bg-dark-subtle");
    textH3.classList.add("text-white");
  }
}
