import axios, {AxiosResponse} from 'axios'

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
  async  function fetchAllProducts (pageNo:number,limit:number) {
   const result: AxiosResponse =  await axios.get<ProductList>('http://localhost:3000/product',{params:{pageNo:pageNo,limit:limit}})
   const data: ProductList = result.data
   return data
}

export default fetchAllProducts;

