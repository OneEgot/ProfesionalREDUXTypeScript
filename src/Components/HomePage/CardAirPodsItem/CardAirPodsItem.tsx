import React, { useState } from "react";
import {IAirPods} from "../../../types/index";
import Like from "./Img/Like.svg";
import Raiting from "./Img/Raiting.svg";
import LikeBlack from "./Img/LikeBlack.svg"
import "./styles.css";
import OrangeComponent from "../OrangeComponent/OrangeComponent";
import RedComponent from "../RedComponent/RedComponent";

const CardAirPodsList: React.FC<IAirPods> = ({nameItem, flagLike, srcImg, priceItem, raiting, flagSale, redSale}) => {
    const [mark, setMark] = useState<boolean>(flagLike) 
    return(
        <div className="CardProduct">
            <div className="upText">
                <img src={!mark ? Like : LikeBlack} className="Like" onClick={() => setMark(!mark)}/> 
                <img src={require(`./Img/${srcImg}`)} className="Image"/> 
            </div>
            <div className="Text">
                <div className="textItem">{nameItem}</div>
                <div className={flagSale ? "Price" : "Price_2"}>{priceItem.price} руб</div>
                {
                    flagSale  && <OrangeComponent price={priceItem.price} salePrice={priceItem.salePrice}/>
                }
                {
                    redSale && <RedComponent price={priceItem.price} salePrice={priceItem.salePrice}/>
                }
            </div>
            <div className="raiting">
                <img src={Raiting} className="imgRaiting"/>
                <div className="Mark">{raiting}</div>
            </div>
        </div>
    )
}

export default CardAirPodsList;