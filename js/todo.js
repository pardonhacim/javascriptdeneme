let addToDoButton=document.getElementById("addToDo");
let inputField=document.getElementById("inputField");
let toDoContainer=document.getElementById("toDoContainer");


addToDoButton.addEventListener("click",function(){

    console.log(inputField.value);
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText=inputField.value;

    toDoContainer.appendChild(paragraph);
    inputField.value="";

    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph);
    })
    
})
// enter tusuna basilarak  verileri ekleme
inputField.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      console.log('Enter key pressed')
      let paragraph = document.createElement("p");
      // p tagina class ismi ekleyip stil veriyoruz 
      paragraph.classList.add("paragraph-style");
      // pragrafin icine girilen degeri ekliy0ruz
      paragraph.innerText = inputField.value;
      // burada paragrafi div icine ekliyoruz 
      toDoContainer.appendChild(paragraph);
      // eklenen listelere click fonsiyonu eklendi paragrafin üstü cizildi
      inputField.value = "";
      paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "Line-through";
      })
      // eklenen listeleri silmek icin double click fonk. eklendi
      paragraph.addEventListener("dblclick", function () {
        toDoContainer.removeChild(paragraph);
      })
    }
  });