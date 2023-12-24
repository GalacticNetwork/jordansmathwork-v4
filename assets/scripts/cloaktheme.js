$('.select-box').on('click', function() {
  $(this).find('.options').toggle();
});

$('#presetOptions li').on('click', function() {
  var selectedOption = $(this).text();
  $('#presets').text(selectedOption);
  $('.options').hide();
});

$('#themeOptions li').on('click', function() {
  var selectedOption = $(this).text();
  $('#themes').text(selectedOption);
  $('.options').hide();
});

document.body.addEventListener("click", function(event) {
  var myList = document.getElementById("myList");
  if (!myList.contains(event.target)) {
    $('.options').hide();

  }
});

const customApply = document.getElementById("customApply");
const reset = document.getElementById("reset");
const titleInput = document.getElementById("title");
const faviconInput = document.getElementById("favicon");

const google = document.getElementById("google");
const googleClassroom = document.getElementById("googleClassroom");
const bing = document.getElementById("bing");

customApply.addEventListener("click", () => {
  title = titleInput.value.trim();
  localStorage.setItem("Title", title);

  favicon = faviconInput.value.trim();
  localStorage.setItem("Favicon", favicon);

  location.reload();
});

google.addEventListener("click", () => {
  localStorage.setItem("Title", "Google");
  localStorage.setItem("Favicon", "https://google.com/favicon.ico");

  location.reload();
});

googleClassroom.addEventListener("click", () => {
  localStorage.setItem("Title", "Classes");
  localStorage.setItem("Favicon", "https://ssl.gstatic.com/classroom/favicon.png");

  location.reload();
});

bing.addEventListener("click", () => {
  localStorage.setItem("Title", "Bing");
  localStorage.setItem("Favicon", "https://bing.com/favicon.ico");

  location.reload();
});

reset.addEventListener("click", () => {
  localStorage.setItem("Title", "Jordan's Math Work");
  localStorage.setItem("Favicon", "/img/JMWfavicon.png");

  location.reload();
});

// theme stuff
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const discord = document.getElementById("discord");
const incognito = document.getElementById("incognito");
const simple = document.getElementById("simple");

light.addEventListener("click", () => {
  localStorage.setItem("Stylesheet", "css/lightMode.css");
  location.reload();
});

dark.addEventListener("click", () => {
  localStorage.setItem("Stylesheet", "css/darkMode.css");
  location.reload();
});

discord.addEventListener("click", () => {
  localStorage.setItem("Stylesheet", "css/discord.css");
  location.reload();
});

incognito.addEventListener("click", () => {
  localStorage.setItem("Stylesheet", "css/incognito.css");
  location.reload();
});

simple.addEventListener("click", () => {
  localStorage.setItem("Stylesheet", "css/simple.css");
  location.reload();
});
    corn.addEventListener("click", () => {
      localStorage.setItem("Stylesheet", "css/ph.css");
      location.reload();
    });