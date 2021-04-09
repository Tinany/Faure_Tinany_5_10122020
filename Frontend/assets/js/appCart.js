// Form
document.getElementById("form").innerHTML += `<form class="mb-4 col-12">
                                                <div class="form-row">
                                                    <div class="col-4">
                                                        <label for="inputFirstName" class="mb-1">Prénom</label>
                                                        <input type="text" class="form-control" placeholder="Prénom">
                                                    </div>
                                                    <div class="col-4">
                                                        <label for="inputLastName" class="mb-1">Nom</label>
                                                        <input type="text" class="form-control" placeholder="Nom">
                                                    </div>
                                                    <div class="form-group col-4">
                                                        <label for="inputEmail" class="mb-1">E-mail</label>
                                                        <input type="email" class="form-control" id="inputEmail" placeholder="Adresse e-mail">
                                                </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputAdress" class="mb-1">Adresse</label>
                                                    <input type="text" class="form-control" id="inputAddress" placeholder="12 rue des oursons">
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-2">
                                                        <label for="inputCity" class="mb-1">Ville</label>
                                                        <input type="text" class="form-control" id="inputCity" placeholder="Paris">
                                                    </div>
                                                    <div class="form-group col-1">
                                                        <label for="inputZip" class="mb-1">Code Postal</label>
                                                        <input type="text" class="form-control" id="inputZip" placeholder="75000">
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Payer</button>
                                            </form>`;