let name = document.getElementById("name");
let password = document.getElementById("password");

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (name.value == "Divine" && password.value == "Hello") {
    setTimeout(() => {
        window.location.href = "/main.html";
    }, 2000)
  } else {
    alert("Username or Password is Incorrect")
  }
})