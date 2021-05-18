import React from "react";
import './slide.scss';

const IMAGE_PATH = 'public/assets/images/';

const Slide = ({id, nameSlide, text, imageSrc}) => {
    return(
        <div>
            <img src={`${IMAGE_PATH}${imageSrc}`} className="view" alt={id}/>
            <p>{nameSlide}</p>
            <p>{text}</p>
        </div>
    );
}
export default Slide;