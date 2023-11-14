function validate()
{
	var un = document.getElementById("uname").value
	var unp = /^[a-zA-Z ]+$/

	var ph = document.getElementById("phone").value
	var php = /^[6-9]{1}[0-9]{9}$/
	if(un == "")
	{
		document.getElementById("msg").innerHTML ="Enter the user name"
	    return false
	}
	if(un.match(unp))
		true	
	else
	{
		document.getElementById("msg").innerHTML ="User name should contains alphabets"
	    return false
	}
	if(un.length<3)
	{
		document.getElementById("msg").innerHTML ="User name should contains minimum 3 characters"
	    return false
	}
	if(un.length>20)
	{
		document.getElementById("msg").innerHTML ="User name should contains maximum 8 characters"
	    return false
	}

	if(ph=="")
	{
		document.getElementById("msg1").innerHTML="Enter the phone number"
		return false
	}
	if(ph.match(php))
		true
	else
	{
		document.getElementById("msg1").innerHTML="Invalid phone number"
		return false
	}

	var em=document.getElementById("email").value
	var emp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(em == "")
	{
		document.getElementById("msg2").innerHTML ="Enter the email id"
	    return false
	}
	if(em.match(emp))
		true	
	else
	{
		document.getElementById("msg2").innerHTML ="Enter the valid email"
	    return false
	}

	var ps= document.getElementById("password").value
	var psp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/
	if(ps == "")
	{
		document.getElementById("msg3").innerHTML="Enter the password"
		return false
	}
	if(ps.length < 8){
		document.getElementById("msg3").innerHTML = "**Password length must be atleast 8 characters";  
     	return false;  
	}
	if(ps.length > 15) {  
    	document.getElementById("msg3").innerHTML = "**Password length must not exceed 15 characters";  
    	return false;  
  	} 
  	
  	if(ps.match(psp))
		true	
	else
	{
		document.getElementById("msg3").innerHTML ="Enter the valid password"
	    return false
	}


  	var cp = document.getElementById("cpassword").value
  	if( ps != cp){
  		document.getElementById("msg4").innerHTML="Passwords did not match"
  		return false
  		// alert("Passwords did not match");
  	}
  	else{
  		document.getElementById("msg4").innerHTML="Password created successfully"	
  		return true	
  		//alert("Password created successfully"); 
  	}

  	
}

function toggleVisibility() {  
  var getPasword = document.getElementById("password");  
  if (getPasword.type === "password") {  
    getPasword.type = "text";  
  } else {  
    getPasword.type = "password";  
  }  
}
function toggleVisibilityc() {  
  var getPas = document.getElementById("cpassword");  
  if (getPas.type === "password") {  
    getPas.type = "text";  
  } else {  
    getPas.type = "password";  
  }  
} 
