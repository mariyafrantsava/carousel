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
                    handleSwipe,
                    positionFrame
}) => {
    const style = {
        // marginLeft: '-130px'
        marginLeft: `${positionFrame}`
    };

    const elements = picData.map((item) => {
        const { slide, id, display } = item;

        return (
            <div className="slide">
                {slide}
            </div>
        );
    });

    return(

        <div className="mainContainer">

            <div className="carousel"
                 onPointerDown={(e) => saveCoordinatesSwipe(e.clientX, e.clientY)}
                 onPointerUp={(e) => handleSwipe(e.clientX, e.clientY)}>

                <div className="gallery">
                    <div className="slides" style={style}>
                        {elements}
                    </div>
                </div>

                <Preview
                    picData={picData}
                    pictureIndex={pictureIndex}
                    onToggleCurrentPicture={onToggleCurrentPicture}/>

                <a className="prev" onClick={onTogglePrev}>❮</a>
                <a className="next" onClick={onToggleNext}>❯</a>
            </div>
        </div>
    );
};

export default MainView;