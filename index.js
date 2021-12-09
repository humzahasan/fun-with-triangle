const angles = document.querySelectorAll(".angle");
const chkBtn = document.getElementById("chckTri");
const msg1 = document.getElementById("result");

const getValue = (angles) => {
  let arr = [];
  arr.push(angles[0].value);
  arr.push(angles[1].value);
  arr.push(angles[2].value);
  return arr;
};

const sumAngles = (arr) => {
  arr = arr.reduce((total, angle) => {
    console.log(total, angle);
    return Number(total) + Number(angle);
  });
  return arr;
};

const fnIsTriangle = (event) => {
  event.preventDefault();
  let angleVal = getValue(angles);
  console.log(angleVal);
  let sumOfAngles = sumAngles(angleVal);
  console.log(sumOfAngles);
  if (sumOfAngles === 180) {
    msg1.innerText = "It's a triangle";
  } else {
    msg1.innerText = "Not a triangle";
  }
};

chkBtn.addEventListener("click", fnIsTriangle);
