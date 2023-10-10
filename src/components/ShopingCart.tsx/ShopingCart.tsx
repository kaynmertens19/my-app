
import { Offcanvas } from "react-bootstrap"
import { UseShoppingCart } from "../../context/cartContext"

type shopingCartprops= {
   isOpen: boolean 
}
export function ShopingCart({isOpen}: shopingCartprops){
const {closeCart} = UseShoppingCart()

    return(
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">

    </Offcanvas>
    )
}