const  containerEl=document.querySelector(".container");

let careers=["website for helping the people of India","platform where the people can complain about their problems in their locality","","website which would send your problem to the door of Government","great opportunity to take a next Step to solve your problem"];
let careersIndex=0;
let characterIndex=0;

updateText();
function updateText() {
    containerEl.innerHTML = `
      <h1>This is  ${
        careers[careersIndex].slice(0, 1) === "I" ? "an" : "a"
      } ${careers[careersIndex].slice(0, characterIndex)}</h1>
    `;
    characterIndex++;
    if(characterIndex===careers[careersIndex].length+1){
careersIndex++;
characterIndex=0;
    }
    if(careersIndex===careers.length){
careersIndex=0;
    }
    setTimeout(updateText,300);
}