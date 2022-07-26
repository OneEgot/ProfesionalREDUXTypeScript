import React from "react";
import {IProductChexol} from "../../../types/index";
import "./styles.css"
const CardItem:React.FC<IProductChexol> = ({name, srcImg}) => {
    return(
        <div className="ProductCard">
            <img src={require(`../CardList/CardListImg/${srcImg}.svg`)} className="photo"/>
            <div className="title">{name}</div>
        </div>
    )
}
export default CardItem;