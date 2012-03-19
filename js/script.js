/* Author: @Crisgarner

*/

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

$('a#video_cromos').click(function(){
	$.colorbox({href:"http://www.youtube.com/embed/R3JxkfXZPfY"});	
});

$('a#asi_trabajamos').click(function(){
	$.colorbox({href:"http://www.youtube.com/embed/R3JxkfXZPfY"});	
});



