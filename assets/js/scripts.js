//JAVASCRIPT
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



//JQUERY
// selector y accion para cuando el documento este listo
$(document).ready(function(){
  //selector y accion  para cuando se haga doble click al parrafo
  $("p").dblclick(function(){
    //selector y accion que realmente va a ejecutarse
     $(this).hide();
  });

// selector y accion para cuando se hace click en los titulos de postre
  $(".tituloPostre").click(function(){
    //selector y accion que muestra y oculta los contenidos de postre
      $(".contenidoPostre").toggle();
  });



// selector y accion para cuando se haga doble click al id misIngredientes
  $("#misIngredientes").dblclick(function(){
      $(this).css({
        "color": "red",
      });
  });

  //selector y accion para cuando  haga doble click al id miPreparacion

// selector y accion para cuando se haga doble click al id mostrarTodo
  $("#mostrarTodo").dblclick(function(){
    $("p").show();
  });

  //selector y accion para cuando se haga un click en el boton enviar Correo
  $("#enviarCorreo").click(function(){
    alert("El correo fue enviado Correctamente");
  });
});
