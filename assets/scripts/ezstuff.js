function ab() {
    var urlObj = new window.URL(window.location.href);
      win = window.open();
      win.document.body.style.margin = "0";
      win.document.body.style.height = "100vh";
      var iframe = document.createElement("iframe");
      iframe.style.border = "none";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.margin = "0";
      iframe.referrerpolicy = "no-referrer";
      iframe.allow = "fullscreen";
      iframe.src = "https://m3r993-8080.csb.app/client/https://nowgg.nl/play/electronic-arts/1353/ea-sports-fc-mobile-24-soccer";
      win.document.body.appendChild(iframe);
}
