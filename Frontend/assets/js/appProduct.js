const searchParams = new URLSearchParams(window.location.search) // Constructor creates and returns a new URLSearchParams (location) object
const productId = searchParams.get("ourson") // Get the product with response id 

fetch(`http://localhost:3000/api/teddies/${productId}`) // Retrieving data from the API with product ID
    .then((response) => {
        if (response.ok) {
            return response.json() // Use the json() method to return the response as a JSON object
        }
        else {
            throw new Error("Message d'erreur") //throw an error if the call doesn't resolve
        }
    })
    .then(response => {

        // HTML semantics creation with the API elements and add new elements in HTML document
        document.getElementById("productPageContent").innerHTML += `<div class="card card-product mx-auto mt-5 mb-5"> 
                        <img class="card-img-top card-img-top-product" src="${response.imageUrl}" alt="Photos d'ours en peluche"/>
                        
                        <div class="card-body">
                            <h3 class="card-title text-center mb-4">${response.name}</h3>
                            <h4 class="card-subtitle">${response.description}</h4>
                            <div class="card-text mt-5">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                            <button id="cartButton" class="btn btn-outline-secondary addCart" type="button">Ajouter au panier</button>
                                    </div>
                                    <select class="choose custom-select" id="inputGroupSelect03"></select>
                                </div>
                                <p class="h4 text-left">${(response.price / 100).toFixed(2).replace(".", ",")}€</p>
                            </div>
                        </div>
                      </div>
                      `


        //Creating a foreach function 

        let colorsChoices = document.querySelector(".choose")

        response.colors.forEach(function (colors) { //

            let option = document.createElement("option") // Create option element for select button
            option.value = colors; //Add option value=""
            option.textContent = colors; //Add text inside option tag
            colorsChoices.appendChild(option) // Append in html 
        })


        // Color choice for localStorage
        document.getElementById("cartButton").addEventListener('click', function () { // Click event on button to add in cart
                let select = document.querySelector(".choose") // Get the button to choose the color
                response.colorChose = select.options[select.selectedIndex].value // Add the option...

                // Create an array
                let cartProducts = []

            // Add product data for localStorage
            if (typeof localStorage != 'undefined' && JSON) {
                
                let cart = {
                    productImage: response.imageUrl,
                    productId: response._id,
                    productName: response.name,
                    productColor: response.colorChose, // ...& Take in
                    productPrice: (response.price / 100).toFixed(2).replace(".", ","),
                    productQuantity: 1,
                }

                // Create a bolean variable
                let other = true

                // When the localStorage is empty
                if (localStorage.getItem('item') === null) {
                    cartProducts.push(cart)
                }
                // When isn't empty
                else {
                    cartProducts = JSON.parse(localStorage.getItem('item'))
                    
                    // ID & color verification
                    cartProducts.forEach((items) => {

                        if (cart.productId === items.productId && cart.productColor === items.productColor) {
                            items.productQuantity++
                            other= false
                        }
                    })
                    if (other) cartProducts.push(cart)
                    
                }
                localStorage.setItem('item', JSON.stringify(cartProducts))

                // Confirmation
                alert("Bravo ! Votre article a été ajouté au panier.")
            }
        })
    })
    // fetch operation error
    .catch(error => console.log(error))