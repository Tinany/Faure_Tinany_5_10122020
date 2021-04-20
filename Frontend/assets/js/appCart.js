// Cart
let createTable = document.getElementById("cart") // Create the table
let some = JSON.parse(localStorage.getItem('item'))

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

if (localStorage.getItem('item') !== null && some.length > 0) { // Cart is not empty

    let addProduct = JSON.parse(localStorage.getItem('item')) // Retrieve datas
    let total = 0     // set the total
    let index = -1 // set the index

    addProduct.forEach((product) => {

        let totalProduct = parseFloat(product.productPrice) * product.productQuantity
        total += totalProduct // total calculation
        index++

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

    let totalSection = document.getElementById("total") // Total

    totalSection.innerHTML += `<tr class="total">
                                    <th scope="row" class="totalText align-middle">Total</th>
                                    <td colspan="4" class="totalPrice align-middle">${total}€</td>
                                    <td>
                                        <button class="align-middle mt-2 p-1 btn btn-danger" id="deleteAll">
                                            Vider le panier
                                        </button>
                                    </td>
                                </tr>`

    // For confirmation page
    localStorage.setItem("total", JSON.stringify(total))

// Actions

//Delete all products
    document.getElementById("deleteAll").addEventListener('click', function () {
        localStorage.clear()

    })

// Delete one product
let wichButtons = document.querySelectorAll('.deleteProduct')
for (i of wichButtons) {

    let wichProduct = JSON.parse(localStorage.getItem('item'))

    i.addEventListener('click', function () {
        let getTheLign = this.parentNode.parentNode
        let getIndex = getTheLign.firstElementChild
        let wichIndex = getIndex.innerText

        let indexProduct = wichProduct[wichIndex]
            wichProduct.splice(indexProduct, 1)
            localStorage.setItem('item', JSON.stringify(wichProduct))
            document.location.reload()
    })
}

// Quantity an existing product

// +

let wichPlus = document.querySelectorAll('.increaseProduct')
for (i of wichPlus) {

    let wichProduct = JSON.parse(localStorage.getItem('item'))

    i.addEventListener('click', function () {
        let getTheLign = this.parentNode.parentNode
        let getIndex = getTheLign.firstElementChild
        let wichIndex = getIndex.innerText

        let indexProduct = wichProduct[wichIndex]
            indexProduct.productQuantity++
            localStorage.setItem('item', JSON.stringify(wichProduct))
            document.location.reload()
    })
}


// -

let wichManus = document.querySelectorAll('.decreaseProduct')
for (i of wichManus) {

    let wichProduct = JSON.parse(localStorage.getItem('item'))

    i.addEventListener('click', function () {
        let getTheLign = this.parentNode.parentNode
        let getIndex = getTheLign.firstElementChild
        let wichIndex = getIndex.innerText

        let indexProduct = wichProduct[wichIndex]
        
        if (indexProduct.productQuantity > 1) {
            indexProduct.productQuantity--
            localStorage.setItem('item', JSON.stringify(wichProduct))
        }
        else {
            wichProduct.splice(indexProduct, 1)
            localStorage.setItem('item', JSON.stringify(wichProduct))
        }
        document.location.reload()
    })
}

} else { // Cart is empty

        localStorage.clear()
        document.getElementById("products-detail").innerHTML += `<tr>
                                                                    <td colspan="5">Votre panier est vide !</td>
                                                                 </tr>`

}

// Form
document.getElementById("form").innerHTML += `<form id="form" class="mb-4 col-12 needs-validation" novalidate>
                                                <div class="form-row">
                                                    <div class="col-4 mb-2">
                                                        <label for="firstName" class="form-label mb-1">Prénom</label>
                                                        <input type="text" minlength="3" maxlength="20" class="form-control" id="firstName" placeholder="Prénom" required>
                                                        <div class="valid-feedback">Correct!</div>
                                                        <div class="invalid-feedback">Merci d'ajouter votre prénom.</div>
                                                    </div>
                                                    <div class="col-4 mb-2">
                                                        <label for="lastName" class="form-label mb-1">Nom</label>
                                                        <input type="text" minlength="3" maxlength="20" class="form-control" id="lastName" placeholder="Nom" required>
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
                                                        <input type="text" minlength="3" maxlength="20" class="form-control" id="city" placeholder="Paris" required>
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

// Form validation

(function () {
    'use strict' //strict mode

    let form = document.querySelector('.needs-validation')
    form.addEventListener('submit', function (event) {

        event.preventDefault()
        event.stopPropagation()

        if (!form.checkValidity()) {
            form.classList.add('was-validated')
        }
        else {
        console.log(form.checkValidity())

        // & Retrieve form datas  

        let contact = {

            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            zipCode: document.getElementById("zipCode").value
        }

        localStorage.setItem("contact", JSON.stringify(contact))

        let allProducts = []

            let productList = JSON.parse(localStorage.getItem('item'))

            productList.forEach(product => {
                allProducts.push(product.productId)
            })

        // & Send form
        const order = {

            contact: contact,
            products: allProducts
        }

        const request = {

            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order)
        }

        fetch(`http://localhost:3000/api/teddies/order`, request)

            .then((response) => {

                return response.json()
            })

            .then((response) => {

                let orderId = response.orderId
                localStorage.setItem("orderId", orderId)
                window.location.replace("../pages/confirmationPage.html") 
            })

            // fetch operation error
            .catch(error => console.log(error))
        }
    }, false)
})()
