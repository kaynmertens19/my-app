import '../css/contact.css'
export function ContactSection() {
  return (
    <>
      <div className="ContactSection">
        <div className="titleSection">
          <h1 className="tittle">Astralitte</h1>
          <h3 className="subTittle">Tell us your recent adventure</h3>
        </div>

        <div className="FormContactDiv">
            <form className="FormContact" action="https://formsubmit.co/astralittedev@gmail.com" method="post">
                <input className="TextForm" type="text" id="Username" name="Username" placeholder="Username"/>
                <textarea className="TextAreaForm" name="Comentario" placeholder="Tell Us" rows={10} cols={40}></textarea>
                <input type="hidden" name="_next" value="localhost:5173"></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input className="SubmitForm" type="submit" value="Enviar"></input>
            
            </form>
        </div>
      </div>
    </>
  )
}
