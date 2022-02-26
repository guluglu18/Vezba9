$(document).ready(function(){
    //alert("alksjlajs")
    $("#prvi").html("Ovo je izmenjena vrednost za prvi");
    //document.querySelector("#prvi").innerHTML="Ovo je izmenjena vrdnost za id";
    $('#dugme1').click(function(){
        $('#prvi').css({"background-color": "red", "color":"white"});
    });
    $("#dugme2").click(function(){
        let tekst = $('#tekst');
        let div = $("#odgovor");
        div.html(tekst.val());
    });
});

function f1(){
    $('.klasa').css({"background-color": "blue", "color":"white", "width": "300px"});
}