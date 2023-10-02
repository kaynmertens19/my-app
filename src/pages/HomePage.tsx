import { ContactSection } from "../components/ContactSection";
import { CardsSection } from "../components/cardsSection";
import { Footer } from "../components/footer";
import { HeaderHome } from "../components/header";

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