import React, { FC } from "react";
import "./styles.css"
export interface IText {
    children?: React.ReactChild
}
const OutLineText:FC<IText> = ({children}) => {
    return(
        <div className="name">
            {children}
        </div>
    )
}

export default OutLineText;