import './css/main.css'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ProductContextProvider } from './context/ProductsContext'
import { UseShoppingCartprovider } from './context/cartContext'
ReactDOM.createRoot(document.getElementById('root')!).render(
   <UseShoppingCartprovider>
   <ProductContextProvider>
   <App/>
   </ProductContextProvider>
   </UseShoppingCartprovider>
)
