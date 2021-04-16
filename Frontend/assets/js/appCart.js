// Cart
let createTable = document.getElementById("cart") // Create the table

createTable.innerHTML += `<table class="mt-4 mb-4 table table-hover">
                                            <thead>
                                                <tr>
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

if (localStorage.getItem('item') !== null) { // Cart is not empty

    let addProduct = JSON.parse(localStorage.getItem('item')) // Retrieve data
    let total = 0

    addProduct.forEach((product) => {

        let totalProduct = parseFloat(product.productPrice) * product.productQuantity
        total += totalProduct

        document.getElementById("products-detail").innerHTML += `<tr>
                                                                    <td><img class ="imgForCart" src="${product.productImage}" alt="Photo d'un ours en peluche"></td>
                                                                    <td>${product.productName}</td>
                                                                    <td>${product.productColor}</td>
                                                                    <td class="old">
                                                                        <button class="btn btn-dark decreaseProduct"> - </button>
                                                                            ${product.productQuantity}
                                                                        <button class="btn btn-dark increaseProduct"> + </button>
                                                                    </td>
                                                                    <td>${totalProduct}€</td>
                                                                    <td>
                                                                        <button class="p-1 btn btn-primary deleteProduct">
                                                                            Supprimer
                                                                        </button>
                                                                    </td>
                                                                  </tr>`
    })

    let totalSection = document.getElementById("total") // Total

    totalSection.innerHTML += `<tr class="total">
                                    <th scope="row" class="totalText">Total</th>
                                    <td colspan="4" class="totalPrice" id="totalPrice">${total}€</td>
                                    <td>
                                        <button class="mt-2 p-1 btn btn-danger" id="deleteAll">
                                            Vider le panier
                                        </button>
                                    </td>
                                </tr>`
   
    // For confirmation page
    localStorage.setItem("total", JSON.stringify(total))

} else { // Cart is empty

    if (localStorage.getItem('item') === null) {

        document.getElementById("products-detail").innerHTML += `<tr>
                                                                    <td>Votre panier est vide !</td>
                                                                 </tr>`
    }

}

// Actions

    //Delete all products
    if (localStorage.getItem('item') !== null) {

        document.getElementById("deleteAll").addEventListener('click', function () { 
        localStorage.clear()
        document.location.reload()
        })
    }

    // Delete a product
    if (localStorage.getItem('item') !== null) {
    document.querySelector('.deleteProduct').addEventListener('click', event => {
        let productDeleted = []
        productDeleted = JSON.parse(localStorage.getItem('item'))
        localStorage.removeItem("item", JSON.stringify(productDeleted))
        document.location.reload()
    })
}

    // Quantity an existing product

        // +
        if (localStorage.getItem('item') !== null) {
            
        document.querySelector('.increaseProduct').addEventListener('click', event => {
            let productIncrease = []
            productIncrease = JSON.parse(localStorage.getItem('item'))
            productIncrease[0].productQuantity++
            localStorage.setItem("item", JSON.stringify(productIncrease))
            document.location.reload()
          })
        }

        // -
        if (localStorage.getItem('item') !== null) {
        document.querySelector('.decreaseProduct').addEventListener('click', event => {
            let productDecrease = []
            productDecrease = JSON.parse(localStorage.getItem('item'))
            if(productDecrease[0].productQuantity !== 0) {
                productDecrease[0].productQuantity--
                localStorage.setItem("item", JSON.stringify(productDecrease))
                document.location.reload()
            }
            if(productDecrease[0].productQuantity === 0) {
                localStorage.removeItem("item", JSON.stringify(productDecrease))
            }
        })
    }


// Form
document.getElementById("form").innerHTML += `<form id="form" class="mb-4 col-12 needs-validation" novalidate>
                                                <div class="form-row">
                                                    <div class="col-4">
                                                        <label for="firstName" class="form-label mb-1">Prénom</label>
                                                        <input type="text" minlength="3" maxlength="20" class="form-control" id="firstName" placeholder="Prénom" required>
                                                        <div class="valid-feedback">Correct!</div>
                                                        <div class="invalid-feedback">Merci d'ajouter votre prénom.</div>
                                                    </div>
                                                    <div class="col-4">
                                                        <label for="lastName" class="form-label mb-1">Nom</label>
                                                        <input type="text" minlength="3" maxlength="20" class="form-control" id="lastName" placeholder="Nom" required>
                                                        <div class="valid-feedback">Correct!</div>
                                                        <div class="invalid-feedback">Merci d'ajouter votre nom.</div>
                                                    </div>
                                                    <div class="form-group col-4">
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
                                                    <div class="form-group col-2">
                                                        <label for="city" class="mb-1">Ville</label>
                                                        <input type="text" minlength="3" maxlength="20" class="form-control" id="city" placeholder="Paris" required>
                                                        <div class="valid-feedback">Correct!</div>
                                                        <div class="invalid-feedback">Merci d'ajouter votre ville.</div>
                                                    </div>
                                                    <div class="form-group col-1">
                                                        <label for="zipCode" class="mb-1">Code Postal</label>
                                                        <input type="text" class="form-control" pattern="[0-9]{5}" id="zipCode" placeholder="75000" required>
                                                        <div class="valid-feedback">Correct!</div>
                                                        <div class="invalid-feedback">Merci d'ajouter votre code postal.</div>
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary" id="formButton">Valider et payer</button>
                                            </form>`;

    // Form validation

    (function () {
        'use strict' //strict mode

        let form = document.querySelector('.needs-validation')
        form.addEventListener('submit', function (event) {
            
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            console.log(form.checkValidity())
            form.classList.add('was-validated')

            // & Retrieve form datas  

                let contactForm = []

                let contact = {
        
                    firstName: document.getElementById("firstName").value,
                    lastName: document.getElementById("lastName").value,
                    email: document.getElementById("email").value,
                    address: document.getElementById("address").value,
                    city: document.getElementById("city").value,
                    zipCode: document.getElementById("zipCode").value
                }
        
                contactForm.push(contact)
                localStorage.setItem("contact", JSON.stringify(contactForm))

                let allProducts = []

                if (localStorage.getItem('item') !== null) {
                    let productList = JSON.parse(localStorage.getItem('item'))
                    
                    productList.forEach( product => {
                        allProducts.push(product.productId)
                    })
                }
                localStorage.setItem("products", JSON.stringify(allProducts))
                
                // & Send form
                  const order = {
                    contact: contactForm,
                    products: allProducts
                  }
                
                  const requestOptions = {
                    method: 'POST',
                    body: localStorage.setItem("order",JSON.stringify(order)),
                    headers: { 'Content-Type': 'application/json; charset=utf-8' },
                  }
                
                  fetch(`http://localhost:3000/api/teddies/order`, requestOptions)

                    .then((response) => response.json())

                    .then((json) => {

                      window.location.replace("../pages/confirmationPage.html")
                    })
                    .catch(() => {
                      alert(error)
                    })
        }, false)
    })()