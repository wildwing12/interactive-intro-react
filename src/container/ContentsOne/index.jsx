import React from "react";
import {Section0, Section1, Section2, Section3} from "../../component/contentsOne/index";

const ContentsOne = () => {
    return (
        <>
            <Section0/>
            <Section1/>
            <Section2/>
            <Section3/>
        </>
    )
}

export default React.memo(ContentsOne);