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
        
        let price = parseFloat(product.productPrice)
        total = total + (price * product.productQuantity)

        document.getElementById("products-detail").innerHTML += `<tr>
                                                                    <td><img class ="imgForCart" src="${product.productImage}" alt="Photo d'un ours en peluche"></td>
                                                                    <td>${product.productName}</td>
                                                                    <td>${product.productColor}</td>
                                                                    <td>${product.productQuantity}</td>
                                                                    <td>${price*product.productQuantity}€</td>
                                                                    <td>
                                                                        <button class="p-1 btn btn-danger delete">
                                                                            Supprimer
                                                                        </button>
                                                                    </td>
                                                                  </tr>`
    })

    let totalSection = document.getElementById("total") // Total

    totalSection.innerHTML += `<tr class="total">
                                    <th scope="row" class="totalText">Total</th>
                                    <td class="totalPrice">${total}€</td>
                                </tr>`

} else { // Cart is empty

    if (localStorage.getItem('item') === null)  {

        document.getElementById("products-detail").innerHTML += `<tr>
                                                                    <td>Votre panier est vide !</td>
                                                                 </tr>`
    }

}

// Form
document.getElementById("form").innerHTML += `<form class="mb-4 col-12 needs-validation" novalidate>
                                                <div class="form-row">
                                                    <div class="col-4">
                                                        <label for="validationCustom01" class="form-label mb-1">Prénom</label>
                                                        <input type="text" minlength="3" maxlength="20" class="form-control" id="validationCustom01" placeholder="Prénom" required>
                                                        <div class="valid-feedback">Correct!</div>
                                                        <div class="invalid-feedback">Merci d'ajouter votre prénom.</div>
                                                    </div>
                                                    <div class="col-4">
                                                        <label for="validationCustom02" class="form-label mb-1">Nom</label>
                                                        <input type="text" minlength="3" maxlength="20" class="form-control" placeholder="Nom" required>
                                                        <div class="valid-feedback">Correct!</div>
                                                        <div class="invalid-feedback">Merci d'ajouter votre nom.</div>
                                                    </div>
                                                    <div class="form-group col-4">
                                                        <label for="inputEmail" class="mb-1">E-mail</label>
                                                        <input type="email" minlength="11" maxlength="64" class="form-control" id="inputEmail" placeholder="default@example.com" required>
                                                        <div class="valid-feedback">Correct!</div>
                                                        <div class="invalid-feedback">Merci d'ajouter votre e-mail.</div>
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="validationCustom03" class="mb-1">Adresse</label>
                                                    <input type="text" minlength="10" maxlength="64" class="form-control" id="inputAddress" placeholder="12 rue des oursons" required>
                                                    <div class="valid-feedback">Correct!</div>
                                                    <div class="invalid-feedback">Merci d'ajouter votre adresse.</div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-2">
                                                        <label for="inputCity" class="mb-1">Ville</label>
                                                        <input type="text" minlength="3" maxlength="20" class="form-control" id="inputCity" placeholder="Paris" required>
                                                        <div class="valid-feedback">Correct!</div>
                                                        <div class="invalid-feedback">Merci d'ajouter votre ville.</div>
                                                    </div>
                                                    <div class="form-group col-1">
                                                        <label for="inputZip" class="mb-1">Code Postal</label>
                                                        <input type="text" class="form-control" pattern="[0-9]{5}" id="inputZip" placeholder="75000" required>
                                                        <div class="valid-feedback">Correct!</div>
                                                        <div class="invalid-feedback">Merci d'ajouter votre code postal.</div>
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Payer</button>
                                            </form>`;

// Disabling form submissions if there are invalid fields
(function () {
    'use strict' //strict mode

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()