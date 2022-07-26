import React from "react";
import "./styles.css";
import {IPrice} from "../../../types/index"
const OrangeComponent: React.FC<IPrice> = ({salePrice, price}) => {
    return(
        <div className="PaintedOver">
            <div className="PriceSale">{salePrice}руб</div>
        </div>
    )
}
export default OrangeComponent;