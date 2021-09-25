/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").innerHTML = randomnumber();
  document.querySelector(".card").classList.add(randomtype());
};

let randomnumber = () => {
  let num = ["A", "J", "K", "Q", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let randomnum = Math.floor(Math.random() * num.length);
  return num[randomnum];
};

let randomtype = () => {
  let tipo = ["diamante", "corazon", "pica", "trebol"];
  let randomtipo = Math.floor(Math.random() * tipo.length);
  return tipo[randomtipo];
};

setInterval(window.onload, 10000);
