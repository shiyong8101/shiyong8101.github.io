//document.write("<script language=javascript src=’jquery.js’></script>");
window.onload = function () {
    "use strict";
    //window.alert("welcome arthur to JQUERY");
};

//$("#myh1").css("fontSize","100px");
//window.alert($("#myh1").css("fontSize"));

alert($.trim("hi             hi, empty space             "));
$.each(["arthur","momo","yangyang"],function(index,value){
    //alert("$.each " + index + "=>" + value);
    console.log("$.each " + index + "=>" + value);
})
$(document).ready(function () {
    "use strict";
    $("#myh1").css({
        fontSize:"10px",
        color:"red",
        width:"100px"
        }
    );
    $("#myh1").click(function(){
        $("#myh1").html("changed to red");
        $("#myh1").css("color","red");
        $("#myh1").data("name","arthur");
    });
    $( "<p>This is a new paragraph</p>" );
    $("a").click(function (event) {
        window.alert("thanks arthur");
        event.preventDefault();
        //$(this).hide("slow");
        $("<h1>hello, i am a new guy!</h1><br>").insertAfter($("#myh1"));
        $("#myh1").html("changed to blue");
        $("#myh1").css("color","blue");
        alert($("#myh1").data("name"));
        $("a").html("changed now");
    });
});