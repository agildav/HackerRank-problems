const clickButton = document.getElementById("btn");
let count = 0;

clickButton.onclick = function() {
  count += 1;
  clickButton.innerHTML = count;
};
