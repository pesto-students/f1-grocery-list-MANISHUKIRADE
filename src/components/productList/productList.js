import { useEffect, useState, createContext } from "react";
import "./productList.css"
import products from "../../product.json"
import Product from "../product/product";
import Cart from "../cart/cart";

function ProductList() {
    const [productList, setProductList] = useState([])
    const [cartItems, setCartItems] = useState([])
    const CartContext = createContext()
    useEffect(() => {
        setProductList(products)
    })
    return <div >
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            <div className="list">
                {
                    productList.map((product) => {
                        return <Product product={product} CartContext={CartContext} />
                    })
                }
            </div>
            Cart Items
            <Cart CartContext={CartContext}  ></Cart>
        </CartContext.Provider >
    </div >

}

export default ProductList