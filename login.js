const loginForm = document.querySelector("#login");
const userID = document.querySelector(".userID");
const userPW = document.querySelector(".userPW");
const loginBtn = document.querySelector(".loginBtn");
const greetingTitle = document.querySelector("#greeting");

function validInput() {
  if (userID.value === "") {
    return false;
  } else if (userPW.value.length < 8) {
    return false;
  } else return true;
}
function login(event) {
  if (validInput()) {
    event.preventDefault();
    localStorage.setItem("ID", userID.value);
    localStorage.setItem("PW", userPW.value);
    userID.classList.add("hidden");
    userPW.classList.add("hidden");
    userID.classList.add("hidden");
    loginBtn.classList.add("hidden");
    greetingTitle.innerHTML = `Hello ${localStorage.getItem("ID")}!`;
  } else alert("Write valid ID and password");
}

loginForm.addEventListener("submit", login);
