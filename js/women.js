const API_URL = "https://norabraskerud.com/wp-json/wc/store/products/";
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
        console.log(results[i])
        console.log(results[i].id);
        console.log(results[i].prices.price);
        

        resultsContainer.innerHTML +=   `<a href="details.html?id=${results[i].id}" class="card">                                                  
                                        <h3 class="name">${results[i].name}</h3>
                                        <div class="product-images" style="background-image:url>${results[i].images[0].src}</div>
                                        <button class="sizes">${results[i].attributes[0].name}</button>
                                        <div class="price>${results[i].prices.price}</div>
                                        <button class="select">${results[i].add_to_cart[0]}</button>
                                        </a>`;
    }
}

