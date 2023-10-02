import '../css/header.css'
import astraliteLogo from '../assets/astraliteLogo.svg'
import searchImg from '../assets/search.svg'
import logInImg from '../assets/logInImg.svg'



export function Nav() {
    const modalSesion = document.querySelector('.modalSesion');
    const openModalSesion = () => {
        modalSesion?.classList.add('modalSesion--show');
    }

    const closeModalSesion = () => {
        modalSesion?.classList.remove('modalSesion--show');
    }



  return (
    
      <>
       <nav>
        <img className="logo" src={astraliteLogo} alt="logo astralite" />
    <ul className='flex-row'>
        <li>Inicio</li>
        <li>Noticias</li>
        <li>Recursos</li>
        <li> Sobre nosotros</li>
        <li>Transparencia</li>
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

      <button className="buttonSearch"><p className="searchText">Search</p><img className='searchImg' src={searchImg} alt="" /></button>
      </nav>
      </>
  )
}