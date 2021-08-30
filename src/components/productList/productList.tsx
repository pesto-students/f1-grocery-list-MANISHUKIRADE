import React from 'react';
import { useEffect, useState, createContext } from 'react';
import './productList.css';
import products from '../../product.json';
import Product from '../product/product';

interface Product {
    title: string,
    type: string,
    description: string,
    filename: string,
    height: number,
    width: number,
    price: number,
    rating: number,
    inCart : boolean
}

function ProductList(): any {
  const [productList, setProductList] = useState <Product[]>([]);
  const [cartItems, setCartItems] = useState <Product[]>([]);
  const initialState = {
    cartItems,
    setCartItems,
  };
  const CartContext = createContext(initialState);
  useEffect(() => {
    setProductList(products);
  });
  return (
    <div className="list">
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        {
                productList.map((product) => <Product  product={product} CartContext={CartContext} />)
            }
      </CartContext.Provider>
    </div>
  );
}

export default ProductList;
