import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProductsPage } from "../pages/ProductsPage";




export function RoutesPaths(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<ProductsPage/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}