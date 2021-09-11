import React from 'react';
import { useEffect, useState, createContext } from 'react';
import './productList.css';
import Product from '../product/product';
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import {Product as ProductInterface} from '../../services/interface'
import api from '../../serviceInjectors'

const useStyles = makeStyles(theme => ({
  marginAutoContainer: {
    display: 'flex',
  },
  marginAutoItem: {
    margin: 'auto'
  }
}))


 async function getProduct(currentPage:number,pageLimit:number,setProduct:any,setTotalObject:any){
  const result  = await api.fetchAllProducts(currentPage,pageLimit)
  console.log(result)
  setProduct(result.docs)
  setTotalObject(result.totalDocs)
  return
}

function ProductList(): any {
  const [productList, setProductList] = useState <ProductInterface[]>([]);
  const [cartItems, setCartItems] = useState <ProductInterface[]>([]);
  const initialState = {
    cartItems,
    setCartItems,
  };
  const pageLimit =10;
  const [currentPage,setCurrentPage] = useState <number>(1);
  const [totalObject,setTotalObject] = useState <number>(0)
  const CartContext = createContext(initialState);
  const classes = useStyles()
 const clickHandler=(events: any,page: number): void=>{
         setCurrentPage(page)
         console.log(events)
  }
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
    <div className={classes.marginAutoContainer} >
     
      <Pagination className={classes.marginAutoItem}  count={Math.ceil(totalObject/pageLimit)} color="primary"  onChange={clickHandler} ></Pagination>

    </div>
    
    </>
  );
}

export default ProductList;
