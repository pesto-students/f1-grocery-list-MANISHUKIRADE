export interface Product {
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
export interface ProductList{
  docs: Array<Product>
  totalDocs: number
}
