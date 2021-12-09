const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.getElementById("submitQuiz");
const output = document.querySelector("#message");

const correctAns = ["90", "right angled"];

submitBtn.addEventListener("click", checkAns);

function checkAns(event) {
  event.preventDefault();
  let score = 0;
  let index = 0;
  const formData = new FormData(quizForm);
  for (let value of formData.values()) {
    // console.log(value);
    if (value === correctAns[index]) {
      score++;
    }
    index++;
  }
  console.log(score);
  output.innerText = `Your score is ${score}`;
}
