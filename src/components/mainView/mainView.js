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
                    positionFrame,
                    amountShowSlides
}) => {
    const style = {
        // marginLeft: '-130px'
        marginLeft: `${positionFrame}`
    };

    let galleryStyle;
    let slideStyle;
    if(amountShowSlides === 1){
        galleryStyle = {
            width: '180rem'
        }
        slideStyle = {
            width: '60rem'
        }
    }
    if(amountShowSlides === 2){
        galleryStyle = {
            width: '120rem'
        }
        slideStyle = {
            width: '30rem'
        }
    }

    const elements = picData.map((item) => {
        const { slide, id, display } = item;

        // qwe();
        // slide.props.amountShowSlides = `${amountShowSlides}`;
        // console.log('slide.props.amountShowSlides', slide.props.amountShowSlides)

        return (
            <div className="slide" style={slideStyle}>
                {slide}
            </div>
        );
    });

    return(

        <div className="mainContainer">

            <div className="carousel"
                 onPointerDown={(e) => saveCoordinatesSwipe(e.clientX, e.clientY)}
                 onPointerUp={(e) => handleSwipe(e.clientX, e.clientY)}
                 // onPointerMove={(e) => console.log('hi onPointerMove', e)}
                >

                <div className="gallery" style={galleryStyle}>
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