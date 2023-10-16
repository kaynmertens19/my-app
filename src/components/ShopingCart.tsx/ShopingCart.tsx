import { Offcanvas, OffcanvasBody, OffcanvasTitle, Stack, OffcanvasHeader } from "react-bootstrap";
import { UseShoppingCart } from "../../context/cartContext";
import { CartItem } from "./cartItem/CartItem";
import { fetchAndRender } from "./cartItem/hookCart/fetchAndRender";
type shopingCartprops = {
  isOpen: boolean;
};


export function ShopingCart({ isOpen }: shopingCartprops) {
  const { closeCart, cartItems } = UseShoppingCart();
  console.log(cartItems);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Your Cart</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </OffcanvasBody>
    </Offcanvas>
  );
}