
import decoration from '../../assets/svg/infoDecoration.svg'
import '../../css/Footer.css'
import logoI from '../../assets/instagramLogo.png'
import logoF from '../../assets/FacebookLogo.png'
import logoT from '../../assets/TwitterLogo.png'
export function Footer() {

  return (
    <>
      <footer className="footer">
        <div>
          <div className="flex_column">
            <div className="FooterInfo">
              <img className="cardDecoration" src={decoration} alt="a" />
              <h3>Our Contact: 676 64 21 32</h3>
            </div>
            <div className="FooterInfo">
              <img className="cardDecoration" src={decoration} alt="a" />
              <h3>astralittedev@gmail.com</h3>
            </div>
            <div className="FooterInfo">
              <img className="cardDecoration" src={decoration} alt="a" />
              <h3>Calle la chalana 4º</h3>
            </div>
            <div className="blackScreen"></div>
          </div>
          <div className="RSS">
            <a href=""><img className="ImgRSS" src={logoI} alt="instagramLogo" /></a>
            <a href=""><img className="ImgRSS" src={logoF} alt="FacebookLogo" /></a>
            <a href=""><img className="ImgRSS" src={logoT} alt="TwitterLogo" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
