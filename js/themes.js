const themepicker = document.getElementById("themepicker");
  document.body.setAttribute('theme', 'classic')
themepicker.addEventListener("change", function(e) {
  let theme = e.target.value;
  if (theme != "select") {
    document.body.setAttribute('theme', theme)
    localStorage.setItem("theme", theme);
  } else {
    
  }
});

if (localStorage.getItem("theme")) {
  document.body.setAttribute("theme", localStorage.getItem("theme"))
}