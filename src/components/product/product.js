import "./product.css";
import { useContext, useState } from "react";
import Modal from "../modal/modal";

export default function Product(props) {
    const { product, CartContext } = props;
    const { cartItems = [], setCartItems } = useContext(CartContext);
    const inCartLable = 'Add To Cart'
    const removeCartLable = 'Remove from Cart'

    const clickHandler = (product) => {
        if (product.inCart) {
            let removedItem = cartItems.filter((cartItem) => {
                return cartItem.title != product.title;
            })
            product.inCart = false;
            setCartItems(removedItem)
            return
        }
        product.inCart = true;
        setCartItems([...cartItems, product]);
    }
    return <button className="card" style={{ color: product.inCart ? "red" : "black" }} >
        <img alt="image" src={`${product.filename}`} ></img>
        <div className="container">
            <h5>{product.title} </h5>
            <h5> &#x20b9;{product.price} </h5>
        </div>
        <button onClick={() => {
            clickHandler(product)
        }} > {product.inCart ? removeCartLable : inCartLable} <i class="fa fa-shopping-cart"></i></button>
    </button>
}