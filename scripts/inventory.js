var pumaarray=JSON.parse(localStorage.getItem("products"))||[]


console.log(pumaarray)

pumaarray.forEach(function(el,i){
   
    var total = document.createElement("div") 

    var ptype = document.createElement("p")
    ptype.innerText = el.type
    var pdesc = document.createElement("p")
    pdesc.innerText = el.desc
    var pprice = document.createElement("p")
    pprice.innerText = el.price
    var pimage = document.createElement("img")
    pimage.src = el.image
    var remove = document.createElement("button")
    remove.id = "remove_product" 
    remove.innerText="Remove"

    remove.addEventListener("click",function(){
        removed(el,i)
    })

    //total.append(ptype,pdesc,pprice,pimage,br,remove)
    total.append(pimage,ptype,pdesc,pprice,remove)
    
    document.querySelector("#all_products").append(total)
})

function removed(el,index){
    
    var deleted = pumaarray.filter(function(el,i){
             
        if(i!=index){
            return el
         }
      
    })
      var delarr=[]
      delarr.push(deleted)
      console.log(delarr)

   //parentnode().remove

}
    
