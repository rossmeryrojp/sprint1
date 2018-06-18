const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container')
let searchedForText;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForText = searchField.value;
    getList();
});

function getList() {
 const lists = new XMLHttpRequest();
 articleRequest.open('GET', `../data/cohorts/lim-2018-03-pre-core-pw/users.json`);
}
/*
function addNews(){ debugger
 const data = JSON.parse(this.responseText);
 
 const article = data.response.docs[0];
 const title = article.headline.main;
 const snippet = article.snippet;

 let li = document.createElement('li');
 li.className = 'articleClass';
 li.innerText = snippet;

 responseContainer.appendChild(li); 
}
*/