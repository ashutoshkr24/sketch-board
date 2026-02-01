const canvas = document.getElementById("sketchPad");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const clearButton = document.getElementById("clearCanvas");
let isDrawing = false;
let currentColor = "#000000";
ctx.strokeStyle = currentColor;
ctx.lineWidth = 2;
ctx.lineCap = "round";
colorPicker.addEventListener("change", (e) => {
  currentColor = e.target.value;
  ctx.strokeStyle = currentColor;
});
clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});
canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.closePath();
});
canvas.addEventListener("mouseleave", () => {
  isDrawing = false; 
});
