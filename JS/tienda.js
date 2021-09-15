// ESTE IF ES PARA ASEGURARSE QUE SE HAYA CARGADO LA WEB
// ANTES DE EJECUTAR JS. ESTO PORQUE PUSIMOS EL SCRIPT DE CARGA EN EL HEAD.

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
//DECLARACIONES
let carrito = [];
const miLocalStorage = window.localStorage;

//LLAMADORES
function ready() {
  [
    { clase: "btn-danger", callback: removeCartItem },
    { clase: "shop-item-button", callback: addToCartClicked },
    { clase: "cart-quantity-input", callback: quantityChanged },
    { clase: "empty-cart", callback: "emptyCart" },
  ].forEach((element) => {
    var [...botones] = document.getElementsByClassName(element.clase);
    if (botones.length > 0) {
      botones.forEach((button) =>
        button.addEventListener("click", element.callback)
      );
    } else {
      console.log("No existe la clase " + element.clase);
    }
  });
}
