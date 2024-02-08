document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const popup = document.querySelector(".popup");

  burger.addEventListener("click", function () {
    popup.classList.toggle("is-active");
    this.classList.toggle("is-active");
  });

  document.querySelectorAll(".advantages__item").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      const image = item.querySelector(".advantages__hover_img");
      image.style.opacity = "1";

      const mouseMoveHandler = function (e) {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        image.style.transform = `translate(${x - 500}px, ${y}px)`;
      };

      item.addEventListener("mousemove", mouseMoveHandler);

      item.addEventListener(
        "mouseleave",
        function () {
          image.style.opacity = "0";
          item.removeEventListener("mousemove", mouseMoveHandler);
        },
        { once: true }
      );
    });
  });

  const thxSection = document.querySelector(".section-thx");
  const notSection = document.querySelector(".section-not");
  const header = document.querySelector(".header");

  if (thxSection || notSection) {
    if (header) {
      header.classList.add("header_secondary");
    }
  }
});
