// Arreglo para almacenar productos
let inventario = [];

// Función para agregar productos
function agregarProducto() {
    const nombre = document.querySelector('#nombreProducto').value.trim();
    const cantidad = parseInt(document.querySelector('#cantidadProducto').value);

    if (nombre && cantidad > 0) {
        const productoExistente = inventario.find(producto => producto.nombre === nombre);

        if (productoExistente) {
            productoExistente.cantidad += cantidad; // Actualiza la cantidad si ya existe
        } else {
            inventario.push({ nombre, cantidad }); // Agrega el producto si no existe
        }
        mostrarProductos();
    } else {
        alert('Por favor, ingresa un nombre y una cantidad válida.');
    }

    document.querySelector('#nombreProducto').value = '';
    document.querySelector('#cantidadProducto').value = '';
}

// Función para mostrar los productos en el inventario
function mostrarProductos() {
    const listaProductos = document.querySelector('#listaProductos');
    listaProductos.innerHTML = ''; // Limpiar la lista

    if (inventario.length === 0) {
        listaProductos.innerHTML = '<li>No hay productos en el inventario.</li>';
        return;
    }

    inventario.forEach(producto => {
        const itemProducto = document.createElement('li');
        itemProducto.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad}`;
        listaProductos.appendChild(itemProducto);
    });
}

// Función para actualizar la cantidad de un producto
function actualizarProducto() {
    const nombre = document.querySelector('#nombreProductoActualizar').value.trim();
    const nuevaCantidad = parseInt(document.querySelector('#cantidadProductoActualizar').value);

    const producto = inventario.find(producto => producto.nombre === nombre);

    if (producto && nuevaCantidad >= 0) {
        producto.cantidad = nuevaCantidad;
        mostrarProductos();
    } else {
        alert('Producto no encontrado o cantidad inválida.');
    }

    document.querySelector('#nombreProductoActualizar').value = '';
    document.querySelector('#cantidadProductoActualizar').value = '';
}

// Función para eliminar productos sin stock
function eliminarSinStock() {
    inventario = inventario.filter(producto => producto.cantidad > 0);
    mostrarProductos();
}
