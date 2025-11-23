// CnicGenerator

// get all ids
var userName = document.getElementById("userName");
var email = document.getElementById("email");
var age = document.getElementById("age");
var pass = document.getElementById("pass");
var contact = document.getElementById("contact");
var cnic = document.getElementById("cnic");

// console.log(userName)
// console.log(email)
// console.log(age)
// console.log(pass)
// console.log(contact)
// console.log(cnic)

// get all ids error
var nameerror = document.getElementById("nameerror");
var emailerror = document.getElementById("emailerror");
var ageerror = document.getElementById("ageerror");
var passerror = document.getElementById("passerror");
var contacterror = document.getElementById("contacterror");

// console.log(nameerror)
// console.log(emailerror)
// console.log(ageerror)
// console.log(passerror)
// console.log(contacterror)
// console.log(cnicerror)

// input => .value
// tag => .innerText

function submit() {

  var hasError = false;
  // userName

  if (userName.value == "") {
    nameerror.innerText = "Please Enter User Name"
    hasError = true;
  } else if (userName.value.length < 5) {
    nameerror.innerText = "Must Greater than 5 letters"
    hasError = true;
  }
  else {
    nameerror.innerText = ""
    hasError = false;
  }

  // email

  if (email.value == "") {
    emailerror.innerText = "Please Enter Email"
    hasError = true;
  }
  else if (!email.value.includes("@")) {
    emailerror.innerText = "please Enter valid email address"
    hasError = true;
  }
  else {
    emailerror.innerText = ""
    hasError = false;
  }

  // age

  if (age.value !== "" || age.value == 0) {
    ageerror.innerText = "Please Enter Your Age"
    hasError = true;
  } else if (age.value < 18) {
    ageerror.innerText = "Your not eligible for cnic"
    hasError = true;
  } else {
    ageerror.innerText = ""
    hasError = false;
  }

  // pass

  if (pass.value !== "") {
    passerror.innerText = "Please Enter Pass"
    hasError = true;
  }
  else if (pass.value.length == 8) {
    passerror.innerText = "Pass Must be Greater than 8"
    hasError = true;
  } else {
    passerror.innerText = ""
    hasError = false;
  }

  if (contact == 0) {
    contacterror.innerText = "Enter Your Number"
    hasError = true;
  } else if (contact.value.length < 11) {
    contacterror.innerText = "Enter Correct Num"
    hasError = true;
  } else {
    contacterror.innerText = ""
    hasError = false;
  }

  if (hasError == false) {
    var a = (Math.random() * 10000000000000).toFixed(0)
    var cnicNo = a.toString().substring(0, 5) + "-" + a.toString().substring(5, 12) + "-" + a.toString().substring(12);
    console.log(cnic)
    cnic.value = cnicNo
  }
}