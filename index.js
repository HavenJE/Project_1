

// // function addEventListner() {
// //     const submit = document.getElementsByClassName('submit');
// //     submit.addEventListener('click', function (event) {
// //         alert('Your details are submitted!')
// //     });
// // }

// // document.querySelector(".submit").addEventListener('click', function (event) {
// //     alert('Your details are submitted')
// // });
// // addEventListener();



const newsForm = document.getElementById('newsForm');

newsForm.addEventListener('submit', fetchServer);

function fetchServer(event) {
    event.preventDefault()
    const main = document.querySelector('main'); 
    main.insertAdjacentElement('afterend', '<p id="display"></p>'); 
    const dateFrom = document.getElementById('date_from');
    const dateTo = document.getElementById('date_to');
    const domains = document.getElementById('domains');
    const keyword = document.getElementById('keyword');
    const newTerm = {
        dateFrom: dateFrom,
        dateTo: dateTo,
        domains: domains,
    };
    console.log(newTerm.dateFrom, newTerm.dateTo, newTerm.domains);

    const configurationObject = {
        method: "GET",
        headers: {
            "Accept": "application/json"    
        },

    };

    fetch(`https://newsapi.org/v2/everything?q=${keyword.value}&apiKey=e71137b4bffe4e62a640d13070e6536d`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
        });
}


// console.log()
// data.innerHTML(data.sourceId, data.sourceName, data.sourceAuthor, data.sourceTitle); 

// fetch(`https://newsapi.org/v2/everything?q=doctor&apiKey=e71137b4bffe4e62a640d13070e6536d`)
//     .then(function (response) {
//         return response.json();
//     }).then(function (data) {
//         console.log(data);
//     });

// Albert Notes:
// change (json) to (data) in rows 53, 54 
// back ticks `` is used for the url in row 50 NOT double quotation 
