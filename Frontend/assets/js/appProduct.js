const productId= window.location.search.substr(1); // Retrieving the ID of the selected product

fetch(`http://localhost:3000/api/teddies/${productId}`) // Retrieving data from the API with product ID
    .then((response) => response.json()) // Use the json() method to return the response as a JSON object
    .then(response => {
          
    let createElement=""; // Variable declaration to add HTML elements

    // HTML semantics creation with the API elements
    createElement += `<div class="card mx-auto mt-5 mb-5">
                        <img class="card-img-top" src="${response.imageUrl}" alt="Photos d'ours en peluche"/>
                        
                        <div class="card-body">
                            <h3 class="card-title text-center mb-4">${response.name}</h3>
                            <h4 class="card-subtitle">${response.description}</h4>
                            <div class="card-text mt-5">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary" type="button">Ajouter au panier</button>
                                    </div>
                                    <select class="choose custom-select" id="inputGroupSelect03"></select>
                                </div>
                                <p class="h4 text-left">${(response.price/100).toFixed(2).replace(".",",")}€</p>
                            </div>
                        </div>
                      </div>
                      `

    // Add new elements in HTML document
    document.getElementById("productPageContent").innerHTML=createElement

    //Creating a foreach function 
    let colorsChoices = document.querySelector(".choose");
        
    response.colors.forEach (function (colors) {

        let option = document.createElement("option");
        option.value = colors; //Add option value=""
        option.textContent = colors; //Add text inside option tag
        colorsChoices.appendChild(option);
    })
});