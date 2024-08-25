import { Fragment } from "react"
import Testimonios_coments from "./componentes/testimonios_coments.jsx"
import Testimonios_user from "./componentes/testimonios_user.jsx"


function Testimonios() {
  
  return (
    <>
          <Testimonios_user/>
          <Testimonios_coments/>
    </>
  )
}

export default Testimonios;
