var tab = localStorage.getItem("tab");
if (tab) {
  try {
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}
if (tabData.title) {
  document.getElementById("title").value = tabData.title;
}
if (tabData.icon) {
  document.getElementById("icon").value = tabData.icon;
}

var settingsDefaultTab = {
  title: "Jordansmathwork",
  icon: "./assets/img/jmw.png",
};

function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  var tab = localStorage.getItem("tab");
  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }
  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }
  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  var tab = localStorage.getItem("tab");
  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }
  if (icon) {
    tabData.icon = icon;
  } else {
    delete tabData.icon;
  }
  localStorage.setItem("tab", JSON.stringify(tabData));
}

function resetTab() {
  document.title = settingsDefaultTab.title;
  document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  document.getElementById("title").value = "";
  document.getElementById("icon").value = "";
  localStorage.setItem("tab", JSON.stringify({}));
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.body.setAttribute("theme", theme);
  document.body.style = '';
  localStorage.removeItem('theme_color');

  themes.forEach(palette => {
    if (palette.theme == theme) {
      document.querySelector('#theme_color').value = palette.color;
    }
  });
}

function setThemeColor(theme) {
  localStorage.setItem('theme', 'custom');
  localStorage.setItem('theme_color', theme);
  document.body.setAttribute('theme', 'custom');
  document.body.style = `--theme: ${theme}; --background: ${getContrastHex(theme)}; --text: ${getColorHex(theme)}; --text-secondary: ${getColorHex(theme)};`;
}
function setCloak() { // applies only to premade cloaks
  var cloak = document.getElementById("premadecloaks").value; // cloak seems kind of weird when you spell it out
  switch (cloak) {
    case "search": // Google Search
      setTitle("Google");
      setFavicon("./images/cloaks/Google Search.ico");
      location.reload();
      break;
      case "itchio":
      setTitle("poor ppl games");
      setFavicon("./images/cloaks/D23D344B-4CB0-4799-B525-F4E4F3A36728.ico");
      location.reload();
      break;
      case "wikipedia": // wikipedia
      setTitle("ويكيبيديا - جهاد");
      setFavicon("https://ar.wikipedia.org/favicon.ico");
      location.reload();
      break;
      case "bsite": // billibilli
      setTitle("Billibilli");
      setFavicon("https://www.bilibili.com/favicon.ico");
      location.reload();
      break;
    case "drive": // Google Drive
      setTitle("My Drive - Google Drive");
      setFavicon("./images/cloaks/Google Drive.ico");
      location.reload();
      break;
      case "librex": // LibreX
      setTitle("LibreX");
      setFavicon("./images/cloaks/9A58D8BC-6595-476A-AD95-B6D8880683C8.ico");
      location.reload();
      break;
    case "youtube": // YouTube 
      setTitle("YouTube");
      setFavicon("./images/cloaks/YouTube.ico");
      location.reload();
      break;  
    case "gmail": // Gmail
      setTitle("Gmail");
      setFavicon("./images/cloaks/Gmail.ico");
      location.reload();
      break;
    case "calendar": // Google Calendar
      setTitle("Google Calendar");
      setFavicon("./images/cloaks/Calendar.ico");
      location.reload();
      break;
    case "meets": // Google Meet
      setTitle("Google Meet");
      setFavicon("./images/cloaks/Meet.ico");
      location.reload();
      break;
    case "classroom": // Google Classroom
      setTitle("Classes");
      setFavicon("./images/cloaks/Classroom.png");
      location.reload();
      break;
    case "canvas": // Canvas 
      setTitle("Canvas");
      setFavicon("./images/cloaks/Canvas.ico");
      location.reload();
      break;
    case "zoom": // Zoom
      setTitle("Zoom");
      setFavicon("./images/cloaks/Zoom.ico");
      location.reload();
      break;
    case "nitter": // Nitter
      setTitle("nitter");
      setFavicon("./images/cloaks/63DFB320-0EEC-4F06-AF02-C50DFD2B49AB.ico");
      location.reload();
      break;
      case "teddit": // Teddit
      setTitle("teddit");
      setFavicon("./images/cloaks/EB4D8FE9-10E9-44B8-A6CE-3F9A0040F94A.ico");
      location.reload();
      break;
      case "cornhub": // Cornhub
      setTitle("Cornhub");
      setFavicon("./images/cloaks/8FE4C273-914D-431D-907E-3FCF5BB0399F.ico");
      location.reload();
      break;
      case "indivious": // Indivious
      setTitle("Indivious");
      setFavicon("./images/cloaks/2255E848-AB69-43C1-B470-DBFDA40FAD10.ico");
      location.reload();
      break;
    case "khan": // Khan Academy
      setTitle("Dashboard | Khan Academy"); 
      setFavicon("./images/cloaks/Khan Academy.ico");
      location.reload();
      break;
  }
}