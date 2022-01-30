import { NavBar } from "../navBar/NavBar";
import './header.css'
import { Button } from '../button/Button';


export const Header = () => {
  return <div className="header ">

    <NavBar />
    <div>
    <h1 className="header-title container-header">ÚNETE A LA PRIMERA APLICACIÓN CREADA PARA CONDUCTORES COMO TÚ</h1>
    <p className="header-subTitle container-header">Con un solo pago mensual podrás disfrutar de la aplicación sin comisión en tus viajes.</p>

    </div>
    
    <Button />
  </div>;
};
