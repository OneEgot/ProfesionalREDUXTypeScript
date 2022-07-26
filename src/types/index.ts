import React from "react";

export interface IProductChexol{
    name: string;
    srcImg: string
}
export interface IPrice{
    price:React.ReactNode;
    salePrice?:number;
    procentPrice?:number;
}
export interface IAirPods{
    flagLike: boolean;
    srcImg:string;
    flagSale:boolean
    nameItem: React.ReactNode;
    priceItem:IPrice;
    raiting:number;
    redSale:boolean;
}