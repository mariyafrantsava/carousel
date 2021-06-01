import React from "react";

import './mainView.scss';
import Preview from "../preview";
import Slide from "../slide";

const MainView = ({
                    picData,
                    onToggleNext,
                    onTogglePrev,
                    pictureIndex,
                    onToggleCurrentPicture,
                    saveCoordinatesSwipe,
                    handleSwipe,
                    positionFrame,
                    amountShowSlides,
                    movePositionFrame,
                    infoSwipeUp
}) => {

    let style;
    let galleryStyle;

    if(amountShowSlides === 1){
        galleryStyle = {
            width: '60rem'
        }
        style = {
            marginLeft: `${positionFrame}`,
            height: '38rem'
        }
    }
    if(amountShowSlides === 2){
        galleryStyle = {
            width: '60rem'
        }
        style = {
            marginLeft: `${positionFrame}`,
            height: '22.5rem'
        }
    }
    // if(infoSwipeUp){
    //
    // }

    return(

        <div className="mainContainer">

            <div className="carousel">

                <div className="gallery"
                     style={galleryStyle}
                     onPointerDown={(e) => saveCoordinatesSwipe(e.clientX, e.clientY)}
                     onPointerUp={(e) => handleSwipe(e.clientX, e.clientY)}
                     onPointerMove={(e) => movePositionFrame(e.clientX)}>

                    <div className="slides" style={style}>
                        <Slide
                            picData={picData}
                            amountShowSlides={amountShowSlides}/>
                    </div>
                </div>

                <Preview
                    picData={picData}
                    pictureIndex={pictureIndex}
                    onToggleCurrentPicture={onToggleCurrentPicture}
                    amountShowSlides={amountShowSlides}/>

                <a className="prev" onClick={onTogglePrev}>❮</a>
                <a className="next" onClick={onToggleNext}>❯</a>
            </div>
        </div>
    );
};

export default MainView;