import React from "react";
import "./styles.css";
import Sale from "./img/Sale.svg"
const SaleComponent: React.FC = () => {
    return(
        <div className={"sale"}>
            <div className={"AccessualProduct"}>
               <div className={"text"}>
                    Аксессуары для 
                    Iphone 13 Pro Max
                </div>
            </div>
            <img src={Sale} alt="Sale" className={"Foto"}/>
        </div>
    )
}
export default SaleComponent;