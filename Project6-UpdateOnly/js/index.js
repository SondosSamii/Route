
var productName = document.getElementById("productName");
var productCompany = document.getElementById("productCompany");
var productPrice = document.getElementById("productPrice");
var productDesc = document.getElementById("productDesc");

var productBtn = document.getElementById("productBtn");
var searchBtn = document.getElementById("searchBtn");

var productContainer;

if(localStorage.getItem("productContainer") == null)
{
    productContainer = [];
}
else
{
    productContainer = JSON.parse(localStorage.getItem("productContainer"));
    displayProduct();
}

function addProduct()
{
    var product =
        {
            name: productName.value,
            company: productCompany.value,
            price: productPrice.value,
            desc: productDesc.value
        }
    productContainer.push(product);
    localStorage.setItem("productContainer", JSON.stringify(productContainer));
}

function displayProduct()
{
    var cols = "";
    for(var i=0; i < productContainer.length; i++)
    {
        cols +=
            `<div class="col-md-4">
<img src="images/04-full.jpg" class="img-fluid"/>
<h2 class="text-warning">`+ productContainer[i].name +`</h2>
<h3 class="text-danger">`+ productContainer[i].company +`</h3>
<p class="text-muted">`+ productContainer[i].desc +`</p>
<p class="text-alert">`+ productContainer[i].price +`</p>
<button class="btn btn-danger m-3" onclick="deleteProduct(`+i+`)"> Delete </button><button class="btn btn-success m-3" onclick="updateProduct(`+i+`)"> Update </button>
</div>`
    }
    document.getElementById("productsRow").innerHTML = cols;
}

function clearForm()
{
    var inputs = document.getElementsByClassName("form-control");

    for(var i=0; i < inputs.length; i++)
    {
        inputs[i].value = "";
    }
}

function deleteProduct(id)
{
    productContainer.splice(id, 1);
    displayProduct();
    localStorage.setItem("productContainer", JSON.stringify(productContainer));
}

function updateProduct(index)
{    
    var newProduct =
        {
            name: productName.value,
            company: productCompany.value,
            price: productPrice.value,
            desc: productDesc.value
        }
    deleteProduct(index);
    productContainer.splice(index, 0, newProduct);
    localStorage.setItem("productContainer", JSON.stringify(productContainer));
    displayProduct();
}

productBtn.onclick = function()
{
    addProduct();
    displayProduct();
    clearForm();
}

// Search Try !!

searchBtn.onclick = function()
{
    var searchInp = document.getElementById("searchInp").value;

    var newContainer =[];

    for(var i = 0; i < productContainer.length; i++)
    {
        if(JSON.stringify(productContainer).includes(searchInp) == true)
        {
            newContainer += productContainer.filter(searchInp);
        }
    }

    document.getElementById("productsRow").innerHTML = newContainer;

}








