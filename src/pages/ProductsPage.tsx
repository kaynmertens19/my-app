import { ProductsData } from "../hooks/productHook";

export function ProductsPage(){
getProducts()
  async  function getProducts(){
    const response = await ProductsData
    console.log(response)



    return(
        <h1>Hello!</h1>
    )
  }
}