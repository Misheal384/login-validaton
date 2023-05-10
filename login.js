//the getElementby id to get the html id so in this case were getting the id username

const username = document.getElementById("username");
const password = document.getElementById("password");

//this used to select form elements
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");

//listening for event for the submit for submit
/*This code adds an event listener to a form element, listening for a "submit" event. When the form is submitted, it first creates an empty array called "errors".

The code then checks if the length of the "errors" array is greater than 0. If it is, the code prevents the form from submitting by calling the "preventDefault()" method on the event object passed to the callback function.

It then toggles the "hidden */

form.addEventListener("submit", (e) => { 
    const errors = [];
/*This code checks if the value of an input element with the id "username" is an empty string or only contains whitespace characters. If it is, it adds the string "Username required" to the "errors" array using the "push()" method.

This is a basic form validation check to ensure that the username field is not left blank by the user. If the field is left blank, the error message will be added to the "errors" array and will be displayed to the user if there are any errors when they try to submit the form.* */
    if(username.value.trim() === ""){
        errors.push("Username required")
    }

    //now for passwrod input
   
    if(password.value.length < 4){
        errors.push("Password must be at least 4 charaters")
    }

    if(password.value.length >10){
        errors.push("Password must be less than 10 charaters")
    }

     

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(',');
    }

})