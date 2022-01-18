const baseUrl = "https://norabraskerud.com/wp-json/wc/store/products";
const productsContainer = document.querySelector(".products")


async function getProducts(url){
  const response = await fetch(url);
  const products = await response.json();
  console.log(products)
  
  products.forEach(function(product){
    productsContainer.innerHTML += `
    <div class="product"><h2>${product.name}</h2>
    <div class="product-price"><p>${product.prices}</p>
    <div class="product-images" style="background-images:url('${product.permalink}')
    <div class="sizes">${product.variations}</div>
    </div>`
  })
}

getProducts(baseUrl);

                    