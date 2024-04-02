const btn = document.getElementById("btn");
const nameBox = document.getElementById("nameBox");

const names = [
  "강예준",
  "곽인지",
  "김우혁",
  "김지수",
  "김창훈",
  "김현택",
  "김형규",
  "노유진",
  "박민서88",
  "박민서89",
  "박세민",
  "박정주",
  "서현유",
  "신재연",
  "심연주",
  "안지섭",
  "엄주영",
  "이지회",
  "이호승",
  "정진우",
  "조수민",
  "천혜원",
  "황기연",
];

console.log();

function btnClick() {
  const name = names[Math.floor(Math.random() * 23)];
  nameBox.innerHTML = name;
}

function init() {
  btn.addEventListener("click", btnClick);
}

init();
