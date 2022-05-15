// Start states section
let nums = document.querySelectorAll(".state__number");
let section = document.querySelector(".states");

nums.forEach((num) => startCount(num));

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
