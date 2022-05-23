//store the products array in localstorage as "products"

document.querySelector("form").addEventListener("submit",database)

function puma(type,desc,price,image)
{
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
}
function database(){
    event.preventDefault()
    var pumaarray = JSON.parse(localStorage.getItem("products")) || [];
    var type = document.querySelector("#type").value
    var desc = document.querySelector("#desc").value
    var price = document.querySelector("#price").value
    var image = document.querySelector("#image").value 
    
    var pumba = new puma(type,desc,price,image)
    
    
    pumaarray.push(pumba)
    localStorage.setItem("products",JSON.stringify(pumaarray))
    console.log(pumaarray)
}