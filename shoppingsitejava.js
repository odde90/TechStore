var cartItems = JSON.parse(localStorage.getItem('shoppingcart'));

function listLoaded() {
    createHeader();
    cartProducts();
    createCheckout();
    totpris();
    
}
//Function for printing out the phones on the web page.
function cartProducts(){
    
    var productDiv = document.createElement("div");
    var mainProductAll = document.getElementById("allProducts");
    productDiv.className = "allProducts";
    for(var i = 0; i < cartItems.length; i++) {
        var product = createCart(cartItems[i]);
        productDiv.appendChild(product);
    }
    mainProductAll.appendChild(productDiv);

}
//Function for creating the header.
function createHeader(){

    var headerDiv = document.createElement("div");
    headerDiv.className = "headerDiv";
    var header = document.createElement("h1");
    var headerText = document.createTextNode(" Kundvagn");
    header.className = "cartHeader";
    var cartIcon = document.createElement("i");
    cartIcon.className = "cart2 fas fa-shopping-cart";
    
    header.appendChild(cartIcon);
    header.appendChild(headerText);
    headerDiv.appendChild(header);
    document.getElementById("allProducts").appendChild(headerDiv);

}
//Function for creating each product from localstorage.
function createCart(product){    

    var productContainer = document.createElement("div");
    productContainer.className = "product";

    var productimages = document.createElement("img");
    productimages.src = "./assets/" + product.image;
    productContainer.appendChild(productimages);
    
    var productTitles = document.createElement("h2");
    productTitles.innerText = product.title;
    productContainer.appendChild(productTitles);

    var productPrices = document.createElement("h5");
    productPrices.innerText = product.price + "kr";
    productContainer.appendChild(productPrices);

    var removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger";
    var removeIcon = document.createElement("i");
    removeIcon.className = "fas fa-trash-alt";
    removeButton.appendChild(removeIcon);
    var buttonText = document.createTextNode(" Ta bort");
    removeButton.appendChild(buttonText);
    productContainer.appendChild(removeButton);
    
    
    return productContainer;
}
//Function for creating the the totalprice text and printing the button.
function createCheckout(){
    
    var checkoutText = document.createElement("p");
    checkoutText.id = "totalpris";
    checkoutText.innerText = "Totalpris: ";
    document.getElementById("allProducts").appendChild(checkoutText);
    
    createPurchaseButton();
}
//Function for creating the confirm purchase button.
function createPurchaseButton(){
    var purchase = document.createElement("button");
    var purchaseIcon = document.createElement("i");
    var purchaseText = document.createTextNode(" Slutför ditt köp");
    purchase.className = "btn btn-primary";
    purchase.addEventListener("click", function() { purchaseConfirmed()} );
    purchaseIcon.className = "fas fa-check";

    purchase.appendChild(purchaseIcon);
    purchase.appendChild(purchaseText);
    document.getElementById("allProducts").appendChild(purchase);
}
//Function for calculating and displaying the totalprice.
function totpris(){
    var total = 0;
    for(var i = 0; i < cartItems.length; i ++){
        total += cartItems[i].price;
    }
    document.getElementById("totalpris").append(total + "kr")
}
//Showing that your pruchase has been confirmed when clicking the pruchase button.
function purchaseConfirmed(){
    alert("Köp bekräftat");
}




