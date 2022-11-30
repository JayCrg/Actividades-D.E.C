$(document).ready(function(){
    $("tr:lt(2)").css("background-color","red");
    $("tr:gt(2)").css("background-color","blue");
    $("p:contains('eu')").css("background-color","yellow");
    $("td:empty").css("background-color","green");
});