function accion(event) {
  let boton = event.target;
  tienda[boton.title](boton.name, parseInt(boton.value));
  dibujarTabla();
}

function dibujarTabla() {
  $("#Items").html(tienda.stock.map((item) => item.card()));
  $("#cartContainer").html(tienda.carrito.map((item) => item.cartRow()));
  $("#precioTotal")
    .fadeOut(1)
    .html("$" + tienda.calcularTotal())
    .fadeIn(600);
  saveToLocal("carrito", tienda.carrito);
}
