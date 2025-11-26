// CnicGenerator

// get all ids
var userName = document.getElementById("userName");
var email = document.getElementById("email");
var age = document.getElementById("age");
var pass = document.getElementById("pass");
var contact = document.getElementById("contact");
var cnic = document.getElementById("cnic");

// errors
var nameerror = document.getElementById("nameerror");
var emailerror = document.getElementById("emailerror");
var ageerror = document.getElementById("ageerror");
var passerror = document.getElementById("passerror");
var contacterror = document.getElementById("contacterror");


function submit() {

  let hasError = false;

  // userName
  if (userName.value === "") {
    nameerror.innerText = "Please Enter User Name";
    hasError = true;
  } else if (userName.value.length < 5) {
    nameerror.innerText = "Must be greater than 5 letters";
    hasError = true;
  } else {
    nameerror.innerText = "";
  }

  // email
  if (email.value === "") {
    emailerror.innerText = "Please Enter Email";
    hasError = true;
  } else if (!email.value.includes("@")) {
    emailerror.innerText = "Please enter valid email address";
    hasError = true;
  } else {
    emailerror.innerText = "";
  }

  // age
  if (age.value === "") {
    ageerror.innerText = "Please Enter Your Age";
    hasError = true;
  } else if (Number(age.value) < 18) {
    ageerror.innerText = "You are not eligible for CNIC";
    hasError = true;
  } else {
    ageerror.innerText = "";
  }

  // password
  if (pass.value === "") {
    passerror.innerText = "Please Enter Password";
    hasError = true;
  } else if (pass.value.length < 8) {
    passerror.innerText = "Password must be at least 8 characters";
    hasError = true;
  } else {
    passerror.innerText = "";
  }

  // contact
  if (contact.value === "") {
    contacterror.innerText = "Enter Your Number";
    hasError = true;
  } else if (contact.value.length < 11) {
    contacterror.innerText = "Enter Correct Number";
    hasError = true;
  } else {
    contacterror.innerText = "";
  }

  // If no error → generate CNIC
  if (hasError === false) {
    var a = Math.random().toString().slice(2, 15); // generate random digits
    var cnicNo =
      a.substring(0, 5) + "-" +
      a.substring(5, 12) + "-" +
      a.substring(12, 13);

    cnic.value = cnicNo;
  }
}
