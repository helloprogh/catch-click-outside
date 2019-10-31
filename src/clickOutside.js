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

function bind(el, binding) {
    function documentHandler (e) {
        if (el.contains(e.target)) {
            return false;
        }
        if (binding.expression) {
            binding.value(e);
        }
    }
    el.__VueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler, true);
}

function unbind(el) {
    document.removeEventListener('click', el.__VueClickOutside__, true);
    delete el.__VueClickOutside__
}

export default {
    bind,
    unbind
}