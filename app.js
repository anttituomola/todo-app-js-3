//imports
import {Todo} from ("./Todo.js")

//define elements
let inputField = document.getElementById("inputEl")
let inputButton = document.getElementById("inputBtn")
let outputUrgent = document.getElementById("outputUrgent")
let outputSoon = document.getElementById("outputSoon")
let outputSomeday = document.getElementById("outputSomeday")
let outputDone = document.getElementById("outputDone")

//listen for input
inputButton.addEventListener("click", submitTodo)
inputField.addEventListener("keypress", (event) => {
    if(event.key === "Enter")
    console.log("Enter!")
} )

function submitTodo() {
    let todo = new Todo(inputField.nodeValue)
    console.log(todo)
}

