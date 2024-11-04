
//he metido funcionalidad a carrito pero no he logrado hacerlo funcionar, solo va bien la primera parte y me ha costado un millón de horas
//me he vuleto  loca pero en cuanto lo intento implementar se queda sin nada la tabla y no he sido capaz
//de hacer esta parte del trabajo.
//dejo la clase y las funciones pero no ha sabido seguir, he estado investigando,consultando un monton de cosas,
// viendo otra vez las clases...un desastre y yo sola de 0 sería incapaz de hacer esto sin guía... continuo intentándolo

class Carrito {
    constructor() {
        this.productos = []; // Array para almacenar los productos
    }

    agregarProducto(sku, title, price) {
        const productoExistente = this.productos.find(product => product.sku === sku);
        if (productoExistente) {
            productoExistente.quantity++;
        } else {
            this.productos.push({ sku, title, price, quantity: 1 });
        }
        this.actualizarTotal();
    }

    actualizarUnidades(sku, unidades) {
        const producto = this.productos.find(product => product.sku === sku);
        if (producto) {
            producto.quantity = unidades > 0 ? unidades : 0;
            this.actualizarTotal();
        }
    }

    obtenerInformacionProducto(sku) {
        const producto = this.productos.find(product => product.sku === sku);
        if (producto) {
            return {
                sku: producto.sku,
                quantity: producto.quantity
            };
        }
        return null;
    }

    obtenerCarrito() {
        const total = this.productos.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0).toFixed(2);
        return {
            total: total,
            currency: "€",
            products: this.productos
        };
    }
    
    actualizarTotal() {
        const totalCarrito = document.getElementById('totalfin');
        const total = this.obtenerCarrito().total;
        totalCarrito.innerText = total + '€';
    }
}