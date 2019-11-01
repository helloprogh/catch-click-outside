export function findIndexArr(arr, conditions) {
    if(!arr) {
        return -1
    }
    let arrLen = arr.length;
    const conditionsKeys = Object.keys(conditions);
    for(let i=0; i<arrLen; i++) {
        let item = arr[i];
        let isFind = true;
        for(let key of conditionsKeys) {
            if(item[key] !== conditions[key]) {
                isFind = false
            }
        }
        if(isFind) {
            return i
        }
    }

    return -1
}