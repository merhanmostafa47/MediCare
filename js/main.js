// Start navbar
const hamburger = document.querySelector(".hamburger");
const navMenue = document.querySelector(".main-nav__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenue.classList.toggle("active");
});

document.querySelectorAll(".main-nav__link").forEach(
  ((n) => n.addEventListener("click"),
  () => {
    hamburger.classList.remove("active");
    navMenue.classList.remove("active");
  })
);
// End navbar

// Start states section
let nums = document.querySelectorAll(".state__number");
let section = document.querySelector(".states");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY <= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};


function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// End states section
