const sides = document.querySelectorAll(".side");
const calHypo = document.getElementById("calHypo");
const result = document.getElementById("result");

calHypo.addEventListener("click", calculateHypo);

function calculateHypo(event) {
  event.preventDefault();
  console.log(Number(sides[0].value));
  let hypo = Math.sqrt(
    Math.pow(Number(sides[0].value), 2) + Math.pow(Number(sides[1].value), 2)
  );
  //   console.log(hypo);
  result.innerText = `Hypotenuse is: ${hypo}`;
}
