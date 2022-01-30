import React from 'react';
import imgButton from '../../assets/logoNav.png'
import './button.css'

export const Button = () => {
  return <div className="container-btn">

            <a href="https://play.google.com/store/apps/details?id=com.plassdriver" target="_blank"> ÚNETE A <img src={imgButton} alt="btn-logo" height="25"  /></a>

        </div>;
};
