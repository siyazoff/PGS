document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const popup = document.querySelector(".popup");

  burger.addEventListener("click", function () {
    popup.classList.toggle("is-active");
  });
});
