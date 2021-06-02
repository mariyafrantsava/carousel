import React, {Component} from "react";

import dataPictures from "../../dataPictures";
import dataOptions from "../../dataOptions";

import toggleProperty, {
    calcPositionFrame,
    calcPictureIndex,
    calcMovePositionFrame,
    calcDifference,
    calcLengthDataSlides,
    checkMomentSwitchRight,
    checkMomentSwitchLeft
} from '../../utils';

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
        isActiveMovePositionFrame: false,
        moveX: 0,
        finishMove: false
    };

    onTogglePicture = (pictureIndex, isToggleNext) => {
        this.setState(({ pictureData, amountShowSlides }) => {
            let newPositionFrame;
            let newPictureIndex;
            const lengthDataSlides = calcLengthDataSlides(pictureData, amountShowSlides);
            const positionFrame = calcPositionFrame(WIDTH_FRAME, pictureIndex);

            if (pictureIndex === 0 && !isToggleNext) {
                newPictureIndex = lengthDataSlides;
                newPositionFrame = -WIDTH_FRAME * lengthDataSlides + 'rem';
            }
            if (pictureIndex >= 0 && pictureIndex < lengthDataSlides && isToggleNext) {
                newPictureIndex = pictureIndex + 1;
                newPositionFrame = parseInt(positionFrame) - WIDTH_FRAME + 'rem';
            }
            if (pictureIndex > 0 && !isToggleNext) {
                newPictureIndex = pictureIndex - 1;
                newPositionFrame = parseInt(positionFrame) + WIDTH_FRAME + 'rem';
            }
            if (pictureIndex === lengthDataSlides && isToggleNext) {
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
            const newPictureIndex = calcPictureIndex(id, amountShowSlides);
            return {
                pictureIndex: newPictureIndex,
                positionFrame: calcPositionFrame(WIDTH_FRAME, newPictureIndex)
            };
        });
    };

    saveCoordinatesSwipe = (eX, eY) => {
        this.setState(() => {
            return {
                x: eX,
                y: eY,
                isActiveMovePositionFrame: true,
                moveX: eX,
                finishMove: false
            };
        });
    }

    handleSwipe = (eventX, eventY) => {
        const {pictureIndex, x, y, finishMove} = this.state;
        if(finishMove === false){
            const differenceX = calcDifference(eventX, x);
            const differenceY = calcDifference(eventY, y);
            const isToggleRight = differenceX > differenceY && eventX < x;
            return this.onTogglePicture(pictureIndex, isToggleRight);
        }else{
            this.setState(() => {
                return {
                    finishMove: false
                };
            });
        }
    }

    changeAmountShowSlides = (e) => {
        const id = Number(e.target.value);
        this.setState(({optionData}) => {
            return {
                optionData: toggleProperty(optionData, id, 'defaultSelectedOption'),
                amountShowSlides: id + 1
            };
        });
    }

    movePositionFrame = (eventX) => {
        const {
            x,
            isActiveMovePositionFrame,
            pictureData,
            positionFrame,
            pictureIndex,
            amountShowSlides,
            moveX
        } = this.state;
        const momentSwitchRight = checkMomentSwitchRight(pictureData, pictureIndex, positionFrame, amountShowSlides);
        const momentSwitchLeft = checkMomentSwitchLeft(pictureData, pictureIndex, positionFrame, amountShowSlides);
        if (!isActiveMovePositionFrame) {
            return;
        }

        if( momentSwitchRight === false && momentSwitchLeft === false) {
            const movementSize = calcDifference(eventX, moveX) * 2;
            this.setState(() => {
                return {
                    positionFrame: calcMovePositionFrame(eventX, x, pictureData, positionFrame, pictureIndex, amountShowSlides, moveX, movementSize),
                    moveX: eventX
                };
            });
            return;
        }

        this.onTogglePicture(pictureIndex, momentSwitchRight)
        this.setState(() => {
            return {
                finishMove: true
            };
        });
    }


    render() {
        const {pictureData, optionData, pictureIndex, positionFrame, amountShowSlides, infoSwipeUp} = this.state;
        return (
            <div>
                <h2 className="title">Carousel</h2>
                <SelectShowSlides
                    optionData={optionData}
                    amountShowSlides={amountShowSlides}
                    changeAmountShowSlides={this.changeAmountShowSlides}/>
                <MainView
                    picData={pictureData}
                    onToggleNext={() => this.onTogglePicture(pictureIndex, true)}
                    onTogglePrev={() => this.onTogglePicture(pictureIndex, false)}
                    pictureIndex={pictureIndex}
                    onToggleCurrentPicture={this.onToggleCurrentPicture}
                    saveCoordinatesSwipe={this.saveCoordinatesSwipe}
                    handleSwipe={this.handleSwipe}
                    positionFrame={positionFrame}
                    amountShowSlides={amountShowSlides}
                    movePositionFrame={this.movePositionFrame}
                />
            </div>
        );
    }
}

export {WIDTH_FRAME};