"use strict";

var pos = [];
const element = document.getElementsByTagName("img");
for (let i = 0; i < element.length; i++) {
  const newElement = element[i];
  const posTop = newElement.offsetTop;
  const posLeft = newElement.offsetLeft;
  pos.push([posTop, posLeft]);
}
console.log(pos);

for (let i = 0; i < element.length; i++) {
  const newElement = element[i];
  newElement.style.position = "absolute";
  newElement.style.top = pos[i][0] + "px";
  newElement.style.left = pos[i][1] + "px";
  newElement.addEventListener("mousedown", boxMouseDown);
}

function boxMouseDown(eo) {
  eo = eo || window.event;

  const target = eo.target;
  target.style.cursor = "move";

  const boxPosTop = target.offsetTop;
  const boxPosLeft = target.offsetLeft;

  console.log(boxPosTop + " " + boxPosLeft);

  const mouseTop = eo.pageY;
  const mouseLeft = eo.pageX;
  console.log(mouseTop + " " + mouseLeft);

  const mousePointTop = mouseTop - boxPosTop;
  const mousePointLeft = mouseLeft - boxPosLeft;
  window.addEventListener("mousemove", boxMouseMove);

  function boxMouseMove(eo) {
    eo.preventDefault();
    eo = eo || window.event;
    target.style.zIndex = "200";
    target.style.opacity = "80%";

    const mouseMoveTop = eo.pageY;
    const mouseMoveLeft = eo.pageX;
    console.log(mouseMoveTop + " " + mouseMoveLeft);

    const boxMoveTop = mouseMoveTop - mousePointTop;
    const boxMoveLeft = mouseMoveLeft - mousePointLeft;

    target.style.top = boxMoveTop + "px";
    target.style.left = boxMoveLeft + "px";
    target.addEventListener("mouseup", boxMouseUp);
  }

  function boxMouseUp(eo) {
    window.removeEventListener("mousemove", boxMouseMove);
    target.style.opacity = "100%";
    target.style.zIndex = "1";
    target.style.cursor = "default";
  }
}
