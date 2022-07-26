import React, {useState} from "react";
import "./styles.css"
import Vector from "../img/Vector.svg"
import DropDown from "../img/DropDown.svg"
import DropDownList from "../DropDownList/DropDownList";
import LikeItems from "../LogoItemsBasket/LikeItems";
import { IProps } from "../DropDownList/DropDownList";
const props:IProps = {
   products: [
    {
        title:"Apple",
        body: [
            {
                title: "Iphone 3"
            },
            {
                title: "Iphone 3"
            },
            {
                title: "Iphone 3"
            }
        ]
    },
    {
        title:"Nokia",
        body: [
            {
                title: "Iphone 3"
            },
            {
                title: "Iphone 3"
            },
            {
                title: "Iphone 3"
            }
        ]
    }
   ]
}
const Header: React.FC = () => {
    const [navBar, setNavBar] = useState<boolean>(false);
    return(
        <div className="header">
            <div className="logo">QPICK</div>
            <div className="sections">
                <img src={Vector} className="telephone"/>
                <div className="nameSections">
                    Выбрать модель телефона
                </div>
                <img src={DropDown} className={navBar ? "DropDown_2" : "DropDown"}  onClick={() => setNavBar(!navBar)} />
                {
                    navBar && <div className="dropDownMenu">
                        <DropDownList products={props.products}/>
                    </div>
                }
            </div>
            <LikeItems urlFoto="Like" counter={1} marginLeft={"23.19em"}/>
            <LikeItems urlFoto="Basket" counter={1}/>
        </div>
    );
};

export default Header;