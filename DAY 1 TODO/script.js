const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add event listener for Enter key press
inputBox.addEventListener("keyup", function(event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === ''){
        alert("You must write something");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);

    }

    // clear the input field value after appending
    inputBox.value = "";

    // to save this data in broser call saveData()
    saveData();
}


// write LI and SPAN in Capital

listContainer.addEventListener("click", function(e){
    if( e.target.tagName === "LI" ) {
            e.target.classList.toggle("checked");
            saveData();
    }

    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});


// save data in browser
function saveData () {
    localStorage.setItem("data", listContainer.innerHTML);
}

// to display saved data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();