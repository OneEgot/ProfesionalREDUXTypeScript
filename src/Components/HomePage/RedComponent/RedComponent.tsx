import './styles.css'
import React from "react";
import {IPrice} from "../../../types/index"
const RedComponent: React.FC<IPrice> = ({price,  salePrice}) => {
    return(
        <div className="PaintedOver">
            <div className="PriceSale_2">{salePrice}руб</div>
        </div>
    );
}
export default RedComponent;