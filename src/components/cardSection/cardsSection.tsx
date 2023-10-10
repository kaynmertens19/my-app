import '../../css/cards.css'
import decoration from '../../assets/svg/infoDecoration.svg'
import { Link } from 'react-router-dom'

export function CardsSection(){

    function LinkToProducts(){
        return(
            <Link to="/products"></Link>
        )
    }

    return(
        <section className="cardsSection">
            <div onClick={LinkToProducts} className="cardCont">
                <div className="card1"></div>
                <div className="cardInfo">
                    <img className="cardDecoration" src={decoration} alt="a" />
                    <h3>Calipso 03</h3>
                </div>
            </div>

            <div className="cardCont">
                <div className="card2"></div>
                <div className="cardInfo">
                    <img className="cardDecoration" src={decoration} alt="a" />
                    <h3>The Mantis</h3>
                </div>
            </div>

            <div className="cardCont">
                <div className="card3"></div>
                <div className="cardInfo">
                    <img className="cardDecoration" src={decoration} alt="a" />
                    <h3>Sun project</h3>
                </div>
            </div>

            <div className="cardCont">
                <div className="card4"></div>
                <div className="cardInfo">
                    <img className="cardDecoration" src={decoration} alt="a" />
                    <h3>New project </h3>
                </div>
            </div>
        </section>
    )
}