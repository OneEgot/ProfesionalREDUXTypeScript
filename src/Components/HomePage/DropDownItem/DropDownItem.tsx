import React from "react";
export interface IBody{
    title: string;
}

const DropDownItem: React.FC<IBody> = ({title}) => {
    return(
        <div>
            <div className="AppleProducts">
                <div className="ProductName">{title}</div>
            </div>
        </div>
    )
}
export default DropDownItem;