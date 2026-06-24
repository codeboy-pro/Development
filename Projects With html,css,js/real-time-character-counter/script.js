const textareaEl=document.getElementById("textarea");

const total_counterEl=document.getElementById("total-counter");

const remaining_counterEl=document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=>{
 
updatecounter();
    
})
function updatecounter(){
    total_counterEl.innerText=  textareaEl.value.length

    remaining_counterEl.innerText=textareaEl.getAttribute("maxlength") -
    textareaEl.value.length
}

