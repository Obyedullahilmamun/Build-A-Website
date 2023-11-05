/*Toggle between adding and removing the responsive class to navigation when
the user clicks on the icon. */

function myFunction() {
    var x = document.getElementById("top_navigation");
    if(x.className === "navigation") {
        x.className += " responsive";
    }
    else {
        x.className = "navigation";
    }
    }

 setTimeout(wakeUPUser, 5000);
 function wakeUPUser() {
    alert("This is a simple website. The reason for making this website is to know about Web Development.")
 }