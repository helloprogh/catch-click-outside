import { findIndexArr } from './utils'
import { eventInstances } from './eventInstances'

function bind(el, binding) {
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
    eventInstances.push(event);
    document.addEventListener('click', documentHandler, true);
}

function unbind(el) {
    let index = findIndexArr(eventInstances, {el});
    let instance = eventInstances[index];
    document.removeEventListener('click', instance.documentHandler, true);
    eventInstances.splice(index, 1);
}

export default {
    bind,
    unbind
}