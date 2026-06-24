const buttonEl=document.querySelectorAll("button");
const inputEl=document.querySelector(".result");
for(let i=0;i<buttonEl.length;i++){
  buttonEl[i].addEventListener("click",()=>{
    const button_value=buttonEl[i].textContent;
    if(button_value==="C"){
      clearall();
    }
    else if(button_value==="="){
      calculate();

    }
    else if(button_value==="DEL"){
   clear_last();
    }
    else{
      append_value(button_value);
    }
  });
  function clearall(){
    inputEl.value="";
  }
  function calculate(){
    inputEl.value=eval(inputEl.value);
  }
  function append_value(button_value){
    inputEl.value+=button_value;
  }
  function clear_last(){
    inputEl.value=inputEl.value.slice(0,-1);
  }

}



