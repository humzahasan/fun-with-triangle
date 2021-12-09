const sides = document.querySelectorAll(".side");
const calArea = document.getElementById("calcArea");
const result = document.getElementById("result");

calArea.addEventListener("click", calculateArea);

function calculateArea(event) {
  event.preventDefault();
  console.log(Number(sides[0].value));
  let area = (1 / 2) * (Number(sides[0].value) * Number(sides[1].value));
  //   console.log(area);
  result.innerText = `Area is: ${area}`;
}
