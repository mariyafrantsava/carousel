import React from "react";

import './selectShowSlides.scss';

const SelectShowSlides = ({amountShowSlides, changeAmountShowSlides}) => {

    const optionsData = [
        { id: 0, label: 'Amount slides: 1', defaultSelectedOption: true},
        { id: 1, label: 'Amount slides: 2', defaultSelectedOption: false},
        { id: 2, label: 'Amount slides: 3', defaultSelectedOption: false}
    ]

    const options = optionsData.map((item) => {
        const { id, label, defaultSelectedOption } = item;

        return (
            <option value={`value${id}`} selected={defaultSelectedOption}>
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