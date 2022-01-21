const DetailContainer = document.querySelector(".container3");
const iddisplay = document.querySelector(".id-test");
const message = document.querySelector(".message");

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://norabraskerud.com/wp-json/wc/store/products/" + id;


async function newApiCall() {

    try{
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        const det = results;

        createHtml(det);

        
    } catch(error) {
        console.log(error);
        DetailContainer.innerHTML = error;
    }
}

newApiCall();

function createHtml(det){
    for (let i = 0; i < det.length; i++) {
        console.log(det[i].name);
        
        resultsContainer.innerHTML += `<div class="card">
                                        <h1> ${det.name} </h1>
                                        <h3 class="name">${det[i].name}</h3>
                                        <div class="img">${det[i].images[0].src}</div>
                                        <button class="sizes">${det[i].attributes[0].name}</button>
                                        <div class="price>${det[i].prices.price}</div>
                                        <button class="select">${det[i].add_to_cart[0]}</button>
                                        </div>`;
}
}

