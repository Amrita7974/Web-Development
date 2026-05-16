// const data = {
//     fullName:fn,
//     phone:p,
//     email:em,
//     password:pw

// }

function submit() {
    const text = document.getElementById("fullName").value;
    const number = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // console.log(text);
    // console.log(number);
    // console.log(email);
    // console.log(password);


     document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });

    if(!/^[A-Za-Z\s]+$/.test(text)){
        document.getElementById("fullNameError").innerText = "invalid fullName";
    }
     

  if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(email)) {
    document.getElementById("emailError").innerText = "Invalid Email";
  }

  if (!/^[6-9]\d{9}$/.test(number)) {
    document.getElementById("phoneError").innerText = "Invalid Phone";
  }

}