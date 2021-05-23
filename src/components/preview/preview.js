import React from "react";
import './preview.scss';

const IMAGE_PATH = 'public/assets/images/';

const Preview = ({picData, pictureIndex, onToggleCurrentPicture}) => {
    const elements = picData.map((item) => {
        const {imageSrc} = item.slide.props;
        const {id} = item;

        let classNames = 'preview';
        if(id === pictureIndex){
            classNames += ' active';
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