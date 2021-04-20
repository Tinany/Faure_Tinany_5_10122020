const contact = JSON.parse(localStorage.getItem('contact'))
const total = JSON.parse(localStorage.getItem('total'))
const orderId = localStorage.getItem('orderId')


document.getElementById('confirmation').innerHTML +=
                                                    `<h2 class="display-4 text-center font-weight-bold">Confirmation de votre commande</h2>
                                                    <ul class="list-group ml-3 mr-3 mt-3 mb-3">
                                                        <li class="list-group-item active">Numéro de commande : ${orderId}</li>  
                                                        <li class="list-group-item"><strong>Nom :</strong> ${contact.firstName}</li>
                                                        <li class="list-group-item"><strong>Prénom :</strong> ${contact.lastName}</li>
                                                        <li class="list-group-item"><strong>Email :</strong> ${contact.email}</li>
                                                        <li class="list-group-item"><strong>Adresse :</strong> ${contact.address}</li>
                                                        <li class="list-group-item"><strong>Ville :</strong> ${contact.city}</li>
                                                        <li class="list-group-item"><strong>Code Postal :</strong> ${contact.zipCode}</li>                                                  
                                                        <li class="list-group-item text-white bg-danger"><strong>Prix total :</strong> ${(total).toFixed(2).replace(".",",")} €</li>
                                                    </ul>`
localStorage.clear()