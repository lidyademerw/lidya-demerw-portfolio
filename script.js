const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    filterButtons.forEach((btn) => btn.classList.remove("filter-btn--active"));
    this.classList.add("filter-btn--active");
    console.log("External Script working! Clicked: " + this.innerText);
  });
});
const seeAllBtn = document.getElementById("see-all-btn");
const hiddenCards = document.querySelectorAll(".project-card--hidden");
seeAllBtn.addEventListener("click", function () {
  hiddenCards.forEach((card) => {
    card.style.display = "block";
    card.classList.add("fade-in");
  });
  this.style.display = "none";
});
const reveal = () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150; // How many pixels before showing

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
};
window.addEventListener("scroll", reveal);
reveal();
