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

let events = []

export function bind(el, binding) {
    function documentHandler (e) {
        if (el.contains(e.target)) {
            return false;
        }
        if (binding.expression) {
            binding.value(e);
        }
    }
    const event = {
        el,
        documentHandler
    }
    events.push(event);
    document.addEventListener('click', documentHandler, true);
}

export function unbind(el) {
    let index = findIndexArr(events, {el});
    let instance = events[index];
    document.removeEventListener('click', instance.documentHandler, true);
    events.splice(index, 1);
}

export default {
    bind,
    unbind
}