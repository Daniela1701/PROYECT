import oxapampa2 from '../imagenes/oxapampa2.jpg'
import iquitos2 from '../imagenes/iquitos2.jpg'
import chanchamayo2 from '../imagenes/chanchamayo2.jpg'
function Selva2() {
    return (
    <>
    <div className="section">
        <div className="figure">
            <div class="portadas">
                <img src={oxapampa2} />
            </div> 
                <div class="lugares">
                    <figcaption>
                    Oxapampa,Pozuzo y Villa Rica  
                    </figcaption><br />
                    <div class="dias">
                      <p>
                    4D/3N
                      </p>
                      </div>
                    <h3 class="precio">S/.295</h3>
                    <div class="paquete">
                        <button type="button" onclick="paqute1()">
                            Ver paquete
                        </button> 
                    </div>   
                </div>

        </div>
        <div className="figure">
            <div class="portadas">
            <img src={iquitos2} />
            </div>
                <div class="lugares">
                    <figcaption>
                    Iquitos Amazonas  
                    </figcaption><br />
                    <div class="dias">
                       <p>
                       5D/4N
                       </p>
                    </div>
                    <h3 class="precio">S/.670</h3>
                    <div class="paquete"  >
                        <button type="button" onclick="paqute2()">
                            Ver paquete
                        </button> 
                    </div>
                </div>
        </div>
        <div className="figure">
                <div class="portadas">
                <img src={chanchamayo2} />
                </div>
                <div class="lugares">
                    <figcaption>
                        Chanchamayo, Oxapampa,Pozuzo y Villa Rica 
                    </figcaption>
                    <div class="dias">
                        <p>
                         6D/5N
                        </p>
                        </div>
                    <h3 class="precio">S/.595</h3>
                    <div class="paquete">
                        <button type="button" onclick="paqute3()">
                            Ver paquete
                        </button> 
                    </div>
                </div>
        </div>
    </div>

    </>
      )
    }
    
  export default Selva2;