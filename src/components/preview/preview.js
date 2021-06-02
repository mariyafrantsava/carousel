import React from "react";
import './preview.scss';

const IMAGE_PATH = 'public/assets/images/';

const Preview = ({ picData, pictureIndex, onToggleCurrentPicture, amountShowSlides }) => {

    const elements = picData.map((item) => {
        const { id, imageSrc } = item;
        let classNames = 'preview';
        if(id === amountShowSlides * pictureIndex || id === amountShowSlides * pictureIndex + (amountShowSlides - 1)){
            classNames += ' active';
        }
        return(
            <img className={classNames} src={`${IMAGE_PATH}${imageSrc}`} onClick={() => onToggleCurrentPicture( id, amountShowSlides )} alt={id}/>
        );
    });
    return(
            <div className="row">
                <div className="column">
                    {elements}
                </div>
            </div>
    );
};
export default Preview;