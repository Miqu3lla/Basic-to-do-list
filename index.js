

// Add task when Enter is pressed inside the input field
document.querySelector(".task").addEventListener("keydown", function(event){
    if (event.key == "Enter") {
        todo()
    }
})
function todo () {
    
    let box = document.querySelector(".task"); // text input element
    let li = document.createElement("li");     // create a new list item
    li.classList.add("list-animation")
    let input = document.querySelector(".task").value; // get input value

    // If input is empty, warn the user and stop
     input == "" ? alert("please input a Text"): {}; // stop function here so empty items don’t get added
    
    //create a span text for the text inside 
    let text = document.createElement("span");
    text.classList.add("span-text")

    // Set the text of the new list item in the span
    text.textContent = input;
    li.appendChild(text)
    
    // Append the list item to the <ul> (class="lists")
    document.querySelector(".lists").appendChild(li);
    
    // Clear the input field after adding task
    box.value = "";

    // Create the ❌ remove button
    let remove = document.createElement("button");
    remove.textContent = "❌";
    remove.classList.add("remove-btn");

    // Create the ✔️ done button
    let add = document.createElement("button");
    add.textContent = "✔️";
    add.classList.add("add-btn");

    // Wrap buttons in a container div
    let btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-container");
    btnGroup.appendChild(add);
    btnGroup.appendChild(remove);

    // Append button group to the list item
    li.appendChild(btnGroup);


    
        // ❌ Remove button → deletes the list item immediately
            remove.addEventListener("click", function(){
             li.classList.add("list-remove-animation")
             li.addEventListener("animationend", () => {
                this.parentElement.parentElement.remove();
             });

            })
        // ✔️ Done button → toggles "done" class and removes after 3s
            add.addEventListener("click", function() {
             let underline = this.parentElement.previousElementSibling.classList.toggle("done");
             this.parentElement.previousElementSibling.classList.toggle("text-color");
             
             underline ? timer =  setTimeout(() => {li.classList.add("list-remove-animation"), this.parentElement.parentElement.onanimationend = () => {this.parentElement.parentElement.remove();
            }},2500) : clearTimeout(timer);
            
            
            
    }
)
        
    
}
