

// function addEventListner() {
//     const submit = document.getElementsByClassName('submit');
//     submit.addEventListener('click', function (event) {
//         alert('Your details are submitted!')
//     });
// }

const dictionaryForm = document.getElementsById(dictionaryForm);

dictionaryForm.addEventListener('submit', fetchServer());

function fetchServer() {
    const definition = document.getElementsById('definition');
    const symbols = document.getElementsById('symbols');
    const spelling = document.getElementsById('spelling');
}

document.querySelector(".submit").addEventListener('click', function (event) {
    alert('Your details are submitted')
});

addEventListener();

configurationObject = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
};
};

fetch('https://www.dictionaryapi.com/api/v3/references/medical/json/doctor?key=your-api-key')
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        console.log(`Holy cow! There are ${json["number"]} humans in space.`);
    });