import './product.css';
import {  React,useContext } from 'react';

 type Product = {
    title: string,
    type: string,
    description: string,
    filename: string,
    height: number,
    width: number,
    price: number,
    rating: number,
    inCart: boolean
}

type Props ={
    product: Product,
    CartContext: any
}

export default function ProductComponent(props: Props) {
  const { product, CartContext } = props;
  const { cartItems, setCartItems } = useContext(CartContext);
  const inCartLable = 'Add To Cart';
  const removeCartLable = 'Remove from Cart';

  const clickHandler = (product: Product) => {
    if (product.inCart) {
      const removedItem = cartItems.filter((cartItem: Product) => cartItem.title != product.title);
      product.inCart = false;
      setCartItems(removedItem);
      return;
    }
    product.inCart = true;
    setCartItems([...cartItems, product]);
  };

  return (
    <button className="card" style={{ color: product.inCart ? 'red' : 'black' }}>
      <img alt="image" src={`${product.filename}`} />
      <div className="container">
        <h5>
          {product.title}
          {' '}
        </h5>
        <h5>
          {' '}
          &#x20b9;
          {product.price}
        </h5>
      </div>
      <button onClick={() => {
        clickHandler(product);
      }}
      >
        {' '}
        {product.inCart ? removeCartLable : inCartLable}
        {' '}
        <i className="fa fa-shopping-cart" />
      </button>
    </button>
  );
}
