// Cart
console.log(JSON.parse(localStorage.getItem('product')))
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
})();
