// setting up varaibles

var allItem= document.querySelectorAll(".list li");
var content= document.querySelector("#content");
var btn= document.querySelector("#addToCart");
var totalPrice=0;

allItem.forEach(function(ele){
    ele.onclick = function(){
        totalPrice += parseInt(ele.getAttribute("price"));
        content.innerHTML += ele.textContent+"</br>";

        if(content.innerHTML!=""){
            btn.style.display="block";
        }
    }
})


btn.onclick=function(){
    alert(totalPrice);
}


