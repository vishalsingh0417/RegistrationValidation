function validate() {
  
 err=0;
 let email=document.myform.email.value;
 let fname=document.myform.fname.value;
 let lname=document.myform.lname.value;
 let dob=document.myform.dob.value;
 let address=document.myform.address.value;
 let pcode=document.myform.pcode.value;
 let gender=document.myform.gender.value;
 let mobile=document.myform.mobile.value;
 let pwd=document.myform.pwd.value;
 let cpwd=document.myform.cpwd.value;




//Email Validation

 if(!email){
     err++;
     document.getElementById("email").innerHTML="Required";
    }
    else if(email.match(/\s/g)){
        err++;
        document.getElementById("email").innerHTML="No Space Allowed";
        
        }
        else if((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(email)==false){
            err++;
            document.getElementById("email").innerHTML="Enter Valid EMail ID"
        }
  else{
      document.getElementById("email").innerHTML="";
    } 


  //First Name Validation 
if(!fname){
    err++;
    document.getElementById("fname").innerHTML="Required";
}
else if(fname.match(/\s/g)){
err++;
document.getElementById("fname").innerHTML="No Space Allowed";

}
else{
    document.getElementById("fname").innerHTML="";
}

//Last Name Validation
if(lname.match(/\s/g)){
    err++;
    document.getElementById("lname").innerHTML="No Space Allowed";
}
else{
    document.getElementById("lname").innerHTML="";
}

//Date Of Birth Validation
if(!dob){err++;
document.getElementById("dob").innerHTML="Required";}
else{document.getElementById("dob").innerHTML="";}

//Address Validation
if(!address){
    err++;
    document.getElementById("address").innerHTML="Required";
}

else{document.getElementById("address").innerHTML="";}

//Pincode Validation
if(!pcode){err++;
document.getElementById("pcode").innerHTML="Required";
}
else{
    document.getElementById("pcode").innerHTML="";
}

//Gender Validation
if(!gender){
    err++;
document.getElementById("gender").innerHTML="Required";

}
else{document.getElementById("gender").innerText=""}

//Mobile Validation
if(!mobile)
{
    err++;    
document.getElementById("mobile").innerHTML="Required";
}
else if(mobile.length !=10 ){
    err++;
    document.getElementById("mobile").innerHTML="Enter Valid Number";
    
    }
else
{
    document.getElementById("mobile").innerHTML="";
}



// if(mobile=='[6-9]{1}[0-9]{9}') {

//     err++;
//     document.getElementById("mobile").innerHTML="Enter Valid Contact Number"
// }
// else{document.getElementById("mobile").innerHTML="";}




//Password Validation
if(!pwd)
{
    err++;
document.getElementById("pwd").innerHTML="Required";
}

else if(pwd.length<8){

    err++;
    document.getElementById("pwd").innerHTML="Password must be of atleast 8 characters"
}

else{document.getElementById("pwd").innerHTML="";}


//Confirm Password Validation 

if(!cpwd)
{err++;
document.getElementById("cpwd").innerHTML="Required";}

//Checking if Password And Confirm Password are matching

else if(pwd!=cpwd){
    err++;
    
        document.getElementById("cpwd").innerHTML="Password does not match";
    
}
else{
    document.getElementById("cpwd").innerHTML="";
}

//Alert Box
if(err>0){
    return false;   
}
else {
    
let ask=window.confirm("The information will be saved. Do you wish to continue?");

    if(ask){
        window.open("Login.html");
        
    }

    else{
        return false;
    }
    

}


}













