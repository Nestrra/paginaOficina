import React from 'react';
import LogoNav from '../../assets/recurso1.png'
import './navBar.css'
import { ImPlus } from "react-icons/im";

export const NavBar = () => {


    return <div className="containerNav">
        <div className="logo">
            <a href=""><img src={LogoNav} alt="Logo" /></a>
        </div>
        <div className='nav-links'>            <ul>
                <a href=""> <ImPlus size={12} color="#F4BF11" /> <li>Afiliados</li></a>
                <a href=""> <ImPlus size={12} color="#F4BF11" /> <li>Usuarios</li></a>
            </ul>
        </div>
    </div>;
};
