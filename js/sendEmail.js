function sendEmail(contactForm) {
  emailjs
    .send("gmail", "websiteform", {
      from_fName: contactForm.fName.value,
      from_lName: contactForm.lName.value,
      from_email: contactForm.email.value,
      message: contactForm.message.value,
      city: contactForm.city.value,
    })
    .then(
      function (response) {
        document.getElementById("fName").value = "";
        document.getElementById("lName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("city").value = "";
        document.getElementById("message").value = "";
        document.getElementById("gridCheck").checked = false;
        document.getElementById("submit").style.backgroundColor =
          "rgb(219, 98, 151)";
        document.getElementById("successfully-submitted").style.display =
          "block";
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        alert("Something went wrong with your request. Please try again");
        console.log("FAILED...", error);
      }
    );
  return false;
}
