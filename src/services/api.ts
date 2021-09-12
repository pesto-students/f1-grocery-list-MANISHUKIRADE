import axios, {AxiosResponse} from 'axios'
import {ProductList } from './interface'

// export class

class Api{
   serverUrl: string
   constructor(url:string){
    this.serverUrl = url;
   }
   async fetchAllProducts(pageNo:number,limit:number): Promise<ProductList>{ 
   const result: AxiosResponse =  await axios.get<ProductList>(this.serverUrl+'/product',{params:{pageNo:pageNo,limit:limit}});
   const data: ProductList = result.data;
   return data;

   }
}


export default Api;

