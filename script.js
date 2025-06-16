let carrito = [];
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
  alert(`Has agregado "${nombre}" al carrito.`);
}
function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  let total = 0;
  carrito.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - S/. ${item.precio.toFixed(2)}`;
    lista.appendChild(li);
    total += item.precio;
  });
  document.getElementById("total").textContent = "Total: S/. " + total.toFixed(2);
  document.getElementById("contador").textContent = carrito.length;
}
function mostrarCarrito() {
  const carritoSeccion = document.getElementById("carrito");
  carritoSeccion.style.display = carritoSeccion.style.display === "block" ? "none" : "block";
}
