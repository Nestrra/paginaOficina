import React from 'react';
import './section3.css'
import logoPLass from '../../assets/logoNav.png'
import { Button } from '../button/Button';
import { ImPlus } from 'react-icons/im';

export const Section3 = () => {
    return <div className="section3">

        <h2>FORMA PARTE DE LA COMUNIDAD <span><img src={logoPLass} alt="Logo" width='190' /></span> </h2>
        <div className="gggg">
            <p><span><ImPlus size={12} color="#F4BF11" /></span>BENEFICIOS</p>
            <p><span><ImPlus size={12} color="#F4BF11" /></span>GANANCIAS</p>
        </div>

        <Button />

    </div>;
};
