
function validationForm(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var text;

    error_message.style.padding = "10px";

    if(fname.length <1){
        text = "Var god skriv in ett giltigt förnamn";
        error_message.innerHTML = text;
        return false;
    }
    else if(lname.length <1){
        text = "Var god skriv in ett giltigt efternamn";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length <5){
        text = "Var god ange en riktig email adress";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <10){
        text = "Glöm inte att skriva in ett meddelande";
        error_message.innerHTML = text;
        return false;
    }
    alert("Formuläret skickades utan problem vi återkommer inom kort");

    return false;

}