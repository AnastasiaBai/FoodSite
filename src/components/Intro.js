import React from "react";
import mask from'../assets/img/MaskGroup.png';

function Intro(){
    return(
        <div className="intro_blocks">
        <div className="intro_block">
            <img src={mask} alt="img1"/>
            <p>Магическая Атмосфера</p>
            <p>В нашем заведении царит магическая атмосфера наполненная вкусными ароматами</p>
        </div>
        <div className="intro_block">  <img src={mask} alt="img1"/>
            <p>Лучшее качество Еды</p>
            <p>Качество нашей Еды - отменное!
            </p>
        </div>
        <div className="intro_block">  <img src={mask} alt="img1"/>
            <p>Недорогая Еда</p>
            <p>Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!</p>
        </div>
    </div>
    );
}
export default Intro;