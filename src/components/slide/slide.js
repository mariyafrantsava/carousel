import React from "react";
import './slide.scss';

import dataPictures from "../../dataPictures";
const IMAGE_PATH = 'public/assets/images/';

const Slide = ({ text, imageSrc, nameSlide, numberSlide, amountShowSlides}) => {
    console.log(amountShowSlides, 'Slide')
    let style;
    if(amountShowSlides === '1'){
        style = {
            backgroundImage: `url(${IMAGE_PATH}${imageSrc})`,
            height: '33.4rem',
            width: 'fit-content'
        }
    }
    if(amountShowSlides === '2'){
        style = {
            backgroundImage: `url(${IMAGE_PATH}${imageSrc})`,
            backgroundSize: '100% 100%'
        }
    }

    return(
    <React.Fragment>
            <div style={style}>
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