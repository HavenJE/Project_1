
const newsForm = document.getElementById('newsForm');
const display = document.getElementById('display');
const submitbutton = document.getElementById('submitbutton');
const searchResult = document.getElementById('searchResult');
const clear = document.getElementById('clear');
submitbutton.addEventListener('click', function (e) {
    e.preventDefault();
    fetchArticles();
    // console.log("event is prevented")
});

const configurationObject = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    },

};
// console.log("GET is working")

clear.addEventListener('click', e => {
    clearChildren()
})
function clearChildren() {
    searchResult.innerHTML = ''
}

function fetchArticles() {
    fetch(`https://newsapi.org/v2/everything?q=${keyword.value}&apiKey=e71137b4bffe4e62a640d13070e6536d`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data.articles);
            // clearChildren()
            const html = data.articles.map(article => {
                console.log("articles", article)
                const listItem = document.createElement('li');
                listItem.innerHTML =
                    `<div id="displayedDetails">
            <div class="artImage"> <img class="articleImage" src="${article.urlToImage}"</div> 
            <div class="artTitle"> <strong>Article Title:</strong> ${article.title}. </div> 
            <div class="artAuthor"> <strong>Puplished by:</strong> ${article.author}</div>
            <div> <a href="${article.url}" class="artView" <strong> View Article </strong> </a>  </div>
            </div>`;

            // <div class="artContent"><strong>Article Content:</strong> ${article.content}</div>
            // <div class="artUrl"><strong>Article url:</strong> ${article.url}</div>

                // const articleInfo = document.createElement('b');
                // listItem.append(articleInfo);

                searchResult.append(listItem)
            });
            console.log(html);
        })



    // for (let i = 0; i < article.length; i++) {
    //     const keywordResult = document.createElement('li');
    //     const articleInfo = document.createElement('b');
    //     articleInfo.append(articles.author.value)
    //     articleInfo.append(title.value)
    //     articleInfo.append(url.value)
    //     articleInfo.append(source.name)
    //     articleInfo.append(publishedAt.value)
    //     keywordResult.append(articleInfo);

    // }
}

