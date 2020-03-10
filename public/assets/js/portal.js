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

  $(".leaguePageBtn").on("click", function() {
    location.href = "/league-home";
  });

  $("#toLeagueSearch").on("click", function(){
    location.href = "/league-search";
  });

});
