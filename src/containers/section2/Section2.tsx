import React from 'react';
import './section2.css'
import recurso12 from '../../assets/Recurso12.png'
import recurso6 from '../../assets/Recurso6.png'
import recurso7 from '../../assets/Recurso7.png'
import recurso11 from '../../assets/Recurso11.png'


export const Section2 = () => {
    return <div className="containerSe">

        <div className="  hh container-section">
            <div  >
                <img className='img-phone' src={recurso12} alt="" width='640'  />
            </div>
            <div>

                <div className='jjj'>
                    <div>
                        <img src={recurso6} alt="" />
                    </div>
                    <div className='texty' >
                        <h2>MAS INGRESOS</h2>
                        <p>Ya no pagues comisiones por viajes, tus ingresos son solo tuyos y recuerda, entre más viajes realices, más beneficios tendrás.</p>
                    </div>
                </div>

                <div className='jjj'>
                    <div >
                        <img src={recurso7} alt="" />
                    </div>
                    <div className='texty' >
                        <h2>MAS INGRESOS</h2>
                        <p>Somos una aplicación fácil de usar para que tu única preocupación sea conducir
                            ¡Y por el dinero! No te preocupes, que llegará inmediata y directamente a tu cuenta.</p>
                    </div>
                </div>
                <div className='jjj'>
                    <div>
                        <img src={recurso11} alt="" />
                    </div>
                    <div className='texty' >
                        <h2>MAS INGRESOS</h2>
                        <p>Nos importa que tu y tus usuarios puedan viajar tranquilos, es por esto 
                            que contamos con mecanismos de seguridad que te permiten ir tranquilo de un lugar a otro. </p>
                    </div>
                </div>
            </div>


        </div>


    </div>;
};
