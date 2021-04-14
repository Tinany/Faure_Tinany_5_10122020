const contact = JSON.parse(localStorage.getItem("formDatas"))
const orderId = JSON.parse(localStorage.getItem("orderId"))
const total = JSON.parse(localStorage.getItem("total"))

document.getElementById('confirmation').innerHTML +=
                                                    `<h2>Confirmation de votre commande</h2>
                                                    <ul>
                                                        <li class="puce">Vos coordonnées</li>
                                                        <li class="puce">Nom: ${contact.lastName}</li>
                                                        <li class="puce">Prénom: ${contact.firstName}</li>
                                                        <li class="puce">Email: ${contact.email}</li>
                                                        <li class="puce">Adresse: ${contact.address}</li>
                                                        <li class="puce">Ville: ${contact.city}</li>
                                                        <li class="puce">Email: ${contact.zipCode}</li>
                                                    </ul>
                                                    <h3>Total: ${(total/100).toFixed(2).replace(".",",")} €</h3>
                                                    <h3>Numéro de la commande: </br> ${orderId}</h3>`

localStorage.removeItem('contact', 'total', 'orderId')