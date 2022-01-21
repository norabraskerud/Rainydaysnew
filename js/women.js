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
        console.log(results[i]);
        console.log(results[i].images[0].src);
        
        

        resultsContainer.innerHTML +=   `<a href="details.html?id=${results[i].id}" class="card">                                                  
                                        <h1 class="name">${results[i].name}</h1>
                                        <div class="results-image" 
                                         style="background-image: url('${results[i].images[0].src}')"></div>
                                        <h3 class="price">${results[i].prices.price}</h3>
                                        <button class="select">${results[i].add_to_cart.text}</button>
                                        </a>`;
    }
}

