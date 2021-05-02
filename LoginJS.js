function validate() {
let err=0;
let email = document.myform.email.value;
let pwd = document.myform.pwd.value;


//Email Validation
if(!email){
err++;
document.getElementById("email").innerHTML="Required";
}
else{document.getElementById("email").innerHTML="";
}

//Password Validation
if(!pwd){
    err++;
    document.getElementById("pwd").innerHTML="Required";
    }
    else{document.getElementById("pwd").innerHTML="";
    }

    //Static Data of Email and Password
if(err>0){
    return false;
}
else {
    if(email=="vishal@gmail.com" && pwd=="12345678")
    {

       
                 
        window.alert("You have logged in successfully!!!!  \n Cheers :) \nStay Home Stay Safe ")
        // window.location="Successfullogin.html";
        return true;
    }
    else{
       document.getElementById("response").innerHTML="Invalid Username Password.Please Try Again.";
       
       return false;
    }
}
 
}