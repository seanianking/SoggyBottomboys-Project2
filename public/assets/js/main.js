$('#toPortalPage').on("click", function(){
    console.log("... to portal clicked ...");
    window.location.replace("http://localhost:8080/portal");
})

$('#toLeagueSearchPage').on("click", function(){
    console.log("... to League Search clicked ...");
    window.location.replace("http://localhost:8080/league-search");
})