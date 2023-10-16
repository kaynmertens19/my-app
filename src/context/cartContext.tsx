import {
  createContext,
  useState,
  useContext,
} from 'react'
import { ShopingCart } from '../components/ShopingCart.tsx/ShopingCart'


type ShopingCartProviderProps = {
  children: React.ReactNode
}

type ShopingContextCart = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: cartItem[]
}

type cartItem = {
  id: number
  quantity: number
}
const ShoppingContextCart = createContext({} as ShopingContextCart)

export function UseShoppingCart() {
  return useContext(ShoppingContextCart)
}

export function UseShoppingCartprovider({
  children,
}: ShopingCartProviderProps) {
  const [cartItems, setCartItems] = useState<cartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

const  cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

const openCart = () => setIsOpen(true)
const closeCart = () => setIsOpen(false)



function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
}
function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
        if (currItems.find(item => item.id === id) == null){
            return [...currItems,{id, quantity: 1}]
        } else{
        return currItems.map(item => {
            if (item.id === id){
                return {...item, quantity: item.quantity + 1}
            } else {
                return item
            }
        }) 
        }
    })
}

function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
        if (currItems.find(item => item.id === id)?.quantity == 1){
            return currItems.filter(item => item.id !== id)
        } else{
        return currItems.map(item => {
            if (item.id === id){
                return {...item, quantity: item.quantity - 1}
            } else {
                return item
            }
        }) 
        }
    })
}

function removeFromCart(id: number){
    setCartItems(currItems =>{
        return currItems.filter(item => item.id !== id)
    })
}


  return (
    <ShoppingContextCart.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart}}>
      {children}
      <ShopingCart isOpen={isOpen}/>
    </ShoppingContextCart.Provider>
  )
}
