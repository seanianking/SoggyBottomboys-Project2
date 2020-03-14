$(document).ready(function() {
  $(".leaguePageBtn").on("click", function(event) {
    console.log("click");
    event.preventDefault();

    let id = $(this).attr("data-id");

    console.log(id);
    $.ajax("/league-home/" + id, {
      type: "GET"
    }).then(function(resp) {
      console.log(resp);
      location.reload();
      window.location.href = `/league-home/${id}`;
    });
  });

  $(".registerBtn").on("click", function(event) {
    console.log("click");

    event.preventDefault();

    let id = $(this).attr("data-id");
    // let UserId = user;

    console.log(id);
    $.ajax("/api/register/" + id, {
      type: "POST"
    }).then(function(resp) {
      console.log(resp);
      location.reload();
      // window.location.href = `/portal/${id}`;
    });
  });
  $(".registerBtn").click(function() {
    setTimeout("$('#reg-modal').modal('hide');", 2000);

  });
});
