
var usernameError = document.getElementById('username-error');

var emailError = document.getElementById('email-error');

var positionError = document.getElementById('position-error');

var typeError = document.getElementById('type-error');

var submitError = document.getElementById('submit-error');



function validateUsername(){

var username = document.getElementById('contact-username').value;

var min =6;

var max=10;

if(username.length == 0){

usernameError.innerHTML = "username is required";

return false;

}

if(username.length >max || username.length <min){

usernameError.innerHTML = "username should be >=6 and <= 10";

return false;

}

if(!username.match(/^[A-Za-z]/)){

usernameError.innerHTML = "only lower and uppercase letters allowed and underscore"

return false;

}

usernameError.innerHTML = '<i class="fa-solid fa-check"></i>';

}


function validateEmail(){

var email = document.getElementById('contact-email').value;

if(email.length == 0){

emailError.innerHTML = "email is required"

return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

emailError.innerHTML="Invalid Email"

return false;

}

emailError.innerHTML = '<i class="fa-solid fa-check"></i>';

return true;

}

function validatePosition(){
    var position = document.getElementById('position').value;
    if (position == "not selected")
    {
        positionError.innerHTML = "Position is invalid.";
        return false;
    }
    positionError.innerHTML = '<i class="fa-solid fa-check"></i>';
    
}

// still working in this one, to select radio button


function validateRadio(){
    var radioF = document.getElementById('f').checked;
    var radioP = document.getElementById('p').checked;


if(!radioF && !radioP)
{
    typeError.innerHTML = 'Select work type.';
    return false

}

typeError.innerHTML = '<i class="fa-solid fa-check"></i>';


}

// need to add position and type

function validateForm(){

if(!validateUsername() && !validateEmail() && !validatePosition() && !validateRadio()){

submitError.innerHTML='Please fix errors to submit';

return false;

}
return true;
}



