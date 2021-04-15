const contact = JSON.parse(localStorage.getItem("contact"))
const total = JSON.parse(localStorage.getItem("total"))
const orderId = JSON.parse(localStorage.getItem("orderId"))




document.getElementById('confirmation').innerHTML +=
                                                    `<h2 class="display-4 text-center font-weight-bold">Confirmation de votre commande</h2>
                                                    <ul>
                                                        <li class="puce">Vos coordonnées</li>
                                                    </ul>
`

localStorage.removeItem('contact')

