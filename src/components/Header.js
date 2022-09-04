import React from "react";
import Logo  from "./Logo";
import '../assets/header.css';
import Nav from './Nav';
import Button from "./Button";
import Intro from './Intro';
import greyline from '../assets/img/Rectangle27.png';


function Header(){
    return(
<>  
 <header className="header">
  <div className="header_menu">
 <Logo/>
 <Nav/>
 <Button text="ЗАКАЗАТЬ"/>               
  </div>
                <div className="header_text">
                    <p> Добро пожаловать в</p>
                    <p> Наш ресторан</p>
                    <p><img src={greyline} alt="rectangle27"/>ДОМ ЛУЧШЕЙ ЕДЫ<img src={greyline} alt="rectangle27"/></p>
               
            <Button text="VIEW MENU"/>
                </div>
                <Intro/>
            </header>
 </>

    );
}
export default Header;