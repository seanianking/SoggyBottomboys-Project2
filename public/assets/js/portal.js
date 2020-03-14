$(document).ready(function() {
  $(".carousel").carousel("pause");
  $(".toManagedLeagues").on("click", function() {
    console.log("To Managed leagues clicked");
    $("#viewParticipantLeagues").addClass("hide");
    $("#viewManagerLeagues").removeClass("hide");
  });
  $(".toParticipantLeagues").on("click", function() {
    console.log("To Participant leagues clicked");
    $("#viewManagerLeagues").addClass("hide");
    $("#viewParticipantLeagues").removeClass("hide");
  });

  // $(".leaguePageBtn").on("click", function() {
  //   location.href = "/league-home";
  // });

  $("#toLeagueSearch").on("click", function() {
    location.href = "/league-search";
  });

  $("#create-leagueBtn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newLeague = {
      // formLeague: $("#newLeague-form")
      //   .val()
      //   .trim(),
      formLeagueName: $("#league-name")
        .val()
        .trim(),
      formSportName: $("#sport-name")
        .val()
        .trim(),
      selectAge: $("#select-age")
        .val()
        .trim(),
      inputCity: $("#inputCity")
        .val()
        .trim(),
      inputState: $("#inputState")
        .val()
        .trim(),
      inputLocation: $("#inputLocation")
        .val()
        .trim()
    };
    if (
      !newLeague.formLeagueName === "" ||
      !newLeague.formSportName === "" ||
      !newLeague.selectAge === "" ||
      !newLeague.inputCity === "" ||
      !newLeague.inputState === "" ||
      !newLeague.inputLocation === ""
    ) {
      alert("please fill out all fields");
    } else {
      // Send the POST request.
      $.ajax("/api/add", {
        type: "POST",
        data: newLeague
      }).then(function() {
        console.log("created new league");
        // Reload the page to get the updated list
        // location.reload();
      });
    }
  });

  $("#create-leagueBtn").click(function() {
    setTimeout("$('#popup-modal').modal('hide');", 2000);
  });
});
