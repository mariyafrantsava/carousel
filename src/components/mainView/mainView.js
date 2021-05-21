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

        // let classNames = 'mySlides';
        // if(display){
        //     classNames += ' isShow';
        // }else {
        //     classNames += ' isHidden';
        // }

        return (
            // <div className={classNames}>
            <div className="slide">
                {/*<div className="numberText">{id + 1} / {picData.length}</div>*/}
                {slide}
            </div>
        );
    });

    return(
        <div className="mainContainer">
            {/*<div className="container"*/}
            {/*     onPointerDown={(e) => saveCoordinatesSwipe(e.clientX, e.clientY)}*/}
            {/*     onPointerUp={(e) => handleSwipe(e.clientX, e.clientY)}>*/}
            {/*    {elements}*/}
            {/*    <a className="prev" onClick={onTogglePrev}>❮</a>*/}
            {/*    <a className="next" onClick={onToggleNext}>❯</a>*/}
            {/*</div>*/}


            <div className="carousel">
                <div className="gallery">
                    <div className="slides">
                        {elements}
                    </div>
                </div>
            </div>


            <Preview
                picData={picData}
                pictureIndex={pictureIndex}
                onToggleCurrentPicture={onToggleCurrentPicture}/>
        </div>
    );
};

export default MainView;