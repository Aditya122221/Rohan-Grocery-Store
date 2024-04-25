var userform = document.getElementById("userform");

function showtheAddressform() {
    userform.style.display = "flex";
    userform.style.flexDirection = "column";
}

function hidetheaddressform() {
    userform.style.display = "none";
}

var add = document.getElementById("addtheaddress");

add.addEventListener('click', () => {
    var isName = true;
    var isNumber = true;
    var isHno = true;
    var isStreet = true;
    var isCity = true;
    var isState = true;
    var isPincode = true;

    //---------------------------------------------------Name Validation--------------------------------------------------------

    var name1 = document.getElementById("name1").value;
    var correctWay = /^[a-z A-Z]+$/
    if (name1.match(correctWay) && name1.length != 0) {
        document.getElementById("nerror").innerHTML = "";
        document.getElementById("name1").style.border = "1px solid black";
        isName = true;
    }

    else if (name1.length === 0) {
        document.getElementById("nerror").innerHTML = "This field should not be empty";
        document.getElementById("name1").style.border = "2px solid red";
        isName = false;
    }
    else {
        document.getElementById("nerror").innerHTML = "Name must only contain upper and lower case letter.";
        document.getElementById("name1").style.border = "2px solid red";
        isName = false;
    }

    //--------------------------------------------Phone number validation-------------------------------------------------------

    var pnumber = document.getElementById("number1").value;
    if (pnumber.length == 10 && (pnumber.charAt(0) == '9' || pnumber.charAt(0) == '8' || pnumber.charAt(0) == '7' || pnumber.charAt(0) == '6')) {
        document.getElementById("number1").style.border = "1px solid black";
        document.getElementById("nuerror").innerHTML = "";
        isNumber = true;
    }

    else if (pnumber.length == 0) {
        document.getElementById("nuerror").innerHTML = "This field should not be empty";
        document.getElementById("number1").style.border = "2px solid red";
        isNumber = false;
    }

    else if (pnumber.length != 10) {
        document.getElementById("nuerror").innerHTML = "Number must be of 10 digits only";
        document.getElementById("number1").style.border = "2px solid red";
        isNumber = false;
    }

    else {
        document.getElementById("nuerror").innerHTML = "Phone number is not valid";
        document.getElementById("number1").style.border = "2px solid red";
        isNumber = false;
    }

    //-------------------------------------------------Address Validation-------------------------------------------------------

    var house = document.getElementById("housenumber").value;
    var numbers = /[0-9]/g;
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if ((house.match(correctWay) || house.match(numbers)) && house.length != 0 && !house.match(specialCharacters)) {
        document.getElementById("housenumber").style.border = "1px solid black";
        document.getElementById("herror").innerHTML = "";
        isHno = true;
    }

    else if (house.length === 0) {
        document.getElementById("herror").innerHTML = "This field should not be empty";
        document.getElementById("housenumber").style.border = "2px solid red";
        isHno = false;
    }

    else {
        document.getElementById("herror").innerHTML = "Invalid Address";
        document.getElementById("housenumber").style.border = "2px solid red";
        isHno = false;
    }

    var street = document.getElementById("streetname").value;
    if ((street.match(correctWay) || street.match(numbers)) && street.length != 0 && !street.match(specialCharacters)) {
        document.getElementById("streetname").style.border = "1px solid black";
        document.getElementById("serror").innerHTML = "";
        isStreet = true;
    }

    else if (street.length === 0) {
        document.getElementById("serror").innerHTML = "This field should not be empty";
        document.getElementById("streetname").style.border = "2px solid red";
        isStreet = false;
    }

    else {
        document.getElementById("serror").innerHTML = "Invalid Address";
        document.getElementById("streetname").style.border = "2px solid red";
        isStreet = false;
    }

    //------------------------------------------------Just Value----------------------------------------------------------------

    var district = document.getElementById("district").value;
    var state = document.getElementById("state").value;
    var pincode = document.getElementById("pincode").value;

    //-------------------------------------------------Resultant Value-----------------------------------------------------------

    if (isName && isNumber && isHno && isStreet) {
        document.getElementById("name").innerHTML = name1;
        document.getElementById("number").innerHTML = pnumber;
        document.getElementById("hno").innerHTML = house;
        document.getElementById("stn").innerHTML = street;
        document.getElementById("city").innerHTML = district;
        document.getElementById("state1").innerHTML = state;
        document.getElementById("pincode1").innerHTML = pincode;
        document.getElementById("all").style.display = "flex";
        document.getElementById("all").style.flexDirection = "coloumn";
        document.getElementById("userform").style.display = "none";
    }
})

var upi = document.getElementById("upi");
upi.addEventListener("click", () => {
    var pay = document.getElementById("pay");
    pay.innerHTML = "Pay through UPI";
    pay.style.display = "flex";
})

var card = document.getElementById("card");
card.addEventListener("click", () => {
    var pay = document.getElementById("pay");
    pay.innerHTML = "Pay through Card";
    pay.style.display = "flex";
})

var cash = document.getElementById("cash");
cash.addEventListener("click", () => {
    var pay = document.getElementById("pay");
    pay.innerHTML = "Confirm Order";
    pay.style.display = "flex";
})