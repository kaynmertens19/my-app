import { useContext } from 'react'
import { Spacecraft } from '../../types/types'
import { ProductContext } from '../../context/ProductsContext'
import '../../css/productsGrid.css'
import { UseShoppingCart } from '../../context/cartContext'



export function ProductsGrid() {
  const { products, setProducts, cart, setCart } = useContext(ProductContext)

  console.log(products)

  return (
    <>
      <div>
        <h1 className="tittleProductsPage">Our New products are here!</h1>
        <p className="subtitleProductsPage">
          Welcome to your first experience arround the universe. Please select
          your future spaceship.
        </p>
      </div>
      <div className="container">

        {products && products.map(({id, img, price, name}: Spacecraft) => {
          console.log(id)
          const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = UseShoppingCart()
          const quantity = getItemQuantity(id)
          return (
            <div className="cage">
              <div className="imgCage">
                <img className="imgSpaceship" src={img} alt="hey" />
              </div>
              <div className="informationCage">
                <div className="infoBox">
                  <h2 className="ProductTittle">{name}</h2>
                  <p className="ProductPrice">{price + '€'}</p>
                </div>
                <div className="buttonBox">
                  
                  
                  {quantity === 0 ? (
                    <button className='ProductAdd' onClick={() => increaseCartQuantity(id)}>+ Add to cart</button>
                  ) : (
                    <div className="flex-d">
                      <div className='flex-b'>
                      <button className='buttonMinus'  onClick={() => decreaseCartQuantity(id)}>-</button>
                      <div>
                     <p className='cartText'><span>{quantity}</span> in cart</p> 
                      </div>
                      <button className='buttonPlus'  onClick={() => increaseCartQuantity(id)}>+</button>
                      </div>
                      <div className="flex-d">
                        <button className='Remove'  onClick={() => removeFromCart(id)}>Remove</button>
                      </div>
                    </div>
                    
                  )}


                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
