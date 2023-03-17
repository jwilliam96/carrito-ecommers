import loader from "./components/loader.js"
import showMenu from "./components/showMenu.js"
import showCart from "./components/showCart.js"
import products from "./components/products.js"
import getProducts from "./components/helpers/getProducts.js"
import cart from "./components/cart.js"

// UI Element
//  ocultar loader 
loader()

// Mostarr menu
showMenu()

// mostrar carrito
showCart()


// end UI Element

// products
const { db, printProducts } = products(await getProducts())

// carrito
cart(db, printProducts)