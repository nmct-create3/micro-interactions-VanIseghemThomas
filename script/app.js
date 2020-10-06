let html_email, html_password, html_signIn;

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
};

const validateForm = function() {
    console.log('valideren');
    let email = document.forms["myForm"]["username"].value;
    let pass = document.forms["myForm"]["password"].value;

    console.log(email, pass);
}

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    let btn = document.querySelector('.js-password-toggle');
    let inputField = html_password;
    btn.addEventListener('click', function(){
        
        if(btn.checked){
            //Show 
            inputField.type = "text";
        }
        else{
            //Hide
            inputField.type = "password";
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    //DOM elementen ophalen
    html_email = document.querySelector('.js-email');
    html_password = document.querySelector('.js-password');
    html_signIn = document.querySelector('.js-signIn');

    handleFloatingLabel();
    handlePasswordSwitcher();
});