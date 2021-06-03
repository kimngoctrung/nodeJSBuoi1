import { arrMess, arrNumberOfUser } from "./class.js";
const renderRandomNumber = () => {
  const numberRandom = Math.round(Math.random() * 100);
  const numberUser = document.getElementById("numberUser").value;
  arrNumberOfUser.push(numberUser);
  const historyOfUser = arrNumberOfUser.map((item, index) => {
    return `
      <h3>Lần Thứ ${index + 1} : ${item}</h3>
      `;
  });
  document.getElementById("historyUser").innerHTML = historyOfUser;
  if (numberUser < numberRandom) {
    document.getElementById("requestQS").innerHTML = arrMess[0];
  } else if (numberUser > numberRandom) {
    document.getElementById("requestQS").innerHTML = arrMess[1];
  } else {
    document.getElementById("requestQS").innerHTML = arrMess[2];
  }
  document.getElementById("numberRandom").innerHTML =
    "Số Của Chương Trình: " + numberRandom;
};

document.getElementById("btnGuess").onclick = renderRandomNumber;
