import React from "react";

const IMAGE_PATH = 'public/assets/images/';

const Slide = ({nameSlide, text, imageSrc}) => {
    return(
        <div>
            <img src={`${IMAGE_PATH}${imageSrc}`}/>
            <p>{nameSlide}</p>
            <p>{text}</p>
        </div>
    );
}
export default Slide;