import React from "react";
import "./styles.css";
import CardAirPodsItem from "../CardAirPodsItem/CardAirPodsItem";
import { IAirPods } from "../../../types";
const arr:IAirPods[] = [
    {
      flagLike: false,
      srcImg:"Image.svg",
      flagSale:true,
      nameItem: "Apple BYZ S852I",
      priceItem:{
        price:1280,
        salePrice:3200,
        procentPrice:20
      },
      raiting:4.7,
      redSale:false
    },
    {
      flagLike: false,
      srcImg:"Image.svg",
      flagSale:false,
      nameItem: "Apple BYZ S852I",
      priceItem:{
        price:1280,
        salePrice:3200,
        procentPrice:20
      },
      raiting:4.7,
      redSale:true
    },
    {
      flagLike: false,
      srcImg:"Image.svg",
      flagSale:false,
      nameItem: "Apple BYZ S852I",
      priceItem:{
        price:1280,
        salePrice:3200,
        procentPrice:20
      },
      raiting:4.7,
      redSale:true
    },
  ]
const CardAirPodsList: React.FC = () => {
    return(
        <div className={"CardAirPodsList"}>
            {
                arr.map(el => 
                    <CardAirPodsItem 
                        nameItem={el.nameItem}
                        srcImg={el.srcImg}
                        flagSale={el.flagSale}
                        flagLike={el.flagLike}
                        priceItem={el.priceItem}
                        raiting={el.raiting}
                        redSale={el.redSale}
                    />
                    )
            }
        </div>
    )
}
export default CardAirPodsList;