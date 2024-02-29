class ProductManager {
    static ID = 0;

    constructor () {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock){
      if (!title || !description || !price || !img || !code || !stock){
        console.error("Todos los campos son obligatorios");
        return;

      }
      if(this.products.some(product => product.code === code)) {
        console.error("El codigo debe ser unico");
        return;
      }

      const newProduct = { 
        id: ++ProductManager.ID,
        title,
        description,
        price,
        img,
        code,
        stock
      }
      this.products.push(newProduct);
    }

    getProducts (){
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if(!product){
            console.error("No se ha encontrado el producto.");

        } else {
            console.log("Producto encontrado.", product); 

        }
        return product;
    }
}
// creamos la instancia del manager
const manager = new ProductManager();

// mostramos el estado inicial de los productos ( en este caso el estado es vacio. )
console.log(manager.getProducts());

// agregamos productos de forma correcta.
manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25);
manager.addProduct("american burger", "la mas rica", 200, "sin imagen", "abc124", 30);
manager.addProduct("triple cheese", "la mas potente" , 100, "sin imagen", "abc125", 40);

// agregamos productos sin stock
manager.addProduct("doble bacon", "la mas vendida" , 100, "sin imagen", "abc126", null);

// agregamos productos con codigo repetido
manager.addProduct("simple burger", "basica" , 100, "sin imagen", "abc123", 20);

// mostramos el nuevo estado de los productos ( deberiamos tener 3 productos en el array )
console.log(manager.getProducts());

// probamos obtener un producto existente por ID 
manager.getProductById(2);

// probamos obtener un producto inexistente 
manager.getProductById(-1);
