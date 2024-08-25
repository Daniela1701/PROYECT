import user1 from './imagenes/t_user_1.jpg'
import user2 from './imagenes/t_user_2.jpg'
import user3 from './imagenes/t_user_3.jpg'

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
        <div className="figure">
            <figcaption> @Gian_Marco</figcaption>
            <div class="iconos">
             <img src={user2} />
            </div>     
            <p className="texto">
               "Recomiendo encarecidamente a GW TRAVEL 
                para cualquier viaje. Organizamos nuestras vacaciones 
                familiares a Oxapampa con ellos y fue una experiencia 
                sin estrés. Los boletos, el alojamiento y las reservas de 
                restaurantes estaban perfectamente coordinados. Los niños 
                se lo pasaron de maravilla y nosotros también."
            </p>
                <p className="opinion"><strong>¡Gracias por todo!</strong></p>
        </div>
        <div className="figure">
            <figcaption> @Kimberly_Garcia</figcaption>
            <div class="iconos">
             <img src={user3} />
            </div>     
            <p className="texto">
                "El servicio al cliente es excepcional. Me ayudaron a 
                reservar un viaje de última hora a Huancayo para
                visitar a mi familia y no estar corriendo para organizar 
                mi viaje, correr es a lo que estoy acostumbrada, pero no 
                en este tipo de situaciones XD asi que se encargaron de 
                todos los detalles,incluyendo traslados. La profesionalidad 
                y la amabilidad de todo el equipo hicieron que todo el
                proceso fuera sencillo y placentero."
            </p>
                <p className="opinion"><strong>Los recomiendo al 100%</strong></p>
        </div>
        </div>

      </>
    )
  }
  
  export default testimonios_titulo