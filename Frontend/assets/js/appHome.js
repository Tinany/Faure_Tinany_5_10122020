fetch('http://localhost:3000/api/teddies') // Retrieving data from the API
    .then((response) => {
        if (response.ok) {
            return response.json() // Use the json() method to return the response as a JSON object
        }
        else {
            throw new Error("Message d'erreur")
        }
    })
    .then((response) => {


        // Loop to add the API elements inside the created HTML elements
        for (let i = 0; i < response.length; i++) {

            // HTML semantics creation with the API elements and add new elements in HTML document
            document.getElementById("homePageContent").innerHTML += `<div class="card mx-auto mt-5">
                            <img class="card-img-top" src="${response[i].imageUrl}" alt="Photos d'ours en peluche"/>

                            <div class="card-body">
                                <h3 class="card-title text-center mb-4">${response[i].name}</h3>
                                <h4 class="card-subtitle">${response[i].description}</h4>
                                <div class="card-text mt-5">
                                    <p class="h4 text-right">${(response[i].price / 100).toFixed(2).replace(".", ",")}€</p>
                                    <a class="card-link" href="../Frontend/pages/productPage.html?ourson=${response[i]._id}">
                                    <button class="btn btn-product color-tertiary" type="button">Voir l'article</button>
                                </a>
                                </div>
                            </div>
                        </div>`
        }
    })
    .catch(error => console.log(error));