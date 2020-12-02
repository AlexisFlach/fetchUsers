const displayUsers = (function () {
  const _url = "https://jsonplaceholder.typicode.com/users";

  const displayUser = (data) => {
    let output = "";
    data.forEach((data) => {
      output += `
                <div class="user"> 
                <div class="user-item">
                <p class='strong'>
                Name:
                </p>
                ${data.name}
                </div>
                </div>
                `;
    });
    return output;
  };

  function fetchUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", _url, true);
    xhr.onprogress = function () {
      console.log("state", xhr.readyState);
    };

    xhr.onerror = function () {
      console.log("Error");
    };

    xhr.onload = function () {
      if (this.readyState === 4) {
        switch (xhr.status) {
          case 200: {
            let users = JSON.parse(xhr.responseText);
            let output = displayUser(users);
            document.getElementById("users-grid").innerHTML = output;
            break;
          }
          case 404:
            console.log("404", xhr.status);
            break;

          default:
            console.log("Default", xhr.status);
        }
      }
    };
    xhr.send();
  }
  return { fetchUsers };
})();

displayUsers.fetchUsers();
