// your code here
const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const yearInput = document.getElementById('year');
    const urlDisplay = document.getElementById('url');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from reloading page

      const name = nameInput.value.trim();
      const year = yearInput.value.trim();
      let url = "https://localhost:8080/";

      const params = [];

      if (name) {
        params.push(`name=${encodeURIComponent(name)}`);
      }

      if (year) {
        params.push(`year=${encodeURIComponent(year)}`);
      }

      if (params.length > 0) {
        url += "?" + params.join("&");
      }

      urlDisplay.textContent = url;
    });