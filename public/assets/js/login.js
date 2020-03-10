$(document).ready(function() {
  let loginForm = $("form.login");
  let emailInput = $("input#email-input");
  let passwordInput = $("input#password-input");

  loginForm.on("submit", function(event) {
    event.preventDefault();

    let userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");

    function loginUser(email, password) {
      $.post("/", {
        email: email,
        password: password
      })
        .then(() => {
          console.log("post");
          window.location.replace("/portal");
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
});
