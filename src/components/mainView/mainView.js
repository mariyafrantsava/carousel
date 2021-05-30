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
                    movePositionFrame
}) => {

    let style;
    let galleryStyle;

    if(amountShowSlides === 1){
        galleryStyle = {
            width: '60rem'
        }
        style = {
            marginLeft: `${positionFrame}`,
            height: '38.4rem'
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

    return(

        <div className="mainContainer">

            <div className="carousel"
                 onPointerDown={(e) => saveCoordinatesSwipe(e.clientX, e.clientY)}
                 onPointerUp={(e) => handleSwipe(e.clientX, e.clientY)}
                 onPointerMove={(e) => movePositionFrame(e.clientX)}
                >

                <div className="gallery" style={galleryStyle}>
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