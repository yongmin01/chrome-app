// CLOCK
const clock = document.querySelector("#clock");

function drawClock() {
  const today = new Date();
  clock.innerText = `${String(today.getHours()).padStart(2, "0")}:${String(
    today.getMinutes()
  ).padStart(2, "0")}:${String(today.getSeconds()).padStart(2, "0")}`;
}

drawClock();
setInterval(drawClock, 1000);

// RANDOM BACKGROUND IMAGE
const bgArr = [
  "background1",
  "background2",
  "background3",
  "background4",
  "background5",
];
const bodyBg = document.querySelector("body");
const bgImg = bgArr[Math.floor(Math.random() * bgArr.length)];
bodyBg.style.backgroundImage = `url(image/${bgImg}.jpg)`;

// WEATHER & LOCATION
const weather = document.querySelector(".weather");
const lo = document.querySelector(".location");
const API_KEY = "4400f84e2ec07f4ea0a239d6ef9af223";

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then(
      (data) => (
        (weather.innerHTML = `Today's weather is ${data.weather[0].main}`),
        (lo.innerHTML = `You're in ${data.name}`)
      )
    )
    .catch((error) => console.log("error"));
}
function error() {
  alert("I can't find you!");
}
navigator.geolocation.getCurrentPosition(success, error);
