import React from "react";

import './mainView.scss';

const MainView = ({ picData, onToggleNext, onTogglePrev, pictureIndex }) => {
    console.log(pictureIndex, 'MainView')
    console.log(picData, 'MainView')

    const elements = picData.map((item) => {
        const { slide, id, display, ...itemProps } = item;

        let classNames = 'mySlides';
        if(display){
            classNames += ' isShow';
        }else {
            classNames += ' isHidden';
        }

        return (
            <div className={classNames}>
                <div className="numberText">`{id + 1} / {picData.length}`</div>
                <div>{slide}</div>
            </div>
        );
    });

    return(
        <div>
            <p>MainView!!!</p>
            <div className="container">
                {elements}
            </div>
            <a className="prev" onClick={onTogglePrev}>❮</a>
            <a className="next" onClick={onToggleNext}>❯</a>
        </div>
    );
};

export default MainView;