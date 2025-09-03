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
    let li = document.createElement("li");//creates a list eleent whenever the button is pressed
    let input = document.querySelector(".task").value; //gets the value of the text input
    if (input == "") {
        alert ("please input a Text")
    }
    li.textContent = input;//gets the input of the text input into the li
    document.querySelector(".lists").appendChild(li) //then append it so that the list gets visible
    box.value = "";//clears the text box after inputting a task
    let remove = document.createElement("button"); //creates a remove button
    remove.textContent = "❌"
    remove.classList.add("remove-btn")
    let add = document.createElement("button")
    add.textContent = "✔️"
    add.classList.add("add-btn")
    let btnGroup = document.createElement("div")
    btnGroup.classList.add("btn-container")
    btnGroup.appendChild(add)
    btnGroup.appendChild(remove)
    li.appendChild(btnGroup)
    let buton = document.querySelectorAll(".btn-container").length
    for (let i = 0; i< buton; i++){
        for (j = 0; j <buton; j++) {
    document.querySelectorAll(".remove-btn")[i].addEventListener("click", function(){
        this.parentElement.parentElement.remove(remove)

    })

    document.querySelectorAll(".add-btn")[j].addEventListener("click", function() {
             this.parentElement.parentElement.classList.toggle("done")
             setTimeout(() => {
                this.parentElement.parentElement.remove(add)
             },3000)
    })
}
}
}