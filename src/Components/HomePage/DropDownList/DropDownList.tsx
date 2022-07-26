import React, { FC, useState } from "react";
import DropDown from "../img/DropDown.svg";
import DropDownItem, {IBody} from "../DropDownItem/DropDownItem"
export interface IProduct{
    title:string;
    body: IBody[];
}
export interface IProps{
    products: IProduct[];
}
const DropDownList:FC<IProps> = ({products}) => {
    const [apple, setApple] = useState<boolean>(false);
    return(
        <div className="BlockCategori">
            {
                products.map(el => 
                <div className="CategoriName"> 
                    {el.title}
                    <img src={DropDown} className={apple ? "DropUl_2" : "DropUl"} onClick={() => setApple(!apple)}/>
                    {
                        el.body.map(elem => 
                            <DropDownItem title={elem.title}/>
                            )
                    }
                </div>
                )
            }
        </div>
    )
}
export default DropDownList;