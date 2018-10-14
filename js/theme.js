const light = "light-mode"
const dark = "dark-mode"

function lightMode() {
  var body = document.getElementById("body")
  var link = document.getElementById("link")
  var buttonLight = document.getElementsByName("light-mode")
  body.className = link.className = light
}

function darkMode() {
  var body = document.getElementById("body")
  var link = document.getElementById("link")
  var buttonDark = document.getElementsByName("dark-mode")
  body.className = link.className = dark
}
