import React from "react";
import './slide.scss';

import dataPictures from "../../dataPictures";
const IMAGE_PATH = 'public/assets/images/';

const Slide = ({nameSlide, text, imageSrc}) => {
    const style = {
        backgroundImage: `url(${IMAGE_PATH}${imageSrc})`,
        height: '33.4rem',
        width: 'fit-content'
    };
    return(
    <React.Fragment>
            <div className="view" style={style}>
                {/*<img src={`${IMAGE_PATH}${imageSrc}`} className="view" alt={id}/>*/}
                {/*<p>{nameSlide}</p>*/}
                <div className="slideContentFirst"></div>
                <div className="slideContentSecond">
                    <div className="slideContentSecondText">
                        <p className="textSlide">{text}</p>
                        <div className="numberSlide">{'id' + 1} / {dataPictures.length}</div>
                    </div>
                </div>
            </div>
            <div className="nameSlide">{nameSlide}</div>
        </React.Fragment>
    );
}
export default Slide;
export {IMAGE_PATH};