import React from "react";
import { Link } from "react-router-dom";
// import firstpic from "../assets/img/pic233.png";
import '../assets/layout.css';
import Layout from "./Layout";

function OurStory(){
    return(
        <Layout>
<div className="our_story_container">
<div className="our_story_upblock">
    <div className="our_story_text">
        <h2>Наша <span>История</span></h2>
        <p>Как и у любого другого самобытного места, у нас есть своя, особая история. Идея ресторана пришла основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана застрял в сотнях километров от ближайшего населенного
            пункта. Вдали от цивилизации и связи им пришлось навремя обустровать себе нехитрый быт, добывать и готовить себе еду.</p>
        <ul class="food_item">
            <li>93<br/>Напитки</li>
            <li>206<br/>Еда</li>
            <li>71<br/>Закуски</li>
        </ul>
    </div>
    < div className="our_story_pictures">
     
        <img className="pictures_1" src="..assets/img/233.png" alt=""/>
        <img className="pictures_2" src="..assets/img/2551.png" alt=""/>
        <img className="pictures_4" src="..assets/img/4301.png" alt=""/>
        <img className="pictures_3" src="..assets/img/designbox.png" alt=""/>
    </div>
</div>
</div>
</Layout>
);
};
export default OurStory;