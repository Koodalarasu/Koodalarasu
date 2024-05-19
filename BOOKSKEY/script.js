var a=document.querySelector(".pop-box")
var b=document.querySelector(".pop-overlay")
var c=document.getElementById("add-pop")
c.addEventListener("click",function(){
    a.style.display="block"
    b.style.display="block"
})

var d=document.getElementById("cancel")
function ca(event){
    event.preventDefault()
    a.style.display="none"
    b.style.display="none"

}

var cont=document.querySelector(".con")
var ad=document.getElementById("add")
var tile=document.getElementById("title")
var author=document.getElementById("author")
var bookdes=document.getElementById("bookdes")

ad.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-con")
    div.innerHTML= `<h2>${tile.value}</h2>
    <h5>${author.value}</h5>
    <p>${bookdes.value}
    </p>
    <button onclick="de(event)">Delete</button>`
    cont.append(div)
    a.style.display="none"
    b.style.display="none"
})
function de(event){
    event.target.parentElement.remove()
}

