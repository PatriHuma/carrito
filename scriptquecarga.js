var productos = [];
document.addEventListener('DOMContentLoaded', function(event) {
// Función para cargar la tabla
function cargarTabla(productos) {
    const tablaproductos = document.getElementById("tablaprodt");
    
    // Limpiar la tabla antes de agregar nuevos datos
    cuerpotabla.innerHTML = '';

    productos.forEach(product => {
        const fila = document.createElement('tr');

        //const productoId = document.createElement('td');
        //productoId.innerText = product.SKU;
        //fila.appendChild(productoId);

        const descripcion = document.createElement('td');
        descripcion.innerText = product.title;
        fila.appendChild(descripcion);

        const precUnitario = document.createElement('td');
        precUnitario.innerText = (product.price); // Mostrar precio con el símbolo de euro
        //`${product.price} €`;
        fila.appendChild(precUnitario);

        const total = document.createElement('td');
        total.innerText = (product.price); // Muestra el precio como total (puedes ajustarlo según la cantidad)
        fila.appendChild(total);
        //`${parseFloat(product.price).toFixed(2)} €`;
        tablaproductos.appendChild(fila);
    });
}

// Fetch para obtener datos del JSON

    fetch('https://jsonblob.com/api/1302338665991495680')
        .then(response => response.json())
        .then(data => {
            productos = data.products; //Esto lo he tenido que mirar porque si no lo metia no cargaba la lista
            cargarTabla(productos);
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});






