
function calculateAge(){
    let input = document.getElementById("dob").value;
    let birthDate = new Date (input);

    // current datetime - date of birth
    let currentDateTime = new Date().getTime();
    let diff = currentDateTime - birthDate.getTime();

    let ageDate = new Date (diff);

    let ageYear = ageDate.getUTCFullYear();

    let age = Math.abs(ageYear - 1970); 
    // console.log(age);

    let currentDate = new Date (currentDateTime).getDate();
    let currentMonth = new Date (currentDateTime).getMonth();
    let currentYear = new Date (currentDateTime).getFullYear();

    document.getElementById("result").innerHTML = age;
    document.getElementById("smallpara").innerHTML = `at ${currentDate}/${currentMonth}/${currentYear}`;
}