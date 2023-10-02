import {useState, useEffect} from 'react'
import { Spacecraft } from '../types/types';




export const ProductsData = () => {
 const [jsonData, setJsonData] = useState<Spacecraft[]>([]);

 useEffect(() => {
   const fetchProducts = async() =>{
    const url = "http://localhost:3000/spacecraft";
    const response = await fetch(url);
    const data = await response.json();
    setJsonData(data);
    console.log(setJsonData(data));
   }
      fetchProducts()  
    
 }, []);




}