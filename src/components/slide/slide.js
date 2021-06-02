import React from "react";
import './slide.scss';


const IMAGE_PATH = 'public/assets/images/';

const Slide = ({ picData, amountShowSlides }) => {

    const slideStyle= {
        width: 60 / amountShowSlides +'rem',
    };

    const elements = picData.map((item) => {
        const{ id, text, imageSrc, nameSlide } = item;

        let style;
        let numberSlide;
        let textSlide;
        let slideContextFirst;

        if(amountShowSlides === 1){
            style = {
                backgroundImage: `url(${IMAGE_PATH}${imageSrc})`,
                height: '33.4rem',
                width: 'fit-content'
            }
            numberSlide = {
                fontsize: '1.2rem',
                height: '2rem',
                margin: '9rem 0.6rem 0 0'
            }
            textSlide = {
                height: '10rem'
            }
            slideContextFirst = {
                height: '65%'
            }
        }
        if(amountShowSlides === 2){
            style = {
                backgroundImage: `url(${IMAGE_PATH}${imageSrc})`,
                backgroundSize: '100% 100%'
            }
            numberSlide = {
                fontSize: '0.5rem',
                height: '1.2rem',
                margin: '5.7rem 0.6rem 0 0'
            }
            textSlide = {
                width: '390rem',
                height: '5.9rem'
            }
            slideContextFirst = {
                height: '10rem'
            }
        }

        return (
            <div className="slide" style={slideStyle}>
                <div style={style}>
                    <div style={slideContextFirst}></div>
                    <div className="slideContentSecond">
                        <div className="slideContentSecondText">
                            <p className="textSlide" style={textSlide}>{text}</p>
                            <div className="numberSlide" style={numberSlide}>
                                <span>{id+1} / {picData.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nameSlide">{nameSlide}</div>
            </div>
        );
    });

    return(
    <React.Fragment>
        {elements}
    </React.Fragment>
    );
}
export default Slide;
export {IMAGE_PATH};