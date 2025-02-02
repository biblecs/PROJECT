document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page-frame");

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);

      pages.forEach(page => {
        if (page.id === targetId) {
          page.style.display = "block";
        } else {
          page.style.display = "none";
        }
      });
    });
  });

  // Initially show only the first page
  pages.forEach((page, index) => {
    if (index === 0) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
});
