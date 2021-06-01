import { WIDTH_FRAME } from './components/app/app';

function toggleProperty(arr, id, propName) {

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

export function calcPositionFrame( WIDTH_FRAME, calcPictureIndex){
   return -WIDTH_FRAME * calcPictureIndex + 'rem';
}

export function calcPictureIndex( id, amountShowSlides ){
    if(amountShowSlides === 2 ){
        return id % 2 === 0 ? id / 2 : ( id - 1 ) / 2;
    }
    return id;
}

export function calcDifference(eventValue, stateValue){
    return Math.abs( eventValue - stateValue );
}

export function calcMovePositionFrame(eventX, x, pictureData, positionFrame, pictureIndex, amountShowSlides ){
    const differenceX = calcDifference( eventX, x );
    // console.log('differenceX', differenceX)
    // const movementSize = Math.round(differenceX / 10 );
    const movementSize = differenceX / 16;
    const lengthDataSlides = calcLengthDataSlides( pictureData, amountShowSlides );

    // console.log('momentSwitchRight', momentSwitchRight, 'momentSwitchLeft', momentSwitchLeft )
    // console.log('parseInt(positionFrame)', parseInt(positionFrame) )

        if (eventX < x && pictureIndex < lengthDataSlides) {
            // console.log('RIGHT-LEFT', 'eventX: ', eventX, 'x: ', x, 'pictureIndex: ', pictureIndex)
            // console.log('movementSize: ', movementSize)
            return parseInt(positionFrame) - movementSize + 'rem';
        }
        if (eventX > x && pictureIndex <= lengthDataSlides && pictureIndex !== 0) {
            // console.log('LEFT-RIGHT', 'eventX: ', eventX, 'x: ', x, 'pictureIndex: ', pictureIndex)
            // console.log('movementSize: ', movementSize)
            return parseInt(positionFrame) + movementSize + 'rem';
        }
            return calcPositionFrame( WIDTH_FRAME, pictureIndex);
}

export function checkMomentSwitchRight(pictureData, pictureIndex, positionFrame, amountShowSlides){
    let momentSwitchRight;
    const lengthDataSlides = calcLengthDataSlides( pictureData, amountShowSlides );
    if(pictureIndex < lengthDataSlides){
        momentSwitchRight = -(pictureIndex * WIDTH_FRAME + WIDTH_FRAME / 2);
        return parseInt(positionFrame) <= momentSwitchRight;
    }
    if(pictureIndex === lengthDataSlides){
        return false;
    }
}

export function checkMomentSwitchLeft(pictureData, pictureIndex, positionFrame, amountShowSlides){
    let momentSwitchLeft;
    const lengthDataSlides = calcLengthDataSlides( pictureData, amountShowSlides );
    if(pictureIndex > 0 && pictureIndex <= lengthDataSlides){
        momentSwitchLeft = -(pictureIndex * WIDTH_FRAME / 2);
        return parseInt(positionFrame) >= momentSwitchLeft;
    }
    if(pictureIndex === 0){
        return false;
    }
}

export function calcLengthDataSlides( pictureData, amountShowSlides ){
    if(amountShowSlides === 1){
        return pictureData.length - 1;
    }
    if(amountShowSlides > 1){
       return Math.floor((pictureData.length - 1) / amountShowSlides);
    }
}

export default toggleProperty;