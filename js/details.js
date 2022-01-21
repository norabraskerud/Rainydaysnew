const DetailContainer = document.querySelector(".container3");
const iddisplay = document.querySelector(".id-test");
const message = document.querySelector(".message");

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://norabraskerud.com/wp-json/wc/store/products/" + id + "?key=ck_91349797f4eda21317716875499de897f0c2a87f";


async function newApiCall() {

    try{
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        createHtml(results);

        
    } catch(error) {
        console.log(error);
        DetailContainer.innerHTML = error;
    }
}

newApiCall();

function createHtml(results){
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);

        
        resultsContainer.innerHTML += `<div class="card">
                                        <h1> ${results[i].name} </h1>
                                        <h3 class="name">${results[i].name}</h3>
                                        <div class="img">${results[i].images[0].src}</div>
                                        <button class="sizes">${results[i].attributes[0].name}</button>
                                        <div class="price>${results[i].prices.price}</div>
                                        <button class="select">${results[i].add_to_cart[0]}</button>
                                        </div>`;
}
}

