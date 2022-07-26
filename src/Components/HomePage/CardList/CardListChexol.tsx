import React from "react";
import CardItem from "../CardItem/CardItem";
import "./styles.css"
import {IProductChexol} from "../../../types/index";
const arr:IProductChexol[] = [
    {
        name: "Стеклянные",
        srcImg: "Phone_1"
    },
    {
        name: "Силиконовые",
        srcImg: "Phone_2"
    },
    {
        name: "Кожаные",
        srcImg: "Phone_3"
    }
] 
const CardListChexol: React.FC = () => {
    return(
        <div className="CardListChexol">
            {
                arr.map(el => 
                        <CardItem name={el.name} srcImg={el.srcImg} key={el.name}/>
                    )
            }
        </div>
    )
}
export default CardListChexol;