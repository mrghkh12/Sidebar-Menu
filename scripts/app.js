const $ = document;

const sidebarContainer = $.querySelector(".sidebar");
const sidebarBottom = $.querySelector(".sidebar-bottom");
const listItems = $.querySelectorAll(".list-item");

sidebarBottom.addEventListener("click", (e) => {
  if (e.target.classList.contains("dark")) {
    sidebarContainer.className = "sidebar";
  }
  if (e.target.classList.contains("night")) {
    sidebarContainer.className = "sidebar night";
  }
  if (e.target.classList.contains("light")) {
    sidebarContainer.className = "sidebar light";
  }
});

function activeItem() {
  listItems.forEach((item) => item.classList.remove("active"));

  this.classList.add("active");
}

listItems.forEach((item) => item.addEventListener("click", activeItem));
