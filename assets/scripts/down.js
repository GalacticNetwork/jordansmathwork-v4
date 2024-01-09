document.addEventListener("DOMContentLoaded", function() {
  const url = "https://vfvrxj-8080.csb.app/"; // Replace with your website URL

  // Function to check website status
  function checkWebsiteStatus() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          updateStatus("ㅤ");
        } else {
          updateStatus("Website is down. Please try again later.");
        }
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  }

  // Function to update status message
  function updateStatus(message) {
    const statusElement = document.getElementById("status");
    statusElement.textContent = message;
  }

  // Call the function
  checkWebsiteStatus();
});