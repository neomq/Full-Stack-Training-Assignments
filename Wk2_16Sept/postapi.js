const API_BASE_URL = "https://reqres.in/api/users";

function postUser() {

    let name = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    let errorMsg = document.getElementById("error-msg");

    // clear input field
    document.getElementById("name").value = "";
    document.getElementById("job").value = "";

    // clear error msg (if any)
    errorMsg.innerHTML = "";
    if (name == "" || job == ""){
        errorMsg.innerHTML = `<p class="error-msg mb-0 px-2">Please enter name and job.</p>`;
    } else {
        let params = {
            "name": name,
            "job": job
        }

        fetch(API_BASE_URL,{
            method: "POST",
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
                }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            // document.getElementById("display").innerHTML = JSON.stringify(response);

            let resultsCard = document.createElement("div");
            resultsCard.className = "result-card shadow p-4";

            let cardCol = document.createElement("div");
            cardCol.className = "col";

            let id = document.createElement("p");
            id.className = "p-0 mb-3 small-text"; 
            id.innerHTML = `ID: ${response.id}`

            let name = document.createElement("h5");
            name.className = "p-0 m-0"; 
            name.innerHTML = `${response.name}`

            let job = document.createElement("h6");
            job.className = "p-0 mb-3"; 
            job.innerHTML = `${response.job}`

            let datetime = new Date(response.createdAt).toDateString();

            let date = document.createElement("p");
            date.className = "p-0 m-0 small-text"; 
            date.innerHTML = `Created: ${datetime}`;

            resultsCard.appendChild(id)
            resultsCard.appendChild(name);
            resultsCard.appendChild(job);
            resultsCard.appendChild(date)

            cardCol.appendChild(resultsCard);
            display.appendChild(cardCol);
        })
        .catch(error => {
            console.log(error);
        })
    }
}