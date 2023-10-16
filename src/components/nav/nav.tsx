import '../../css/header.css'
import astraliteLogo from '../../assets/svg/astraliteLogo.svg'
import searchImg from '../../assets/svg/search.svg'
import logInImg from '../../assets/svg/logInImg.svg'
import { Link } from 'react-router-dom'
import { UseShoppingCart } from '../../context/cartContext'



export function Nav() {
    const modalSesion = document.querySelector('.modalSesion');
    const openModalSesion = () => {
        modalSesion?.classList.add('modalSesion--show');
    }

    const closeModalSesion = () => {
        modalSesion?.classList.remove('modalSesion--show');
    }


    const {openCart, closeCart, cartQuantity } = UseShoppingCart()


  return (
    
      <>
       <nav>
        <img className="logo" src={astraliteLogo} alt="logo astralite" />

        <ul className='ulLink'>
        <li><Link className='Link' to="/">Home</Link></li>l                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          <li><Link className='Link' to="/products">Products</Link></li>
          
        </ul>

      <div onClick={openModalSesion } className="openModalSesion">
        <p className='LogIntext'>Inicia Sesion</p>
        <img className='LogInImg' src={logInImg} alt="Log In img" />
      </div>

      {/* Init modal section */}
      <section className="modalSesion ">
        <div className="modal__containerSesion">
          <div className="sesion_flexed"></div>
          <a onClick={closeModalSesion} href="#" className="modal__closeSesion"></a>
          <div className="sesion_carousel_modal"></div>
        </div>
      </section>
      {/* End modal section */}

      {cartQuantity > 0 &&( <button  className='roundedButton' onClick={openCart}>
        
          <div className='rounded-dot'>{cartQuantity}</div>
       
      </button>
       )}
      </nav>
      </>
  )
}