import { Nav } from "./nav"


export function HeaderHome() {
  return (
    <>
    <header>
        <Nav/>
      <div className="background-div"> </div>

      <div className="titleSection">
        <h1 className="tittle">Astralitte</h1>
        <h3 className="subTittle">Become an explorer of the infinity</h3>
      </div>
    </header>
    </>
  )
}
