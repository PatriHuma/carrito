var productos = [];

// Espera a que el contenido del documento esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Función para cargar productos en la tabla
    function cargarTabla(productos) {
        const cuerpotabla = document.getElementById("cuerpotabla");
        cuerpotabla.innerHTML = ''; // Limpiar solo el cuerpo de la tabla

        productos.forEach(product => {
            const fila = document.createElement('tr');

            // Descripción del producto
            const descripcion = document.createElement('td');
            descripcion.innerText = product.title;
            fila.appendChild(descripcion);

            // Precio del producto
            const precio = document.createElement('td');
            precio.innerText = `${Number(product.price).toFixed(2)} €`;
            fila.appendChild(precio);
            
            // Cantidad del producto
            const cantidadCelda = document.createElement('td'); //cantidad

            const cantidadInput = document.createElement('input');
            cantidadInput.type = 'number';
            cantidadInput.value = 0; // Cantidad inicial en 0
            cantidadInput.min = 0; // No con valores negativos

            const btnMenos = document.createElement('button');
            btnMenos.innerText = '-';
            btnMenos.onclick = function() {
                if (cantidadInput.value > 0) {
                    cantidadInput.value--;
                    actualizarTotal(fila, precio.innerText, cantidadInput.value);
                }
            };

            const btnMas = document.createElement('button');
            btnMas.innerText = '+';
            btnMas.onclick = function() {
                cantidadInput.value++;
                actualizarTotal(fila, precio.innerText, cantidadInput.value);
            };

            // Añadir los botones y el input a la celda de cantidad
            cantidadCelda.appendChild(btnMenos);
            //cuando meto una cantidad a mano, solo se actualiza si le pulso luego a + o - ¿?
            cantidadCelda.appendChild(cantidadInput);
            cantidadCelda.appendChild(btnMas);

            fila.appendChild(cantidadCelda); // Añadir la celda de cantidad a la fila

            // Total en la fila
            const total = document.createElement('td');
            total.innerText = `0.00 €`;
            fila.appendChild(total);

            cuerpotabla.appendChild(fila);
        });
    }

    // Función para actualizar el total
    function actualizarTotal(fila, precio, cantidad) {
        const totalCelda = fila.querySelector('td:last-child');
        let total = (Number(precio.replace(' €', '')) * cantidad).toFixed(2);
        totalCelda.innerText = `${total} €`;
    }

    // Cargar productos desde mi Json como promesa con then y catch ya que si no lo hago así no me carga.
    fetch('https://jsonblob.com/api/1302338665991495680')
        .then(response => response.json())
        .then(data => {
            productos = data.products; // Guardar los productos
            cargarTabla(productos); // Cargar tabla con productos
        })
        .catch(error => console.error('Error:', error));
});