import {useState, useEffect} from 'react'
import { Spacecraft } from '../types/types';




export const ProductsData = () => {
 const [jsonData, setJsonData] = useState<Spacecraft[]>([]);
 console.log(jsonData);
 useEffect(() => {
   const fetchProducts = async() =>{
    const url = "http://localhost:3000/spacecraft";
    const response = await fetch(url);
    const data = await response.json();
    setJsonData(data);
    
   }
   
      fetchProducts() 
      
    
 }, []);
 getDataJsonData(jsonData)
}



export function getDataJsonData(jsonData : Spacecraft[]){
  jsonData.map((items: Spacecraft ) =>{
    return(
    <h1>{items.spacecraft_name}</h1>
    );
  })
}


