"use strict";

const form = document.forms.newClock;
const formButton = form.elements.button;
formButton.addEventListener("click", newwww);

function newwww(eo) {
  eo.preventDefault();
  const clock = new Clock();
  clock.newClock();
}

class Clock {
  constructor() {
    this.clock = document.getElementById("clock");
    this.center = document.getElementById("center");
    this.form = document.forms.newClock;
    this.clockRadius = form.elements.clockRadius.value;
    this.myAngle = 0; //для изменения градуса при котором будет позиционироваться новый див с часом
    this.hours = 12; //колличество часов, для цикла
    this.hourNum = 12; //для нумерации часа в каждом новом диве
    this.one = 1; //для изменения в цикле числа часа, чтобы начиналось с 12, а после 1..2..3 и т.д
    this.startInterval = 0;

    this.sec = document.getElementById("sec");
    this.min = document.getElementById("min");
    this.hour = document.getElementById("hour");
  }

  newClock() {
    this.clock.style.display = "block";
    this.clock.style.width = this.clockRadius + "px";
    this.clock.style.height = this.clockRadius + "px";

    this.radius = this.clock.offsetWidth / 2.4;
    this.centerX = this.center.offsetLeft + this.center.offsetWidth / 2;
    this.centerY = this.center.offsetTop + this.center.offsetHeight / 2;

    for (let i = 0; i < this.hours; i++) {
      this.createHour = document.createElement("div");
      this.createHour.style.width = this.clock.offsetWidth / 10 + "px";
      this.createHour.style.height = this.clock.offsetHeight / 10 + "px";
      this.createHour.style.borderRadius = "50%";
      this.createHour.style.backgroundColor = "black";
      this.createHour.style.position = "absolute";
      this.createHour.style.display = "grid";
      this.clock.appendChild(this.createHour);
      this.hourNumber = document.createElement("span");
      this.hourNumber.innerHTML = this.hourNum;
      this.hourNumber.style.color = "white";
      this.hourNumber.style.width = "min-content";
      this.hourNumber.style.height = "min-content";
      this.hourNumber.style.justifySelf = "center";
      this.hourNumber.style.alignSelf = "center";
      this.hourNumber.style.fontSize = this.createHour.offsetWidth / 2 + "px";

      this.createHour.appendChild(this.hourNumber);
      this.angle = (this.myAngle / 180) * Math.PI;

      this.newHourX = this.centerX + this.radius * Math.sin(this.angle);
      this.newHourY = this.centerY - this.radius * Math.cos(this.angle);
      this.createHour.style.left =
        Math.round(this.newHourX - this.createHour.offsetWidth / 2) + "px";
      this.createHour.style.top =
        Math.round(this.newHourY - this.createHour.offsetHeight / 2) + "px";

      this.hourNum = this.one++;
      this.myAngle += 30;
    }

    this.startTime();
  }

  startTime() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  }

  updateTime() {
    this.currTime = new Date();
    this.liveSeconds = this.currTime.getSeconds();
    this.secondsPos = this.liveSeconds * 6;

    this.liveMinutes = this.currTime.getMinutes();
    this.minutesPos = this.liveMinutes * 6;

    this.liveHours = this.currTime.getHours();
    this.hoursPos = this.liveHours * 30;

    this.currTimeStr = formatDateTime(this.currTime);
    this.clockTimeStr = document.getElementById("clockTime");
    this.clockTimeStr.style.fontSize = this.clock.offsetWidth / 10 + "px";
    this.clockTimeStr.style.left = this.clock.offsetWidth / 3 + "px";
    this.clockTimeStr.innerHTML = this.currTimeStr;

    this.sec.style.transform = "rotate(" + this.secondsPos + "deg)";
    this.min.style.transform = "rotate(" + this.minutesPos + "deg)";
    this.hour.style.transform = "rotate(" + this.hoursPos + "deg)";
  }
}

function formatDateTime(dt) {
  const hours = dt.getHours();
  const minutes = dt.getMinutes();
  const seconds = dt.getSeconds();
  console.log(
    str0l(hours, 2) + ":" + str0l(minutes, 2) + ":" + str0l(seconds, 2)
  );
  return str0l(hours, 2) + ":" + str0l(minutes, 2) + ":" + str0l(seconds, 2);
}

function str0l(val, len) {
  let strVal = val.toString();
  while (strVal.length < len) strVal = "0" + strVal;
  return strVal;
}
