const DetailContainer = document.querySelector(".container3");

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://n-braskerud.com/wp-json/wc/store/products/" + id + "?key=ck_91349797f4eda21317716875499de897f0c2a87f";


async function newApiCall() {

    try{
        const response = await fetch(url);
        const results = await response.json();

        
        console.log(results)
        console.log(results.name);
        console.log(results.prices.price);
        console.log(results.add_to_cart.text)
        console.log(results.images[0].src);

        createHtml(results);
      
        
    } catch(error) {
        DetailContainer.innerHTML = error;
    }
}

newApiCall();

function createHtml(results){
        
        DetailContainer.innerHTML +=   `                                                
                                         <h1 class="name">${results.name}</h1>
                                        <div class="results-image" 
                                        style="background-image: url('${results.images[0].src}')"></div>
                                        <h3 class="price">${results.prices.price}</h3>
                                         <button class="select">${results.add_to_cart.text}</button>
                                        `;
}



