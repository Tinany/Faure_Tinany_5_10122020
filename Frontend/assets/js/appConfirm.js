const contact = JSON.parse(localStorage.getItem('contact')) // Get & parse contact information
const total = JSON.parse(localStorage.getItem('total')) // Get & parse total Price
const orderId = localStorage.getItem('orderId') // Get orderId

// HTML semantics creation with the localStorage elements and add new elements in HTML document
orderConfirmation()
function orderConfirmation() {
    document.getElementById('confirmation').innerHTML +=
                                                `<ul class="list-group ml-3 mr-3 mt-5 mb-5">
                                                    <li class="list-group-item active">Numéro de commande : ${orderId}</li>  
                                                    <li class="list-group-item"><strong>Nom :</strong> ${contact.firstName}</li>
                                                    <li class="list-group-item"><strong>Prénom :</strong> ${contact.lastName}</li>
                                                    <li class="list-group-item"><strong>Email :</strong> ${contact.email}</li>
                                                    <li class="list-group-item"><strong>Adresse :</strong> ${contact.address}</li>
                                                    <li class="list-group-item"><strong>Ville :</strong> ${contact.city}</li>
                                                    <li class="list-group-item"><strong>Code Postal :</strong> ${contact.zipCode}</li>                                                  
                                                    <li class="list-group-item text-white bg-danger"><strong>Prix total :</strong> ${(total).toFixed(2).replace(".",",")} €</li>
                                                </ul>`
}
//Clear localStorage
clearLocalStorage()
function clearLocalStorage() {
    localStorage.clear()
}