const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", ()=> {

    // create input box
    let inputBox = document.createElement("p");
    // img for delete icon
    let img = document.createElement("img");

    // adding properties
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";

    //append single notes input in notes container
    notesContainer.appendChild(inputBox).appendChild(img);
});

// remove notes
notesContainer.addEventListener("click", function(e){
    // if we click on delete icon
    if(e.target.tagName === "IMG"){
        // delete note
        e.target.parentElement.remove();
    }
})