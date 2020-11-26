(function () {
  function fetchUsers() {
    let url = "https://jsonplaceholder.typicode.com/users";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function (e) {
      if (this.readyState === 4) {
        switch (xhr.status) {
          case 200: {
            console.log(xhr.responseText);
            let users = JSON.parse(xhr.responseText);
            let output = "";
            for (let i in users) {
              output +=
                '<div class="user">' +
                '<div class="user-item">' +
                "<p class='strong'>" +
                "Name: " +
                "</p>" +
                users[i].name +
                "</div>" +
                '<div class="user-item">' +
                "<p class='strong'>" +
                "Username: " +
                "</p>" +
                users[i].username +
                "</div>" +
                '<div class="user-item">' +
                "<p class='strong'>" +
                "Username: " +
                "</p>" +
                users[i].email +
                "</div>" +
                '<div class="user-item">' +
                "<p class='strong'>" +
                "Email: " +
                "</p>" +
                users[i].phone +
                "</div>" +
                '<div class="user-item">' +
                "<p class='strong'>" +
                "Address: " +
                "</p>" +
                users[i].address.street +
                " " +
                users[i].address.suite +
                users[i].address.city +
                " " +
                users[i].address.zipcode +
                "</div>" +
                "</div>";
            }
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
  fetchUsers();

  return (document.getElementById("content").innerHTML = output);
})();
