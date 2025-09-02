//add a button function
document.querySelector("button").addEventListener("click", function(){
    todo()
})

document.querySelector(".task").addEventListener("keydown", function(event){
    if (event.key == "Enter") {
        todo()
    }
})


function todo () {
    let box = document.querySelector(".task");
    let li = document.createElement("li");//creates an element whenever the button is pressed
    let input = document.querySelector(".task").value; //gets the value of the text input
    li.textContent = input;//gets the input of the text input into the li
    document.querySelector(".lists").appendChild(li) //then append it so that the list gets visible
    box.value = "";//clears the text box after inputting a task
    let remove = document.createElement("button"); //creates a remove button
    remove.textContent = "❌"
    remove.classList.add("remove-btn")
    li.appendChild(remove)
}