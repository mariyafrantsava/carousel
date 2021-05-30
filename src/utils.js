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

export function calcMovePositionFrame(eventX, x, pictureData, positionFrame, pictureIndex){
    const differenceX = calcDifference( eventX, x );
    const movementSize = Math.round(differenceX / 10 );
    const momentSwitchRight = checkMomentSwitchRight(pictureIndex);
    const momentSwitchLeft = checkMomentSwitchLeft(pictureIndex);

    console.log('momentSwitchRight', momentSwitchRight, 'momentSwitchLeft', momentSwitchLeft )
    console.log('parseInt(positionFrame)', parseInt(positionFrame) )

        if (eventX < x && pictureIndex < pictureData.length - 1 && parseInt(positionFrame) > momentSwitchRight) {
            console.log('RIGHT-LEFT', 'eventX: ', eventX, 'x: ', x, 'pictureIndex: ', pictureIndex)
            console.log('movementSize: ', movementSize)
            return parseInt(positionFrame) - movementSize + 'rem';
        }
        if (eventX > x && pictureIndex <= pictureData.length - 1 && pictureIndex !== 0 && parseInt(positionFrame) < momentSwitchLeft) {
            console.log('LEFT-RIGHT', 'eventX: ', eventX, 'x: ', x, 'pictureIndex: ', pictureIndex)
            console.log('movementSize: ', movementSize)
            return parseInt(positionFrame) + movementSize + 'rem';
        }
            return calcPositionFrame( WIDTH_FRAME, pictureIndex);
}
export function checkMomentSwitchRight(pictureIndex){
   return -(pictureIndex * WIDTH_FRAME + WIDTH_FRAME / 2);
}

export function checkMomentSwitchLeft(pictureIndex){
    return -(pictureIndex * WIDTH_FRAME / 2);
}

export default toggleProperty;