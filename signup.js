function matchPassword() {  
    let pw1 = document.getElementById("form1Example13").value;  
    let pw2 = document.getElementById("form1Examp").value;  

    let em = document.getElementById("form1Example1").value;
    let na = document.getElementById("form1Example").value;
    let ph = document.getElementById("form1Exampl").value;

    if(na.length < 1 || ph.length < 10 || em.length < 5 )
    {
       alert("Filled required details");
    }

    else if(pw1.length < 8  || pw2.length < 8)  
    {   
      alert("Fill 8 digit  password"); 
      
    } 
    else {  
      
        if(pw1 == pw2 )
        {
            alert("Account created successfully");
        }
        else{
            alert("Password doest not match");
        }
    }  
  }  


  document.querySelector('input').style.background = 'white' 


