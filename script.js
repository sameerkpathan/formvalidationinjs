let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function validateform(){
    if(username.value == ""){
       document.getElementById("userError").innerHTML = "User Name Is Empty";
       flag = 0;
    }else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "User Name Required Min 3 Char"
        flag=0;
    }else{
        document.getElementById("userError").innerHTML="";
        flag = 1;
    }

    if(password.value == ""   ){
        document.getElementById("passError").innerHTML= "Password Is Empty"
        flag = 0;
    }else if(password.value.length < 3 ){
        document.getElementById("passError").innerHTML= "Password must be Required 3 char"
         flag = 0;
    }
    else{
        document.getElementById("passError").innerHTML="";//for clear previous result
        flag = 1;
    }
    if(flag){
        return true;
    }else{
        return false;
    }
}
