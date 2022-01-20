const API_URL = "https://norabraskerud.com/wp-json/wc/store/products";
const resultsContainer = document.querySelector(".results");

async function callApi() {
    try {
        const response = await fetch(API_URL);
        const results = await response.json();

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
        console.log(results[i].images[0].src)
        console.log(results[i])

var object = {
    variations: [1, 2, 3, 4, 5]
}






        resultsContainer.innerHTML +=   `<div class="card">                  
                                        <a href="details.html"></a>                                
                                        <h3 class="name">${results[i].name}</h3>
                                        <img scr="${results[i].images[0].src}">
                                        <button class="sizes">${results[i].attributes[0].name}</button>
                                        <div class="price>${results[i].price}</div>
                                        <button class="select">${results[i].add_to_cart[0]}</button>
                                        `;
    }
}


