import { ContactSection } from "../components/contactSection/ContactSection";
import { CardsSection } from "../components/cardSection/cardsSection";
import { Footer } from "../components/footer/footer";
import { HeaderHome } from "../components/header/header";

export function HomePage(){
    return(
        <>
        <HeaderHome/>
        <CardsSection/>
        <ContactSection/>
        <Footer/>
        </>

    )
}