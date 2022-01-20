const DetailContainer = document.querySelector(".container3");
const iddisplay = document.querySelector(".id-test");
const message = document.querySelector(".message");

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params);
console.log(id);

const id = params.get("id");

const urlNew = "https://norabraskerud.com/wp-json/wc/store/products" + id;


async function newApiCall() {

    try{
        const response = await fetch(urlNew);
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
        
        resultsContainer.innerHTML += `<div class="card">
                                        <h1> ${det.name} </h1>
                                        <h3 class="name">${results[i].name}</h3>
                                        <div class="img">${results[i].images[0].src}</div>
                                        <button class="sizes">${results[i].attributes[0].name}</button>
                                        <div class="price>${results[i].prices.price}</div>
                                        <button class="select">${results[i].add_to_cart[0]}</button>
                                        </div>`;
}
}

