$(document).ready(function() {
  resizeboxes();
});

window.onresize = resizeboxes;
function resizeboxes() {
  if (window.innerWidth > window.innerHeight) {
    document.querySelectorAll('.left').forEach(box => { box.style.width = "35vw"; });
    document.querySelectorAll('.right').forEach(box => { box.style.width = "35vw"; });
    document.querySelectorAll('.textbox').forEach(box => { box.style.width = "30vw"; });
    document.querySelectorAll('h1').forEach(text => { text.style.fontSize = "2.5vw"; });
    document.querySelectorAll('p').forEach(text => { text.style.fontSize = "1.1vw"; });
  } else {
    document.querySelectorAll('.left').forEach(box => { box.style.width = "80vw"; });
    document.querySelectorAll('.right').forEach(box => { box.style.width = "80vw"; });
    document.querySelectorAll('.textbox').forEach(box => { box.style.width = "75vw"; });
    document.querySelectorAll('h1').forEach(text => { text.style.fontSize = "7.5vw"; });
    document.querySelectorAll('p').forEach(text => { text.style.fontSize = "3vw"; });
  }
}