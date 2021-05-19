import React from "react";
import './preview.scss';

const IMAGE_PATH = 'public/assets/images/';

const Preview = ({picData}) => {
    // const elements = picData.map((item) => {
    //     const {slide} = item;
    //     return(
    //         <div></div>
    //     )
    // };
    return(
        <div>
            <p>Preview</p>
            <div className="row">
                <div className="column">
                    {/*<img className="demo cursor" src={`${IMAGE_PATH}${imageSrc}`} style="width:100%" onClick="currentSlide(1)" alt="Лес"/>*/}
                </div>
            </div>
        </div>
    );
};
export default Preview;