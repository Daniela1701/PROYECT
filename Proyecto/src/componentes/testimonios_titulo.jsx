import user1 from './imagenes/t_user_1.jpg'

function testimonios_titulo() {
    return (
    <>
        <h1>BLABLABLA</h1>
        <div className='section'>
            <div className="figure">
                <figcaption> @Sonne_peruvian24</figcaption>
                   <div class="iconos">
                       <img src={user1} />
                   </div>     
                    <p className="texto">
                     "Tuve un viaje maravilloso a Trujillo. Desde la asesoría 
                      inicial hasta el regreso a casa, todo fue perfecto. Me
                      proporcionaron una guía muy útil con información sobre 
                      cultura, transporte y lugares imprescindibles. Sin duda, 
                      volveré a contar con ellos para un futuro viaje con mi 
                      enamorada."
                    </p>
                    <p className="opinion"><strong>Excelente trabajo</strong></p>
            </div>
        </div>

    </>
    )
  }
  
  export default testimonios_titulo