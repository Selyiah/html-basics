// ask for user input
const username = prompt("What is your username?");
// check what I have received
console.log(username);

const password = prompt("What is your password?");
// check what I have received
console.log(password);

// if.. else to make decision with logical or comparision operators
if (username === "Melissa" && password === "password") {
  alert("Welcome Melissa!");
  adminLogin();
} else {
  alert("Welcome " + username);
  userLogin(password);
}
