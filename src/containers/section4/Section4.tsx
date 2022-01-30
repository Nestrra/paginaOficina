import React from 'react';
import './section4.css'
import recurso14 from '../../assets/Recurso14.png'
import recurso15 from '../../assets/Recurso15.png'



export const Section4 = () => {
    return <div>

        <div className="containerRe  container-section" >

            <h2>REQUISITOS PARA FORMAR PARTE DE <span>PLASS </span>
                COMO CONDUCTOR:</h2>

            <div className="columnRe" >
                <div className="poposd" >
                    <img src={recurso14} alt="" width='300' />
                    <h3>CON CARRO PARTICULAR</h3>

                    <p>Sé un Afiliado PLASS, solo necesitas tu carro particular,
                        llenar el formulario de inscripción y adjuntar los documentos que te soliciten. Una vez hayas  cumplidos todos los requisitos, en un tiempo no mayor a 72 horas, recibirás un código
                        para ingresar a la aplicación y estaremos muy felices de darte la bienvenida a nuestra familia PLASS.</p>
                    <a href="">mas</a>
                </div>
                <div className="poposd" >
                    <img src={recurso15} alt="" width='300' />
                    <h3>CON TAXI</h3>

                    <p>Si eres taxista también tienes la oportunidad de ser parte de nuestros Afiliados PLASS, como sabemos que los gastos de conducir un vehículo de servicio público son mayores te ofrecemos una tarifa especial descontándote el 75% del valor que pagan los vehículos particulares en tu pago mensual.

                        ¿Qué debes hacer? Fácil llenar el formulario de inscripción,
                        adjuntar los documentos en menos de 72 horas,
                        recibe tu código para ingresar a la app y listo, ya eres parte de nuestra familia PLASS.</p>
                    <a href="">mas</a>
                </div>

            </div>

        </div>


    </div>;
};
