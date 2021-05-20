import React from "react";

import './mainView.scss';
import Preview from "../preview";

const MainView = ({
                    picData,
                    onToggleNext,
                    onTogglePrev,
                    pictureIndex,
                    onToggleCurrentPicture,
                    saveCoordinatesSwipe,
                    handleSwipe
}) => {
    // console.log(pictureIndex, 'MainView')
    // console.log(picData, 'MainView')

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
                <div className="numberText">{id + 1} / {picData.length}</div>
                <div>{slide}</div>
            </div>
        );
    });

    return(
        <div className="mainContainer">
            <div className="container"
                 // onPointerDown={(e) => console.log('onPointerDown', e.clientX )}
                 onPointerDown={(e) => saveCoordinatesSwipe(e.clientX, e.clientY)}
                 // onPointerUp={(e) => console.log('onPointerUp', e.clientX )}>
                 onPointerUp={(e) => handleSwipe(e.clientX, e.clientY)}>
                {elements}
                <a className="prev" onClick={onTogglePrev}>❮</a>
                <a className="next" onClick={onToggleNext}>❯</a>
            </div>
            <Preview
                picData={picData}
                pictureIndex={pictureIndex}
                onToggleCurrentPicture={onToggleCurrentPicture}/>
        </div>
    );
};

export default MainView;