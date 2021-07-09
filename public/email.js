document.getElementById("submitBtn").addEventListener(
    "click", (event)=>{
        event.preventDefault();
        console.log("Click");
        
      
       
       
        Email.send({
         SecureToken: "86281113-0bbb-4635-b29c-4d2042c33ced ",
          To : "saurabhdadhich100@gmail.com",
          From : "proggrowthinfo@gmail.com",  
          Subject : "Customer Information",
          Body : "<html><h2>Hello,</h2><strong>Greetings!!</strong><br></br><em>I am </em><h4>Contact Number : </h4><h4>Email id : </h4></html>"
      }).then(
        message => alert(message)
      );
    }); 