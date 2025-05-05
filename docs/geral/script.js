
function toggleMode() {
  document.body.classList.toggle('light-mode');
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const links = document.querySelectorAll(".nav-button");
  links.forEach(link => {
    if (path.includes(link.getAttribute("href"))) {
      link.classList.add("ativo");
    }
  });

  const contentBox = document.querySelector(".content-box");
  if (!contentBox) return;

  const headers = contentBox.querySelectorAll("h2, h3");
  if (headers.length === 0) return;

  const indexBox = document.createElement("div");
  indexBox.className = "index-auto";
  indexBox.innerHTML = "<strong>Índice</strong><ul></ul>";
  const ul = indexBox.querySelector("ul");

  headers.forEach((header, idx) => {
    const id = "section-" + idx;
    header.id = id;
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${id}">${header.textContent}</a>`;
    ul.appendChild(li);
  });

  contentBox.prepend(indexBox);
});
