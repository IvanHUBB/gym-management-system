async function loadPage(page) {
  try {
    const response = await fetch(`views/${page}.html`);
    const html = await response.text();
    document.getElementById("content").innerHTML = html;
  } catch (error) {
    document.getElementById("content").innerHTML = "<h4>Page is not found.</h4>";
  }
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data page]")) {
    e.preventDefault();
    const page = e.target.getAttribute("data page");
    loadPage(page);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  loadPage("dashboard");
});