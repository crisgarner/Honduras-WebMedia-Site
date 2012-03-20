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
