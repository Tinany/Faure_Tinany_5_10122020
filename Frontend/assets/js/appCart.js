// Cart
let createTable = document.getElementById("cart") // ID recovery to create the cart
let productsObject = JSON.parse(localStorage.getItem('item')) // Get & parse products in localstorage

function addTableHeader() {
    // Table header
    createTable.innerHTML += `<table class="mt-4 mb-4 table table-hover table-sm">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Index</th>
                                                        <th scope="col">Image</th>
                                                        <th scope="col">Nom</th>
                                                        <th scope="col">Couleur</th>
                                                        <th scope="col">Quantité</th>
                                                        <th scope="col">Prix</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="products-detail">
                                                </tbody>
                                                <tfoot id="total"></tfoot>
                                            </table>`
}
addTableHeader()

// If the cart is not empty
if (localStorage.getItem('item') !== null && productsObject.length > 0) { 

    let total = 0  // set the total
    let index = -1 // set the index

    function addProductsSelected() {
        productsObject.forEach((product) => {

            let totalProduct = parseFloat(product.productPrice) * product.productQuantity // total of same products
            total += totalProduct // total calculation
            index++ // increase index

            // Table body
            document.getElementById("products-detail").innerHTML += `<tr>
                                                                        <td class="align-middle index">${index}</td>
                                                                        <td><img class ="align-middle imgForCart" src="${product.productImage}" alt="Photo d'un ours en peluche"></td>
                                                                        <td class ="align-middle">${product.productName}</td>
                                                                        <td class ="align-middle">${product.productColor}</td>
                                                                        <td class="text-center align-middle old">
                                                                            <button class="btn btn-dark decreaseProduct"> - </button>
                                                                                ${product.productQuantity}
                                                                            <button class="btn btn-dark increaseProduct"> + </button>
                                                                        </td>
                                                                        <td class="align-middle">${totalProduct}€</td>
                                                                        <td class="align-middle">
                                                                            <button class="p-1 btn btn-primary deleteProduct">
                                                                                Supprimer
                                                                            </button>
                                                                        </td>
                                                                    </tr>`
        })
    }
    addProductsSelected()

    // Table footer
    let totalSection = document.getElementById("total") // ID recovery to create the table footer
    
    function addTableFooter(){
        totalSection.innerHTML += `<tr class="total">
                                        <th scope="row" class="totalText align-middle">Total</th>
                                        <td colspan="4" class="totalPrice align-middle">${total}€</td>
                                        <td>
                                            <button class="align-middle mt-2 p-1 btn btn-danger" id="deleteAll">
                                                Vider le panier
                                            </button>
                                        </td>
                                    </tr>`
    }
    addTableFooter()

    // For confirmation page, set total in the localStorage
    localStorage.setItem("total", JSON.stringify(total))

// Actions

   //Delete all products
    function deleteAll() {
 
        document.getElementById("deleteAll").addEventListener('click', function () { // Get & listen click on deleteAll button
            localStorage.clear() // remove all items in localStorage
            document.location.reload() // reload window
        })
    }
    deleteAll()

     // Delete one products
    function deleteOneProduct() {

        let wichDeleteBtn = document.querySelectorAll('.deleteProduct') // Get all deleteProduct buttons

        for (deleteBtn of wichDeleteBtn) { // For all deleteProduct buttons :

            deleteBtn.addEventListener('click', function () { // Listen the click event
                let getTheLign = this.parentNode.parentNode // Recover the parent block (table line)
                let getIndex = getTheLign.firstElementChild // Recover the first child of the parent block (index)
                let wichIndex = getIndex.innerText // Retrieve the content value (index number)
                productsObject.splice(wichIndex, 1) // Remove the selected item from the localStorage
                reload(this) // Reload the window
            })
        }
    }
    deleteOneProduct()

    // Increase Product
    function increaseProduct() {

        let wichPlus = document.querySelectorAll('.increaseProduct') // Get all increaseProduct buttons

        for (plus of wichPlus) { // For all increaseProduct buttons :

            plus.addEventListener('click', function () { // Listen the click event

                let getTheLign = this.parentNode.parentNode // Recover the parent block (table line)
                let getIndex = getTheLign.firstElementChild // Recover the first child of the parent block (index)
                let wichIndex = getIndex.innerText // Retrieve the content value (index number)

                let indexProduct = productsObject[wichIndex] // Select the object in the array
                indexProduct.productQuantity++ // Increase quantity
                reload(this) // Reload the window
            })
        }
    }
    increaseProduct()

    // Decrease Product
    function decreaseProduct() {

        let wichManus = document.querySelectorAll('.decreaseProduct') // get button -

        for (manus of wichManus) { // for all buttons -

            manus.addEventListener('click', function () { // Listen the click event

                let getTheLign = this.parentNode.parentNode // Recover the parent block (table line)
                let getIndex = getTheLign.firstElementChild // Recover the first child of the parent block (index)
                let wichIndex = getIndex.innerText // Retrieve the content value (index number)

                let indexProduct = productsObject[wichIndex] // Select the object in the array

                if(indexProduct.productQuantity > 1){ // Above 0
                    indexProduct.productQuantity-- // Decrease quantity
                }
                else{ 
                    productsObject.splice(wichIndex, 1) // Remove the selected item from the localStorage
                }
                reload(this) // Reload the window
            })
        }
    }
    decreaseProduct()

    // Reload function
    function reload(){

            localStorage.setItem('item', JSON.stringify(productsObject)) // Set item in localstorage
            document.location.reload() // Reload the window
    }

} else { // Cart is empty

    // Clear localstroage & add a text for an empty cart
    function emptyCart() {
        localStorage.clear()
        createTable.innerHTML += `<div class="mb-5">
                                    <p class="text-center h4 text-primary">Votre panier est vide !</p>
                                <div>`
    }
    emptyCart()
}

// Form with bootstrap class validation
formCreation()
function formCreation() {
document.getElementById("form").innerHTML += `<form id="form" class="mb-4 col-12 needs-validation" novalidate>
                                                    <div class="form-row">
                                                        <div class="col-4 mb-2">
                                                            <label for="firstName" class="form-label mb-1">Prénom</label>
                                                            <input type="text" minlength="3" maxlength="20" pattern="[a-zA-Z\s]+" class="form-control" id="firstName" placeholder="Prénom" required>
                                                            <div class="valid-feedback">Correct!</div>
                                                            <div class="invalid-feedback">Merci d'ajouter votre prénom.</div>
                                                        </div>
                                                        <div class="col-4 mb-2">
                                                            <label for="lastName" class="form-label mb-1">Nom</label>
                                                            <input type="text" minlength="3" maxlength="20" pattern="[a-zA-Z\s]+" class="form-control" id="lastName" placeholder="Nom" required>
                                                            <div class="valid-feedback">Correct!</div>
                                                            <div class="invalid-feedback">Merci d'ajouter votre nom.</div>
                                                        </div>
                                                        <div class="form-group col-lg-4">
                                                            <label for="email" class="mb-1">E-mail</label>
                                                            <input type="email" minlength="11" maxlength="64" class="form-control" id="email" placeholder="default@example.com" required>
                                                            <div class="valid-feedback">Correct!</div>
                                                            <div class="invalid-feedback">Merci d'ajouter votre e-mail.</div>
                                                    </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="adress" class="mb-1">Adresse</label>
                                                        <input type="text" minlength="10" maxlength="64" class="form-control" id="address" placeholder="12 rue des oursons" required>
                                                        <div class="valid-feedback">Correct!</div>
                                                        <div class="invalid-feedback">Merci d'ajouter votre adresse.</div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-lg-2">
                                                            <label for="city" class="mb-1">Ville</label>
                                                            <input type="text" minlength="3" maxlength="20" pattern="[a-zA-Z\s]+" class="form-control" id="city" placeholder="Paris" required>
                                                            <div class="valid-feedback">Correct!</div>
                                                            <div class="invalid-feedback">Merci d'ajouter votre ville.</div>
                                                        </div>
                                                        <div class="form-group col-lg-1">
                                                            <label for="zipCode" class="mb-1">C.P</label>
                                                            <input type="text" class="form-control" pattern="[0-9]{5}" id="zipCode" placeholder="75000" required>
                                                            <div class="valid-feedback">Correct!</div>
                                                            <div class="invalid-feedback">Merci d'ajouter votre code postal.</div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary" id="formButton">Valider et payer</button>
                                                </form>`;
}
// Form validation
formValidation()
function formValidation () {
    'use strict' //strict mode

    let form = document.querySelector('.needs-validation') //Recover the query selector of the form

    form.addEventListener('submit', function formSubmit(event) { // Listen submit event

        event.preventDefault() //If the event doesn't get handled, its default action shouldn't be taken
        event.stopPropagation() // Prevents the current event from spreading further 

        checkFormValidity()
        function checkFormValidity(){
        if (!form.checkValidity()) { // Checks whether the element has any constraints and whether it satisfies them
            form.classList.add('was-validated') // Change the class on the form
        }
        else {
        console.log(form.checkValidity())

        // & Retrieve form datas if the localstorage isn't empty
        sendOrder()
        function sendOrder(){
        if(localStorage.getItem('item') !== null){
        
            let contact = { // Create the contact object

                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                email: document.getElementById("email").value,
                address: document.getElementById("address").value,
                city: document.getElementById("city").value,
                zipCode: document.getElementById("zipCode").value
            }

            localStorage.setItem("contact", JSON.stringify(contact)) // Set conctact in localStorage

            let allProducts = [] // Create product array

                productsObject.forEach(product => { // For each selected products
                    allProducts.push(product.productId) // Recover id
                })

            // & Send form

            const order = { // Create order object

                contact: contact,
                products: allProducts
            }

            const request = { // Create fetch request options

                method: 'POST',
                headers: { "Content-Type": "application/json" }, //Creation of the header
                body: JSON.stringify(order) //Implements & defines the following methods to extract the body
            }

            fetch(`http://localhost:3000/api/teddies/order`, request) // Retrieving data from the API

                .then((response) => {

                    return response.json()
                })

                .then((response) => {
    
                    let orderId = response.orderId // Retrieve & set the order id
                    localStorage.setItem("orderId", orderId) // Stock in the localStorage the order id
                    window.location.replace("../pages/confirmationPage.html") // Replace on confirmation page
                })

                // fetch operation error
                .catch(error => console.log(error))
        } else {
            alert('Votre panier est vide ! Sélectionner au moins un produit pour commander')
            }
        }}
    }}, false)
}