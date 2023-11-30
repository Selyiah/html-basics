// Event listeners (linked to HTML)
 
function pressAlert() {
    console.log("Button has been clicked.");
}

const button = document.getElementById("myButton");

var alert = button.addEventListener("click", pressAlert);

// on live server click inspect > console 
