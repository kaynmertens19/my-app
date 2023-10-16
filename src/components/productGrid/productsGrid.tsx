import { useContext } from 'react'
import { Spacecraft } from '../../types/types'
import { ProductContext } from '../../context/ProductsContext'
import '../../css/productsGrid.css'
import { UseShoppingCart } from '../../context/cartContext'



export function ProductsGrid() {
  const { products } = useContext(ProductContext)

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
          const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = UseShoppingCart()
          const quantity = getItemQuantity(id)
          return (
            <div className="cage" key={id}>
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
                    <div className="flex-di">
                      <div className='flex-bi'>
                      <button className='buttonMinus'  onClick={() => decreaseCartQuantity(id)}>-</button>
                      <div>
                     <p className='cartText'><span>{quantity}</span></p> 
                      </div>
                      <button className='buttonPlus'  onClick={() => increaseCartQuantity(id)}>+</button>
                      </div>
                      <div className="flex-di">
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
