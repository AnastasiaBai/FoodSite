import React from "react";
import { Link, NavLink } from "react-router-dom";
import cart from '../assets/img/cart.png';
import line from '../assets/img/Line1.png';
import phone from '../assets/img/phone.png';
import Image from "./Image";

const NAV_LINK =[
    {name:"Главная", to:"/",  },
    {name:" О Нас ", to:"/about", },
    {name:"Меню", to:"/menu",  },
    {name:"Бронь", to:"/reserve" , },
]


function Nav(){
    return(
<> 
 <nav className="header_navigation">
                        <ul className="header_navigation_list">
{NAV_LINK.map(
    (link) => (
        <li key={link.name}>
            <NavLink to={link.to}>
           {link.name}
            </NavLink>
        </li>  
    )
)}

<li><a href="#"></a> </li>
<li><a href="#"></a> </li>
<li><a href="#"></a> </li>
<li><a href="#"></a> </li>
  <li>
        <a href="#">  <Image src={require('../assets/img/cart.png')} alt="bucket"/></a>
 </li>
    <li><img src={line} alt="line"/></li>
             <ul className="connect_with">
                 <li>
                 <Image src={require('../assets/img/phone.png')} alt="phone"/><span>+999-888-76-54</span>
                   </li>
                    <li>Свяжитесь с нами для бронирования
                     </li>
                         </ul>
                         </ul>
                    </nav>
                    </>
    );
}
 export default Nav;