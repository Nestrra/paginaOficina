
import recurso3 from '../../assets/Recurso3.png'
import recurso4 from '../../assets/Recurso4.png'
import recurso5 from '../../assets/Recurso5.png'
import './section.css'

export const Section = () => {
    return <div className="containerS " >

        <div className="section container-section" >

            <div className='section-column'>
                <img src={recurso3} alt="" />
                <h2>PLASS</h2>
                <p>PLASS nace para conectar afiliados y usuarios que tienen necesidad de moverse de un lugar a otro pagando tarifas asequibles y sin que los afiliados paguen comisiones por viaje.</p>
            </div>
            <div className='section-column'>
                <img src={recurso4} alt="" />
                <h2>USUARIO</h2>
                <p>Nuestros excelentes usuarios son personas que desean trasladarse de un lugar a otro, con tarifas asequibles y con seguridad garantizada.</p>
            </div>
            <div className='section-column'>
                <img src={recurso5} alt="" />
                <h2>AFILIADO</h2>
                <p>Son conductores, que no pagan comisiones por viaje, comprometidos con sus usuarios para brindarles el mejor y más cómodo viaje.</p>
            </div>
        </div>
    </div>
};
