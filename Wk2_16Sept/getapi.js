const API_BASE_URL = "https://reqres.in/api/users";

function getUsers(pageNo) {
    // clear previous data
    document.getElementById("card-display").innerHTML= "";

    fetch(API_BASE_URL + "?page=" + pageNo)
        .then(response => response.json())
        .then(response => {
            console.log(response.data);
            let data = response.data

            if (data.length == 0){
                let usersDisplay = document.getElementById("card-display");
                usersDisplay.innerHTML = `<p class="error">No Data Found</p>`;

            } else {
                data.map(users => {

                    let usersDisplay = document.getElementById("card-display");

                    let cardCol = document.createElement("div");
                    cardCol.className = "col";

                    let profileCard = document.createElement("div");
                    profileCard.className = "user-card shadow";

                    let userInfo = document.createElement('div');
                    userInfo.className = "user-info";

                    let image = document.createElement('div');
                    image.className = "avatar";
                    image.innerHTML = `<img src="${users.avatar}">`;

                    profileCard.appendChild(image);

                    let name = document.createElement('h5');
                    name.innerHTML = `${users.first_name} ${users.last_name}`;

                    userInfo.appendChild(name);

                    let email = document.createElement('p');
                    email.innerHTML = `${users.email}`;

                    userInfo.appendChild(email);
                    profileCard.appendChild(userInfo);

                    cardCol.appendChild(profileCard);
                    usersDisplay.appendChild(cardCol);
                })
            }
        })
        .catch(error => {
            console.log(error);
        })
};
getUsers();