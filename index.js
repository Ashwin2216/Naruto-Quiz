const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

// listening to events on the form on submit.
form.addEventListener("submit", (e) => {
  // to prevent the page from refreshing on submitting the form.
  e.preventDefault();

  //  initial score
  let score = 0;
  const userAnswers = [
    form.Q1.value,
    form.Q2.value,
    form.Q3.value,
    form.Q4.value,
  ];
  userAnswers.forEach((answer, index) => {
    // loops through the userAnswers array and compares the indexes to that of the correctAnswers array
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  // to scroll to top of the page on submit(x,y)
  scrollTo(0, 0);
  // to display the score which is hidden by default
  result.classList.remove("d-none");
  // animating the score from 0 to the achieved score
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;

    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 15);
});
