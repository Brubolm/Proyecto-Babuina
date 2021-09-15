class Producto {
  constructor({ id, nombre, precio, imagen, cantidad }) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }

  card() {
    return `
      <div class="shop-item">
        <span class="shop-item-title">${this.nombre}</span>
        <img class="shop-item-image" src="${this.imagen}" />
      <div class="shop-item-details">
        <span class="shop-item-price">$${this.precio}</span>
        <button name="${this.id}" title="agregarAlCarrito" value="1" onclick="accion(event)" class="btn btn-primary shop-item-button" type="button">
          AGREGAR AL CARRITO
        </button>
      </div>
      </div>`;
  }

  cartRow() {
    return `
    <div class="cart-row"> 
      <div class="cart-item cart-column">
        <img class="cart-item-image" src="${this.imagen}" width="100" height="100">
        <span class="cart-item-title">${this.nombre}</span>
      </div>
      <span class="cart-price cart-column">$${this.precio}</span>
      <div class="cart-quantity cart-column">
        <input title="actualizarCantidad" name="${this.id}" class="cart-quantity-input" oninput="accion(event)" type="number" value="${this.cantidad}">
        <button name="${this.id}" title="removerDelCarrito" onclick="accion(event)" class="btn btn-danger" type="button" >BORRAR</button>
      </div>
    </div>
       `;
  }
}

// ARTICULOS - EN STOCK Y EN CARRITO

class Tienda {
  constructor() {
    this.stock = [];
    this.carrito = arrayFrom([], Producto, "carrito");
    this.total = 0;
  }

  calcularTotal() {
    this.total = this.carrito.reduce((p, a) => a.precio * a.cantidad + p, 0);
    return this.total;
  }

  agregarProductos(listado) {
    listado.forEach((articulo) => this.agregarProducto(articulo));
  }

  agregarProducto(producto, destino = this.stock, cantidad) {
    let index = this.indexProducto(producto.id, destino);

    if (index == -1) {
      let item = new Producto(producto);
      item.cantidad = cantidad ? cantidad : item.cantidad;
      destino.push(item);
    } else {
      destino[index].cantidad += cantidad ? cantidad : producto.cantidad;
    }
  }

  indexProducto(id, destino = this.stock) {
    return destino.findIndex((item) => item.id == id);
  }

  agregarAlCarrito(id, cantidad) {
    this.agregarProducto(
      tienda.stock[this.indexProducto(id)],
      this.carrito,
      this.actualizarCantidad(id, cantidad)
    );
  }

  removerDelCarrito(id) {
    this.carrito = this.carrito.filter((item) => item.id != id);
  }

  actualizarCantidad(id, cantidad) {
    cantidad = parseInt(cantidad);
    if (this.indexProducto(id, this.carrito) != -1) {
      cantidad =
        cantidad >= this.stock[this.indexProducto(id)].cantidad
          ? this.stock[this.indexProducto(id)].cantidad
          : cantidad;
      cantidad == 0
        ? this.removerDelCarrito(id)
        : (this.carrito[this.indexProducto(id, this.carrito)].cantidad =
            cantidad);
    } else {
      cantidad = 1;
    }

    return cantidad;
  }
}

const tienda = new Tienda();

tienda.agregarProductos(listadoArticulos);

dibujarTabla();
