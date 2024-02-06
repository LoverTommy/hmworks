"use strict";

const element = document.getElementsByTagName("img");

for (var i of element) {
  console.log(i);
  i.addEventListener("mousedown", boxMouseDown);
  i.style.padding = "0px";
  i.style.verticalAlign = "top";
  i.style.zIndex = '1';
}

function boxMouseDown(eo) {
  eo = eo || window.event;

  const target = eo.target;
  target.style.position = "absolute";
  target.style.zIndex = "200";
  target.style.opacity = "80%";

  const boxPosTop = target.offsetTop;
  const boxPosLeft = target.offsetLeft;

  const mouseTop = eo.pageY;
  const mouseLeft = eo.pageX;

  const mousePointTop = mouseTop - boxPosTop;
  const mousePointLeft = mouseLeft - boxPosLeft;

  window.addEventListener("mousemove", boxMouseMove);

  function boxMouseMove(eo) {
    eo.preventDefault();
    eo = eo || window.event;

    const mouseMoveTop = eo.pageY;
    const mouseMoveLeft = eo.pageX;

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
  }
}
