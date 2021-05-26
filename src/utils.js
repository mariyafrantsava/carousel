
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

export default toggleProperty;