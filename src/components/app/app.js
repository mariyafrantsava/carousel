import React, { Component } from "react";

import './app.scss';
import MainView from '../mainView';
import dataPictures from "../../dataPictures";

export default class App extends Component {
    state = {
        pictureData: dataPictures,
        pictureIndex: 0
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

            this.setState(({ pictureData }) => {

                let calcPictureIndex;

                if(pictureIndex === 0 && !isToggleNext){
                    calcPictureIndex = pictureData.length-1;
                }
                if( pictureIndex >= 0 && pictureIndex < pictureData.length-1 && isToggleNext){
                    calcPictureIndex = pictureIndex + 1;
                }
                if(pictureIndex > 0 && !isToggleNext) {
                    calcPictureIndex = pictureIndex - 1;
                }
                if(pictureIndex === pictureData.length-1 && isToggleNext){
                    calcPictureIndex = 0;
                }

                    return {
                        pictureData: this.toggleProperty(pictureData, calcPictureIndex, 'display'),
                        pictureIndex: calcPictureIndex
                    };
            });
    };

    onToggleCurrentPicture = (id) => {
        this.setState(({ pictureData }) => {

            let calcPictureIndex = id;

            return {
                pictureData: this.toggleProperty(pictureData, calcPictureIndex, 'display'),
                pictureIndex: calcPictureIndex
            };
        });
    }

    render() {
        console.log(this.state.pictureData[0].src, 'APP');
        const { pictureData, pictureIndex } = this.state;
        return(
            <div>
                <h2 className="title">Carousel</h2>
                <MainView
                    picData={ pictureData }
                    onToggleNext={ () => this.onTogglePicture(pictureIndex, true) }
                    onTogglePrev={ () => this.onTogglePicture(pictureIndex, false) }
                    pictureIndex={ pictureIndex }
                    onToggleCurrentPicture={this.onToggleCurrentPicture}
                    />
            </div>
        );
    }
}