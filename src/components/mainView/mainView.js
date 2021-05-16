import React from "react";

import './mainView.scss';

const MainView = ({ picData, onToggleNext, onTogglePrev, pictureIndex }) => {
    console.log(pictureIndex, 'MainView')
    console.log(picData, 'MainView')

    const elements = picData.map((item) => {
        const { src, id, display, ...itemProps } = item;

        let classNames = 'mySlides';
        if(display){
            classNames += ' isShow';
        }else {
            classNames += ' isHidden';
        }

        return (
            // <div key={pictureIndex} className={classNames}>
            <div className={classNames}>
                <div className="numberText">`{id + 1} / {picData.length}`</div>
                {/*<img src={src} className="view" alt={id} onClick={() => console.log(id +1)}/>*/}
                <div>{src}</div>
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