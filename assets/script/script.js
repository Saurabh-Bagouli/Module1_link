$(document).ready(function(){
    $("#toggle-btn").click(function () {
        $("#list-div").toggle(280);
        $("#toggle-btn").toggleClass("btn-clicked")
        $(".fa-ellipsis-vertical").toggleClass("icon-style")
    });
    var MAX_WIDTH = 520, $window = $(window), toggleEnabled = true;

$window.on('resize', function() {
    if ($window.width() > MAX_WIDTH) {
        $("#toggle-btn").hide();
        $("#list-div").show();
    } else {
        
        $("#toggle-btn").show();
     
        $('#list-div').hide();

        toggleEnabled = true;
    }
    if($window.width()<MAX_WIDTH){
        $("#toggle-btn").click(function () {
            $(".href").addClass("link");
            $(".list").addClass("list-border");
            $("#list-div").removeClass("all-lists");
            $("#list-div").addClass("dropdown-list");
        });
    }
   
});
$window.trigger('resize');
$("#saved1").click(function(){
    $("#saved1").toggleClass("heart-css");
});
$("#saved2").click(function(){
    $("#saved2").toggleClass("heart-css");
});
$("#saved3").click(function(){
    $("#saved3").toggleClass("heart-css");
});
});