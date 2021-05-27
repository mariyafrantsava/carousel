import React from "react";
import './preview.scss';

const IMAGE_PATH = 'public/assets/images/';

const Preview = ({picData, pictureIndex, onToggleCurrentPicture, amountShowSlides}) => {

    const elements = picData.map((item) => {
        const { id, imageSrc } = item;

        let classNames = 'preview';
        if(amountShowSlides === 1){
            if(id === pictureIndex){
                classNames += ' active';
            }
        }
        if(amountShowSlides === 2){
            if(id === pictureIndex && id + 1 === (1 + pictureIndex)){
                classNames += ' active';
            }
        }


        return(
            <img className={classNames} src={`${IMAGE_PATH}${imageSrc}`} onClick={() => onToggleCurrentPicture(id)} alt={id}/>
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