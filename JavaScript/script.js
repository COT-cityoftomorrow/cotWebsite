var galerieSkript = document.createElement('script');
galerieSkript.src = '/JavaScript/jquery-3.6.4.min.js';
var galerieSkript = document.createElement('script');
galerieSkript.src = '/JavaScript/jquery.cookie.js';
setTimeout(() => {
    $("body").append("<div id='navidiv'></div>");
    $("#navidiv").load("/HTML/Navi.html");
}, 1000);