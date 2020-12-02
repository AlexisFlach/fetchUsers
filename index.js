// Revealling module pattern

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
                <div class="user-item">
                <p class='strong'>
                Name:
                </p>
                ${data.username}
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

// Factory Pattern

// function UserFactory() {
//   this.createUser = function (name, username) {
//     let user;
//     user = new SingleUser(name, username);
//     return user;
//   };
// }

// const SingleUser = function (name, username) {
//   this.name = name;
//   this.username = username;
// };

// const displayUsers = (function () {
//   const _url = "https://jsonplaceholder.typicode.com/users";

//   const displayUser = (data) => {
//     let output = "";
//     data.forEach((data) => {
//       output += `
//                 <div class="user">
//                 <div class="user-item">
//                 <p class='strong'>
//                 Name:
//                 </p>
//                 ${data.name}
//                 </div>
//                 <div class="user-item">
//                 <p class='strong'>
//                 Name:
//                 </p>
//                 ${data.username}
//                 </div>
//                 </div>
//                 `;
//     });
//     return output;
//   };

//   function fetchUsers() {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", _url, true);
//     xhr.onprogress = function () {
//       console.log("state", xhr.readyState);
//     };

//     xhr.onerror = function () {
//       console.log("Error");
//     };

//     xhr.onload = function () {
//       if (this.readyState === 4) {
//         switch (xhr.status) {
//           case 200: {
//             let users = [];
//             const factory = new UserFactory();
//             let fetchedUsers = JSON.parse(xhr.responseText);
//             fetchedUsers.forEach((user) => {
//               users.push(factory.createUser(user.name, user.username));
//             });

//             let output = displayUser(users);
//             document.getElementById("users-grid").innerHTML = output;
//             break;
//           }
//           case 404:
//             console.log("404", xhr.status);
//             break;

//           default:
//             console.log("Default", xhr.status);
//         }
//       }
//     };
//     xhr.send();
//   }
//   return { fetchUsers };
// })();

// displayUsers.fetchUsers();
