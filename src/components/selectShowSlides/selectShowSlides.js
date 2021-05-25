import React from "react";

import './selectShowSlides.scss';

const SelectShowSlides = ({optionData, amountShowSlides, changeAmountShowSlides}) => {

    const options = optionData.map((item) => {
        const { id, label, defaultSelectedOption } = item;

        return (
            <option value={id} selected={defaultSelectedOption}>
                {label}
            </option>
        );
    });

    return(
        <div className="selectShowSlidesBlock">
            <select
                name="select"
                className="selectBlock"
                onChange={changeAmountShowSlides}>
                {options}
            </select>
        </div>
    );
};

export default SelectShowSlides;