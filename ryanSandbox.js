function clicky() {
  var elem = document.getElementById("bar");
  var width = 1;
  var id = setInterval(frame, 60);
  elem.setAttribute("style", "opacity:.7;");
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      elem.setAttribute("style", "opacity:1;");
      elem.style.width = '100%';
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}
