import React from 'react';
import { useEffect, useState, createContext } from 'react';
import './productList.css';
import ReactPaginate from 'react-paginate';
import Product from '../product/product';
import  fetchAllProducts  from '../../services/api'
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
interface ProductList{
  docs: Array<Product>
  totalDocs: number
}

 async function getProduct(currentPage:number,pageLimit:number,setProduct:any,setTotalObject:any){
  const result  = await fetchAllProducts(currentPage,pageLimit)
  console.log(result)
  setProduct(result.docs)
  setTotalObject(result.totalDocs)
  return
}

function ProductList(): any {
  const [productList, setProductList] = useState <Product[]>([]);
  const [cartItems, setCartItems] = useState <Product[]>([]);
  const initialState = {
    cartItems,
    setCartItems,
  };
  const pageLimit =10;
  const [currentPage,setCurrentPage] = useState <number>(1);
  const [totalObject,setTotalObject] = useState <number>(0)
  const CartContext = createContext(initialState);
  
  useEffect(() => {
    getProduct(currentPage,pageLimit,setProductList,setTotalObject)
  },[currentPage]);
  return (
    <>
    <div className="list">
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        {
          productList.map((product) => <Product key={product.title}  product={product} CartContext={CartContext} />)
        }
      </CartContext.Provider>
    </div>
    <ReactPaginate pageCount={totalObject/pageLimit}  marginPagesDisplayed={2} pageRangeDisplayed={5}
          onPageChange={(data): void =>{
          getProduct(data.selected,pageLimit,setProductList,setTotalObject)
          setCurrentPage(data.selected)          
        }} ></ReactPaginate>
    </>
  );
}

export default ProductList;
