"use strict";

const box = document.getElementById("box");
box.addEventListener("mousedown", boxMouseDown);

function boxMouseDown(eo) {
  eo = eo || window.event;
  const boxPosTop = eo.pageY;
  const boxPosLeft = eo.pageX;
  console.log(eo);
  console.log(boxPosTop + " " + boxPosLeft);

  box.addEventListener("mousemove", boxMouseMove);

  function boxMouseMove(eo) {
    eo.preventDefault();
    eo = eo || window.event;
    console.log(eo);
    const mouseTop = eo.pageY;
    const mouseLeft = eo.pageX;
    console.log(mouseTop + " " + mouseLeft);

    const boxMovePosTop = mouseTop - boxPosTop;
    const boxMovePosLeft = mouseLeft - boxPosLeft;

    box.style.top = boxMovePosTop + "px";
    box.style.left = boxMovePosLeft + "px";
  }

  box.addEventListener("mouseup", boxMouseUp);

  function boxMouseUp(eo) {
    eo.preventDefault();
    eo = eo || window.event;
    console.log("mouseUp");
    box.removeEventListener("mousemove", boxMouseMove);
  }
}

// var box = document.getElementById("box");
// var boxPosTop = "";
// var boxPosLeft = "";
// var mouseTop = "";
// var mouseLeft = "";
// box.addEventListener("mousedown", boxMouseDown);

// function boxMouseDown(eo) {
//   eo = eo || window.event;
//   boxPosTop = eo.pageY;
//   boxPosLeft = eo.pageX;
//   console.log(eo);
//   console.log(boxPosTop + " " + boxPosLeft);
//   box.addEventListener("mousemove", boxMouseMove);
// }

// function boxMouseMove(eo) {
//   eo.preventDefault();
//   eo = eo || window.event;
//   console.log(eo);
//   mouseTop = eo.pageY;
//   mouseLeft = eo.pageX;
//   console.log(mouseTop + " " + mouseLeft);

//   const boxMovePosTop = mouseTop - boxPosTop;
//   const boxMovePosLeft = mouseLeft - boxPosLeft;

//   return (
//     (box.style.top = boxMovePosTop + "px"),
//     (box.style.left = boxMovePosLeft + "px"),
//     box.addEventListener("mouseup", boxMouseUp)
//   );
// }

// function boxMouseUp(eo) {
//   eo.preventDefault();
//   eo = eo || window.event;
//   console.log("mouseUp");
//   box.removeEventListener("mousemove", boxMouseMove);
// }
