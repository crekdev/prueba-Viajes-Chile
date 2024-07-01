//Alert onclick btn enviar correo
$("#enviarCorreo").on("click", function () {
    alert("El correo fue enviado correctamente ✅")
})

//Cambia el fondo del nav al scrolear
$(window).scroll(function () {
    $("nav").css({
        "background": "#141414b3",
    })
})

//Cambia el fondo del nav al clickear
$("#nav").on("click", function () {
    $("nav").css({
        "background": "#141414b3",
    })
})
