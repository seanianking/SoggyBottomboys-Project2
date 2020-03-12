$(document).ready(function() {
  let signupForm = $("form.signup");
  let emailInput = $("input#email-input");
  let passwordInput = $("input#password-input");
  let firstNameInput = $("input#first-nameInput");
  let lastNameInput = $("input#last-nameInput");
  let ageInput = $("input#age-input");
  //   let confirmPassword = $("input#confirm-password");

  signupForm.on("submit", function(event) {
    event.preventDefault();
    let userData = {
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      age: ageInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData);
    if (
      !userData.email ||
      !userData.password ||
      !userData.firstName ||
      !userData.lastName ||
      !userData.age
    ) {
      return;
    }

    signUpUser(userData);
    emailInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
    ageInput.val("");

    function signUpUser(userData) {
      $.post("/api/signup", userData)
        .then(() => {
          window.location.replace("/");
        })
        .fail(err => console.log("err", err));
    }

    // function handleLoginErr() {
    //   //   $("#alert .msg").text(err.responseJSON);
    //   $("#alert").fadeIn(500);
    // }
  });
});
