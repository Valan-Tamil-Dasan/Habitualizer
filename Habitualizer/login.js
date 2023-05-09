var flag = false;
function validate(){
    var email=document.getElementById("email").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var f1 = true;
    var f2 = true;
    if(email=="" || pass1 == '' || pass2 == ""){
        f1 = false;
        alert("Empty Field");

    }else if (!(email.match(validRegex))){
        f1 = false;
        alert("INVALID EMAIL");
    }
    if(pass1 != pass2){
        f2 = false;
        alert("password does not match");
        
    }
    







    if(f1 == true && f2 == true){
        window.open("intro.html");
    }

}

