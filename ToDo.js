$(document).ready(function (){
    let ourForm = document.getElementById("ourForm")
    let ourField=document.getElementById("ourField")
    let ourList=document.getElementById("ourList")
    ourForm.addEventListener("submit",(e) => {
        e.preventDefault()//preventdefault will prevent the data from storing somewhere else
        createItem(ourField.value)
    })

    function createItem(x){
        let ourHtml=`<li> ${x} <button onclick="deleteItem(this)">Delete</button></li>` //this denotes the object (html element not the button)
        ourList.insertAdjacentHTML("beforeend",ourHtml)
        ourField.value=""//if the customer enter the submit button the field will be empty
        ourField.focus()//once the field is empty the cursor will be there in the field (it is focussed)
    }

    function deleteItem(elementToDelete){
        elementToDelete.parentElement.remove() //parentelement going to select Html element
    }
    
})