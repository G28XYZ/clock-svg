(function updateClock() {
  // Update the SVG clock graphic to show current time

  const format = (t) => (t < 10 ? "0" + parseInt(t) : parseInt(t));

  let now = new Date(); // Current time
  let ms = now.getMilliseconds();
  let sec = now.getSeconds(); // Seconds
  let min = now.getMinutes() + sec / 60; // Fractional minutes
  let hour = (now.getHours() % 24) + min / 60; // Fractional hours
  let secangle = (sec + ms / 1000) * 6; // 6 degrees per minute
  let minangle = min * 6; // 6 degrees per minute
  let hourangle = hour * 30; // 30 degrees per hour

  // Get SVG elements for the hands of the clock
  let sechand = document.querySelector("#clock .secondhand");
  let minhand = document.querySelector("#clock .minutehand");
  let hourhand = document.querySelector("#clock .hourhand");
  let time = document.querySelector(".time");

  time.textContent = `${format(hour)}:${format(min)}:${format(sec)}`;

  // Set an SVG attribute on them to move them around the clock face
  sechand.setAttribute("transform", `rotate(${secangle},50,50)`);
  minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
  hourhand.setAttribute("transform", `rotate(${hourangle},50,50)`);

  // Run this function again in 1 second
  setTimeout(updateClock, 1);
})(); // Note immediate invocation of the function here.
