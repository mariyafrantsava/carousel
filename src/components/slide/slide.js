import React from "react";
import './slide.scss';

import dataPictures from "../../dataPictures";
const IMAGE_PATH = 'public/assets/images/';

const Slide = ({ text, imageSrc, nameSlide, numberSlide, amountShowSlides}) => {
    const style = {
        backgroundImage: `url(${IMAGE_PATH}${imageSrc})`,
        height: '33.4rem',
        width: 'fit-content'
    };
    return(
    <React.Fragment>
            <div className="view" style={style}>
                <div className="slideContentFirst"></div>
                <div className="slideContentSecond">
                    <div className="slideContentSecondText">
                        <p className="textSlide">{text}</p>
                        <div className="numberSlide">{numberSlide} / {dataPictures.length}</div>
                    </div>
                </div>
            </div>
            <div className="nameSlide">{nameSlide}</div>
    </React.Fragment>
    );
}
export default Slide;
export {IMAGE_PATH};