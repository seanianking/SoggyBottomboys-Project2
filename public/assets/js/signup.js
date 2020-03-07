$(document).ready(function() {
  let signupForm = $("form.signup");
  let emailInput = $("input#email-input");
  let passwordInput = $("input#password-input");
  //   let confirmPassword = $("input#confirm-password");

  signupForm.on("submit", function(event) {
    event.preventDefault();
    let userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");

    function signUpUser(email, password) {
      $.post("/api/signup", {
        email: email,
        password: password
      })
        .then(() => {
          window.location.replace("/");
        })
        .catch(handleLoginErr);
    }

    function handleLoginErr() {
      //   $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
});
