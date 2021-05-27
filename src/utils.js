import WIDTH_FRAME from './components/app/app';

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

export default toggleProperty;