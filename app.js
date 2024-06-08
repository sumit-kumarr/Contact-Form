function send(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
    var message=document.getElementById("message").value;
 if(name==null || name==""){
    alert("name cant be empty")
    return false;
 }
 if(password.length!=6){
    alert("password must be 6 character");
    return false;
 }
 if(confirmpassword.length!=6){
    alert("password must be 6 character");
    return false;
 }
 if(message==null || message==""){
    alert("message should not be empty");
    return false;
 }
}