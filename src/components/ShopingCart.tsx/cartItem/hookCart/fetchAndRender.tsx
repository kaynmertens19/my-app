import {useEffect, useState } from "react"
import { Spacecraft } from "../../../../types/types";


export const fetchAndRender = () => {
    const [products, setProducts] = useState<Spacecraft[]>([]);
  
    useEffect(() => {
      const url = "http://localhost:3000/Spacecraft";
      const getProducts = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      };
      getProducts();
    }, []);
  
    return products;
  };
