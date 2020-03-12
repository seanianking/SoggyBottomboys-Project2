$(document).ready(function() {
  $(".leaguePageBtn").on("click", function(event) {
    console.log("click");
    event.preventDefault();

    let id = $(this).attr("data-id");

    console.log(id);
    $.ajax("/api/portal/" + id, {
      type: "GET"
    }).then(function(resp) {
      console.log(resp);
      location.reload();
    });
  });
});
