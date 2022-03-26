var percent = document.querySelector(".percent");
var progress = document.querySelector(".progress");
var text = document.querySelector(".text");

var count = 0;
var pro = 0;

var loading = setInterval(animate, 50);

function animate() {
  if (count == 100 && pro == 300) {
    clearInterval(loading);
    text.style.display = "block";
  } else {
    pro = pro + 3;
    count = count + 1;
    progress.style.width = pro + "px";
    percent.textContent = count + "%";
  }
}