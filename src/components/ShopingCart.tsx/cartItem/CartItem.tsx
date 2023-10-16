import '../../../css/cartcss.css'
import { Stack, Button } from "react-bootstrap"
import { fetchAndRender } from "./hookCart/fetchAndRender";
import { UseShoppingCart } from '../../../context/cartContext';
type CartItemProps = {
    id: number,
    quantity: number,
}



export function CartItem({id, quantity} : CartItemProps){

const {removeFromCart} = UseShoppingCart()
const chancho = fetchAndRender()
const item = chancho.find((item) => item.id === id)
if (item == null) return null



 return(
    <Stack direction="horizontal" gap={2}>
        <img src={item.img} style={{width:"125px", height:"75px", objectFit:"cover",}} />

        <div className="me-auto">
            <div>
                {item.name}{quantity > 1 && <span style={{fontSize: ".65rem"}}  className="text-muted">x{quantity}</span>}
            </div>
            <div className='text-muted' style={{fontSize: ".75rem"}}>{item.price}€</div>
        </div>
        <div>{item.price * quantity}€</div>
        <Button variant='outline-danger' size='sm' onClick={() =>
        removeFromCart(item.id)}>&times;</Button>
    </Stack>
 )


}