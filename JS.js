window.addEventListener("blur", function() {
  console.log("Window lost focus (window minimised, or user switched apps/tabs).");
});
window.addEventListener("focus", function() {
  console.log("Window is focused again. (user is on the webpage");
});