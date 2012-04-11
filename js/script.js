/* Author: @Crisgarner

*/

// Create a jQuery exists method
jQuery.fn.exists = function () { return jQuery(this).length > 0; }


///Redirecciones al presionar el li
$("#quienes_li").click(function(){
    window.location.href = "quienes.html";
});

$("#podemos_li").click(function(){
    window.location.href = "podemos.html";
});

$("#contacto_li").click(function(){
    window.location.href = "contacto.html";
});

$("#quiero_click").click(function(){
    window.location.href = "contacto.html";
});

//Videos
$('a#video_cromos').click(function(){
	$.colorbox({html:'<iframe width="560" height="315" src="http://www.youtube.com/embed/R3JxkfXZPfY" frameborder="0" allowfullscreen></iframe>'});
});

$('a#asi_trabajamos').click(function(){
	$.colorbox({html:'<iframe width="560" height="315" src="http://www.youtube.com/embed/R3JxkfXZPfY" frameborder="0" allowfullscreen></iframe>'});
});

//validacion Formulario
$(document).ready(function() {
    if ($("#form_contacto").exists()) {
        $.validity.setup({ outputMode:"label" })

        $("#form_contacto").validity(function(){

            if (validateMyAjaxInputs()) {
                // Do ajax request here
                var nombre = $("#nombre").val();
                var email = $("#email_form").val();
                var empresa = $("#empresa").val();
                var telefono = $("#telefono_form").val();
                var mensaje = $("#mensaje").val();
                var datastr = "nombre="+nombre+ "&email_form="+ email + "&empresa=" + empresa+ "&telefono="+ telefono+"&mensaje="+ mensaje  ;
                $.ajax({
                    type: "POST",
                    url: "email.php",
                    data: datastr,
                    cache: false,
                    success: function(html){
                    $("#formulario").fadeOut(0);
                    $("#formulario").html("<span id='gracias'>Gracias contactarnos, nos comunicaremos contigo lo mas pronto posible.</span>");
                    $("#formulario").addClass("gracias");
                    $("#formulario").fadeIn("slow");
                    }
                });
            }
        });
    }

});

function validateMyAjaxInputs() {
    $("label.error").remove();
    $.validity.start();
    $("#nombre").require("Ingresa tu nombre.");
    $("#email_form").match('email',"Correo no valido.");
    $("#email_form").require("Ingresa tu Correo.");
    var result = $.validity.end();
    return result.valid;
}

$('label.error[for="nombre"]').live("click",function(){
    $(this).fadeOut(500);
});

$('#nombre').live("click",function(){
    $('label.error[for="nombre"]').fadeOut(500);
});

$('#email_form').live("click",function(){
    $('label.error[for="email_form"]').fadeOut(500);
});

$('label.error[for="email_form"]').live("click",function(){
    $(this).fadeOut(500);
});

$(".validity-tooltip").live("click",function(){
    $(".validity-tooltip").fadeOut(500);
});

$("#form_contacto").submit(function(e){

    return false;

});

///Employees


$(".employee_container").click(function(){
    if ($(this).hasClass('open')) {
        $(this).removeClass("open");
        $(".descripcion").fadeOut(0);
        $(".employee_container").animate({
            width: "92px",
            marginTop:"80px"
        });
    }else{
        $(".employee_container").removeClass("open");
        $(this).addClass("open");
        $(".descripcion").fadeOut(0);
        $(".employee_container").animate({
            width: "92px",
            marginTop:"80px"
        });
        var x = $(this).children().eq(1);
        $(this).animate({
            width: "330px",
            marginTop:"30px"
        }).queue(function(){
            x.fadeIn(600);
            $(this).dequeue();
        });
    }
});


//Podemos Sub Menu

$("#podemos_info_container .section-1 a").live("click",function(){
    var clase = $(this).attr("class");
    $("#podemos_info_container .section-1 a").removeClass("selected");
    $(this).addClass("selected");

    switch(clase){
        case "websolucion":
            var p = "Es un paquete pensado para instituciones que requieren de herramientas electrónicas para la comunicación y promoción de sus productos o servicios en una forma económica, práctica y altamente funcional.";
            $("#content").addClass("bounceOutDown");
            bounceAnimation("WebSolución",p);
            console.log(clase);
        break;
        case "cultura":
            var p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum augue nec magna varius vehicula. Mauris ac dui vitae quam congue tincidunt lobortis vel purus. Etiam at purus dolor. Curabitur vitae ipsum sit amet metus aliquet laoreet quis in est. Vestibulum tempus turpis tristique tellus porta vestibulum vel nec neque. Nam fringilla consequat nibh a feugiat. Nullam at tellus id justo pulvinar vehicula. In hac habitasse platea dictumst.";
            $("#content").addClass("bounceOutDown");
            bounceAnimation("Cultura Organizacional",p);
            console.log(clase);
        break;
        case "goToInbox":
            var p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum augue nec magna varius vehicula. Mauris ac dui vitae quam congue tincidunt lobortis vel purus. Etiam at purus dolor. Curabitur vitae ipsum sit amet metus aliquet laoreet quis in est. Vestibulum tempus turpis tristique tellus porta vestibulum vel nec neque. Nam fringilla consequat nibh a feugiat. Nullam at tellus id justo pulvinar vehicula. In hac habitasse platea dictumst.";
            $("#content").addClass("bounceOutDown");
            bounceAnimation("Go2Inbox",p);
            console.log(clase);
        break;
        case "socialMedia":
            var p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum augue nec magna varius vehicula. Mauris ac dui vitae quam congue tincidunt lobortis vel purus. Etiam at purus dolor. Curabitur vitae ipsum sit amet metus aliquet laoreet quis in est. Vestibulum tempus turpis tristique tellus porta vestibulum vel nec neque. Nam fringilla consequat nibh a feugiat. Nullam at tellus id justo pulvinar vehicula. In hac habitasse platea dictumst.";
            $("#content").addClass("bounceOutDown");
            bounceAnimation("SocialMedia",p);
            console.log(clase);
        break;
        case "socialBots":
            var p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum augue nec magna varius vehicula. Mauris ac dui vitae quam congue tincidunt lobortis vel purus. Etiam at purus dolor. Curabitur vitae ipsum sit amet metus aliquet laoreet quis in est. Vestibulum tempus turpis tristique tellus porta vestibulum vel nec neque. Nam fringilla consequat nibh a feugiat. Nullam at tellus id justo pulvinar vehicula. In hac habitasse platea dictumst.";
            $("#content").addClass("bounceOutDown");
            bounceAnimation("SocialBots",p);
            console.log(clase);
        break;
        case "moviles":
            var p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum augue nec magna varius vehicula. Mauris ac dui vitae quam congue tincidunt lobortis vel purus. Etiam at purus dolor. Curabitur vitae ipsum sit amet metus aliquet laoreet quis in est. Vestibulum tempus turpis tristique tellus porta vestibulum vel nec neque. Nam fringilla consequat nibh a feugiat. Nullam at tellus id justo pulvinar vehicula. In hac habitasse platea dictumst.";
            $("#content").addClass("bounceOutDown");
            bounceAnimation("Apliaciones Moviles",p);
            console.log(clase);
        break;
    }
});

function bounceAnimation(titulo,info){

    setTimeout(
          function()
          {
            $("#content h3").html(titulo);
            $("#content p").html(info);
            $("#content").removeClass("bounceOutDown");
            $("#content").addClass("bounceInDown");
          }, 500);

}