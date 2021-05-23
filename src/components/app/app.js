import React, { Component } from "react";

import './app.scss';
import MainView from '../mainView';
import dataPictures from "../../dataPictures";

const WIDTH_FRAME = 60;

export default class App extends Component {
    state = {
        pictureData: dataPictures,
        pictureIndex: 0,
        x: 0,
        y: 0,
        amountShowSlides: 1,
        positionFrame: '0rem'
    };

    toggleProperty(arr, id, propName) {

        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];

        arr = arr.map((item) => {
            return (
                {
                    ...item,
                    [propName]: false
                }
            );
        })

        const newItem = {...oldItem,
            [propName]: true
        };

        if(id === 0){
            return [
                newItem,
                ...arr.slice(idx + 1)
            ];
        }else {
            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ];
        }
    }

    onTogglePicture = (pictureIndex, isToggleNext) => {

        this.setState(({pictureData, positionFrame, amountShowSlides}) => {
                let calcPositionFrame;
                let calcPictureIndex;

                if(pictureIndex === 0 && !isToggleNext){
                    calcPictureIndex = pictureData.length-1;
                    calcPositionFrame = -WIDTH_FRAME * (pictureData.length - 1) + 'rem';
                }
                if( pictureIndex >= 0 && pictureIndex < pictureData.length-1 && isToggleNext){
                    calcPictureIndex = pictureIndex + 1;
                    calcPositionFrame = parseInt(positionFrame) - WIDTH_FRAME * amountShowSlides + 'rem';
                }
                if(pictureIndex > 0 && !isToggleNext) {
                    calcPictureIndex = pictureIndex - 1;
                    calcPositionFrame = parseInt(positionFrame) + WIDTH_FRAME * amountShowSlides + 'rem';
                }
                if(pictureIndex === pictureData.length-1 && isToggleNext){
                    calcPictureIndex = 0;
                    calcPositionFrame = '0rem';
                }

            return {
                pictureIndex: calcPictureIndex,
                // amountShowSlides: 1,
                positionFrame: calcPositionFrame
                };
        });
    };

    onToggleCurrentPicture = (id) => {
        this.setState(({ amountShowSlides }) => {

            const calcPictureIndex = id;
            let calcPositionFrame = -WIDTH_FRAME * id * amountShowSlides + 'rem';

            return {
                pictureIndex: calcPictureIndex,
                positionFrame: calcPositionFrame
            };
        });
    }

    saveCoordinatesSwipe = (eX, eY) => {
        this.setState(() => {
            return{
                x: eX,
                y: eY
            };
        });
    }

    handleSwipe = (eventX, eventY) => {
        const { pictureIndex, x, y } = this.state;
        // console.log('state', x, y)
        // console.log('func', eventX, eventY)

        const differenceX = Math.abs(eventX - x) ;
        const differenceY = Math.abs(eventY - y);

        if(differenceX > differenceY && eventX > x){
            return this.onTogglePicture(pictureIndex, true)
        }
        if(differenceX > differenceY && eventX < x){
            return this.onTogglePicture(pictureIndex, false)
        }
        if(differenceY > differenceX && eventY > y){
            return console.log('down')
        }
        if(differenceY > differenceX && eventY < y){
            return console.log('up')
        }
    }

    render() {
        const { pictureData, pictureIndex, positionFrame } = this.state;
        return(
            <div>
                <h2 className="title">Carousel</h2>
                <MainView
                    picData={ pictureData }
                    onToggleNext={ () => this.onTogglePicture(pictureIndex, true) }
                    onTogglePrev={ () => this.onTogglePicture(pictureIndex, false) }
                    pictureIndex={ pictureIndex }
                    onToggleCurrentPicture={ this.onToggleCurrentPicture }
                    saveCoordinatesSwipe={ this.saveCoordinatesSwipe }
                    handleSwipe={ this.handleSwipe }
                    positionFrame={positionFrame}
                    />
            </div>
        );
    }
}