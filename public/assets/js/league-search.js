$(document).ready(function() {
  $(".leaguePageBtn").on("click", function(event) {
    console.log("click");
    event.preventDefault();

    let id = $(this).attr("data-id");

    console.log(id);
    $.ajax("/api/league-home/" + id, {
      type: "GET"
    }).then(function(resp) {
      console.log(resp);
      location.reload();
      window.location.href = `/api/league-home/${id}`;
    });
  });

  $(".registerBtn").on("click", function(event) {
    console.log("click");
    event.preventDefault();

    let regId = $(this).attr("data-id");

    console.log(regId);
    $.ajax("/api/register/" + regId, {
      type: "POST"
    }).then(function(resp) {
      console.log(resp);
      location.reload();
      window.location.href = `/api/portal/${regId}`;
    });
  });
});
