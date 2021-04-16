const contact = JSON.parse(localStorage.getItem('contact'))
const total = JSON.parse(localStorage.getItem('total'))


contact.forEach((confirmation) => {

document.getElementById('confirmation').innerHTML +=
                                                    `<h2 class="display-4 text-center font-weight-bold">Confirmation de votre commande</h2>
                                                    <ul class="list-group ml-3 mr-3 mt-3 mb-3">
                                                        <li class="list-group-item"><strong>Nom:</strong> ${confirmation.firstName}</li>
                                                        <li class="list-group-item"><strong>Prénom:</strong> ${confirmation.lastName}</li>
                                                        <li class="list-group-item"><strong>Email:</strong> ${confirmation.email}</li>
                                                        <li class="list-group-item"><strong>Adresse:</strong> ${confirmation.address}</li>
                                                        <li class="list-group-item"><strong>Ville:</strong> ${confirmation.city}</li>
                                                        <li class="list-group-item"><strong>Code Postal:</strong> ${confirmation.zipCode}</li>                                                    
                                                        <li class="list-group-item active">Total: ${(total).toFixed(2).replace(".",",")} €</li>
                                                    </ul>`
})

