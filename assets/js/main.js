document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mousemove", function() {
      document.querySelector(".fade-in").classList.add("animate");
    });
  });

  function sendMail(){
    let parms ={
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
  
          
    }
  
    emailjs.send("service_tkcqg4g","template_mx91nrl",parms).then(alert("Email Sent!!"))
  }