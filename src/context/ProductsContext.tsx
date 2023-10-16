import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react";
import { Spacecraft } from "../types/types";

type ProductsContextType = {
    products: Spacecraft[],
    setProducts: Dispatch<SetStateAction<Spacecraft[]>>
}


export const ProductContext = createContext<ProductsContextType>({
    products: [],
    setProducts: () => {}
})




export const ProductContextProvider:FC<PropsWithChildren> = ({children})=>{
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{
        const getData = async()=>{
            const url = "http://localhost:3000/Spacecraft"
            const res = await fetch(url)
            const data = await res.json()
            setProducts(data)
        }
        getData()

        

        
    }, [])

    console.log("pan",products)
    

    return(
        <ProductContext.Provider value={{products, setProducts}}>
        {children}
        </ProductContext.Provider>
    )
}