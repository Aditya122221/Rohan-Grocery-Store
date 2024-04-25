function validate() {
    var returnValue = false;

    var isName = true;
    var isNumber = true;
    var isPassword = true;
    var isConfirm = true;

    //---------------------------------------------------Validation for name-------------------------------------------------------------------------------------

    var name = document.forms['myForm']['name'].value;
    var correctWay = /^[a-z A-Z]+$/; // only letters (and empty)
    if (name.match(correctWay)) {
        document.getElementById("nameError").innerHTML = "";
        document.getElementById("name").style.border = "2px solid white";
        isName = true;
    }
    else {
        document.getElementById("nameError").innerHTML = "Name must only contain upper and lower case letter.";
        document.getElementById("name").style.border = "2px solid red";
        isName = false;

    }

    //----------------------------------------------------Validation for Password-----------------------------------------------------------------------------

    var password = document.forms['myForm']['password'].value;
    var confirmPassword = document.forms['myForm']['conpassword'].value;
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (!password.match(lowerCase)) {
        document.getElementById("errorPassword").innerHTML = "At least one Lowercase letter required.";
        document.getElementById("password").style.border = "2px solid red";
        isPassword = false;
    }

    else if (!password.match(upperCase)) {
        document.getElementById("errorPassword").innerHTML = "At least one Uppercase letter required.";
        document.getElementById("password").style.border = "2px solid red";
        isPassword = false;
    }

    else if (!password.match(numbers)) {
        document.getElementById("errorPassword").innerHTML = "At least one Digit required.";
        document.getElementById("password").style.border = "2px solid red";
        isPassword = false;
    }

    else if (!password.match(specialCharacters)) {
        document.getElementById("errorPassword").innerHTML = "At least one Special Charater required.";
        document.getElementById("password").style.border = "2px solid red";
        isPassword = false;
    }

    else {
        document.getElementById("errorPassword").innerHTML = "";
        document.getElementById("password").style.border = "2px solid white";
        isPassword = true;
    }

    if (password != confirmPassword) {
        document.getElementById("passwordError").innerHTML = "Password didnot matched.";
        document.getElementById("repassword").style.border = "2px solid red";
        isConfirm = false;
    }
    else {
        document.getElementById("passwordError").innerHTML = "";
        document.getElementById("repassword").style.border = "2px solid white";
        isConfirm = true;
    }

    //----------------------------------------Number validation----------------------------------------------------------------------------------------------

    var number = document.forms['myForm']['phonenumber'].value;
    if (isNaN(number)) {
        document.getElementById("numberError").innerHTML = "Invalid phone number.";
        document.getElementById("number").style.border = "2px solid red";
        isNumber = false;
    }
    else if (number.charAt(0) != 9 && number.charAt(0) != 8 && number.charAt(0) != 7 && number.charAt(0) != 6) {
        document.getElementById("numberError").innerHTML = "Invalid phone number.";
        document.getElementById("number").style.border = "2px solid red";
        isNumber = false;
    }

    else {
        document.getElementById("numberError").innerHTML = "";
        document.getElementById("number").style.border = "2px solid white";
        isNumber = true;
    }

    if (isName && isConfirm && isNumber && isPassword) returnValue = true;

    return returnValue;

}