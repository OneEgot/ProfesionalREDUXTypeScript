import React from "react";
import Header from "../Components/HomePage/Header/Header";
import SaleComponent from "../Components/HomePage/PngSaleComponent/SaleComponent";
import OutLineText from "../Components/HomePage/OutLineText/OutLineText";
import CardListChexol from "../Components/HomePage/CardList/CardListChexol";
import CardAirPodsList from "../Components/HomePage/CardAirPodsList/CardAirPodsList";
const HomePage: React.FC = () => {
    return (
        <div className="home">
            <Header/>
            <SaleComponent/>
            <OutLineText>Чехлы</OutLineText>
            <CardListChexol/>
            <OutLineText>Наушники</OutLineText>
            <CardAirPodsList/>
        </div>
    )
}
export default HomePage;