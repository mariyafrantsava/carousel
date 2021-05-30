import React, { Component } from "react";

import dataPictures from "../../dataPictures";
import dataOptions from "../../dataOptions";

import toggleProperty, { calcPositionFrame, calcPictureIndex, calcMovePositionFrame, calcDifference } from '../../utils';

import './app.scss';
import MainView from '../mainView';
import SelectShowSlides from "../selectShowSlides";


const WIDTH_FRAME = 60;

export default class App extends Component {

    state = {
        pictureData: dataPictures,
        optionData: dataOptions,
        pictureIndex: 0,
        x: 0,
        y: 0,
        amountShowSlides: 1,
        positionFrame: '0rem',
        isActiveMovePositionFrame: false
    };

    onTogglePicture = (pictureIndex, isToggleNext) => {

        this.setState(({ pictureData, positionFrame, amountShowSlides }) => {
                let newPositionFrame;
                let newPictureIndex;
                let lengthDataSlides;

                if(amountShowSlides === 1){
                    lengthDataSlides = pictureData.length - 1;
                    positionFrame = calcPositionFrame( WIDTH_FRAME, pictureIndex);
                }
                if(amountShowSlides === 2){
                    lengthDataSlides = Math.floor((pictureData.length - 1) / 2);
                }

                if(pictureIndex === 0 && !isToggleNext){
                    newPictureIndex = lengthDataSlides;
                    newPositionFrame = -WIDTH_FRAME * lengthDataSlides + 'rem';
                }
                if( pictureIndex >= 0 && pictureIndex < lengthDataSlides && isToggleNext){
                    newPictureIndex = pictureIndex + 1;
                    newPositionFrame = parseInt(positionFrame) - WIDTH_FRAME + 'rem';
                }
                if(pictureIndex > 0 && !isToggleNext) {
                    newPictureIndex = pictureIndex - 1;
                    newPositionFrame = parseInt(positionFrame) + WIDTH_FRAME + 'rem';
                }
                if(pictureIndex === lengthDataSlides && isToggleNext){
                    newPictureIndex = 0;
                    newPositionFrame = '0rem';
                }

            return {
                pictureIndex: newPictureIndex,
                positionFrame: newPositionFrame,
                isActiveMovePositionFrame: false
                };
        });
    };

    onToggleCurrentPicture = (id, amountShowSlides) => {
        this.setState(() => {
            const newPictureIndex = calcPictureIndex( id, amountShowSlides );
            return {
                pictureIndex: newPictureIndex,
                positionFrame: calcPositionFrame( WIDTH_FRAME, newPictureIndex)
            };
        });
    };

    saveCoordinatesSwipe = (eX, eY) => {
        this.setState(({isActiveMovePositionFrame}) => {
            return{
                x: eX,
                y: eY,
                isActiveMovePositionFrame: true
            };
        });
    }

    handleSwipe = (eventX, eventY) => {
        const { pictureIndex, x, y } = this.state;

        const differenceX = calcDifference(eventX, x);
        const differenceY = calcDifference(eventY, y);

        if(differenceX > differenceY && eventX < x){
            return this.onTogglePicture(pictureIndex, true)
        }
        if(differenceX > differenceY && eventX > x){
            return this.onTogglePicture(pictureIndex, false)
        }
        if(differenceY > differenceX && eventY > y){
            return console.log('down')
        }
        if(differenceY > differenceX && eventY < y){
            return console.log('up')
        }
        this.setState(({isActiveMovePositionFrame}) => {
            return{
                isActiveMovePositionFrame: false
            };
        });
    }

    changeAmountShowSlides = (e) => {
        const id = Number(e.target.value);
            this.setState(({ optionData }) => {
                return {
                    optionData: toggleProperty(optionData, id, 'defaultSelectedOption'),
                    amountShowSlides: id + 1
                };
            });
    }

    movePositionFrame = (eventX) => {
        const { x, isActiveMovePositionFrame, pictureData, positionFrame, pictureIndex } = this.state;

        if( isActiveMovePositionFrame === true ) {

            this.setState(() => {
                return {
                    positionFrame: calcMovePositionFrame(eventX, x, pictureData, positionFrame, pictureIndex)
                };
            });
        }
    }


    render() {
        const { pictureData, optionData, pictureIndex, positionFrame, amountShowSlides } = this.state;
        return(
            <div>
                <h2 className="title">Carousel</h2>
                <SelectShowSlides
                    optionData={ optionData }
                    amountShowSlides={amountShowSlides}
                    changeAmountShowSlides={ this.changeAmountShowSlides }/>
                <MainView
                    picData={ pictureData }
                    onToggleNext={ () => this.onTogglePicture(pictureIndex, true) }
                    onTogglePrev={ () => this.onTogglePicture(pictureIndex, false) }
                    pictureIndex={ pictureIndex }
                    onToggleCurrentPicture={ this.onToggleCurrentPicture }
                    saveCoordinatesSwipe={ this.saveCoordinatesSwipe }
                    handleSwipe={ this.handleSwipe }
                    positionFrame={positionFrame}
                    amountShowSlides={amountShowSlides}
                    movePositionFrame={ this.movePositionFrame }
                    />
            </div>
        );
    }
}

export { WIDTH_FRAME };