import React from "react";
import './slide.scss';

const IMAGE_PATH = 'public/assets/images/';

const Slide = ({id, nameSlide, text, imageSrc}) => {
    const style = {
        backgroundImage: `url(${IMAGE_PATH}${imageSrc})`,
        // width: '100%',
        height: '33.4rem',
        width: 'fit-content'
    };
    return(
        <div>
            <div className="view" style={style}>
                {/*<img src={`${IMAGE_PATH}${imageSrc}`} className="view" alt={id}/>*/}
                {/*<p>{nameSlide}</p>*/}
                <div className="contentFirst"></div>
                <div className="contentSecond">
                    <p className="textSlide">{text}</p>
                </div>
            </div>
            <div className="nameSlide">{nameSlide}</div>
        </div>
    );
}
export default Slide;
export {IMAGE_PATH};