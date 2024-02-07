"use strict";

const element = document.getElementsByTagName("img");

for (var i of element) {
  console.log(i);
  i.addEventListener("mousedown", boxMouseDown);
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
    target.style.position = "relative";

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
