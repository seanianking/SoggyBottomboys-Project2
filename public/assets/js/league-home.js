$(document).ready(function() {
$('#announceInfo').on("click", function(){
    $('#announce-div').removeClass('hide');

    $('#sched-div').addClass('hide');
    $('#part-div').addClass('hide');
    $('#owner-div').addClass('hide');
})

$('#schedInfo').on("click", function(){
    $('#sched-div').removeClass('hide');

    $('#announce-div').addClass('hide');
    $('#part-div').addClass('hide');
    $('#owner-div').addClass('hide');
})

$('#partInfo').on("click", function(){
    $('#part-div').removeClass('hide');
    
    $('#sched-div').addClass('hide');
    $('#announce-div').addClass('hide');
    $('#owner-div').addClass('hide');
})

$('#ownerInfo').on("click", function(){
    $('#owner-div').removeClass('hide');
    
    $('#sched-div').addClass('hide');
    $('#part-div').addClass('hide');
    $('#announce-div').addClass('hide');
})

});