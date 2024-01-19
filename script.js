const bt=document.querySelector(".whole");
const modal=document.querySelector(".modal");
const overflow=document.querySelector(".overflow");
const close=document.querySelector(".cross")
bt.addEventListener("click",function(e){
    if(e.target.classList.contains("show")){
        modal.classList.remove("hidden");
    overflow.classList.remove("hidden");
    }
})
close.addEventListener("click",function(){
    modal.classList.add("hidden")
    overflow.classList.add("hidden")
})