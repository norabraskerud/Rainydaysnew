const API_URL = "https://norabraskerud.com/wp-json/wc/store/products";
const resultsContainer = document.querySelector(".results");

async function callApi() {
    try {
        const response = await fetch(API_URL);
        const results = await response.json();
        console.log(results);

        createHtml(results);
    }
    
    catch (error) {
        console.log(error);
        resultsContainer.innerHTML = error;
    }
}

callApi();


function createHtml(results){
    for (let i = 0; i < results.length; i++) {
        console.log(results[i])
        resultsContainer.innerHTML +=   `<div class="card">                  
                                        <a href="details.html?id=${results.id}"</a>                                
                                        <h3 class="name">${results[i].name}</h3>
                                        <img scr="${results[i].url}">
                                        <button class="add>${results[i].add_to_cart}</button>
                                        `;
    }
}
