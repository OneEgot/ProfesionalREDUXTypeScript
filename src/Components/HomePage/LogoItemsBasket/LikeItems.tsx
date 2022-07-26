import React, { FC } from "react";
import "./styles.css";

interface IBusket{
    urlFoto?: string;
    counter?: number;
    marginLeft?:string
}
const LikeItems:FC<IBusket> = ({urlFoto, counter, marginLeft}) => {
    return(
        <div className="LikeItems" style={{"marginLeft": marginLeft }}>
            <img src={require(`../img/${urlFoto}.svg`)} alt="logo" className="Like"/>
            {
                counter !== 0 ? <div className="BeatifulItem">
                    <div className="counterLike">{counter}</div>
                </div>
                : <div></div>
            }
        </div>
    );
}
export default LikeItems;